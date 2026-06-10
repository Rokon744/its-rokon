"use client";
import { Github, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    title: "Campus Connect",
    tagline: "Integrated Campus Management System",
    href: "https://stipend.site.je/",
    desc: `
      Campus Connect is a secure campus platform with session-based dashboards enabling students to download academic profiles and SAF forms as PDFs. It automates fee management via SSLCommerz and features notice boards, complaint tickets, and a Lost & Found tracker with live notification badges.
    `,
    tags: ["PHP", "MySQL", "SSLCommerz", "Tailwind"],
    icon: "LayoutDashboard",
    accent: "#00f5d4",
    stats: [
      { label: "Tech Stack", value: "PHP + MySQL" },
      { label: "Payment GW", value: "SSLCommerz" },
      { label: "Type", value: "Full-Stack" },
    ],
  },
  {
    id: 2,
    title: "Fazshop",
    tagline: "Ecommerce (REACT JS)",
    href: "https://fazshop.vercel.app",
    desc: `
      Fazshop is a sleek, responsive e-commerce site with a clean product grid, simple navigation, and smooth animations that enhance the user experience. It features centralized state management for seamless cart updates and local storage data persistence, ensuring an optimal shopping experience across all mobile and desktop devices.
      `,
    tags: ["React.js", "Tailwind", "TypeScript", "REST API"],
    icon: "ShoppingBag",
    accent: "#3b82f6",
    stats: [
      { label: "Features", value: "3 Core Modules" },
      { label: "LS", value: "Local Storage" },
      { label: "Type", value: "Frontend" },
    ],
  },
  {
    id: 3,
    title: "Cyber Strikers Live Hub",
    tagline: "Real-Time Cricket Score App",
    href: "https://cst-cyber-strikers.vercel.app/",
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
          sub="Production applications built with precision from payment systems to real-time sports data."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href={"https://github.com/Rokon744"}
            target="_blank"
            className="btn-outline px-8 py-3 font-body font-semibold text-sm flex items-center gap-2"
          >
            <Github size={16} /> View All <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
