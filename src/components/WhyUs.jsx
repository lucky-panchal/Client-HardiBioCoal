const reasons = [
  { icon: '🏭', title: 'Industrial Grade Quality', desc: 'Every batch is tested for calorific value, moisture, and ash content before dispatch.' },
  { icon: '🚚', title: 'Reliable Supply Chain', desc: 'Consistent availability with bulk order support and on-time delivery across India.' },
  { icon: '💰', title: 'Cost Effective', desc: 'Significantly cheaper than fossil coal with comparable or higher energy output.' },
  { icon: '📜', title: 'Certified & Compliant', desc: 'Our products meet environmental regulations and national emission standards.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'Pre-sales consultation and post-sales technical support from our expert team.' },
  { icon: '🌍', title: 'Carbon Neutral Fuel', desc: 'Helps offset your carbon footprint — saving ~2.5 tonnes of CO₂ per tonne used.' },
]

export default function WhyUs() {
  return (
    <section className="section bg-dark" id="why">
      <div className="section-inner">
        <div className="section-header center">
          <span className="section-tag" style={{ background: 'rgba(192,57,43,0.2)', color: '#f0a060', border: '1px solid rgba(192,57,43,0.4)' }}>
            Why Choose Us
          </span>
          <h2 style={{ color: '#fff', fontFamily: "'Playfair Display', serif" }}>
            Why <span style={{ color: '#f0a060' }}>Hardi-BioCoal?</span>
          </h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We're not just selling fuel — we're delivering a cleaner, more sustainable energy future for India.
          </p>
        </div>
        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-card" key={r.title}>
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
