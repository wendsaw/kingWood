// src/App.jsx
// ──────────────────────────────────────────────────────────────────────────────
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import OurServices from './pages/OurServices.jsx'
import Volunteers from './pages/Volunteers.jsx'
import Careers from './pages/Careers.jsx'
import WaysToGiveBack from './pages/WaysToGiveBack.jsx'
import Calendar from './pages/Calendar.jsx'
import PastEvents from './pages/PastEvents.jsx'
import Contact from './pages/Contact.jsx'


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