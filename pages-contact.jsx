// pages-contact.jsx

import { MapleLeaf } from './shared.jsx';

const ContactPage = () => {
  const [form, setForm] = React.useState({ name: '', email: '', business: '', service: 'design', budget: '2-5k', message: '' });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.email.trim() || !/.+@.+\..+/.test(form.email)) errs.email = 'Valid email needed';
    if (!form.message.trim() || form.message.length < 10) errs.message = 'Tell us a bit more';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => { setIsSubmitting(false); setSent(true); }, 800);
    }
  };

  if (sent) {
    return (
      <div className="page-enter">
        <section style={{ padding: 'clamp(60px, 10vw, 120px) 0' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--foam)', border: '1px solid var(--line)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="18" r="17" stroke="var(--caramel)" strokeWidth="1.5" />
                <path d="M11 18.5l5 5 9-10" stroke="var(--caramel-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="serif" style={{ marginTop: 32, marginBottom: 20 }}>Message received.</h1>
            <p style={{ fontSize: 18, color: 'var(--espresso-2)', marginBottom: 32 }}>
              Thanks, {form.name.split(' ')[0]}! I've got your details. I'll respond within one business day — usually sooner.
            </p>
            <a href="#/" className="btn btn-ghost">Back home →</a>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <section style={{ padding: 'clamp(48px, 8vw, 80px) 0 clamp(24px, 5vw, 40px)' }}>
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="serif" style={{ marginTop: 16, marginBottom: 24, fontSize: 'clamp(48px, 8vw, 96px)' }}>
            Let's <em style={{ color: 'var(--caramel-deep)' }}>talk</em>.
          </h1>
          <p style={{ fontSize: 'clamp(17px, 1.5vw, 20px)', color: 'var(--espresso-2)', maxWidth: 640 }}>
            Tell me about your business and what you're looking for. I'll respond within one business day with a quote and a no-pressure conversation.
          </p>
        </div>
      </section>

      <section className="tight reveal">
        <div className="container">
          <div className="contact-grid">
            <form onSubmit={submit} className="card" style={{ padding: 'clamp(20px, 4vw, 40px)' }}>
              <div className="form-row-split">
                <label className={`field ${errors.name ? 'error' : ''}`}>
                  <span>Your Name *</span>
                  <input className="input" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Jane Doe" aria-required="true" aria-describedby={errors.name ? 'err-name' : undefined} />
                  {errors.name && <span id="err-name" className="err-msg" role="alert">{errors.name}</span>}
                </label>
                <label className={`field ${errors.email ? 'error' : ''}`}>
                  <span>Email *</span>
                  <input className="input" type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@business.ca" aria-required="true" aria-describedby={errors.email ? 'err-email' : undefined} />
                  {errors.email && <span id="err-email" className="err-msg" role="alert">{errors.email}</span>}
                </label>
              </div>
              <label className="field">
                <span>Business Name</span>
                <input className="input" value={form.business} onChange={e => set('business', e.target.value)} placeholder="Maple & Birch Bakery" />
              </label>
              <div className="form-row-split">
                <label className="field">
                  <span>Service</span>
                  <select className="input" value={form.service} onChange={e => set('service', e.target.value)}>
                    <option value="design">Web Design</option>
                    <option value="management">Site Care</option>
                    <option value="hosting">Hosting</option>
                    <option value="combo">All three (bundle)</option>
                    <option value="other">Not sure yet</option>
                  </select>
                </label>
                <label className="field">
                  <span>Budget</span>
                  <select className="input" value={form.budget} onChange={e => set('budget', e.target.value)}>
                    <option value="under-2k">Under $2,000</option>
                    <option value="2-5k">$2,000 – $5,000</option>
                    <option value="5-10k">$5,000 – $10,000</option>
                    <option value="10k+">$10,000+</option>
                    <option value="not-sure">Not sure</option>
                  </select>
                </label>
              </div>
              <label className={`field ${errors.message ? 'error' : ''}`}>
                <span>What are you looking for? *</span>
                <textarea className="textarea" value={form.message} onChange={e => set('message', e.target.value)} placeholder="A few sentences about your business, your goals, and what you're hoping a new website will do for you..." aria-required="true" aria-describedby={errors.message ? 'err-message' : undefined} />
                {errors.message && <span id="err-message" className="err-msg" role="alert">{errors.message}</span>}
              </label>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                {isSubmitting ? 'Sending…' : 'Send message →'}
              </button>
              <p className="mono" style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 16, marginBottom: 0 }}>I respond within 1 business day · No spam, ever</p>
            </form>

            <div>
              <h3 className="serif" style={{ marginBottom: 20 }}>Other ways to reach me.</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: 11, marginBottom: 4 }}>Email</div>
                  <a href="mailto:hello@goodbonesweb.ca" style={{ fontSize: 18 }}>hello@goodbonesweb.ca</a>
                </div>
                <div>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: 11, marginBottom: 4 }}>Location</div>
                  <div style={{ fontSize: 16 }}>Edmonton, AB</div>
                </div>
                <div>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: 11, marginBottom: 4 }}>Hours</div>
                  <div style={{ fontSize: 16 }}>Mon–Fri · 9am–5pm MT</div>
                </div>
                <div style={{ paddingTop: 24, borderTop: '1px solid var(--line)' }}>
              <span className="canadian-badge">
                <MapleLeaf size={12} color="var(--maple)" /> Canadian Owned & Operated
                  </span>
                  <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 12 }}>Serving small businesses across Canada, coast to coast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export { ContactPage };
