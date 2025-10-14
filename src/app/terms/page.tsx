"use client";

import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Scale } from "lucide-react";
import Link from "next/link";

export default function Terms() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        headline="Terms & Conditions"
        subheadline="Understanding our business relationship and project engagements."
        layout="center"
      />

      {/* Terms Content */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/get-started">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Get Started
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 rounded-2xl shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white">Terms & Conditions</h1>
                    <p className="text-slate-300">Effective Date: October 14, 2025</p>
                  </div>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                  <div className="space-y-6 text-slate-300 leading-relaxed">

                    <div>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                    <p>
                      By accessing and using SyncroSol&apos;s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                      <p>
                        SyncroSol provides web development, mobile app development, UI/UX design, AI automation, and cloud solutions services. All services are provided on a project basis with agreed-upon deliverables, timelines, and payment terms.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">3. Project Scope and Changes</h2>
                      <p>
                        Project scope will be defined in a separate project proposal or contract. Any changes to the scope must be agreed upon in writing and may result in additional charges. We reserve the right to modify project timelines if scope changes are requested.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                      <p>
                        Payment terms will be specified in individual project agreements. Generally, we require:
                      </p>
                      <ul className="list-disc list-inside ml-6 mt-4 space-y-2">
                        <li>50% upfront payment to commence work</li>
                        <li>Milestone-based payments for larger projects</li>
                        <li>Final payment upon project completion and delivery</li>
                        <li>Late payment fees of 1.5% per month on overdue amounts</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                      <p>
                        Upon full payment, the client will own the intellectual property rights to the final deliverables as specified in the project agreement. SyncroSol retains the right to use project work for portfolio and marketing purposes, unless otherwise agreed.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
                      <p>
                        Both parties agree to maintain confidentiality of proprietary information shared during the course of the project. This includes business strategies, client data, source code, and other sensitive information.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">7. Warranties and Liability</h2>
                      <p>
                        SyncroSol warrants that all services will be performed in a professional manner. We provide a 30-day bug-fix period for completed projects. Our liability is limited to the amount paid for services. We are not liable for indirect damages or lost profits.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                      <p>
                        Either party may terminate the agreement with 30 days written notice. Upon termination, client will pay for all work completed up to the termination date. Outstanding balances become immediately due.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">9. Force Majeure</h2>
                      <p>
                        Neither party shall be liable for delays caused by circumstances beyond their reasonable control, including but not limited to natural disasters, war, strikes, or government regulations.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                      <p>
                        This agreement shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be resolved through arbitration in Lahore, Pakistan.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">11. Amendments</h2>
                      <p>
                        These terms may be amended only by written agreement signed by both parties. Continued use of our services after amendments constitutes acceptance of the new terms.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                      <p>
                        For questions about these Terms & Conditions, please contact us at hello@webelevate.com or +92 300 1234567.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Acceptance Section */}
                <div className="mt-12 pt-8 border-t border-slate-600/50">
                  <div className="text-center">
                    <p className="text-slate-300 mb-6">
                      By proceeding with the &quot;Get Started&quot; form, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                    </p>
                    <Link href="/get-started">
                      <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                        <FileText className="w-4 h-4 mr-2" />
                        Back to Get Started Form
                      </Button>
                    </Link>
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