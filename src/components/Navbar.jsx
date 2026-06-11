import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="navbar">
      <a className="nav-brand" href="#hero">
        <div className="nav-logo-circle">HB</div>
        <div className="nav-wordmark">
          <span className="w1">Biocoal Briquette Manufacturer</span>
          <span className="w2">Hardi-<span>BioCoal</span></span>
        </div>
      </a>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href="#about"    onClick={close}>About</a></li>
        <li><a href="#products" onClick={close}>Products</a></li>
        <li><a href="#gallery"  onClick={close}>Gallery</a></li>
        <li><a href="#why"      onClick={close}>Why Us</a></li>
        <li><a href="#contact"  onClick={close} className="nav-cta">Contact Us</a></li>
      </ul>

      <div className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </div>
    </nav>
  )
}
