export default function About() {
  return (
    <section className="section bg-white" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-image-wrap">
            <div className="about-img-accent" />
            <img src="/images/WhatsApp Image 2026-06-10 at 2.38.42 PM (1).jpeg" alt="Hardi-BioCoal product" />
            <div className="about-image-badge">
              <div className="big">10+</div>
              <div className="small">Years of Experience</div>
            </div>
          </div>

          <div className="about-text">
            <div className="section-header">
              <span className="section-tag">About Us</span>
              <h2>What is <span>Bio-Coal?</span></h2>
              <p className="section-sub">
                Bio-coal is a high-efficiency, carbon-rich solid fuel produced by thermally upgrading
                organic biomass — agricultural residues, wood chips, and plant waste. It is designed
                to mimic traditional fossil coal, making it a sustainable, renewable substitute for
                industrial and power-generation applications.
              </p>
            </div>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">🌱</div>
                <div>
                  <strong>100% Natural Feedstock</strong>
                  <span>Made from mustard straw, rice husk, sugarcane bagasse, wood chips, and more.</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔥</div>
                <div>
                  <strong>High Calorific Value</strong>
                  <span>22–28 MJ/kg energy density — comparable to bituminous coal.</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💨</div>
                <div>
                  <strong>Ultra-Low Emissions</strong>
                  <span>Virtually zero sulfur, NO₂, or mercury. Up to 80% less CO₂ than fossil coal.</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">♻️</div>
                <div>
                  <strong>Drop-In Replacement</strong>
                  <span>Works in existing coal boilers and furnaces — no costly modifications needed.</span>
                </div>
              </div>
            </div>

            <a href="#products" className="btn btn-green">View Our Products →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
