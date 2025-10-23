// src/pages/Contact.jsx
// ──────────────────────────────────────────────────────────────────────────────
import { useState } from 'react'


export default function Contact() {
const [status, setStatus] = useState(null)


function handleSubmit(e) {
e.preventDefault()
// TODO: wire to backend or email service
setStatus('Thanks! We will get back to you soon.')
e.currentTarget.reset()
}


return (
<section className="stack">
<h1>Contact Us</h1>
<p>Have questions about hospice care, volunteering, or giving? We’re here to help.</p>


<form className="form" onSubmit={handleSubmit}>
<label>
Name
<input name="name" required placeholder="Jane Doe" />
</label>
<label>
Email
<input type="email" name="email" required placeholder="jane@example.com" />
</label>
<label>
Phone
<input name="phone" placeholder="(xxx) xxx-xxxx" />
</label>
<label>
Topic
<select name="topic" defaultValue="services">
<option value="services">Hospice Services</option>
<option value="volunteering">Volunteering</option>
<option value="careers">Careers</option>
<option value="giving">Ways to Give</option>
<option value="other">Other</option>
</select>
</label>
<label>
Message
<textarea name="message" rows={5} placeholder="How can we help?" />
</label>
<button className="button" type="submit">Send</button>
</form>


{status && <div className="notice success" role="status">{status}</div>}
</section>
)
}