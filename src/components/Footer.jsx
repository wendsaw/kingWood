// src/components/Footer.jsx
// ──────────────────────────────────────────────────────────────────────────────
export default function Footer() {
return (
<footer className="site-footer">
<div className="container footer-grid">
<div>
<h4>KingWood Hospice</h4>
<p>Serving families across Houston, Texas.</p>
</div>
<div>
<h4>Contact</h4>
<p>Phone: (xxx) xxx-xxxx</p>
<p>Email: info@kingwoodhospice.org</p>
<p>Address: 1234 Care Way, Houston, TX 77002</p>
</div>
<div>
<h4>Hours</h4>
<p>Office: Mon–Fri, 9am–5pm</p>
<p>Nurse line: 24/7</p>
</div>
</div>
<div className="container tiny">
© {new Date().getFullYear()} KingWood Hospice. All rights reserved.
</div>
</footer>
)
}