import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Google Sheets configuration
    const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const SHEET_NAME = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1';
    const GOOGLE_SERVICE_ACCOUNT_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

    if (!SPREADSHEET_ID || !GOOGLE_SERVICE_ACCOUNT_KEY) {
      console.error('Missing Google Sheets configuration');
      // For demo purposes, we'll still return success but log the data
      console.log('Contact form submission:', { name, email, message, timestamp: new Date().toISOString() });
      return NextResponse.json({ success: true });
    }

    // Parse service account credentials
    let credentials;
    try {
      credentials = JSON.parse(GOOGLE_SERVICE_ACCOUNT_KEY);
    } catch (parseError) {
      console.error('Error parsing service account key:', parseError);
      console.log('Contact form submission (fallback):', { name, email, message, timestamp: new Date().toISOString() });
      return NextResponse.json({ success: true });
    }

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const values = [[timestamp, name, email, message]];

    try {
      // First, try to check if the sheet exists by reading it
      await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1`,
      });
    } catch (sheetError: unknown) {
      // If sheet doesn't exist (404), create it with headers
      const error = sheetError as { code?: number };
      if (error.code === 404) {
        console.log(`Creating contact sheet '${SHEET_NAME}' with headers`);
        try {
          // Create a new sheet in the spreadsheet
          const createResponse = await sheets.spreadsheets.batchUpdate({
            spreadsheetId: SPREADSHEET_ID,
            requestBody: {
              requests: [
                {
                  addSheet: {
                    properties: {
                      title: SHEET_NAME,
                    },
                  },
                },
              ],
            },
          });
          console.log('Sheet creation response:', createResponse.data);

          // Wait a moment for the sheet to be created
          await new Promise(resolve => setTimeout(resolve, 2000));

          // Verify the sheet was created by trying to read from it
          let retries = 3;
          while (retries > 0) {
            try {
              await sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: `${SHEET_NAME}!A1`,
              });
              console.log('Sheet verified to exist');
              break;
            } catch (verifyError) {
              retries--;
              if (retries > 0) {
                console.log(`Waiting for sheet creation, retries left: ${retries}`);
                await new Promise(resolve => setTimeout(resolve, 1000));
              }
            }
          }

          // Add headers to the new sheet
          const headerResponse = await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A1:D1`,
            valueInputOption: 'RAW',
            requestBody: {
              values: [['Timestamp', 'Name', 'Email', 'Message']],
            },
          });
          console.log('Headers added successfully');
        } catch (headerError) {
          console.error('Error creating sheet:', headerError);
          throw headerError; // Re-throw to prevent append operation
        }
      }
    }

    // Append data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: 'RAW',
      requestBody: {
        values: values,
      },
    });

    console.log('Contact form submitted successfully to Google Sheets');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}