"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, FileText, Download, LogOut, Mail, Phone, Calendar } from "lucide-react";

interface UserData {
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

export default function AdminDashboard() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [summary, setSummary] = useState({
    totalContacts: 0,
    totalGetStarted: 0,
    totalSubmissions: 0,
    acceptedAgreements: 0,
  });
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (!isAuthenticated) {
      router.push("/admin");
      return;
    }

    // Load user data (in a real app, this would come from an API)
    loadUserData();
  }, [router]);

  const loadUserData = async () => {
    try {
      const response = await fetch('/api/admin/data');
      const result = await response.json();

      if (result.success) {
        setUsers(result.data);
        setSummary(result.summary);
      } else {
        console.error('Failed to fetch user data:', result.error);
        // Set empty data instead of fallback
        setUsers([]);
        setSummary({
          totalContacts: 0,
          totalGetStarted: 0,
          totalSubmissions: 0,
          acceptedAgreements: 0,
        });
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      // Set empty data instead of fallback
      setUsers([]);
      setSummary({
        totalContacts: 0,
        totalGetStarted: 0,
        totalSubmissions: 0,
        acceptedAgreements: 0,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    router.push("/admin");
  };

  const generatePDF = (user: UserData) => {
    // Create a printable document
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const isContactForm = user.type === 'contact';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${isContactForm ? 'Contact' : 'User Agreement'} - ${user.name}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #2563eb;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .logo {
              font-size: 24px;
              font-weight: bold;
              color: #2563eb;
              margin-bottom: 10px;
            }
            .title {
              font-size: 18px;
              color: #374151;
              margin-bottom: 20px;
            }
            .section {
              margin-bottom: 25px;
            }
            .section-title {
              font-weight: bold;
              color: #1f2937;
              margin-bottom: 10px;
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 5px;
            }
            .agreement-box {
              border: 1px solid #d1d5db;
              padding: 15px;
              margin: 15px 0;
              background-color: #f9fafb;
            }
            .signature-line {
              border-top: 1px solid #6b7280;
              margin-top: 40px;
              padding-top: 10px;
              text-align: right;
            }
            .footer {
              margin-top: 50px;
              text-align: center;
              font-size: 12px;
              color: #6b7280;
            }
            .submission-type {
              background-color: ${isContactForm ? '#dbeafe' : '#dcfce7'};
              color: ${isContactForm ? '#1e40af' : '#166534'};
              padding: 5px 10px;
              border-radius: 4px;
              font-size: 12px;
              font-weight: bold;
              display: inline-block;
              margin-bottom: 15px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">SyncroSol</div>
            <div class="title">${isContactForm ? 'Contact Form Submission' : 'User Agreement Confirmation'}</div>
            <div class="submission-type">${isContactForm ? 'CONTACT FORM' : 'GET STARTED FORM'}</div>
          </div>

          <div class="section">
            <div class="section-title">${isContactForm ? 'Contact' : 'User'} Information</div>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            ${user.phone ? `<p><strong>Phone:</strong> ${user.phone}</p>` : ''}
            ${user.company ? `<p><strong>Company:</strong> ${user.company}</p>` : ''}
            <p><strong>Date:</strong> ${new Date(user.timestamp).toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${new Date(user.timestamp).toLocaleTimeString()}</p>
          </div>

          ${isContactForm ?
            `<div class="section">
              <div class="section-title">Message</div>
              <div class="agreement-box">
                ${user.message}
              </div>
            </div>` :
            `<div class="section">
              <div class="section-title">Agreements Accepted</div>

              <div class="agreement-box">
                <h3>Non-Disclosure Agreement (NDA)</h3>
                <p>Status: <strong>${user.ndaAccepted ? 'Accepted' : 'Not Accepted'}</strong></p>
                <p>The user has agreed to maintain confidentiality of all proprietary information shared during business discussions and project engagements.</p>
              </div>

              <div class="agreement-box">
                <h3>Terms & Conditions</h3>
                <p>Status: <strong>${user.termsAccepted ? 'Accepted' : 'Not Accepted'}</strong></p>
                <p>The user has agreed to the terms and conditions governing our business relationship and project engagements.</p>
              </div>
            </div>`
          }

          <div class="section">
            <div class="section-title">Confirmation</div>
            <p>This document confirms that ${user.name} has successfully submitted ${isContactForm ? 'a contact form' : 'their information through our "Get Started" form'}.</p>
            ${!isContactForm ? `<p>By accepting these agreements, the user acknowledges their understanding of our business terms and agrees to proceed with potential project discussions.</p>` : ''}
          </div>

          <div class="signature-line">
            <p>Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
          </div>

          <div class="footer">
            <p>This document was automatically generated by the SyncroSol Admin Dashboard</p>
            <p>For questions, contact: admin@syncrosol.com</p>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    // Wait for content to load then print
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-300">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-slate-300 text-sm">Manage user submissions and agreements</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{summary.totalSubmissions}</p>
                    <p className="text-slate-300 text-sm">Total Submissions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <FileText className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {summary.acceptedAgreements}
                    </p>
                    <p className="text-slate-300 text-sm">Accepted Agreements</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {users.length > 0 ? new Date(users[0]?.timestamp).toLocaleDateString() : 'N/A'}
                    </p>
                    <p className="text-slate-300 text-sm">Latest Submission</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="w-5 h-5" />
                User Submissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {users.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-300">No user submissions yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="border border-slate-600/50 rounded-lg p-6 bg-slate-700/20"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.type === 'contact'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-green-500/20 text-green-300'
                        }`}>
                          {user.type === 'contact' ? 'Contact Form' : 'Get Started'}
                        </div>
                        <span className="text-slate-400 text-sm">
                          {new Date(user.timestamp).toLocaleString()}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-slate-400 text-sm">Name</p>
                          <p className="text-white font-medium">{user.name}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            Email
                          </p>
                          <p className="text-white">{user.email}</p>
                        </div>
                        {user.type === 'get-started' && user.countryCode && (
                          <div>
                            <p className="text-slate-400 text-sm">Country Code</p>
                            <p className="text-white">{user.countryCode}</p>
                          </div>
                        )}
                        {user.phone && (
                          <div>
                            <p className="text-slate-400 text-sm flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              Phone
                            </p>
                            <p className="text-white">{user.phone}</p>
                          </div>
                        )}
                        {user.type === 'get-started' && user.cnic && (
                          <div>
                            <p className="text-slate-400 text-sm">CNIC</p>
                            <p className="text-white">{user.cnic}</p>
                          </div>
                        )}
                        {user.company && (
                          <div>
                            <p className="text-slate-400 text-sm">Company</p>
                            <p className="text-white">{user.company}</p>
                          </div>
                        )}
                      </div>

                      {user.message && (
                        <div className="mb-4">
                          <p className="text-slate-400 text-sm">Message</p>
                          <p className="text-white bg-slate-600/20 p-3 rounded-lg text-sm">{user.message}</p>
                        </div>
                      )}

                      {user.type === 'get-started' && (
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${user.ndaAccepted ? 'bg-green-400' : 'bg-red-400'}`}></div>
                            <span className="text-sm text-slate-300">
                              NDA: {user.ndaAccepted ? 'Accepted' : 'Not Accepted'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${user.termsAccepted ? 'bg-green-400' : 'bg-red-400'}`}></div>
                            <span className="text-sm text-slate-300">
                              Terms: {user.termsAccepted ? 'Accepted' : 'Not Accepted'}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="flex justify-end">
                        <Button
                          onClick={() => generatePDF(user)}
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Generate PDF
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}