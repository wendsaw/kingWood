import { Routes, Route } from 'react-router-dom'
export default function App() {
return (
<div className="app">
<Header />
<main className="container">
<Routes>
<Route path="/" element={<OurServices />} />
<Route path="/services" element={<OurServices />} />
<Route path="/volunteers" element={<Volunteers />} />
<Route path="/careers" element={<Careers />} />
<Route path="/ways-to-give" element={<WaysToGiveBack />} />
<Route path="/calendar" element={<Calendar />} />
<Route path="/past-events" element={<PastEvents />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<div style={{padding:'2rem 0'}}>Page not found.</div>} />
</Routes>
</main>
<Footer />
</div>
)
}


// ──────────────────────────────────────────────────────────────────────────────
// src/components/Header.jsx
// ──────────────────────────────────────────────────────────────────────────────
import { NavLink } from 'react-router-dom'


export default function Header() {
return (
<header className="site-header">
<div className="container header-inner">
<div className="brand">
<span className="logo">KingWood Hospice</span>
<span className="subhead">Houston, Texas</span>
</div>
<nav className="nav">
<NavLink to="/services">Our Services</NavLink>
<NavLink to="/volunteers">Volunteers</NavLink>
<NavLink to="/careers">Careers</NavLink>
<NavLink to="/ways-to-give">Ways to Give Back</NavLink>
<NavLink to="/calendar">Calendar</NavLink>
<NavLink to="/past-events">Past Events</NavLink>
<NavLink to="/contact" className="cta">Contact</NavLink>
</nav>
</div>
</header>
)
}