"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Sheets API integration
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        alert("Thank you for your message! We'll get back to you soon.");
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = {
    office: "Lahore, Pakistan",
    email: "hello@webelevate.com",
    phone: "+92 300 1234567",
    socials: [
      { icon: Facebook, label: "Facebook", href: "#" },
      { icon: Twitter, label: "Twitter", href: "#" },
      { icon: Instagram, label: "Instagram", href: "#" },
      { icon: Linkedin, label: "LinkedIn", href: "#" }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        headline="Let&apos;s Work Together"
        subheadline="We'd love to hear about your project."
        layout="center"
      />

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch and let&apos;s discuss your project.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 rounded-2xl shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Send us a message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Name
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
                        Email
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
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 rounded-xl min-h-[120px] focus:border-blue-500"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Info */}
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 rounded-2xl shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Get in touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Office</p>
                        <p className="text-slate-300">{contactInfo.office}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-slate-300">{contactInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Phone className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Phone</p>
                        <p className="text-slate-300">{contactInfo.phone}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 rounded-2xl shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Follow us
                  </h3>
                  <div className="flex gap-4">
                    {contactInfo.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl flex items-center justify-center transition-colors border border-slate-600/50"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-blue-400" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}