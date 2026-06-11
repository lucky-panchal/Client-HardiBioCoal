const products = [
  {
    name: 'Hardi-BioCoal Standard',
    badge: 'Best Seller',
    image: '/images/WhatsApp Image 2026-06-10 at 2.38.27 PM.jpeg',
    description: 'All-purpose bio-coal briquettes ideal for industrial boilers and domestic cooking stoves. Consistent burn rate with minimal ash residue.',
    price: 'Contact for Pricing',
  },
  {
    name: 'Hardi-BioCoal Premium',
    badge: 'High Performance',
    image: '/images/WhatsApp Image 2026-06-10 at 2.38.28 PM.jpeg',
    description: 'High-density, low-moisture bio-coal pellets engineered for maximum heat output and efficiency in heavy-duty industrial applications.',
    price: 'Contact for Pricing',
  },
  {
    name: 'Hardi-BioCoal Agri-Blend',
    badge: 'Eco Special',
    image: '/images/WhatsApp Image 2026-06-10 at 2.38.29 PM.jpeg',
    description: 'Formulated from rice husk and sugarcane bagasse — perfect for agricultural drying, brick kilns, and small-scale industries.',
    price: 'Contact for Pricing',
  },
]

export default function Products() {
  return (
    <section className="section bg-white" id="products">
      <div className="section-inner">
        <div className="section-header center">
          <span className="section-tag">Our Products</span>
          <h2>Choose the Right <span>Bio-Coal</span> for You</h2>
          <p className="section-sub">
            Every Hardi-BioCoal product is quality-tested and tailored for specific use cases —
            from home kitchens to large industrial setups.
          </p>
        </div>

        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.name}>
              <div className="product-card-img">
                <img src={p.image} alt={p.name} />
                <span className="product-badge">{p.badge}</span>
              </div>
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </div>
              <div className="product-footer">
                <span className="price">{p.price}</span>
                <a href="#contact" className="btn" style={{ padding: '.48rem 1.1rem', fontSize: '.85rem' }}>
                  Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
