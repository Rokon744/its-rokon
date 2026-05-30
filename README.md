<div align="center">

<!-- Banner -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:00f5d4,50:3b82f6,100:6366f1&height=200&section=header&text=Rokon's%20Portfolio&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Full-Stack%20Developer%20%7C%20Software%20Engineer&descAlignY=58&descSize=18&animation=fadeIn" />

<!-- Badges row -->
<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
</p>

<p>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/EmailJS-FF6B35?style=for-the-badge&logo=gmail&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

<br/>

<!-- Status badges -->
<img src="https://img.shields.io/badge/Status-Live%20%26%20Active-00f5d4?style=flat-square&labelColor=0a0a0f" />
&nbsp;
<img src="https://img.shields.io/badge/Open%20To-Opportunities-3b82f6?style=flat-square&labelColor=0a0a0f" />
&nbsp;
<img src="https://img.shields.io/badge/Response-Under%2024h-6366f1?style=flat-square&labelColor=0a0a0f" />

<br/><br/>

</div>

---

## 👨‍💻 About This Project

> *"I build systems, not just screens."*

This is my **personal developer portfolio** — a production-grade, fully responsive web application built with a futuristic **cyber dark aesthetic**. Every section is crafted to reflect my engineering standards: clean code, polished UI, and scalable architecture.

The portfolio showcases my journey as a **Full-Stack Developer & Software Engineer** from Rajshahi, Bangladesh — featuring real projects, live integrations, and a contact form that actually sends emails.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 **Design System** | Ultra-dark cyber theme with cyan/blue/indigo accent palette |
| 🪟 **Glassmorphism** | Backdrop-blur cards with transparent borders throughout |
| ⚡ **Cursor Glow** | CSS `--mx/--my` variable reactive glow on every card |
| 🧭 **Smart Nav** | Floating capsule (desktop) + right slide-in sidebar (mobile) |
| 🏗️ **Bento Grid** | Interactive skill matrix with animated progress bars |
| 📬 **Live Email** | EmailJS integration — form submissions land in real inbox |
| ⏱️ **Timeline** | Interactive engineering journey from 2022 → present |
| 🏏 **Lifestyle Block** | Cyber Strikers cricket team + tech blogger section |
| 📱 **Fully Responsive** | Mobile → Ultra-wide, pixel-perfect at every breakpoint |
| 🔍 **SEO Ready** | Next.js metadata, semantic HTML, optimized images |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout + global metadata
│   └── page.tsx                # Main entry — assembles all sections
│
├── components/
│   └── homepagenew/
│       ├── Nav.jsx             # Floating capsule nav + mobile sidebar
│       ├── Hero.jsx            # Typewriter hero + floating particles
│       ├── About.jsx           # Profile card + bio section
│       ├── Skills.jsx          # Bento grid skill matrix
│       │   ├── BentoCard.jsx   # Reusable cursor-glow card
│       │   └── SkillBar.jsx    # Scroll-triggered animated bar
│       ├── Projects.jsx        # Featured projects showcase
│       │   └── ProjectCard.jsx # Individual project card
│       ├── Journey.jsx         # Interactive vertical timeline
│       ├── ReviewSlider.jsx    # Premium testimonials (no library)
│       ├── Contact.jsx         # EmailJS contact form + social links
│       ├── Footer.jsx          # Minimal footer with social icons
│       └── SectionHeader.jsx   # Reusable section heading component
│
└── assets/
    ├── rokon.png               # Profile photo
    ├── nicky.jpg               # Client avatar
    ├── lakhlaifi.png           # Client avatar
    └── omen.png                # Client avatar
```

---

## 🚀 Tech Stack

### Frontend
- **Next.js 14** — App Router, SSR, ISR
- **React 18** — Hooks, component architecture
- **TypeScript** — Strict typing throughout
- **Tailwind CSS** — Utility-first styling

### Backend & Services
- **Node.js** — Server-side runtime
- **MongoDB Atlas** — Cloud database
- **Firebase** — Auth + Realtime Database
- **EmailJS** — Contact form email delivery

### Design & UX
- **Lucide React** — Icon system
- **CSS Custom Properties** — Theme variables (`--cyan`, `--glass`, etc.)
- **Glassmorphism** — `backdrop-filter: blur()` cards
- **Google Fonts** — Syne (display) · Space Grotesk (body) · JetBrains Mono (code)

---

## 🛠️ Getting Started

### Prerequisites

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Rokon744/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root:

```env
# EmailJS (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_ftci20m
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_n9l9044
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Featured Projects

### 🎓 EduPayFee
> Full Student Payment Management System

A production-grade platform handling tuition fee payments for educational institutions. Integrates **SSLCommerz** for secure transactions with a **React** frontend and **Firebase** real-time database.

**Stack:** `React` `Firebase` `SSLCommerz` `Node.js`

---

### 🏫 RPI Campus Platform
> Comprehensive Academic Hub

Institutional platform featuring an automated **Notice Board**, **Exam Schedule** tracker with reminders, and a real-time **Lost & Found** system — serving the entire campus community.

**Stack:** `Next.js` `MongoDB` `TypeScript` `REST API`

---

### 🏏 Cyber Strikers Live Hub
> Real-Time Cricket Score App

Custom-built web application fetching live cricket scores, over-by-over breakdowns, and team fixtures using the **Google Sheets API** as a flexible real-time data source.

**Stack:** `React` `Google Sheets API` `Tailwind CSS`

---

## 📬 Contact Form Setup (EmailJS)

The contact form uses **EmailJS** for zero-backend email delivery.

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create a **Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with these variables:
   ```
   {{name}}     → sender's name
   {{email}}    → sender's email
   {{message}}  → message body
   ```
4. Copy your **Service ID**, **Template ID**, and **Public Key** into `.env.local`

---

## 🎨 Design Tokens

```css
:root {
  --bg:        #060608;           /* Deep black background    */
  --cyan:      #00f5d4;           /* Primary accent — cyan    */
  --blue:      #3b82f6;           /* Secondary accent — blue  */
  --indigo:    #6366f1;           /* Tertiary accent — indigo */
  --glass:     rgba(255,255,255,0.03);  /* Card background    */
  --border:    rgba(255,255,255,0.07);  /* Card border        */
  --glow-cyan: 0 0 20px rgba(0,245,212,0.35);
}
```

---

## 🌐 Connect With Me

<p>
  <a href="https://github.com/Rokon744" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/md-rokon-8b8b8029a/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://www.facebook.com/DevRokon/" target="_blank">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" />
  </a>
  <a href="https://www.instagram.com/devrokon" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
  </a>
  <a href="https://x.com/rokon_dev" target="_blank">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
  </a>
</p>

---

## 📄 License

```
MIT License — feel free to use this as inspiration for your own portfolio.
Attribution appreciated but not required.
```

---

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:6366f1,50:3b82f6,100:00f5d4&height=120&section=footer&animation=fadeIn" />

**Made with 💙 by [Rokon](https://github.com/Rokon744) — Rajshahi, Bangladesh**

*"Building digital systems that scale."*

</div>