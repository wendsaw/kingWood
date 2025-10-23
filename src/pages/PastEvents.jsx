import { pastEvents } from '../data/events.js'


export default function PastEvents() {
return (
<section className="stack">
<h1>Past Events</h1>
<div className="cards">
{pastEvents.map(e => (
<article className="card" key={e.id}>
<h3>{e.title}</h3>
<p><strong>{new Date(e.date).toLocaleDateString()}</strong> · {e.location}</p>
<p>{e.summary}</p>
</article>
))}
</div>
</section>
)
}