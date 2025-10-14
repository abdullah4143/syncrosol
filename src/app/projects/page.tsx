"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "App", "AI"];

  const projects = [
    {
      title: "Smart Dashboard",
      category: "Web",
      desc: "Analytics-driven web app for business insights with real-time data visualization.",
      image: "/placeholder-project.jpg",
      slug: "smart-dashboard"
    },
    {
      title: "AI Chat Platform",
      category: "AI",
      desc: "Conversational assistant for customer engagement with advanced NLP capabilities.",
      image: "/placeholder-project.jpg",
      slug: "ai-chat-platform"
    },
    {
      title: "Mobile Organizer",
      category: "App",
      desc: "Task management on the go with cross-platform synchronization.",
      image: "/placeholder-project.jpg",
      slug: "mobile-organizer"
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        headline="Our Work in Action"
        subheadline="Discover how we transform ideas into results."
        layout="center"
      />

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Portfolio Showcase
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our diverse range of successful projects across web development, mobile apps, and AI solutions.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 rounded-2xl overflow-hidden group">
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center border-b border-slate-600/50">
                    <span className="text-slate-400">Project Preview</span>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full group-hover:shadow-lg transition-all duration-300">
                      <Link href={`/projects/${project.slug}`} className="flex items-center justify-center w-full">
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}