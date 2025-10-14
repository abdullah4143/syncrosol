"use client";

import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  const values = ["Innovation", "Integrity", "Impact"];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        headline="Who We Are"
        subheadline="Meet the minds behind Web Elevate"
        layout="center"
      />

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Story
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We&apos;re a digital agency dedicated to building human-centered technology.
              With years of experience in software development, design, and AI automation,
              we help businesses transform their operations and create meaningful digital experiences.
              Our passion lies in combining cutting-edge technology with thoughtful design to solve
              real-world problems and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {value}
                    </h3>
                    <p className="text-slate-300">
                      {value === "Innovation" && "We embrace new technologies and creative solutions to stay ahead."}
                      {value === "Integrity" && "We build trust through transparent communication and honest work."}
                      {value === "Impact" && "We measure success by the positive change we create for our clients."}
                    </p>
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