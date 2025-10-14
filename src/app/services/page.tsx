"use client";

import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Zap, Cloud } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites with clean, modern design.",
      icon: Code,
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks"],
      href: "/services/web-development"
    },
    {
      title: "Mobile Apps",
      desc: "Cross-platform mobile experiences.",
      icon: Smartphone,
      features: ["iOS & Android", "Native Performance", "Offline Support", "App Store Ready"],
      href: "/services/mobile-apps"
    },
    {
      title: "UI/UX Design",
      desc: "Design that connects users emotionally.",
      icon: Palette,
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      href: "/services/ui-ux-design"
    },
    {
      title: "AI Automation",
      desc: "Empower workflows with automation intelligence.",
      icon: Zap,
      features: ["Process Automation", "AI Integration", "Workflow Optimization", "Smart Analytics"],
      href: "/services/ai-automation"
    },
    {
      title: "Cloud Solutions",
      desc: "Secure, scalable, and optimized infrastructure.",
      icon: Cloud,
      features: ["Cloud Migration", "Infrastructure Setup", "Security", "Monitoring"],
      href: "/services/cloud-solutions"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        headline="What We Offer"
        subheadline="Tailored solutions for every business need."
        layout="center"
      />

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From concept to deployment, we deliver end-to-end digital solutions that drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group rounded-2xl">
                  <CardContent className="p-8">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-300 flex items-center text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full group-hover:shadow-lg transition-all duration-300">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}