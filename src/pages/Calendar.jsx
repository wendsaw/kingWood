// src/pages/Calendar.jsx
// ──────────────────────────────────────────────────────────────────────────────
import { upcomingEvents } from '../data/events.js'


export default function Calendar() {
return (
<section className="stack">
<h1>Calendar</h1>
<p>Join us at upcoming programs and community gatherings across Houston.</p>
<div className="table">
<div className="row header">
<div>Date</div><div>Time</div><div>Event</div><div>Location</div>
</div>
{upcomingEvents.map(e => (
<div className="row" key={e.id}>
<div>{new Date(e.date).toLocaleDateString()}</div>
<div>{e.time}</div>
<div>{e.title}</div>
<div>{e.location}</div>
</div>
))}
</div>
</section>
)
}