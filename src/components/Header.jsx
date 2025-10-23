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