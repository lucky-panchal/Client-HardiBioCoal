import { useState } from 'react'

const images = [
  '/images/WhatsApp Image 2026-06-10 at 2.38.28 PM (2).jpeg',
  '/images/WhatsApp Image 2026-06-10 at 2.38.29 PM.jpeg',
  '/images/WhatsApp Image 2026-06-10 at 2.38.42 PM (1).jpeg',
  '/images/WhatsApp Image 2026-06-10 at 2.38.28 PM (1).jpeg',
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const prev = () => setSelected((selected - 1 + images.length) % images.length)
  const next = () => setSelected((selected + 1) % images.length)

  return (
    <section className="section bg-cream" id="gallery">
      <div className="section-inner">
        <div className="section-header center">
          <span className="section-tag">Gallery</span>
          <h2>Hardi-BioCoal <span>in Action</span></h2>
          <p className="section-sub">Our products, production process, and real-world applications.</p>
        </div>

        <div className="gallery-grid">
          {images.map((src, i) => (
            <div className="gallery-item" key={i} onClick={() => setSelected(i)}>
              <img src={src} alt={`Hardi-BioCoal ${i + 1}`} loading="lazy" />
              <div className="gallery-overlay"><span>View Image</span></div>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
          <button className="lightbox-arrow prev" onClick={e => { e.stopPropagation(); prev() }}>‹</button>
          <img src={images[selected]} alt="Preview" onClick={e => e.stopPropagation()} />
          <button className="lightbox-arrow next" onClick={e => { e.stopPropagation(); next() }}>›</button>
        </div>
      )}
    </section>
  )
}
