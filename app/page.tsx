"use client";

import { useEffect, useRef, useState } from "react";
import GlitchStatue from "./components/GlitchStatue";
import SkillTicker from "./components/SkillTicker";
import Terminal from "./components/Terminal";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    num: "01",
    tag: "Sports Analytics",
    tagType: "viz",
    title: "Lionel Messi — 2022 World Cup Goal Analysis",
    desc: "Thesis-level deep dive into Messi's Qatar 2022 performance using event data, heatmaps, and shot quality metrics to decode the genius behind the numbers.",
    href: "https://titax137.medium.com/a-sneak-peek-into-my-thesis-on-lionel-messi-2022-world-cup-goals-e37319c63a51",
  },
  {
    num: "02",
    tag: "Customer Analytics",
    tagType: "seg",
    title: "RFM Customer Segmentation — SuperStore",
    desc: "Applied Recency-Frequency-Monetary analysis to segment customers of a California superstore, enabling targeted retention and upselling strategies.",
    href: "https://titax137.medium.com/rfm-customer-segmentation-superstore-dataset-fbb4fd657874",
  },
  {
    num: "03",
    tag: "BI Dashboard",
    tagType: "viz",
    title: "Sales & KPI Superstore Dashboard",
    desc: "End-to-end BI dashboard tracking sales performance, regional KPIs, and trend analysis to support executive decision-making.",
    href: "https://titax137.medium.com/sales-kpi-superstore-sales-dashboard-cefecb29503b",
  },
  {
    num: "04",
    tag: "Machine Learning",
    tagType: "ml",
    title: "Telco Churn Prediction — Improved Recall",
    desc: "Built a churn prediction model optimized for recall to identify at-risk telecom customers before they leave, reducing false negatives significantly.",
    href: "https://titax137.medium.com/predicting-and-retaining-at-risk-telco-customers-through-improved-recall-360e118a184b",
  },
  {
    num: "05",
    tag: "Data Visualization",
    tagType: "viz",
    title: "COVID-19 Dashboard — Google Data Studio",
    desc: "Interactive COVID-19 dashboard tracking case trends, recovery rates, and geographic spread. Built during apprenticeship program.",
    href: "https://titax137.medium.com/visualization-dashboard-covid-19-with-google-datastudio-apprenticeship-project-48cfbaf7d0ba",
  },
  {
    num: "06",
    tag: "Computer Vision",
    tagType: "ml",
    title: "IkanMu — Fish Species & Freshness Detection",
    desc: "Mobile app using SSD MobileNet V3 to detect fish species and freshness in real time. Final project at Orbit Future Academy.",
    href: "https://titax137.medium.com/ikanmu-fish-species-and-freshness-detection-application-using-ssd-mobilenet-v3-ebc476e8baf8",
  },
  {
    num: "07",
    tag: "Reinforcement Learning",
    tagType: "ml",
    title: "Deep Q-Learning — CartPole with TensorFlow",
    desc: "Implemented Deep Q-Learning to solve OpenAI Gym's CartPole using TensorFlow Keras, exploring reward shaping and policy convergence.",
    href: "https://titax137.medium.com/deep-q-learning-cartpole-using-ac3919a1329a",
  },
  {
    num: "08",
    tag: "Motion Analysis",
    tagType: "viz",
    title: "Badminton Single Sports Motion Analysis",
    desc: "Academic project analyzing badminton player motion patterns using computer vision to extract performance insights from video data.",
    href: "https://titax137.medium.com/academic-project-badminton-single-sports-motion-analysis-50ee5e8880df",
  },
  {
    num: "09",
    tag: "Deep Learning",
    tagType: "ml",
    title: "Flower Classification — Image Classifier",
    desc: "Trained a fully-connected neural network to classify dandelions and grasses using TensorFlow, exploring transfer learning and augmentation.",
    href: "https://titax137.medium.com/appertincehipproject-flower-classification-fully-connected-image-classifier-7dc8a72ae4a",
  },
];

