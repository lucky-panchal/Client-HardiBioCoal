export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand-name">Hardi-<span>BioCoal</span></div>
          <div className="footer-tagline">Biocoal Briquette Manufacturer</div>
          <p className="footer-desc">
            Premium bio-coal briquettes from 100% agricultural biomass.
            Empowering industries and homes across India with clean, sustainable energy.
            Based in Ankleshwar, Gujarat.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#why">Why Choose Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+919727732311">Utsav: +91 97277 32311</a></li>
            <li><a href="tel:+918780857664">Savan: +91 87808 57664</a></li>
            <li><a href="mailto:sonanisavan8@gmail.com">sonanisavan8@gmail.com</a></li>
            <li><a href="#contact">Ankleshwar, Gujarat</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Hardi-BioCoal. All rights reserved. &nbsp;·&nbsp; Biocoal Briquette Manufacturer, Ankleshwar
      </div>
    </footer>
  )
}
