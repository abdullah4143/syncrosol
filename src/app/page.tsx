"use client";

import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle, Star, Code, Palette, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuresRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Product Design",
      description: "Crafting intuitive and delightful experiences that captivate users and drive engagement.",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Building robust, scalable web platforms with Next.js, React.js, TypeScript, and modern frameworks.",
      gradient: "from-cyan-500 to-blue-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation AI",
      description: "Intelligent automation solutions using n8n, Zapier, and custom AI workflows to streamline operations.",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const stats = [
    { value: "Trusted", label: "by Leading Companies", icon: <CheckCircle className="w-6 h-6" /> },
    { value: "Proven", label: "Track Record", icon: <Star className="w-6 h-6" /> },
    { value: "Innovative", label: "Solutions", icon: <Code className="w-6 h-6" /> }
  ];

  const projectsPreview = [
    {
      title: "Smart Dashboard",
      desc: "Analytics-driven web app for business insights with real-time data visualization.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-blue-600 to-purple-600",
      slug: "smart-dashboard"
    },
    {
      title: "AI Chat Platform",
      desc: "Conversational assistant for customer engagement with advanced NLP capabilities.",
      tech: ["Next.js", "OpenAI", "PostgreSQL"],
      gradient: "from-green-500 to-teal-500",
      slug: "ai-chat-platform"
    },
    {
      title: "Mobile Organizer",
      desc: "Task management on the go with cross-platform synchronization.",
      tech: ["React Native", "Firebase", "Redux"],
      gradient: "from-pink-500 to-rose-500",
      slug: "mobile-organizer"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      feedback: "The automation tools saved us countless hours and increased our team's productivity by 40%!",
      rating: 5
    },
    {
      name: "James Lee",
      role: "CTO, InnovateLabs",
      feedback: "Excellent design and communication. They delivered beyond our expectations.",
      rating: 5
    },
    {
      name: "Ava Patel",
      role: "Founder, StartupXYZ",
      feedback: "They helped scale our product beautifully. Professional, reliable, and innovative.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <HeroSection
        headline="Empower Your Business with Smart Software Solutions"
        subheadline="From design to automation — we build digital experiences that grow your business."
        ctaButtons={[
          { text: "Get Started", style: "primary", href: "/contact" },
          { text: "View Projects", style: "primary", href: "/projects" }
        ]}
        layout="split"
      />

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive solutions for modern businesses, powered by cutting-edge technology and design excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Projects Preview */}
      <section ref={projectsRef} className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how we transform ideas into exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsPreview.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full group-hover:shadow-lg transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* CTA Banner */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your goals and transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Let&apos;s Talk
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
