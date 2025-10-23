// src/pages/WaysToGiveBack.jsx
// ──────────────────────────────────────────────────────────────────────────────
export default function WaysToGiveBack() {
return (
<section className="stack">
<h1>Ways to Give Back</h1>
<p>Your generosity sustains care for patients regardless of ability to pay.</p>


<div className="cards">
<article className="card">
<h3>Donate</h3>
<p>Make a one-time or recurring gift to support patient care and family services.</p>
<a className="button" href="/contact">Ask About Donations</a>
</article>
<article className="card">
<h3>Tribute & Memorial Gifts</h3>
<p>Honor a loved one’s legacy with a gift in their name.</p>
<a className="button" href="/contact">Start a Tribute</a>
</article>
<article className="card">
<h3>Corporate Sponsorships</h3>
<p>Partner with us to fund programs serving Houston communities.</p>
<a className="button" href="/contact">Become a Sponsor</a>
</article>
</div>
</section>
)
}