const skills = [
  {
    icon: "🐍",
    name: "Python",
    bars: [
      { label: "Pandas / NumPy", pct: 92 },
      { label: "Scikit-learn", pct: 85 },
      { label: "TensorFlow / Keras", pct: 78 },
      { label: "Matplotlib / Seaborn", pct: 88 },
    ],
  },
  {
    icon: "📊",
    name: "Data Visualization",
    bars: [
      { label: "Tableau", pct: 85 },
      { label: "Google Data Studio", pct: 90 },
      { label: "Plotly", pct: 72 },
      { label: "Power BI", pct: 68 },
    ],
  },
  {
    icon: "🧠",
    name: "Machine Learning",
    bars: [
      { label: "Classification", pct: 88 },
      { label: "Clustering / RFM", pct: 90 },
      { label: "Computer Vision", pct: 76 },
      { label: "RL / Deep Q-Learning", pct: 70 },
    ],
  },
  {
    icon: "🗄️",
    name: "Data & Infra",
    bars: [
      { label: "SQL", pct: 87 },
      { label: "Google BigQuery", pct: 75 },
      { label: "Excel / Spreadsheets", pct: 92 },
      { label: "Git", pct: 80 },
    ],
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="portfolio-root">
      {/* Scanline */}
      <div className="scanline" />

      {/* Grid bg */}
      <div className="grid-bg" />

      {/* NAV */}
      <nav className="nav">
        <div className="logo">
          Tita<span className="accent">.</span>dev
        </div>
        <ul className="nav-links">
          {["Projects", "Skills", "Process", "About"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
          <li>
            <a href="https://titax137.medium.com/" target="_blank" rel="noreferrer">
              Medium
            </a>
          </li>
        </ul>
        <a
          className="btn-hire"
          href="https://www.linkedin.com/in/titarahmawati/"
          target="_blank"
          rel="noreferrer"
        >
          Hire Me →
        </a>
      </nav>

      {/* SKILL TICKER */}
      <SkillTicker />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">// Data Analyst · Jakarta, Indonesia</p>
          <h1 className="hero-title">
            Tita
            <br />
            Rahmawati
          </h1>
          <p className="hero-role">Turning Data into Decisions.</p>
          <p className="hero-sub">
            Data analyst with hands-on experience in machine learning, customer
            segmentation, predictive modeling, and business intelligence
            dashboards. I find patterns where others see noise.
          </p>
          <div className="hero-btns">
            <a className="btn-primary" href="#projects">
              View My Work
            </a>
            <a
              className="btn-secondary"
              href="https://titax137.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              Read on Medium →
            </a>
          </div>
        </div>

        <div className="hero-right">
          <GlitchStatue />
          <div className="hero-stats">
            {[
              { label: "Projects", value: "9+", sub: "Published cases" },
              { label: "Best Model", value: "94%", sub: "Accuracy score" },
              { label: "Tools", value: "12+", sub: "Python · SQL · Tableau" },
            ].map((s) => (
              <div className="hstat" key={s.label}>
                <div className="hstat-label">{s.label}</div>
                <div className="hstat-value">{s.value}</div>
                <div className="hstat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        {[
          { label: "Articles Published", value: "9", sub: "↑ Medium · 2022–2025" },
          { label: "Domains Covered", value: "5+", sub: "↑ Sports · Retail · Telecom · CV" },
          { label: "Tech Stack", value: "12+", sub: "↑ Tools & Frameworks" },
          { label: "Status", value: "● Open", sub: "↑ Available for hire", green: true },
        ].map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-label">{s.label}</div>
            <div className={`stat-value${s.green ? " green" : ""}`}>{s.value}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-label">// Selected Work</div>
        <h2 className="section-title">
          Projects that
          <br />
          tell a story with data.
        </h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.num} {...p} />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills" style={{ paddingTop: 0 }}>
        <div className="section-label">// Technical Arsenal</div>
        <h2 className="section-title">
          Tools I use to
          <br />
          extract signal from noise.
        </h2>
        <div className="skills-grid">
          {skills.map((sk) => (
            <div className="skill-card" key={sk.name}>
              <div className="skill-icon">{sk.icon}</div>
              <div className="skill-name">{sk.name}</div>
              {sk.bars.map((b) => (
                <div className="skill-bar-row" key={b.label}>
                  <span>{b.label}</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${b.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* TERMINAL */}
      <section className="section" id="process" style={{ paddingTop: 0 }}>
        <div className="section-label">// How I Work</div>
        <h2 className="section-title">
          My analytical
          <br />
          process, live.
        </h2>
        <Terminal />
      </section>

      {/* ABOUT */}
      <section className="section" id="about" style={{ paddingTop: 0 }}>
        <div className="section-label">// About & Contact</div>
        <h2 className="section-title">
          Let&apos;s work
          <br />
          together.
        </h2>
        <div className="about-grid">
          <div className="about-panel">
            <p className="about-text">
              Hi, I&apos;m <strong>Tita Rahmawati</strong> — a data analyst based
              in <strong>Jakarta, Indonesia</strong>.
              <br />
              <br />
              I have a passion for turning messy, complex data into clear,
              actionable stories. My work spans{" "}
              <strong>
                customer analytics, machine learning, sports analytics, computer
                vision,
              </strong>{" "}
              and <strong>business intelligence</strong>.
              <br />
              <br />
              I believe the best analyses don&apos;t just describe what happened
              — they reveal <strong>why it happened</strong> and what to do next.
              <br />
              <br />
              Currently <strong>open to new opportunities</strong> in data
              analytics and data science roles.
            </p>
          </div>
          <div className="about-panel">
            <div className="contact-heading">Get in touch</div>
            {[
              {
                label: "LinkedIn",
                display: "linkedin.com/in/titarahmawati",
                href: "https://www.linkedin.com/in/titarahmawati/",
              },
              {
                label: "Medium",
                display: "titax137.medium.com",
                href: "https://titax137.medium.com/",
              },
              { label: "Location", display: "Jakarta, Indonesia" },
              { label: "Status", display: "● Open to opportunities", green: true },
            ].map((c) => (
              <div className="contact-row" key={c.label}>
                <span className="c-label">{c.label}</span>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer">
                    {c.display}
                  </a>
                ) : (
                  <span className={c.green ? "green" : ""}>{c.display}</span>
                )}
              </div>
            ))}
            <a
              className="btn-primary"
              href="https://www.linkedin.com/in/titarahmawati/"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-block", marginTop: "32px" }}
            >
              Connect on LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="logo">
          TITA<span className="accent">.</span>DEV
        </div>
        <div className="footer-links">
          <a href="https://titax137.medium.com/" target="_blank" rel="noreferrer">Medium</a>
          <a href="https://www.linkedin.com/in/titarahmawati/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#projects">Projects</a>
        </div>
        <div>© 2026 Tita Rahmawati · Data Analyst · Jakarta</div>
      </footer>
    </main>
  );
}
