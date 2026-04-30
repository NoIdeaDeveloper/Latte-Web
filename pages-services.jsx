// pages-services.jsx — Services + Pricing pages

const ServicesPage = () => (
  <div className="page-fade">
    <section style={{ padding: 'clamp(56px, 8vw, 80px) 0 clamp(32px, 5vw, 40px)' }}>
      <div className="container">
        <span className="eyebrow">Our Services</span>
        <h1 className="serif" style={{ marginTop: 16, marginBottom: 24 }}>
          What we <em style={{ color: 'var(--caramel-deep)' }}>do</em>.
        </h1>
        <p style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'var(--espresso-2)', maxWidth: 720 }}>
          Three services on the menu. Pick what you need, or bundle all three — design, management, and hosting under one roof.
        </p>
      </div>
    </section>

    {[
      {
        num: '01', name: 'Web Design', sub: 'Design & Development',
        tagline: 'A site that looks like you, not a template.',
        desc: 'A custom website, designed to your brand and built to perform. We don\'t use templates, page builders, or stock layouts — every project is built from scratch with strategy, design, content, and clean code.',
        includes: ['Brand & competitor research', 'Sitemap and wireframes', 'Custom visual design (3 rounds)', 'Responsive build, hand-coded', 'Content writing assistance', 'SEO foundations', '2 weeks of post-launch tweaks'],
        from: '$2,400 CAD',
      },
      {
        num: '02', name: 'Site Management', sub: 'Maintenance & Care',
        tagline: 'Set it, forget it. We\'ll handle the rest.',
        desc: 'Software updates. Backups. Security. Monthly content edits. Performance tune-ups. We treat your site like our own — quietly, in the background — so you can focus on running your business.',
        includes: ['Weekly software & plugin updates', 'Daily off-site backups', 'Uptime & security monitoring', 'Up to 1 hour of edits/month', 'Monthly performance report', 'Priority email & phone support', 'Emergency restore included'],
        from: '$95 CAD/month',
      },
      {
        num: '03', name: 'Hosting', sub: 'Fast, Canadian, Managed',
        tagline: 'Where your site lives. And how fast it runs.',
        desc: 'Premium Canadian hosting on green-powered, SSD-backed servers — with a global CDN, free SSL, and the kind of uptime that keeps customers from bouncing. Yes, we manage it for you. No, you\'ll never see a control panel.',
        includes: ['Toronto & Montreal data centres', 'Global CDN (200+ locations)', 'Free SSL certificates', 'Daily backups, kept for 30 days', '99.9% uptime SLA', 'No surprise overage fees', '100% renewable-powered'],
        from: '$15 CAD/month',
      },
    ].map((s, i) => (
      <section key={i} className="reveal" style={{ padding: 'clamp(48px, 7vw, 60px) 0', background: i % 2 === 1 ? 'var(--foam)' : 'transparent' }}>
        <div className="container">
          <div className="grid-split">
            <div>
              <div className="mono" style={{ color: 'var(--caramel-deep)', marginBottom: 16 }}>{s.num} / Service</div>
              <h2 className="serif" style={{ marginBottom: 12 }}>{s.name}</h2>
              <p className="serif" style={{ fontStyle: 'italic', color: 'var(--caramel-deep)', fontSize: 'clamp(18px, 2vw, 22px)', marginBottom: 24 }}>"{s.tagline}"</p>
              <p style={{ color: 'var(--espresso-2)', fontSize: 'clamp(15px, 1.4vw, 17px)', marginBottom: 28, maxWidth: 520 }}>{s.desc}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                <span className="mono" style={{ color: 'var(--muted)', fontSize: 12 }}>Starting at</span>
                <span className="serif" style={{ fontSize: 'clamp(26px, 3vw, 32px)' }}>{s.from}</span>
              </div>
              <a href="#/contact" className="btn btn-primary" style={{ marginTop: 20 }}>Get a quote →</a>
            </div>
            <div>
              <div className="mono" style={{ color: 'var(--muted)', marginBottom: 18 }}>What's included</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {s.includes.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: '1px dashed var(--line)' }}>
                    <span style={{ color: 'var(--caramel)', fontSize: 18, lineHeight: 1.2 }}>●</span>
                    <span style={{ fontSize: 15, color: 'var(--espresso-2)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    ))}

    <section className="tight reveal">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="serif" style={{ marginBottom: 20 }}>Bundle and <em style={{ color: 'var(--caramel-deep)' }}>save</em>.</h2>
        <p style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', color: 'var(--espresso-2)', maxWidth: 600, margin: '0 auto 28px' }}>
          Combine Design + Management + Hosting and save 20% — your site, end to end, one monthly price.
        </p>
        <a href="#/pricing" className="btn btn-primary">See bundles →</a>
      </div>
    </section>
  </div>
);

const PricingPage = () => {
  const [billing, setBilling] = React.useState('monthly');
  const plans = [
    {
      name: 'Starter', tagline: 'For the side-hustle.',
      monthly: 49, annual: 39,
      features: ['5-page custom site', 'Standard hosting', 'Monthly backups', '15 min edits / month', 'Email support'],
      cta: 'Get Starter',
    },
    {
      name: 'Standard', tagline: 'Most popular.', popular: true,
      monthly: 149, annual: 119,
      features: ['Up to 12 pages, custom designed', 'Premium hosting + CDN', 'Daily backups', '1 hour edits / month', 'Priority email & chat', 'Monthly performance report', 'On-page SEO included'],
      cta: 'Get Standard',
    },
    {
      name: 'Pro', tagline: 'For growing businesses.',
      monthly: 295, annual: 235,
      features: ['Unlimited pages', 'Premium hosting + global CDN', 'Continuous backups', '3 hours edits / month', '24/7 priority support', 'Quarterly strategy session', 'Advanced analytics setup', 'A/B testing & landing pages'],
      cta: 'Get Pro',
    },
  ];

  return (
    <div className="page-fade">
      <section style={{ padding: 'clamp(56px, 8vw, 80px) 0 clamp(32px, 5vw, 40px)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Pricing</span>
          <h1 className="serif" style={{ marginTop: 16, marginBottom: 24 }}>
            One <em style={{ color: 'var(--caramel-deep)' }}>price</em>.<br/>Everything included.
          </h1>
          <p style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'var(--espresso-2)', maxWidth: 640, margin: '0 auto 40px' }}>
            Design, hosting, and management — bundled into a single monthly subscription. No setup fees. No surprise invoices. Cancel any time.
          </p>

          {/* Billing toggle */}
          <div style={{ display: 'inline-flex', background: 'var(--foam)', border: '1px solid var(--line)', borderRadius: 999, padding: 4, position: 'relative', maxWidth: '100%', flexWrap: 'wrap' }}>
            {['monthly', 'annual'].map(b => (
              <button key={b} onClick={() => setBilling(b)}
                style={{
                  position: 'relative', zIndex: 2,
                  padding: '10px 22px', borderRadius: 999, border: 'none',
                  background: billing === b ? 'var(--espresso)' : 'transparent',
                  color: billing === b ? 'var(--cream)' : 'var(--espresso)',
                  fontSize: 13, fontWeight: 500, transition: 'all 0.2s',
                  fontFamily: 'var(--mono)', letterSpacing: '0.08em', textTransform: 'uppercase'
                }}>
                {b === 'annual' ? 'Annual − Save 20%' : 'Monthly'}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(16px, 2vw, 20px)' }}>
            {plans.map((p, i) => (
              <div key={i} className="card" style={{
                position: 'relative',
                background: p.popular ? 'var(--espresso)' : 'var(--foam)',
                color: p.popular ? 'var(--cream)' : 'var(--ink)',
                border: p.popular ? '1px solid var(--espresso)' : '1px solid var(--line)',
                padding: 'clamp(32px, 4vw, 40px) clamp(24px, 3vw, 32px)',
              }}>
                {p.popular && (
                  <div style={{ position: 'absolute', top: -12, right: 24, background: 'var(--caramel)', color: 'var(--espresso)', padding: '4px 12px', borderRadius: 999, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                    Most Popular
                  </div>
                )}
                <h3 className="serif" style={{ fontSize: 'clamp(36px, 4vw, 44px)', marginBottom: 6 }}>{p.name}</h3>
                <p style={{ fontStyle: 'italic', opacity: 0.7, marginBottom: 24, fontSize: 14 }}>{p.tagline}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 28 }}>
                  <span className="serif" style={{ fontSize: 'clamp(44px, 5vw, 56px)', lineHeight: 1 }}>${billing === 'monthly' ? p.monthly : p.annual}</span>
                  <span style={{ opacity: 0.6, fontSize: 14 }}>CAD/mo</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', fontSize: 14, opacity: p.popular ? 0.92 : 1 }}>
                      <span style={{ color: p.popular ? 'var(--caramel)' : 'var(--caramel-deep)' }}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#/contact" className={p.popular ? 'btn btn-cream' : 'btn btn-primary'} style={{ width: '100%', justifyContent: 'center' }}>{p.cta} →</a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: 40, color: 'var(--muted)', fontSize: 14 }}>
            All plans include free SSL, hosting in Canada, and a 30-day money-back guarantee.
            <br/>Need something custom? <a href="#/contact" style={{ color: 'var(--caramel-deep)', textDecoration: 'underline' }}>Let's chat.</a>
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="tight reveal">
        <div className="container">
          <span className="eyebrow">Add-ons</span>
          <h2 className="serif" style={{ marginTop: 16, marginBottom: 'clamp(28px, 4vw, 40px)' }}>Extras, <em style={{ color: 'var(--caramel-deep)' }}>à la carte</em>.</h2>
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { name: 'Branding', desc: 'Logo & brand identity', price: '+ $800' },
              { name: 'E-commerce', desc: 'Online store setup', price: '+ $1,200' },
              { name: 'Copywriting', desc: 'Page copy (per page)', price: '+ $150' },
              { name: 'Illustrations', desc: 'Custom artwork', price: '+ $400' },
              { name: 'Rush Edits', desc: 'Same-day urgent edits', price: '+ $75' },
              { name: 'SEO Audit', desc: 'Site audit & report', price: '+ $350' },
            ].map((a, i) => (
              <div key={i} style={{ padding: 'clamp(16px, 2.5vw, 24px)', background: 'var(--foam)', borderRadius: 14, border: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <h4 className="serif" style={{ fontSize: 22 }}>{a.name}</h4>
                  <span className="mono" style={{ color: 'var(--caramel-deep)' }}>{a.price}</span>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: 14, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { ServicesPage, PricingPage });
