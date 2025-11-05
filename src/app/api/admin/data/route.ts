import { NextResponse } from 'next/server';
import { google } from 'googleapis';

interface SubmissionData {
  id: string;
  type: 'contact' | 'get-started';
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  countryCode?: string;
  cnic?: string;
  company: string;
  message: string;
  ndaAccepted: boolean;
  termsAccepted: boolean;
}

export async function GET() {
  try {
    // Google Sheets configuration
    const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const CONTACT_SHEET_NAME = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Contact';
    const GET_STARTED_SHEET_NAME = process.env.GOOGLE_SHEETS_GET_STARTED_SHEET || 'GetStarted';
    const GOOGLE_SERVICE_ACCOUNT_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

    // Prepare data for Google Sheets
    let contactData: SubmissionData[] = [];
    let getStartedData: SubmissionData[] = [];

    if (SPREADSHEET_ID && GOOGLE_SERVICE_ACCOUNT_KEY) {
      try {
        // Parse service account credentials
        const credentials = JSON.parse(GOOGLE_SERVICE_ACCOUNT_KEY);

        // Authenticate with Google Sheets API
        const auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Check if spreadsheet exists first
        try {
          await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
          });
          console.log('Spreadsheet found, fetching data...');
        } catch (spreadsheetError: unknown) {
          const error = spreadsheetError as { code?: number; message?: string };
          if (error.code === 404) {
            console.log(`Spreadsheet with ID '${SPREADSHEET_ID}' not found. Please create a Google Sheet and update GOOGLE_SHEETS_SPREADSHEET_ID in .env.local`);
            throw new Error(`Spreadsheet not found. Please check your GOOGLE_SHEETS_SPREADSHEET_ID in .env.local`);
          }
          throw spreadsheetError;
        }

        // Fetch contact form data
        try {
          const contactResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${CONTACT_SHEET_NAME}!A:D`,
          });

          const contactRows = contactResponse.data.values || [];
          // Skip header row if it exists
          const dataRows = contactRows.length > 0 && contactRows[0][0] === 'Timestamp' ? contactRows.slice(1) : contactRows;

          contactData = dataRows.map((row, index) => ({
            id: `contact-${index + 1}`,
            type: 'contact' as const,
            timestamp: row[0] || '',
            name: row[1] || '',
            email: row[2] || '',
            phone: '',
            company: '',
            message: row[3] || '',
            ndaAccepted: false,
            termsAccepted: false,
          }));
          console.log(`Fetched ${contactData.length} contact submissions from Google Sheets`);
        } catch (contactError: unknown) {
          const error = contactError as { code?: number; message?: string };
          console.error('Error fetching contact data:', error.message);
          if (error.code === 404) {
            console.log(`Contact sheet '${CONTACT_SHEET_NAME}' not found - will be created when first form is submitted`);
          }
        }

        // Fetch get-started form data
        try {
          const getStartedResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${GET_STARTED_SHEET_NAME}!A:G`,
          });

          const getStartedRows = getStartedResponse.data.values || [];
          // Skip header row if it exists
          const dataRows = getStartedRows.length > 0 && getStartedRows[0][0] === 'Timestamp' ? getStartedRows.slice(1) : getStartedRows;

          getStartedData = dataRows.map((row, index) => ({
            id: `get-started-${index + 1}`,
            type: 'get-started' as const,
            timestamp: row[0] || '',
            name: row[1] || '',
            email: row[2] || '',
            phone: row[3] || '',
            cnic: row[4] || '',
            company: '',
            message: '',
            ndaAccepted: row[5] === 'Yes' || row[5] === 'true',
            termsAccepted: row[6] === 'Yes' || row[6] === 'true',
          }));
          console.log(`Fetched ${getStartedData.length} get-started submissions from Google Sheets`);
        } catch (getStartedError: unknown) {
          const error = getStartedError as { code?: number; message?: string };
          console.error('Error fetching get-started data:', error.message);
          if (error.code === 404) {
            console.log(`Get-started sheet '${GET_STARTED_SHEET_NAME}' not found - will be created when first form is submitted`);
          }
        }

        console.log('Admin data fetched successfully from Google Sheets');
      } catch (sheetsError) {
        console.error('Error with Google Sheets API:', sheetsError);
        // Continue with fallback data
      }
    } else {
      console.log('Google Sheets not configured, using fallback data');
    }

    // Always provide fallback data if no data from sheets
    if (contactData.length === 0 && getStartedData.length === 0) {
      // Return empty arrays instead of demo data
      contactData = [];
      getStartedData = [];
    }

    // Combine and sort all data by timestamp (newest first)
    const allData = [...contactData, ...getStartedData].sort((a, b) =>
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    // Log the data for debugging
    console.log('Admin data response:', {
      totalContacts: contactData.length,
      totalGetStarted: getStartedData.length,
      totalSubmissions: allData.length,
      acceptedAgreements: getStartedData.filter(item => item.ndaAccepted && item.termsAccepted).length,
    });

    return NextResponse.json({
      success: true,
      data: allData,
      summary: {
        totalContacts: contactData.length,
        totalGetStarted: getStartedData.length,
        totalSubmissions: allData.length,
        acceptedAgreements: getStartedData.filter(item => item.ndaAccepted && item.termsAccepted).length,
      }
    });

  } catch (error) {
    console.error('Admin data API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}