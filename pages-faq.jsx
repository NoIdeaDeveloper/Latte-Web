// pages-faq.jsx
const FAQPage = () => {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'How long does a new website take?', a: 'Most projects take 3–5 weeks, from concept to launch, freshly brewed. We move quickly, but never rush the parts that matter — strategy, design, and content. We give you a firm timeline at the start.' },
    { q: 'Do I own the site when it\'s done?', a: 'Yes — every line of code, every design file, every account. We don\'t hold sites hostage. If you ever leave Latte, you take everything with you.' },
    { q: 'Can you redesign my existing site?', a: 'Absolutely. About a third of our work is redesigns. We\'ll audit what\'s working, what isn\'t, and rebuild it with care. Migration included.' },
    { q: 'Why Canadian hosting?', a: 'Speed (your customers are mostly in Canada), data residency (Canadian data stays under Canadian law), and we believe in keeping infrastructure spending in our own economy.' },
    { q: 'What happens if I need an edit at midnight?', a: 'Site Management clients get priority email and chat. For real emergencies (site down, payment broken), we have a 24/7 line. We aim for under 30 minutes.' },
    { q: 'WordPress, Webflow, or custom?', a: 'Depends on the project. Most work is hand-coded with modern tools (Astro, Next.js) for performance. WordPress when content workflows demand it. We recommend what fits.' },
    { q: 'Can I cancel my management plan anytime?', a: 'Yes. No contracts, no cancellation fees. Pay month to month — and we\'ll happily transfer your site somewhere else if you need to leave.' },
    { q: 'Do you work with clients outside Canada?', a: 'We do. About 30% of our clients are in the US, UK, and EU. We\'re Canadian-based, so timing works best with North American hours.' },
  ];
  return (
    <div className="page-fade">
      <section style={{ padding: 'clamp(56px, 8vw, 80px) 0 clamp(32px, 5vw, 40px)' }}>
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h1 className="serif" style={{ marginTop: 16, marginBottom: 24 }}>Common <em style={{ color: 'var(--caramel-deep)' }}>questions</em>.</h1>
        </div>
      </section>
      <section className="tight reveal">
        <div className="container" style={{ maxWidth: 880 }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            const btnId = `faq-btn-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={i} style={{ borderTop: i === 0 ? '1px solid var(--line-strong)' : 'none', borderBottom: '1px solid var(--line-strong)' }}>
                <button
                  id={btnId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  style={{ width: '100%', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', textAlign: 'left', fontFamily: 'var(--serif)', fontSize: 'clamp(18px, 2vw, 26px)', color: 'var(--espresso)', gap: 16 }}
                >
                  <span style={{ display: 'flex', gap: 'clamp(12px, 2vw, 20px)', alignItems: 'baseline', flex: 1, minWidth: 0 }}>
                    <span className="mono" style={{ fontSize: 12, color: 'var(--caramel-deep)', flexShrink: 0 }} aria-hidden="true">0{i+1}</span>
                    <span style={{ flex: 1 }}>{it.q}</span>
                  </span>
                  <span aria-hidden="true" style={{ fontSize: 24, color: 'var(--caramel-deep)', flexShrink: 0, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  style={{ maxHeight: isOpen ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}
                >
                  <p style={{ paddingTop: 4, paddingBottom: 24, color: 'var(--espresso-2)', fontSize: 'clamp(15px, 1.4vw, 16px)', maxWidth: 720, lineHeight: 1.7 }}>{it.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="tight reveal">
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 className="serif" style={{ marginBottom: 16 }}>Still curious?</h3>
          <p style={{ color: 'var(--muted)', marginBottom: 24 }}>We're happy to chat — no pressure, no sales pitch.</p>
          <a href="#/contact" className="btn btn-primary">Ask us anything →</a>
        </div>
      </section>
    </div>
  );
};
window.FAQPage = FAQPage;
