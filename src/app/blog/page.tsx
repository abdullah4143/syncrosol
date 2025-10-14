"use client";

import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      title: "How AI Is Transforming Agencies",
      desc: "Automation in creative workflows.",
      date: "2025-01-15",
      author: "Ahmed Khan",
      readTime: "5 min read",
      slug: "how-ai-is-transforming-agencies"
    },
    {
      title: "The Future of Web Design",
      desc: "UI/UX trends for 2025.",
      date: "2025-01-10",
      author: "Fatima Ahmed",
      readTime: "7 min read",
      slug: "the-future-of-web-design"
    },
    {
      title: "Building Scalable Next.js Apps",
      desc: "Performance and deployment tips.",
      date: "2025-01-05",
      author: "Muhammad Ali",
      readTime: "6 min read",
      slug: "building-scalable-nextjs-apps"
    },
    {
      title: "Mobile-First Development Strategies",
      desc: "Creating responsive experiences that work everywhere.",
      date: "2025-01-01",
      author: "Sara Khan",
      readTime: "8 min read",
      slug: "mobile-first-development-strategies"
    },
    {
      title: "The Rise of Headless Commerce",
      desc: "Decoupling frontend and backend for better flexibility.",
      date: "2024-12-28",
      author: "Omar Farooq",
      readTime: "6 min read",
      slug: "the-rise-of-headless-commerce"
    },
    {
      title: "Cybersecurity Best Practices for Startups",
      desc: "Protecting your digital assets from day one.",
      date: "2024-12-25",
      author: "Ayesha Malik",
      readTime: "9 min read",
      slug: "cybersecurity-best-practices-startups"
    },
    {
      title: "The Power of Progressive Web Apps",
      desc: "Bridging the gap between web and mobile experiences.",
      date: "2024-12-20",
      author: "Bilal Hussain",
      readTime: "7 min read",
      slug: "the-power-of-progressive-web-apps"
    },
    {
      title: "Sustainable Web Development Practices",
      desc: "Building eco-friendly digital solutions.",
      date: "2024-12-15",
      author: "Zara Iqbal",
      readTime: "5 min read",
      slug: "sustainable-web-development-practices"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        headline="Insights & Updates"
        subheadline="Our thoughts, news, and tech insights."
        layout="center"
      />

      {/* Blog Grid */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay updated with our latest thoughts on technology, design, and digital innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 rounded-2xl overflow-hidden group">
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center border-b border-slate-600/50">
                    <span className="text-slate-400">Featured Image</span>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-400" />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {post.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400 font-medium">
                        {post.readTime}
                      </span>
                      <Link href={`/blog/${post.slug}`}>
                        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-6 group-hover:shadow-lg transition-all duration-300">
                          Read More
                        </Button>
                      </Link>
                    </div>
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