"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaButtons?: Array<{
    text: string;
    style: "primary" | "secondary";
    href?: string;
  }>;
  layout?: "split" | "center";
}

const HeroSection = ({
  headline,
  subheadline,
  ctaButtons = [],
  layout = "center"
}: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20"
      >
        {layout === "split" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Premium Digital Solutions</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-black leading-tight"
              >
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  {headline}
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                {subheadline}
              </motion.p>

              {ctaButtons.length > 0 && (
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                {ctaButtons.map((button, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {button.href ? (
                      <Link href={button.href}>
                        <Button
                          className={
                            button.style === "primary"
                              ? "group rounded-full px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg"
                              : "group rounded-full px-8 py-4 border-2 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg backdrop-blur-sm"
                          }
                        >
                          {button.text}
                          {button.style === "primary" && (
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          )}
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        className={
                          button.style === "primary"
                            ? "group rounded-full px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg"
                            : "group rounded-full px-8 py-4 border-2 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg backdrop-blur-sm"
                        }
                      >
                        {button.text}
                        {button.style === "primary" && (
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </Button>
                    )}
                  </motion.div>
                ))}
                </motion.div>
              )}

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-8 pt-8"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Lightning Fast</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Image/Visual Content */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-full max-w-lg mx-auto h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-border/50">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-center space-y-4"
                  >
                    <Sparkles className="w-16 h-16 text-primary mx-auto" />
                    <p className="text-muted-foreground font-medium">Premium Experience</p>
                  </motion.div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-xl backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">99.9% Uptime</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-xl backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">Lightning Fast</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Digital Solutions</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-black leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                {headline}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              {subheadline}
            </motion.p>

            {ctaButtons.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {ctaButtons.map((button, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className={
                        button.style === "primary"
                          ? "group rounded-full px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-lg"
                          : "group rounded-full px-8 py-4 border-2 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg backdrop-blur-sm"
                      }
                    >
                      {button.text}
                      {button.style === "primary" && (
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;