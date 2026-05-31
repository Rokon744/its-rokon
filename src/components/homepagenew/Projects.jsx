'use client'
import { Github, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";


const PROJECTS = [
  {
    id: 1,
    title: "EduPayFee",
    tagline: "Student Payment Management System",
    desc: "A production-grade platform handling tuition payments for educational institutions. Integrates SSLCommerz for secure transactions, Firebase for real-time data, and a React dashboard for admins and students.",
    tags: ["React", "Firebase", "SSLCommerz", "Node.js"],
    icon: "LayoutDashboard",
    accent: "#00f5d4",
    stats: [
      { label: "Tech Stack", value: "React + Firebase" },
      { label: "Payment GW", value: "SSLCommerz" },
      { label: "Type", value: "Full-Stack" },
    ],
  },
  {
    id: 2,
    title: "RPI Campus Platform",
    tagline: "Comprehensive Academic Hub",
    desc: "An integrated institutional platform featuring automated Notice Board, Exam Schedule tracker with reminders, and a real-time Lost & Found system — serving the entire campus community.",
    tags: ["Next.js", "MongoDB", "TypeScript", "REST API"],
    icon: "BookOpen",
    accent: "#3b82f6",
    stats: [
      { label: "Features", value: "3 Core Modules" },
      { label: "DB", value: "MongoDB Atlas" },
      { label: "Type", value: "Academic SaaS" },
    ],
  },
  {
    id: 3,
    title: "Cyber Strikers Live Hub",
    tagline: "Real-Time Cricket Score App",
    desc: "A custom-built web application that fetches live cricket scores, over-by-over breakdowns, and team fixtures using the Google Sheets API as a flexible data source for our squad.",
    tags: ["React", "Google Sheets API", "Tailwind", "Real-time"],
    icon: "Activity",
    accent: "#6366f1",
    stats: [
      { label: "Data Source", value: "Google Sheets API" },
      { label: "Updates", value: "Real-time" },
      { label: "Type", value: "Sports Tech" },
    ],
  },
];


export default function Projects() {
  return (
    <section id="projects" className="pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="FEATURED WORK"
          title="Projects Showcase"
          sub="Production applications built with precision — from payment systems to real-time sports data."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="btn-outline px-8 py-3 font-body font-semibold text-sm flex items-center gap-2">
            <Github size={16} /> View All on GitHub <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}