"use client";

import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Shield } from "lucide-react";
import Link from "next/link";

export default function NDA() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        headline="Non-Disclosure Agreement"
        subheadline="Protecting confidential information and fostering trust."
        layout="center"
      />

      {/* NDA Content */}
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
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white">Non-Disclosure Agreement</h1>
                    <p className="text-slate-300">Effective Date: October 14, 2025</p>
                  </div>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                  <div className="space-y-6 text-slate-300 leading-relaxed">

                    <div>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Parties</h2>
                    <p>
                      This Non-Disclosure Agreement (the &quot;Agreement&quot;) is entered into between SyncroSol (&quot;Company&quot; or &quot;We&quot;) and the individual or entity agreeing to these terms (&quot;Recipient&quot; or &quot;You&quot;).
                    </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">2. Purpose</h2>
                      <p>
                        The purpose of this Agreement is to protect the confidentiality of proprietary information that may be shared between the parties during discussions about potential business relationships, projects, or services.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">3. Definition of Confidential Information</h2>
                      <p>
                        &quot;Confidential Information&quot; includes all information or material that has or could have commercial value or other utility in the business in which the Company is engaged, including but not limited to:
                      </p>
                      <ul className="list-disc list-inside ml-6 mt-4 space-y-2">
                        <li>Technical data, trade secrets, or know-how</li>
                        <li>Product plans, designs, or specifications</li>
                        <li>Customer lists, pricing information, or business strategies</li>
                        <li>Financial information or projections</li>
                        <li>Source code, algorithms, or proprietary processes</li>
                        <li>Any other information marked as &quot;Confidential&quot; or reasonably understood to be confidential</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">4. Obligations of Recipient</h2>
                      <p>
                        Recipient agrees to:
                      </p>
                      <ul className="list-disc list-inside ml-6 mt-4 space-y-2">
                        <li>Hold and maintain the Confidential Information in strict confidence</li>
                        <li>Not disclose, reproduce, or disseminate the Confidential Information to any third party</li>
                        <li>Use the Confidential Information solely for the purpose of evaluating potential business relationships</li>
                        <li>Take reasonable measures to protect the secrecy of the Confidential Information</li>
                        <li>Limit access to Confidential Information to those who have a legitimate need to know</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">5. Exclusions</h2>
                      <p>
                        This Agreement does not apply to information that:
                      </p>
                      <ul className="list-disc list-inside ml-6 mt-4 space-y-2">
                        <li>Is or becomes publicly known through no fault of Recipient</li>
                        <li>Was already known to Recipient prior to disclosure</li>
                        <li>Is independently developed by Recipient without use of Confidential Information</li>
                        <li>Is lawfully received from a third party without breach of confidentiality</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">6. Term</h2>
                      <p>
                        This Agreement shall remain in effect for a period of 3 years from the date of execution, unless terminated earlier by mutual written agreement.
                      </p>
                    </div>

                    <div>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Return of Materials</h2>
                    <p>
                      Upon termination of discussions or at the Company&apos;s request, Recipient shall promptly return or destroy all Confidential Information and certify in writing that such return or destruction has been completed.
                    </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">8. Remedies</h2>
                      <p>
                        Recipient acknowledges that any breach of this Agreement may cause irreparable harm to the Company. In addition to other remedies available at law, the Company shall be entitled to seek injunctive relief to prevent or stop such breach.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
                      <p>
                        This Agreement shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of laws principles.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">10. Entire Agreement</h2>
                      <p>
                        This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements, whether written or oral, relating to the subject matter hereof.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Signature Section */}
                <div className="mt-12 pt-8 border-t border-slate-600/50">
                  <div className="text-center">
                    <p className="text-slate-300 mb-6">
                      By proceeding with the &quot;Get Started&quot; form, you acknowledge that you have read, understood, and agree to be bound by the terms of this Non-Disclosure Agreement.
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