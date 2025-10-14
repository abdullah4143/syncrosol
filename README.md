# SyncroSol - Business Lead Management Platform

A comprehensive Next.js application for business lead generation, legal compliance, and administrative management with Google Sheets integration.

## Features

### 🏢 Business Features
- **Dynamic Blog System**: 5+ blog posts with SEO-optimized content
- **Service Pages**: Professional service offerings with detailed descriptions
- **Contact Form**: Lead capture with Google Sheets integration
- **Get Started Page**: User registration with NDA/Terms agreement collection

### 📋 Legal Compliance
- **NDA Page**: Professional Non-Disclosure Agreement template
- **Terms of Service**: Comprehensive terms and conditions
- **Agreement Collection**: Digital signature and consent management

### 👨‍💼 Admin Dashboard
- **Protected Login**: Secure admin access with localStorage authentication
- **Live Data Integration**: Real-time data fetching from Google Sheets
- **User Management**: View and manage all form submissions (Contact & Get Started)
- **Analytics Dashboard**: Overview of lead generation metrics and statistics
- **PDF Generation**: Generate PDF reports of user agreements and contact forms
- **Data Analytics**: Overview of lead generation metrics

### 🔧 Technical Features
- **Google Sheets Integration**: Secure service account authentication
- **TypeScript**: Full type safety across the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions with Framer Motion
- **Form Validation**: Comprehensive input validation and error handling

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **API Integration**: Google Sheets API with Service Account
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Cloud Platform account with Sheets API enabled

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd syncrosol
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```bash
# Google Sheets Configuration
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here
GOOGLE_SHEETS_SHEET_NAME=Contact
GOOGLE_SHEETS_GET_STARTED_SHEET=GetStarted
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
```

### Google Sheets Setup

1. **Create a Google Sheet**:
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

2. **Set up Service Account**:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing one
   - Enable Google Sheets API
   - Create a Service Account with Editor permissions
   - Generate and download the JSON key file

3. **Share the Spreadsheet**:
   - Share your Google Sheet with the service account email
   - Grant Editor permissions

4. **Configure Environment**:
   - Copy the entire JSON content from your service account key file
   - Paste it as the `GOOGLE_SERVICE_ACCOUNT_KEY` value in `.env.local`
   - Update `GOOGLE_SHEETS_SPREADSHEET_ID` with your spreadsheet ID

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/          # Contact form API endpoint
│   │   └── get-started/      # Get started form API endpoint
│   ├── admin/                # Admin dashboard pages
│   ├── blogs/                # Dynamic blog pages
│   ├── services/             # Service pages
│   ├── nda/                  # NDA page
│   ├── terms/                # Terms of service page
│   ├── get-started/          # User registration page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # Reusable components
└── lib/                      # Utility functions
```

## API Endpoints

### POST /api/contact
Handles contact form submissions and saves to Google Sheets.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "company": "ABC Corp",
  "message": "Inquiry message"
}
```

### POST /api/get-started
Handles get started form submissions with NDA/terms agreements.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "company": "ABC Corp",
  "ndaAccepted": true,
  "termsAccepted": true
}
```

### GET /api/admin/data
Fetches all form submission data from Google Sheets for the admin dashboard.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "contact-1",
      "type": "contact",
      "timestamp": "2025-10-14T10:30:00Z",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "",
      "company": "",
      "message": "Contact message",
      "ndaAccepted": false,
      "termsAccepted": false
    }
  ],
  "summary": {
    "totalContacts": 5,
    "totalGetStarted": 3,
    "totalSubmissions": 8,
    "acceptedAgreements": 3
  }
}
```

## Admin Access

Access the admin dashboard at `/admin/login` with the following credentials:
- **Username**: admin
- **Password**: admin123

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `GOOGLE_SHEETS_SHEET_NAME`
- `GOOGLE_SHEETS_GET_STARTED_SHEET`
- `GOOGLE_SERVICE_ACCOUNT_KEY`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software. All rights reserved.

## Support

For support or questions, please contact the development team.
