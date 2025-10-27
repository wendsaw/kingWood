import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

/*
  Drop-in React snippets that pair with your improved App.css
  - ThemeToggle: toggles <html data-theme="dark"> + persists in localStorage
  - Hero: page intro section (title + subtitle + optional actions)
  - Card & CardGrid: responsive cards for listings (services, events, etc.)
  - RouteSection: fade-in on route transitions (uses .route-anim CSS)
  - SiteNav: simple header nav that marks active route
*/

/* ──────────────────────────────────────────────────────────────────────────
   ThemeToggle
   - Reads/writes `theme` to localStorage
   - Toggles <html data-theme="dark"> and removes attribute for light
   - Minimal button; style comes from your .button classes
   ───────────────────────────────────────────────────────────────────────── */
export function ThemeToggle({ className = "button outline" }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return "light"; // default
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button className={className} onClick={toggle} aria-pressed={theme === "dark"}>
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Hero
   - Use at the top of each page for a welcoming intro
   - Accepts optional actions (buttons) via `children`
   ───────────────────────────────────────────────────────────────────────── */
export function Hero({ title, subtitle, children }) {
  return (
    <section className="hero section">
      <div className="container">
        <h1 className="title">{title}</h1>
        {subtitle && <p className="subtitle lead">{subtitle}</p>}
        {children && <div className="mt-6 stack">{children}</div>}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Card + CardGrid
   - Item shape: { id?, title, body, meta? }
   - Grid is responsive with your CSS (.grid.grid--cards)
   ───────────────────────────────────────────────────────────────────────── */
export function Card({ title, meta, children, className = "card" }) {
  return (
    <article className={className}>
      {title && <h3 className="card-title">{title}</h3>}
      {meta && <div className="card-meta">{meta}</div>}
      {children && <div className="mt-4">{children}</div>}
    </article>
  );
}

export function CardGrid({ items = [], renderItem }) {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid--cards">
          {items.map((item, idx) => (
            <Card key={item.id ?? idx} title={item.title} meta={item.meta}>
              {renderItem ? renderItem(item) : <p>{item.body}</p>}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   RouteSection
   - Wrap page content to apply a subtle fade-in on navigation
   - Use it inside your Route elements (e.g., <Route element={<RouteSection><OurServices/></RouteSection>} />)
   ───────────────────────────────────────────────────────────────────────── */
export function RouteSection({ children }) {
  return (
    <div className="route-anim fade-in-up">
      <div className="container">{children}</div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   SiteNav
   - Simple header with active link highlight using NavLink
   - Drop into your existing <Header /> or replace it
   ───────────────────────────────────────────────────────────────────────── */
export function SiteNav() {
  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/services", label: "Services" },
    { to: "/volunteers", label: "Volunteers" },
    { to: "/careers", label: "Careers" },
    { to: "/ways-to-give", label: "Give Back" },
    { to: "/calendar", label: "Calendar" },
    { to: "/past-events", label: "Past Events" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className="site">
      <div className="container nav">
        <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
          <strong>KingWood</strong>
          <span className="badge">Community</span>
        </div>
        <nav style={{ display: "flex", gap: ".25rem", alignItems: "center" }}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle className="button ghost" />
        </nav>
      </div>
    </header>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Examples
   - Quick examples to use inside your existing pages
   ───────────────────────────────────────────────────────────────────────── */
export function ExampleHome() {
  const services = [
    { title: "Food Pantry", meta: "Mon–Fri • 9am–4pm", body: "Weekly distributions and emergency support for families in need." },
    { title: "Tutoring", meta: "After-school • Ages 8–16", body: "Homework help, reading circles, and enrichment activities." },
    { title: "Senior Outreach", meta: "Weekends", body: "Check-ins, deliveries, and community events for seniors." },
  ];

  return (
    <>
      <Hero
        title="Welcome to KingWood"
        subtitle="Connecting volunteers, families, and partners to make a bigger impact together."
      >
        <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
          <a className="button" href="/volunteers">Become a Volunteer</a>
          <a className="button ghost" href="/ways-to-give">Ways to Give</a>
        </div>
      </Hero>

      <CardGrid items={services} />
    </>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Minimal wiring example for App.jsx (reference only):

   import { Routes, Route } from 'react-router-dom';
   import { SiteNav, RouteSection, ExampleHome } from './UiSnippets';

   export default function App() {
     return (
       <div className="app">
         <SiteNav />
         <main className="container">
           <Routes>
             <Route path="/" element={<RouteSection><ExampleHome /></RouteSection>} />
             // ... your other routes wrapped with <RouteSection>
           </Routes>
         </main>
         <footer>© {new Date().getFullYear()} KingWood Community</footer>
       </div>
     );
   }

   Save this file as src/components/UiSnippets.jsx (or split per component).
   Make sure your CSS file (App.css) includes the improved styles I shared.
   ───────────────────────────────────────────────────────────────────────── */
