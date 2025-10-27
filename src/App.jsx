// src/App.jsx
// ──────────────────────────────────────────────────────────────────────────────
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { RouteSection, SiteNav } from "./components/UiSnippets"
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
<SiteNav />

<main className="container">
<Routes>
  <Route path="/" element={<RouteSection><OurServices /></RouteSection>} />
  <Route path="/services" element={<RouteSection><OurServices /></RouteSection>} />
  <Route path="/volunteers" element={<RouteSection><Volunteers /></RouteSection>} />
  <Route path="/careers" element={<RouteSection><Careers /></RouteSection>} />
  <Route path="/ways-to-give" element={<RouteSection><WaysToGiveBack /></RouteSection>} />
  <Route path="/calendar" element={<RouteSection><Calendar /></RouteSection>} />
  <Route path="/past-events" element={<RouteSection><PastEvents /></RouteSection>} />
  <Route path="/contact" element={<RouteSection><Contact /></RouteSection>} />
  <Route path="*" element={<RouteSection><div>Page not found</div></RouteSection>} />
</Routes>

</main>
<Footer />
</div>
)
}