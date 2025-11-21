"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Download,
  Smartphone,
  TrendingUp,
  BarChart3,
} from "lucide-react";

// --- DATA SECTION ---
const PORTFOLIO_DATA = {
  name: "David Obaro",
  title: "Sooftware Engineer",
  about:
    "University of Pittsburgh graduate (Cum Laude) specializing in full-stack development and data engineering. Proven track record optimizing enterprise systems at UPMC and building AI-driven research tools. I write scalable, production-ready code and am currently seeking software engineering opportunities.",
  social: {
    github: "https://github.com/davidobaro",
    linkedin: "https://www.linkedin.com/in/david-obaro/",
    email: "zozaobaro2@gmail.com",
    resume: "/resume.pdf",
  },
  skills: [
    "Java",
    "Python",
    "Spring Boot",
    "React",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Swift",
    "TensorFlow",
    "Angular",
    "Git",
  ],
  experience: [
    {
      year: "May 2024 - Jun 2024",
      role: "Software Engineer Intern",
      company: "UPMC Enterprises",
      description:
        "Engineered internal Spring Boot applications handling 100,000+ records per session. Built ETL pipelines and optimized SQL queries, reducing processing time by 30%.",
    },
    {
      year: "May 2024 - Aug 2024",
      role: "Student Research Programmer",
      company: "University of Pittsburgh | FACETLab",
      description:
        "Designed AI-driven NLP tools for information literacy. Reduced algorithmic bias in speech recognition models, improving accent detection accuracy by 22%.",
    },
    {
      year: "Aug 2021 - May 2025",
      role: "B.S. Computer Science",
      company: "University of Pittsburgh",
      description:
        "Graduated Cum Laude. Minor in Economics. Activities: NSBE, CS Club. Relevant Coursework: Systems Software, Machine Learning, Software QA.",
    },
  ],
  projects: [
    {
      title: "Stock Tracker & Predictor",
      desc: "Full-stack financial dashboard with LSTM-based price prediction models.",
      tags: ["Python", "TensorFlow", "Flask", "Streamlit"],
      link: "https://github.com/davidobaro",
      icon: (
        <TrendingUp
          size={64}
          className="text-zinc-700 group-hover:text-green-500 transition-colors"
        />
      ),
      image: null,
      status: "Completed",
    },
    {
      title: "CEC Check-in Kiosk",
      desc: "iOS Kiosk app for community engagement. Personalized greeting system with Postgres backend.",
      tags: ["SwiftUI", "Vapor", "PostgreSQL", "Heroku"],
      link: "https://github.com/davidobaro",
      icon: (
        <Smartphone
          size={64}
          className="text-zinc-700 group-hover:text-blue-500 transition-colors"
        />
      ),
      image: "/project-kiosk.png",
      status: "Completed",
    },
    {
      title: "Sports Analytics",
      desc: "Data analysis engine for sports performance metrics. Aggregating and visualizing player stats via external APIs.",
      tags: ["Python", "Pandas", "Data Viz", "APIs"],
      link: "https://github.com/davidobaro/Sports-Analytics",
      icon: (
        <BarChart3
          size={64}
          className="text-zinc-700 group-hover:text-orange-500 transition-colors"
        />
      ),
      image: null,
      status: "In Progress",
    },
  ],
};

