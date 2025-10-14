"use client";

import { useParams } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";

export default function BlogDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const blogData: Record<string, {
    title: string;
    description: string;
    content: string[];
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    image: string;
  }> = {
    "how-ai-is-transforming-agencies": {
      title: "How AI Is Transforming Agencies",
      description: "Automation in creative workflows.",
      content: [
        "Artificial Intelligence is revolutionizing the way creative agencies operate, from content creation to client management. In this comprehensive guide, we'll explore how AI tools are transforming traditional agency workflows and what this means for the future of creative work.",
        "The creative industry has always been about human ingenuity and artistic expression. However, AI is not replacing creativity—it's enhancing it. By automating repetitive tasks, AI frees up creative professionals to focus on what they do best: strategic thinking and innovative design.",
        "One of the most significant impacts of AI in agencies is in content creation. AI-powered tools can now generate initial drafts, suggest headlines, and even create visual concepts. This doesn't diminish the role of human creators but rather accelerates the creative process.",
        "Client management is another area where AI is making waves. Predictive analytics can help agencies understand client needs better, while chatbots handle routine inquiries, allowing account managers to focus on strategic relationships.",
        "As we look to the future, agencies that embrace AI will have a competitive advantage. The key is not to fear AI, but to understand how to leverage it effectively while maintaining the human touch that makes creative work special."
      ],
      author: "Ahmed Khan",
      date: "2025-01-15",
      readTime: "5 min read",
      tags: ["AI", "Automation", "Creative Agencies", "Technology"],
      image: "/blog/ai-agencies.jpg"
    },
    "the-future-of-web-design": {
      title: "The Future of Web Design",
      description: "UI/UX trends for 2025.",
      content: [
        "Web design is constantly evolving, and 2025 promises to be a year of exciting innovations. From AI-driven design tools to immersive experiences, the future of web design is both challenging and incredibly promising.",
        "One of the biggest trends we're seeing is the rise of AI-assisted design. Tools that can generate layouts, suggest color palettes, and even create entire websites are becoming increasingly sophisticated. This doesn't mean designers are obsolete—instead, it means they can focus on the strategic and creative aspects of their work.",
        "Immersive experiences are another frontier. With WebXR and advanced CSS capabilities, websites are becoming more interactive and engaging. Users expect more than static pages; they want experiences that feel alive and responsive.",
        "Accessibility continues to be a critical focus. As web standards evolve, designers must ensure that their creations are usable by everyone, regardless of ability. This isn't just good ethics—it's good business, as accessible sites reach broader audiences.",
        "The future of web design lies in balancing technological innovation with human-centered design principles. As we embrace new tools and techniques, we must never lose sight of the people we're designing for."
      ],
      author: "Fatima Ahmed",
      date: "2025-01-10",
      readTime: "7 min read",
      tags: ["Web Design", "UI/UX", "Trends", "Technology"],
      image: "/blog/web-design-future.jpg"
    },
    "building-scalable-nextjs-apps": {
      title: "Building Scalable Next.js Apps",
      description: "Performance and deployment tips.",
      content: [
        "Building scalable applications with Next.js requires careful planning and best practices. In this guide, we'll explore the key strategies for creating high-performance, maintainable Next.js applications that can grow with your business.",
        "Performance optimization starts at the architectural level. Next.js provides excellent tools out of the box, but understanding how to use them effectively is crucial. From image optimization to code splitting, every decision impacts your app's performance.",
        "Database design is another critical aspect. Choosing the right database and implementing efficient queries can make or break your application's scalability. We'll explore different approaches and when to use each one.",
        "Deployment and monitoring are often overlooked but essential for scalable applications. Implementing proper CI/CD pipelines, monitoring tools, and error tracking ensures your application remains reliable as it grows.",
        "Security should be baked into your application from the start. Next.js provides good defaults, but understanding common vulnerabilities and how to mitigate them is essential for any production application.",
        "Scalability is not just about handling more users—it's about maintaining performance, reliability, and developer productivity as your application grows. By following these best practices, you'll build applications that can evolve with your business needs."
      ],
      author: "Muhammad Ali",
      date: "2025-01-05",
      readTime: "6 min read",
      tags: ["Next.js", "Performance", "Scalability", "Development"],
      image: "/blog/nextjs-scalable.jpg"
    },
    "mobile-first-development-strategies": {
      title: "Mobile-First Development Strategies",
      description: "Creating responsive experiences that work everywhere.",
      content: [
        "In today's mobile-dominated world, adopting a mobile-first development approach is no longer optional—it's essential. This comprehensive guide explores strategies for building applications that prioritize mobile users while maintaining excellent desktop experiences.",
        "Mobile-first design starts with understanding your users' context. Mobile users are often on-the-go, multitasking, and dealing with varying network conditions. Your design decisions should reflect these realities, focusing on speed, simplicity, and accessibility.",
        "Progressive enhancement is key to mobile-first development. Start with a solid mobile foundation, then enhance the experience for larger screens. This approach ensures your application works well everywhere, not just on high-end devices.",
        "Performance optimization becomes even more critical in mobile environments. Slow loading times, excessive data usage, and poor battery life can quickly drive users away. Implementing lazy loading, efficient caching, and optimized assets are essential practices.",
        "Touch interactions require different design patterns than mouse-based interfaces. Understanding gesture recognition, touch targets, and mobile navigation patterns is crucial for creating intuitive mobile experiences.",
        "Testing across devices and network conditions is essential. What works perfectly on a high-speed WiFi connection might fail miserably on a slow 3G network. Regular testing ensures your application delivers consistent performance everywhere."
      ],
      author: "Sara Khan",
      date: "2025-01-01",
      readTime: "8 min read",
      tags: ["Mobile", "Responsive Design", "UX", "Performance"],
      image: "/blog/mobile-first.jpg"
    },
    "the-rise-of-headless-commerce": {
      title: "The Rise of Headless Commerce",
      description: "Decoupling frontend and backend for better flexibility.",
      content: [
        "Headless commerce is revolutionizing e-commerce by decoupling the frontend presentation layer from the backend commerce functionality. This architectural approach offers unprecedented flexibility and scalability for modern online businesses.",
        "Traditional e-commerce platforms couple the frontend and backend tightly, limiting customization and scalability. Headless commerce separates these concerns, allowing developers to choose the best tools for each layer independently.",
        "The benefits of headless commerce are numerous. Faster development cycles, easier maintenance, and the ability to deliver consistent experiences across multiple channels are just a few advantages. Businesses can now deploy to web, mobile, IoT devices, and more from a single backend.",
        "API-first architecture enables seamless integrations with third-party services, payment processors, and marketing tools. This flexibility allows businesses to adapt quickly to changing market conditions and customer needs.",
        "Performance improvements are another significant benefit. By optimizing each layer independently and leveraging modern frontend frameworks, headless commerce sites often load faster and provide better user experiences.",
        "While headless commerce offers many advantages, it also requires careful planning and expertise. Choosing the right tools, managing multiple systems, and ensuring data consistency across channels are important considerations for successful implementation."
      ],
      author: "Omar Farooq",
      date: "2024-12-28",
      readTime: "6 min read",
      tags: ["E-commerce", "Headless", "API", "Architecture"],
      image: "/blog/headless-commerce.jpg"
    },
    "cybersecurity-best-practices-startups": {
      title: "Cybersecurity Best Practices for Startups",
      description: "Protecting your digital assets from day one.",
      content: [
        "Cybersecurity is not a luxury—it's a necessity for startups. With limited resources and high growth ambitions, startups must implement security best practices from the beginning to protect their most valuable assets: data, reputation, and customer trust.",
        "Start with a security-first mindset. Every decision, from choosing development tools to hiring practices, should consider security implications. Building security into your culture from day one prevents costly mistakes later.",
        "Data encryption, both at rest and in transit, should be non-negotiable. Implementing proper encryption protocols ensures that even if data is compromised, it remains unusable to unauthorized parties.",
        "Regular security audits and penetration testing help identify vulnerabilities before they can be exploited. Startups should conduct these assessments regularly and treat security as an ongoing process rather than a one-time event.",
        "Employee training is crucial. Most security breaches result from human error, not sophisticated attacks. Educating your team about phishing, password hygiene, and safe computing practices can prevent many common security incidents.",
        "Having an incident response plan ensures your startup can react quickly and effectively to security breaches. Knowing what to do when things go wrong can minimize damage and help your business recover faster.",
        "Remember, cybersecurity is an investment in your startup's future. The cost of prevention is always lower than the cost of recovery from a major security incident."
      ],
      author: "Ayesha Malik",
      date: "2024-12-25",
      readTime: "9 min read",
      tags: ["Cybersecurity", "Startups", "Data Protection", "Best Practices"],
      image: "/blog/cybersecurity-startups.jpg"
    },
    "the-power-of-progressive-web-apps": {
      title: "The Power of Progressive Web Apps",
      description: "Bridging the gap between web and mobile experiences.",
      content: [
        "Progressive Web Apps (PWAs) represent the future of web development, offering the best of both web and mobile worlds. These applications provide native app-like experiences while maintaining the accessibility and reach of the web.",
        "PWAs combine the best features of websites and mobile applications. They can be installed on devices, work offline, send push notifications, and access device hardware, all while being discoverable through search engines and accessible via URLs.",
        "Service workers are the backbone of PWAs, enabling offline functionality, background sync, and push notifications. These JavaScript files run independently of the main browser thread, providing powerful capabilities that were previously only available to native apps.",
        "Performance is a key advantage of PWAs. With proper implementation, they can load instantly and provide smooth, app-like interactions. This leads to better user engagement and higher conversion rates compared to traditional websites.",
        "Cross-platform compatibility means developing once and deploying everywhere. PWAs work on any device with a modern browser, eliminating the need for separate iOS and Android development teams and reducing maintenance costs.",
        "App store distribution is no longer the only path to mobile users. PWAs can be installed directly from the browser, providing a frictionless user experience that doesn't require app store approval processes.",
        "As web standards continue to evolve, PWAs will become increasingly powerful. Features like WebXR for augmented reality, Web Bluetooth for IoT integration, and advanced caching strategies will further blur the line between web and native applications."
      ],
      author: "Bilal Hussain",
      date: "2024-12-20",
      readTime: "7 min read",
      tags: ["PWA", "Web Development", "Mobile", "Performance"],
      image: "/blog/progressive-web-apps.jpg"
    },
    "sustainable-web-development-practices": {
      title: "Sustainable Web Development Practices",
      description: "Building eco-friendly digital solutions.",
      content: [
        "As digital citizens, web developers have a responsibility to minimize the environmental impact of the applications we build. Sustainable web development practices can significantly reduce the carbon footprint of digital services while maintaining excellent user experiences.",
        "The digital world has a real environmental cost. Data centers consume enormous amounts of electricity, and the devices we use to access the web contribute to electronic waste. Sustainable development means making conscious choices to minimize these impacts.",
        "Image optimization is one of the most impactful sustainable practices. Large, unoptimized images consume unnecessary bandwidth and processing power. Using modern formats like WebP, implementing lazy loading, and serving appropriately sized images can dramatically reduce data transfer.",
        "Efficient code and minimal JavaScript are essential for sustainability. Bloated applications require more processing power and battery life, contributing to higher energy consumption. Writing clean, efficient code and avoiding unnecessary dependencies reduces the environmental impact.",
        "Content delivery networks (CDNs) and edge computing can reduce latency and server load by distributing content geographically. This not only improves performance but also reduces the energy required to serve content to users worldwide.",
        "Choosing green hosting providers that use renewable energy sources is another important consideration. Many hosting companies now offer carbon-neutral or carbon-offset options, allowing developers to support environmentally conscious infrastructure.",
        "Sustainable web development is about making ethical choices that benefit both users and the planet. By implementing these practices, we can create digital experiences that are fast, accessible, and environmentally responsible."
      ],
      author: "Zara Iqbal",
      date: "2024-12-15",
      readTime: "5 min read",
      tags: ["Sustainability", "Web Development", "Environment", "Performance"],
      image: "/blog/sustainable-web.jpg"
    }
  };

  const blog = blogData[slug];

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-slate-300 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
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
        headline={blog.title}
        subheadline={blog.description}
        layout="center"
      />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog">
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Blog Content */}
      <section className="py-12 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50 overflow-hidden">
              {/* Featured Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center border-b border-slate-600/50">
                <span className="text-slate-400">Featured Image</span>
              </div>

              <CardContent className="p-8">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-600/50">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-400" />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    {blog.readTime}
                  </div>
                </div>

                {/* Blog Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  {blog.title}
                </h1>

                {/* Blog Content */}
                <div className="prose prose-lg prose-invert max-w-none">
                  {blog.content.map((paragraph, index) => (
                    <p key={index} className="text-slate-300 leading-relaxed mb-6 text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-600/50">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium border border-slate-600/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {blog.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {blog.author}
                    </h3>
                    <p className="text-slate-300">
                      Technology enthusiast and content creator passionate about sharing insights on modern web development and AI.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Related Posts / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>
                <p className="text-slate-300 mb-8">
                  Stay updated with our latest insights and tutorials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/blog">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white">
                      Read More Articles
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}