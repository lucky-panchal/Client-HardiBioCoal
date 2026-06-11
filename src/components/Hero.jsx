import { useState } from 'react'

const tabs = [
  {
    id: 'what',
    label: 'What is it?',
    title: 'High-Efficiency Solid Fuel',
    body: (
      <p>
        Hardi-BioCoal is a carbon-rich solid fuel made by thermally upgrading organic biomass —
        agricultural residues, wood chips, and plant waste. It mimics traditional coal in energy
        density and grindability, making it a direct, renewable substitute for industrial applications.
      </p>
    ),
  },
  {
    id: 'how',
    label: 'How It\'s Made',
    title: 'Thermal Conversion Process',
    body: (
      <ul>
        <li><strong>Torrefaction</strong> — Biomass heated 200–300°C in oxygen-free environment. Retains 90% of energy in 70% of original mass.</li>
        <li><strong>Pyrolysis</strong> — Heated 300–500°C. Yields high fixed-carbon product; by-products recycle to power the plant.</li>
        <li><strong>Densification</strong> — Ground and compressed into briquettes or pellets for efficient transport and storage.</li>
      </ul>
    ),
  },
  {
    id: 'specs',
    label: 'Key Specs',
    title: 'Bio-Coal vs Traditional Coal',
    body: (
      <ul>
        <li><strong>Energy Density:</strong> 22–28 MJ/kg (vs raw biomass ~15 MJ/kg)</li>
        <li><strong>Moisture Content:</strong> Only 1–5% (raw biomass: 20–60%)</li>
        <li><strong>Sulfur & Heavy Metals:</strong> Virtually zero (fossil coal is high)</li>
        <li><strong>Grindability:</strong> Easy, brittle — drop-in replacement for coal mills</li>
      </ul>
    ),
  },
  {
    id: 'benefits',
    label: 'Benefits',
    title: 'Why Switch to Bio-Coal?',
    body: (
      <ul>
        <li>Saves ~2.5 tonnes of CO₂ per tonne vs traditional coal</li>
        <li>Drop-in fuel — works in existing boilers without modification</li>
        <li>Zero sulfur dioxide, nitrogen oxides, or mercury emissions</li>
        <li>Turns agricultural stubble waste into revenue for farmers</li>
      </ul>
    ),
  },
]

export default function Hero() {
  const [active, setActive] = useState('what')
  const current = tabs.find(t => t.id === active)

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">Biocoal Briquette Manufacturer — Ankleshwar</div>
          <h1>
            India's Cleaner,<br />Smarter Fuel —
            <span className="brand-name">Hardi-BioCoal</span>
          </h1>
          <p className="hero-tagline">
            Premium bio-coal briquettes from 100% agricultural biomass.
            Same power as coal. Zero fossil fuels. No costly plant modifications.
          </p>

          <div className="hero-info-tabs">
            {tabs.map(t => (
              <button
                key={t.id}
                className={`hero-tab ${active === t.id ? 'active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="hero-info-panel">
            <h3>{current.title}</h3>
            {current.body}
          </div>

          <div className="hero-btns">
            <a href="#products" className="btn">View Products</a>
            <a href="#contact"  className="btn btn-outline">Get a Quote</a>
          </div>
        </div>

        <div className="hero-right">
          <img src="/images/WhatsApp Image 2026-06-10 at 2.38.27 PM.jpeg" alt="Hardi-BioCoal briquettes" />
          <div className="hero-right-overlay" />
          <div className="hero-img-badge">
            <div className="big">22–28</div>
            <div className="small">MJ/kg Energy Density</div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="num">80%</div>
            <div className="label">Less CO₂ Emissions</div>
          </div>
          <div className="stat-item">
            <div className="num">1–5%</div>
            <div className="label">Moisture Content</div>
          </div>
          <div className="stat-item">
            <div className="num">100%</div>
            <div className="label">Natural Biomass</div>
          </div>
          <div className="stat-item">
            <div className="num">Zero</div>
            <div className="label">Sulfur Emissions</div>
          </div>
        </div>
      </div>
    </>
  )
}
