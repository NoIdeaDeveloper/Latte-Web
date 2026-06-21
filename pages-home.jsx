// pages-home.jsx — Home page

import { HouseOutline, MapleLeaf, CountOnView } from './shared.jsx';

const ROTATE_WORDS = ['bakeries', 'contractors', 'clinics', 'cafés', 'studios', 'real people'];

const RotatingWord = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex(i => (i + 1) % ROTATE_WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <span className="sr-only">small businesses</span>
      <span className="rotator" aria-hidden="true">
        {ROTATE_WORDS.map((word, i) => (
          <span key={word} className={`rotator-word ${i === index ? 'on' : ''}`}>
            {word}
          </span>
        ))}
      </span>
    </>
  );
};

const SERVICES = [
  { num: '01', name: 'Web Design', desc: 'Custom-designed sites built from the ground up. Every pixel crafted to your brand — no templates, no shortcuts.', from: 'from $2,400' },
  { num: '02', name: 'Site Care', desc: 'Updates, backups, security, and content edits — handled quietly every month so you can run your business.', from: 'from $95/mo' },
  { num: '03', name: 'Hosting', desc: 'Fast, green-powered Canadian servers with SSL, CDN, and daily backups. Your data stays on Canadian soil.', from: 'from $15/mo' },
];

