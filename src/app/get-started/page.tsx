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

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ndaAccepted: false,
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.ndaAccepted || !formData.termsAccepted) {
      alert("Please accept both the NDA and Terms & Conditions to continue.");
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
        alert("Thank you! Your information has been submitted successfully. We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          ndaAccepted: false,
          termsAccepted: false
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Sorry, there was an error submitting your information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
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
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 rounded-xl focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 rounded-xl focus:border-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Agreements */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Agreements</h3>

                    {/* NDA Agreement */}
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
                        <p className="text-slate-300 mb-4">
                          I agree to the terms of the Non-Disclosure Agreement to protect confidential information shared during our discussions.
                        </p>
                        <Link href="/nda" className="text-blue-400 hover:text-blue-300 underline">
                          Read the full NDA →
                        </Link>
                      </div>
                    </div>

                    {/* Terms & Conditions */}
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
                            Terms & Conditions
                          </label>
                        </div>
                        <p className="text-slate-300 mb-4">
                          I agree to the Terms & Conditions governing our business relationship and project engagements.
                        </p>
                        <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                          Read the full Terms & Conditions →
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