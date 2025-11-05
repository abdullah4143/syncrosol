"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Shield } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+92",
    cnic: "",
    ndaAccepted: false,
    termsAccepted: false
  });
  const [showNOCDetails, setShowNOCDetails] = useState(false);
  const [showNDADetails, setShowNDADetails] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.ndaAccepted || !formData.termsAccepted) {
      toast.error("Please accept both the NDA and Terms & Conditions to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to API
      const response = await fetch('/api/get-started', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you! Your information has been submitted successfully. We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "+92",
          cnic: "",
          ndaAccepted: false,
          termsAccepted: false
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Sorry, there was an error submitting your information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    // Auto-format CNIC as user types
    if (name === 'cnic') {
      // Remove all non-digit characters
      const cleanValue = value.replace(/\D/g, '');
      
      // Format as XXXXX-XXXXXXX-X
      let formattedValue = cleanValue;
      if (cleanValue.length > 5) {
        formattedValue = cleanValue.slice(0, 5) + '-' + cleanValue.slice(5);
      }
      if (cleanValue.length > 12) {
        formattedValue = cleanValue.slice(0, 5) + '-' + cleanValue.slice(5, 12) + '-' + cleanValue.slice(12, 13);
      }
      
      setFormData({
        ...formData,
        cnic: formattedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        headline="Get Started with Us"
        subheadline="Begin your journey towards digital excellence."
        layout="center"
      />

      {/* Get Started Form */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Start Your Project
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Fill out the form below to get started. We&apos;ll need some basic information and your agreement to our terms.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 rounded-2xl shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 rounded-xl focus:border-blue-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        pattern="^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 rounded-xl focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="flex gap-4">
                      <div className="w-1/3">
                        <label htmlFor="countryCode" className="block text-sm font-medium text-slate-300 mb-2">
                          Country Code
                        </label>
                        <select
                          id="countryCode"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="bg-slate-700/50 border-slate-600 text-white rounded-xl focus:border-blue-500 w-full"
                        >
                          <option value="+92">+92 (Pakistan)</option>
                          <option value="+1">+1 (USA)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+971">+971 (UAE)</option>
                          <option value="+61">+61 (Australia)</option>
                          <option value="+91">+91 (India)</option>
                        </select>
                      </div>
                      <div className="w-2/3">
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          pattern="^[0-9]{7,15}$"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 rounded-xl focus:border-blue-500"
                          placeholder="3001234567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cnic" className="block text-sm font-medium text-slate-300 mb-2">
                        CNIC (Pakistani National ID) *
                      </label>
                      <Input
                        id="cnic"
                        name="cnic"
                        type="text"
                        required
                        pattern="^[0-9]{5}-[0-9]{7}-[0-9]{1}$|^[0-9]{13}$"
                        maxLength={15}
                        value={formData.cnic}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 rounded-xl focus:border-blue-500"
                        placeholder="3440257095685 or 34402-5709568-5"
                      />
                      <span className="text-xs text-slate-400">Enter 13 digits (auto-formatted) or 12345-1234567-1</span>
                    </div>
                  </div>

                  {/* Agreements */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Agreements</h3>

                    {/* USER AGREEMENT (NOC) */}
                    <div className="flex items-start gap-4 p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
                      <Checkbox
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, termsAccepted: checked as boolean })
                        }
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-5 h-5 text-blue-400" />
                          <label htmlFor="termsAccepted" className="text-lg font-semibold text-white cursor-pointer">
                            User Agreement (NOC)
                          </label>
                        </div>
                        {!showNOCDetails ? (
                          <div className="text-slate-300 mb-4 text-sm">
                            <span className="font-semibold">Summary:</span> By checking this box, you agree to our payment, refund, dispute, confidentiality, and voluntary consent terms. <button type="button" className="text-blue-400 underline ml-2" onClick={() => setShowNOCDetails(true)}>More Details</button>
                          </div>
                        ) : (
                          <div className="text-slate-300 mb-4 text-sm space-y-2">
                            <strong className="block text-white mb-2">1. Payment Terms:</strong>
                            <ul className="list-disc ml-6">
                              <li>All payments must be made from the user’s own verified bank account or payment method.</li>
                              <li>Any refunds or paybacks will be sent only to the original source account from which the payment was made.</li>
                            </ul>
                            <strong className="block text-white mt-4 mb-2">2. Refund Policy:</strong>
                            <ul className="list-disc ml-6">
                              <li>Refunds are allowed within 3 hours of the initial payment, only if the project/work has not been started.</li>
                              <li>Once the work has commenced or been delivered, no refunds will be issued.</li>
                              <li>In the case of a chargeback or failed transaction, any valid claim will be reviewed, and the appropriate amount will be returned if eligible.</li>
                            </ul>
                            <strong className="block text-white mt-4 mb-2">3. Dispute Resolution & Arbitration:</strong>
                            <ul className="list-disc ml-6">
                              <li>In case of any dispute, Advocate Naeema Rehman Bhutta will act as the arbitrator.</li>
                              <li>All arbitration decisions will be final and binding for both parties.</li>
                              <li>The dispute resolution process will follow the legal norms applicable in the jurisdiction of the business.</li>
                            </ul>
                            <strong className="block text-white mt-4 mb-2">4. Confidentiality & Data Protection:</strong>
                            <ul className="list-disc ml-6">
                              <li>Users agree not to disclose, share, or misuse any confidential company information or intellectual property.</li>
                              <li>Any breach will result in legal action and financial damages as deemed appropriate by law.</li>
                            </ul>
                            <strong className="block text-white mt-4 mb-2">5. Voluntary Consent:</strong>
                            <ul className="list-disc ml-6">
                              <li>All payments and participation in services are made voluntarily, and users fully agree to the terms and conditions.</li>
                              <li>The company holds no liability for payments made under false claims or third-party misuse.</li>
                            </ul>
                            <div className="mt-4">
                              <span className="inline-block mr-2">☐</span>I have read and agree to the terms mentioned above.<br />
                              <span className="inline-block mr-2">☐</span>I consent to proceed with payment and services under these conditions.
                            </div>
                            <button type="button" className="text-blue-400 underline mt-2" onClick={() => setShowNOCDetails(false)}>Hide Details</button>
                          </div>
                        )}
                        <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                          Read the full User Agreement →
                        </Link>
                      </div>
                    </div>

                    {/* NON-DISCLOSURE AGREEMENT (NDA) */}
                    <div className="flex items-start gap-4 p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
                      <Checkbox
                        id="ndaAccepted"
                        name="ndaAccepted"
                        checked={formData.ndaAccepted}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, ndaAccepted: checked as boolean })
                        }
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-5 h-5 text-blue-400" />
                          <label htmlFor="ndaAccepted" className="text-lg font-semibold text-white cursor-pointer">
                            Non-Disclosure Agreement (NDA)
                          </label>
                        </div>
                        {!showNDADetails ? (
                          <div className="text-slate-300 mb-4 text-sm">
                            <span className="font-semibold">Summary:</span> By checking this box, you agree to keep all shared information confidential. <button type="button" className="text-blue-400 underline ml-2" onClick={() => setShowNDADetails(true)}>More Details</button>
                          </div>
                        ) : (
                          <div className="text-slate-300 mb-4 text-sm space-y-2">
                            <strong className="block text-white mb-2">1. Confidential Information:</strong>
                            <ul className="list-disc ml-6">
                              <li>Both parties agree to protect all sensitive information, including project details, financials, code, designs, and any business data shared during the engagement.</li>
                            </ul>
                            <strong className="block text-white mt-4 mb-2">2. Obligation of Confidentiality:</strong>
                            <ul className="list-disc ml-6">
                              <li>You agree not to share, replicate, distribute, or leak any confidential material or communications received during or after the project term.</li>
                            </ul>
                            <strong className="block text-white mt-4 mb-2">3. Exceptions:</strong>
                            <ul className="list-disc ml-6">
                              <li>This agreement does not apply to:</li>
                              <ul className="list-disc ml-10">
                                <li>Public domain information.</li>
                                <li>Information already known before the agreement.</li>
                                <li>Information disclosed by legal obligation (e.g., court order).</li>
                              </ul>
                            </ul>
                            <strong className="block text-white mt-4 mb-2">4. Legal Consequences:</strong>
                            <ul className="list-disc ml-6">
                              <li>Breach of this NDA may result in:</li>
                              <ul className="list-disc ml-10">
                                <li>Immediate termination of the agreement.</li>
                                <li>Legal action.</li>
                                <li>Compensation for damages, loss of business, and reputational harm.</li>
                              </ul>
                            </ul>
                            <strong className="block text-white mt-4 mb-2">5. Agreement Term:</strong>
                            <ul className="list-disc ml-6">
                              <li>This NDA will remain effective for the duration of the project and for 2 years after its conclusion.</li>
                            </ul>
                           
                            <button type="button" className="text-blue-400 underline mt-2" onClick={() => setShowNDADetails(false)}>Hide Details</button>
                          </div>
                        )}
                        <Link href="/nda" className="text-blue-400 hover:text-blue-300 underline">
                          Read the full NDA →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.ndaAccepted || !formData.termsAccepted}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-4 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Get Started
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 rounded-2xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">What happens next?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-400 font-bold text-lg">1</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Review</h4>
                    <p className="text-slate-300 text-sm">We&apos;ll review your information and get back to you within 24 hours.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-400 font-bold text-lg">2</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Consultation</h4>
                    <p className="text-slate-300 text-sm">Schedule a free consultation to discuss your project requirements.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-400 font-bold text-lg">3</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Proposal</h4>
                    <p className="text-slate-300 text-sm">Receive a customized proposal tailored to your specific needs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}