// --- TYPEWRITER COMPONENT ---
const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">_</span>
    </span>
  );
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="bg-zinc-950 min-h-screen text-zinc-300 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden relative">
      {/* --- AURORA BACKGROUND ANIMATION --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            x: ["-5%", "5%", "-5%"],
            opacity: [0.2, 0.4, 0.2],
            scaleY: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[80%] bg-gradient-to-r from-emerald-500/10 via-cyan-500/20 to-teal-500/10 blur-[120px] rotate-[-15deg]"
        />

        <motion.div
          animate={{
            x: ["5%", "-5%", "5%"],
            opacity: [0.15, 0.3, 0.15],
            scaleY: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -top-[10%] left-[30%] w-[80%] h-[70%] bg-gradient-to-r from-purple-500/10 via-indigo-500/20 to-blue-500/10 blur-[100px] rotate-[15deg]"
        />

        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
      </div>

      {/* --- SCROLL PROGRESS BAR --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-zinc-100 tracking-tighter cursor-pointer">
            DAVID<span className="text-cyan-500">.OBARO</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a href="#contact" className="md:hidden text-cyan-500">
            <Mail size={24} />
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="about"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto z-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-cyan-500 text-sm font-medium mx-auto md:mx-0 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open to Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight leading-tight"
            >
              {PORTFOLIO_DATA.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl h-10 md:h-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold"
            >
              <Typewriter text={PORTFOLIO_DATA.title} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              {PORTFOLIO_DATA.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 bg-zinc-100 text-zinc-900 font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]"
              >
                View Work
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={PORTFOLIO_DATA.social.resume}
                target="_blank"
                rel="noopener noreferrer"
                download="David_Obaro_Resume.pdf"
                className="px-8 py-3 border border-zinc-700 rounded-full hover:border-cyan-500 hover:text-cyan-500 transition-colors flex items-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <Download size={18} /> Resume
              </motion.a>
            </motion.div>
          </div>

          {/* PHOTO SECTION (Static - No Bob, No Zoom) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group w-64 h-64 md:w-80 md:h-80 shrink-0"
          >
            {/* Removed the 'animate={{ y: [...] }}' wrapper */}
            <div className="w-full h-full relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative w-full h-full bg-zinc-900 rounded-full overflow-hidden border-4 border-zinc-950/50 shadow-2xl">
                <img
                  src="/profile.png"
                  alt="David Obaro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS SECTION (Static Cloud, No Carousel) --- */}
      <section className="py-10 border-y border-zinc-800/50 bg-zinc-900/20 overflow-hidden relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Updated Title */}
          <p className="text-center text-zinc-500 text-sm mb-8 font-mono uppercase tracking-widest">
            Technical Skills
          </p>

          {/* Static Flex Layout */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {PORTFOLIO_DATA.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full text-zinc-300 text-sm font-medium hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-default shadow-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section
        id="experience"
        className="py-24 px-6 max-w-4xl mx-auto z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-100 mb-12 flex items-center gap-3">
            <Cpu className="text-cyan-500" /> Experience & Education
          </h2>

          <div className="space-y-12 border-l-2 border-zinc-800 ml-3 md:ml-6 pl-8 md:pl-12 relative">
            {PORTFOLIO_DATA.experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.span
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  className="absolute -left-[43px] md:-left-[59px] top-1 h-5 w-5 rounded-full border-4 border-zinc-950 bg-zinc-700 group-hover:bg-cyan-500 transition-colors"
                ></motion.span>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-sm text-zinc-500 font-mono bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                    {item.year}
                  </span>
                </div>
                <div className="text-cyan-500 mb-2 font-medium">
                  {item.company}
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-zinc-100 mb-12 flex items-center gap-3"
          >
            <Code2 className="text-cyan-500" /> Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] flex flex-col backdrop-blur-sm"
              >
                <div className="h-48 bg-zinc-950 w-full flex items-center justify-center relative overflow-hidden shrink-0">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-zinc-900 group-hover:bg-zinc-950 transition-colors">
                      {project.icon}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10"></div>
                </div>

                <div className="p-6 relative z-20 -mt-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-1 bg-zinc-950 border border-zinc-700 rounded text-zinc-400 uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.status === "In Progress" && (
                      <span className="text-[10px] px-2 py-1 bg-yellow-900/20 border border-yellow-700/50 text-yellow-500 rounded-full animate-pulse">
                        WIP
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-6">{project.desc}</p>

                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-zinc-100 font-medium hover:text-cyan-400 transition-colors"
                    >
                      View on GitHub <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact"
        className="py-24 px-6 max-w-4xl mx-auto z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-12 text-center relative overflow-hidden shadow-2xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
                Let's Connect
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                I am currently seeking software engineering roles. If you are
                looking for a dedicated engineer to join your team, please get
                in touch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${PORTFOLIO_DATA.social.email}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl transition-all font-medium shadow-lg shadow-cyan-500/20"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={PORTFOLIO_DATA.social.linkedin}
                target="_blank"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 hover:border-cyan-500/50 hover:bg-zinc-800 text-zinc-100 rounded-xl transition-all font-medium"
              >
                <Linkedin size={20} className="text-[#0077b5]" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={PORTFOLIO_DATA.social.github}
                target="_blank"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 hover:border-cyan-500/50 hover:bg-zinc-800 text-zinc-100 rounded-xl transition-all font-medium"
              >
                <Github size={20} />
                <span>GitHub</span>
              </motion.a>
            </div>

            <div className="pt-4 text-sm text-zinc-500 font-mono">
              {PORTFOLIO_DATA.social.email}
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900 z-10 relative">
        <p>
          © {new Date().getFullYear()} David Obaro. Built with Next.js &
          Tailwind.
        </p>
      </footer>
    </main>
  );
}
