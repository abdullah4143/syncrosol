"use client";

import { useParams } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Code, Smartphone, Palette, Zap, Cloud } from "lucide-react";
import Link from "next/link";

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const serviceData: Record<string, {
    title: string;
    description: string;
    fullDescription: string;
    icon: React.ComponentType<{ className?: string }>;
    features: string[];
    benefits: string[];
    process: string[];
    technologies: string[];
  }> = {
    "web-development": {
      title: "Web Development",
      description: "Custom websites with clean, modern design.",
      fullDescription: "We create stunning, high-performance websites that not only look beautiful but also drive results. Our web development services combine cutting-edge technology with user-centered design to deliver digital experiences that engage your audience and grow your business.",
      icon: Code,
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Ready",
        "Modern Frameworks",
        "Custom Functionality",
        "E-commerce Integration"
      ],
      benefits: [
        "Increased online visibility",
        "Better user engagement",
        "Higher conversion rates",
        "Mobile-friendly experience",
        "Fast loading speeds",
        "Scalable architecture"
      ],
      process: [
        "Discovery & Planning",
        "Design & Prototyping",
        "Development",
        "Testing & QA",
        "Launch & Deployment",
        "Maintenance & Support"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"]
    },
    "mobile-apps": {
      title: "Mobile Apps",
      description: "Cross-platform mobile experiences.",
      fullDescription: "Transform your ideas into powerful mobile applications that users love. We develop native and cross-platform apps that deliver exceptional user experiences across iOS and Android devices.",
      icon: Smartphone,
      features: [
        "iOS & Android",
        "Native Performance",
        "Offline Support",
        "App Store Ready",
        "Push Notifications",
        "In-App Purchases"
      ],
      benefits: [
        "Reach mobile users",
        "Enhanced brand engagement",
        "Increased customer loyalty",
        "Offline functionality",
        "Push notification marketing",
        "App store visibility"
      ],
      process: [
        "Market Research",
        "UI/UX Design",
        "App Development",
        "Testing & QA",
        "App Store Submission",
        "Post-Launch Support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Stripe"]
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      description: "Design that connects users emotionally.",
      fullDescription: "Create meaningful connections with your users through thoughtful, intuitive design. Our UI/UX design services focus on understanding user behavior and crafting experiences that delight and engage.",
      icon: Palette,
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
        "Visual Design"
      ],
      benefits: [
        "Improved user satisfaction",
        "Higher engagement rates",
        "Reduced development costs",
        "Consistent brand experience",
        "Better accessibility",
        "Competitive advantage"
      ],
      process: [
        "User Research",
        "Information Architecture",
        "Wireframing",
        "Visual Design",
        "Prototyping",
        "User Testing"
      ],
      technologies: ["Figma", "Sketch", "Adobe XD", "InVision", "Principle", "Framer"]
    },
    "ai-automation": {
      title: "AI Automation",
      description: "Empower workflows with automation intelligence.",
      fullDescription: "Streamline your business operations with intelligent automation solutions. We leverage AI and automation tools to eliminate repetitive tasks and optimize your workflows for maximum efficiency.",
      icon: Zap,
      features: [
        "Process Automation",
        "AI Integration",
        "Workflow Optimization",
        "Smart Analytics",
        "Chatbots & Assistants",
        "Data Processing"
      ],
      benefits: [
        "Reduced operational costs",
        "Increased productivity",
        "Fewer human errors",
        "24/7 automation",
        "Data-driven insights",
        "Scalable operations"
      ],
      process: [
        "Process Analysis",
        "Automation Design",
        "AI Integration",
        "Testing & Optimization",
        "Deployment",
        "Monitoring & Maintenance"
      ],
      technologies: ["n8n", "Zapier", "OpenAI", "Python", "Node.js", "AWS Lambda"]
    },
    "cloud-solutions": {
      title: "Cloud Solutions",
      description: "Secure, scalable, and optimized infrastructure.",
      fullDescription: "Build robust, scalable cloud infrastructure that grows with your business. Our cloud solutions ensure high availability, security, and performance for your applications and data.",
      icon: Cloud,
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Security Implementation",
        "Monitoring & Alerting",
        "Backup & Recovery",
        "Performance Optimization"
      ],
      benefits: [
        "Cost-effective scaling",
        "High availability",
        "Enhanced security",
        "Disaster recovery",
        "Global reach",
        "Reduced maintenance"
      ],
      process: [
        "Infrastructure Assessment",
        "Migration Planning",
        "Cloud Architecture",
        "Security Setup",
        "Migration Execution",
        "Optimization & Monitoring"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
    }
  };

  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-slate-300 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <HeroSection
        headline={service.title}
        subheadline={service.description}
        layout="center"
      />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/services">
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </Link>
      </div>

      {/* Service Overview */}
      <section className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">Service Overview</h2>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                    <div className="space-y-4">
                      {service.process.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {index + 1}
                          </div>
                          <span className="text-slate-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact for Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Get Detailed Pricing</h3>
                    <p className="text-slate-300 mb-6">
                      Every project is unique. Contact us to discuss your specific requirements and get a customized quote.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">Email Us</p>
                          <p className="text-slate-300 text-sm">hello@webelevate.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">Call Us</p>
                          <p className="text-slate-300 text-sm">+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link href="/contact">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                          Contact for Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
                    <p className="text-slate-300 mb-6">
                      Let&apos;s discuss how we can help bring your project to life.
                    </p>
                    <div className="space-y-3">
                      <Link href="/contact">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                          Start Your Project
                        </Button>
                      </Link>
                      <Link href="/projects">
                        <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white">
                          View Our Work
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}