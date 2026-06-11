import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', product: '', message: '' })

  const set = (f) => (e) => setForm({ ...form, [f]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Hardi-BioCoal Enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProduct: ${form.product}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:sonanisavan8@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="section-header center">
          <span className="section-tag">Contact Us</span>
          <h2>Get in <span>Touch</span></h2>
          <p className="section-sub">
            Ready to switch to cleaner fuel? Fill the form and we'll respond within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>We'd love to hear from you</h3>
            <p>
              Whether you need bulk orders, pricing details, or just want to learn more about
              Hardi-BioCoal — our team is here to help.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="c-icon">📍</div>
                <div className="detail-text">
                  <strong>Location</strong>
                  <span>Ankleshwar, Gujarat, India</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="c-icon">✉️</div>
                <div className="detail-text">
                  <strong>Email</strong>
                  <span>sonanisavan8@gmail.com</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="c-icon">🕐</div>
                <div className="detail-text">
                  <strong>Business Hours</strong>
                  <span>Mon – Sat, 9:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ fontSize: '.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.8px', color: 'var(--text-muted)', marginBottom: '.75rem' }}>
                Contact Persons
              </p>
              <div className="contact-persons">
                <div className="person-card">
                  <div className="pname">Utsav Sonani</div>
                  <div className="pphone">+91 97277 32311</div>
                </div>
                <div className="person-card">
                  <div className="pname">Savan Sonani</div>
                  <div className="pphone">+91 87808 57664</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3>Send an Enquiry</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input required placeholder="Your name" value={form.name} onChange={set('name')} />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input required type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input placeholder="+91 00000 00000" value={form.phone} onChange={set('phone')} />
                </div>
                <div className="form-group">
                  <label>Product Interest</label>
                  <select value={form.product} onChange={set('product')}>
                    <option value="">Select a product</option>
                    <option>Hardi-BioCoal Standard</option>
                    <option>Hardi-BioCoal Premium</option>
                    <option>Hardi-BioCoal Agri-Blend</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="form-group form-full">
                  <label>Message *</label>
                  <textarea required rows={4} placeholder="Tell us about your requirements..." value={form.message} onChange={set('message')} />
                </div>
              </div>
              <button type="submit" className="btn btn-green" style={{ width: '100%', justifyContent: 'center' }}>
                Send Enquiry →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