const HomePage = () => {
  return (
    <div className="page-enter">
      {/* HERO — full-viewport blueprint */}
      <section className="hero-bp">
        <div className="hero-bp-inner">
          <div className="hero-annot hero-annot-tl mono" aria-hidden="true">+ Fig. 01 — The Foundation</div>
          <div className="hero-annot hero-annot-tr mono" aria-hidden="true">DWG № GB-2026 · Scale 1:1</div>

          <div className="container" style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div className="hero-main">
              <div className="hero-copy">
                <span className="canadian-badge">
                  <MapleLeaf size={12} color="var(--maple)" /> Canadian Owned & Operated
                </span>
                <h1 className="hero-h1 serif">
                  <span className="hero-line text-outline">Websites</span>
                  <span className="hero-line">with <em>good bones</em>.</span>
                </h1>
                <p className="hero-lede">
                  Design, hosting, and ongoing care from one Canadian studio — websites
                  hand-coded for <RotatingWord />, end to end.
                </p>
                <div className="hero-ctas">
                  <a href="#/pricing" className="btn btn-primary">See pricing →</a>
                  <a href="#/services" className="btn btn-ghost">Our services</a>
                </div>
              </div>

              <div className="hero-house" aria-hidden="true">
                <HouseOutline size={360} className="house-draw" />
                <div className="measure mono">
                  <span className="m-tick" />100% hand-coded<span className="m-tick" />
                </div>
              </div>
            </div>

            <div className="hero-foot">
              <div className="stat-row">
                <div>
                  <CountOnView target={60} suffix="+" duration={2000} style={{ fontSize: 'clamp(30px, 4vw, 36px)' }} />
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: 11, marginTop: 4 }}>Sites Built</div>
                </div>
                <div className="divider" />
                <div>
                  <CountOnView target={99.9} suffix="%" duration={2000} style={{ fontSize: 'clamp(30px, 4vw, 36px)' }} />
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: 11, marginTop: 4 }}>Uptime Guarantee</div>
                </div>
                <div className="divider" />
                <div>
                  <div className="serif" style={{ fontSize: 'clamp(30px, 4vw, 36px)' }}>3–5 wks</div>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: 11, marginTop: 4 }}>Concept to Launch</div>
                </div>
              </div>
              <div className="hero-scroll mono" aria-hidden="true">
                Scroll
                <span className="scroll-line" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee reveal">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span><em>Built</em> in Canada, end to end</span>
              <span className="dot">●</span>
              <span><em>Hosted</em> on Canadian servers</span>
              <span className="dot">●</span>
              <span>Domains from Canadian registrars</span>
              <span className="dot">●</span>
              <span>Hand-coded, never templated</span>
              <span className="dot">●</span>
              <span><em>Real</em> person, real support</span>
              <span className="dot">●</span>
              <span>Privacy-first, always</span>
              <span className="dot">●</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SERVICES — editorial rows */}
      <section>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(32px, 5vw, 48px)', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="eyebrow">Our Services</span>
              <h2 className="serif" style={{ marginTop: 12, maxWidth: 700 }}>
                Three services. <em style={{ fontStyle: 'italic', color: 'var(--caramel-deep)' }}>One</em> solid foundation.
              </h2>
            </div>
            <a href="#/services" className="btn btn-ghost">All services →</a>
          </div>

          <div className="svc-list reveal-stagger">
            {SERVICES.map(s => (
              <a key={s.num} href="#/services" className="svc-row">
                <span className="svc-num mono">{s.num}</span>
                <span className="svc-name">{s.name}</span>
                <span className="svc-desc">{s.desc}</span>
                <span className="svc-price">{s.from}</span>
                <span className="svc-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="reveal section-dark">
        <div className="container">
          <div className="grid-split center">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <HouseOutline size={260} dark />
            </div>
            <div>
              <span className="eyebrow" style={{ color: 'var(--caramel)' }}>Why we exist</span>
              <h2 className="serif" style={{ marginTop: 16, marginBottom: 24, color: 'var(--cream)' }}>
                Every great house starts with good bones.
              </h2>
              <p style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', opacity: 0.85, lineHeight: 1.6, maxWidth: 580 }}>
                Builders are everywhere. Templates are free. But a site that lasts — one that loads fast, looks polished, and actually brings in customers — takes more than a drag-and-drop builder. It takes structure. Strategy. Care.
              </p>
              <p style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', opacity: 0.85, lineHeight: 1.6, maxWidth: 580, marginTop: 16 }}>
                That's what we do. One person, full attention, no templates. Just solid work you can build on.
              </p>
              <a href="#/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, color: 'var(--caramel)', fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Read our story →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="container">
          <span className="eyebrow">Our Process</span>
          <h2 className="serif" style={{ marginTop: 12, marginBottom: 'clamp(36px, 5vw, 56px)', maxWidth: 760 }}>
            From the ground <em style={{ color: 'var(--caramel-deep)' }}>up</em>.
          </h2>

          <div className="reveal-stagger grid-auto-220">
            {[
              { step: '01', title: 'Discovery', desc: 'We sit down to learn about your business, customers, and goals — what works, what doesn\'t, and what comes next.' },
              { step: '02', title: 'Blueprint', desc: 'Sitemap, wireframes, content plan. We map out every detail before we touch a pixel.' },
              { step: '03', title: 'Build', desc: 'Visual design and development with regular check-ins. No surprises, no last-minute changes.' },
              { step: '04', title: 'Care', desc: 'Launch is just the start. We keep your site secure, fast, and current — month after month, indefinitely.' },
            ].map((p, i) => (
              <div key={i}>
                <div className="proc-num" aria-hidden="true">{p.step}</div>
                <h3 className="serif" style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: 'var(--espresso-2)', fontSize: 15 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — naked oversized quote */}
      <section className="tight reveal">
        <div className="container" style={{ maxWidth: 940, textAlign: 'center' }}>
          <div className="quote-mark" aria-hidden="true">"</div>
          <p className="serif" style={{ fontSize: 'clamp(24px, 3.4vw, 42px)', lineHeight: 1.25, letterSpacing: '-0.01em', margin: '0 0 28px', textWrap: 'balance' }}>
            We tried building it ourselves. Twice. Good Bones rebuilt the whole thing in three weeks — and it's been <em style={{ color: 'var(--caramel-deep)' }}>turning heads</em> ever since.
          </p>
          <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
            Anika V. · Maple & Birch Bakery · Edmonton, AB
          </div>
        </div>
      </section>

      {/* CTA — giant type */}
      <section className="reveal">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">No pressure, ever</span>
          <h2 className="serif" style={{ fontSize: 'clamp(48px, 9vw, 130px)', lineHeight: 1, margin: '16px 0 28px', letterSpacing: '-0.02em' }}>
            Let's <em style={{ fontStyle: 'italic', color: 'var(--caramel-deep)' }}>build</em>.
          </h2>
          <p style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', color: 'var(--espresso-2)', maxWidth: 560, margin: '0 auto 36px' }}>
            Tell us about your project. We'll respond within one business day with a clear quote, a real timeline, and zero sales pitch.
          </p>
          <a href="#/contact" className="btn btn-primary btn-lg">Start a project →</a>
        </div>
      </section>
    </div>
  );
};

export { HomePage };
