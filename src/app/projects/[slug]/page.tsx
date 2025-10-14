"use client";

import { useParams } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

// Mock project data - in a real app, this would come from a CMS or API
const projectData = {
  "smart-dashboard": {
    title: "Smart Dashboard",
    description: "Analytics-driven web app for business insights with real-time data visualization.",
    fullDescription: "A comprehensive business intelligence dashboard that transforms raw data into actionable insights. Built with modern web technologies to provide real-time analytics, interactive charts, and predictive modeling capabilities.",
    tech: ["React", "Node.js", "MongoDB", "D3.js", "Socket.io"],
    features: [
      "Real-time data visualization",
      "Interactive charts and graphs",
      "Predictive analytics",
      "Custom dashboard widgets",
      "Multi-user collaboration",
      "Mobile responsive design"
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Real-time data synchronization",
      "Complex chart rendering optimization"
    ],
    results: [
      "50% reduction in reporting time",
      "Improved decision-making speed",
      "Enhanced user engagement"
    ],
    gradient: "from-blue-600 to-purple-600",
    image: "/placeholder-project.jpg",
    duration: "3 months",
    team: "4 developers",
    status: "Completed"
  },
  "ai-chat-platform": {
    title: "AI Chat Platform",
    description: "Conversational assistant for customer engagement with advanced NLP capabilities.",
    fullDescription: "An intelligent chatbot platform that uses advanced natural language processing to provide personalized customer support. Integrates with multiple channels and learns from interactions to improve responses over time.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Redis", "WebSocket"],
    features: [
      "Advanced NLP processing",
      "Multi-channel integration",
      "Machine learning capabilities",
      "Real-time conversation analytics",
      "Customizable chat flows",
      "Admin dashboard"
    ],
    challenges: [
      "Complex NLP integration",
      "Handling concurrent conversations",
      "Maintaining conversation context"
    ],
    results: [
      "70% reduction in support tickets",
      "24/7 customer availability",
      "Improved customer satisfaction"
    ],
    gradient: "from-green-500 to-teal-500",
    image: "/placeholder-project.jpg",
    duration: "4 months",
    team: "5 developers",
    status: "Completed"
  },
  "mobile-organizer": {
    title: "Mobile Organizer",
    description: "Task management on the go with cross-platform synchronization.",
    fullDescription: "A comprehensive task management application that syncs seamlessly across all devices. Features intelligent task prioritization, team collaboration, and advanced project management tools.",
    tech: ["React Native", "Firebase", "Redux", "Node.js", "MongoDB"],
    features: [
      "Cross-platform synchronization",
      "Intelligent task prioritization",
      "Team collaboration tools",
      "Offline functionality",
      "Advanced project templates",
      "Time tracking integration"
    ],
    challenges: [
      "Cross-platform compatibility",
      "Offline data synchronization",
      "Complex state management"
    ],
    results: [
      "40% increase in team productivity",
      "Improved project completion rates",
      "Enhanced team communication"
    ],
    gradient: "from-pink-500 to-rose-500",
    image: "/placeholder-project.jpg",
    duration: "5 months",
    team: "6 developers",
    status: "Completed"
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-slate-300 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
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
        headline={project.title}
        subheadline={project.description}
        layout="center"
      />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/projects">
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Project Details */}
      <section className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      {project.fullDescription}
                    </p>

                    {/* Project Image Placeholder */}
                    <div className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-8`}>
                      <span className="text-white/80 text-lg">Project Preview</span>
                    </div>
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
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Challenges & Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-6">Challenges Overcome</h3>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="text-slate-300 flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-6">Results Achieved</h3>
                      <ul className="space-y-3">
                        {project.results.map((result, index) => (
                          <li key={index} className="text-slate-300 flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-white font-medium">Duration</p>
                          <p className="text-slate-300 text-sm">{project.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-white font-medium">Team Size</p>
                          <p className="text-slate-300 text-sm">{project.team}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <div>
                          <p className="text-white font-medium">Status</p>
                          <p className="text-slate-300 text-sm">{project.status}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
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

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Interested in Similar Projects?</h3>
                    <p className="text-slate-300 mb-6">
                      Let&apos;s discuss how we can help bring your ideas to life.
                    </p>
                    <div className="space-y-3">
                      <Link href="/contact">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                          Start a Project
                        </Button>
                      </Link>
                      <Link href="/projects">
                        <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white">
                          View More Projects
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