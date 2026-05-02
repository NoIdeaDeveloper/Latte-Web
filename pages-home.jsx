// pages-home.jsx — Home page

const HomePage = () => {
  return (
    <div className="page-fade">
      {/* HERO */}
      <section style={{ padding: 'clamp(56px, 8vw, 80px) 0 clamp(40px, 6vw, 60px)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row-wrap" style={{ justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 540px', maxWidth: 760 }}>
              <span className="canadian-badge" style={{ marginBottom: 24 }}>
                <MapleLeaf size={12} color="var(--maple)" /> Canadian Owned & Operated
              </span>
              <h1 className="serif" style={{ marginBottom: 28 }}>
                Websites done&nbsp;<em style={{ fontStyle: 'italic', color: 'var(--caramel-deep)' }}>right</em>.<br/>
                Without the headache.
              </h1>
              <p className="body-lg" style={{ maxWidth: 560, marginBottom: 36 }}>
                Latte is a small Canadian studio that designs, builds, and looks after websites for small businesses — Canadian-owned from domain to deployment. One team, one invoice, no hand-offs — pull up a chair, your site stays fast, current, and effortless.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#/pricing" className="btn btn-primary">See pricing →</a>
                <a href="#/services" className="btn btn-ghost">Our services</a>
              </div>

              <div className="stat-row" style={{ marginTop: 'clamp(40px, 6vw, 56px)' }}>
                <div>
                  <div className="serif" style={{ fontSize: 'clamp(30px, 4vw, 36px)' }}>120+</div>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: 11, marginTop: 4 }}>Sites Launched</div>
                </div>
                <div className="divider" />
                <div>
                  <div className="serif" style={{ fontSize: 'clamp(30px, 4vw, 36px)' }}>99.9%</div>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: 11, marginTop: 4 }}>Uptime Guarantee</div>
                </div>
                <div className="divider" />
                <div>
                  <div className="serif" style={{ fontSize: 'clamp(30px, 4vw, 36px)' }}>24/7</div>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: 11, marginTop: 4 }}>Monitoring</div>
                </div>
              </div>
            </div>

            <div style={{ flex: '1 1 320px', maxWidth: 420, display: 'flex', justifyContent: 'center' }}>
              <div className="placeholder-img" style={{ width: '100%', maxWidth: 360, aspectRatio: '6/7', minHeight: 0, borderRadius: 20 }}>
                Hero imagery
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
              <span><em>Real</em> humans, real support</span>
              <span className="dot">●</span>
              <span>Privacy-first, always</span>
              <span className="dot">●</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(32px, 5vw, 48px)', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="eyebrow">The Menu</span>
              <h2 className="serif" style={{ marginTop: 12, maxWidth: 700 }}>
                Three services. <em style={{ fontStyle: 'italic', color: 'var(--caramel-deep)' }}>One</em> simple goal.
              </h2>
            </div>
            <a href="#/services" className="btn btn-ghost">All services →</a>
          </div>

          <div className="reveal-stagger grid-auto-260">
            {[
              { name: 'Web Design', sub: 'Design & Development', desc: 'Custom-designed websites built from scratch. Every pixel handcrafted to your brand — no templates, no page builders.', from: '$2,400', notes: 'Strategy · Design · Build' },
              { name: 'Site Management', sub: 'Maintenance & Care', desc: 'Updates, backups, security, content edits — all the maintenance handled for you, every month, in the background.', from: '$95/mo', notes: 'Updates · Edits · Reports' },
              { name: 'Hosting', sub: 'Fast & Canadian', desc: 'Lightning-fast Canadian hosting on green-powered servers. SSL, CDN, and daily backups all included.', from: '$15/mo', notes: 'CDN · SSL · Backups' },
            ].map((b, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="mono" style={{ color: 'var(--caramel-deep)', marginBottom: 16 }}>0{i+1} / {b.sub}</div>
                <h3 className="serif" style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', marginBottom: 8 }}>{b.name}</h3>
                <p style={{ color: 'var(--espresso-2)', fontSize: 15, marginBottom: 24, flex: 1 }}>{b.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--line-strong)', paddingTop: 16 }}>
                  <span className="mono" style={{ color: 'var(--muted)', fontSize: 11 }}>{b.notes}</span>
                  <span className="serif" style={{ fontSize: 22, color: 'var(--espresso)' }}>from {b.from}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY (dialed back) */}
      <section className="reveal section-dark">
        <div className="container">
          <div className="grid-split center">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="placeholder-img" style={{ width: '100%', maxWidth: 320, aspectRatio: '1/1', minHeight: 0, borderRadius: 20, background: 'rgba(245, 239, 230, 0.08)', borderColor: 'rgba(245, 239, 230, 0.15)', color: 'rgba(245, 239, 230, 0.6)' }}>
                Founder portrait
              </div>
            </div>
            <div>
              <span className="eyebrow" style={{ color: 'var(--caramel)' }}>Why we exist</span>
              <h2 className="serif" style={{ marginTop: 16, marginBottom: 24, color: 'var(--cream)' }}>
                You can DIY a website. It just won't look like ours.
              </h2>
              <p style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', opacity: 0.85, lineHeight: 1.6, maxWidth: 580 }}>
                Builders are everywhere. Templates are free. But there's a reason small businesses still hire professionals — craft, strategy, and the hundreds of small decisions that separate a passable site from one that actually wins customers.
              </p>
              <p style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', opacity: 0.85, lineHeight: 1.6, maxWidth: 580, marginTop: 16 }}>
                That's what we do. Quietly, carefully, and on a fair budget.
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
            From kickoff to <em style={{ color: 'var(--caramel-deep)' }}>launch</em>.
          </h2>

          <div className="reveal-stagger grid-auto-220">
            {[
              { step: '01', title: 'Discovery', desc: 'We sit down to learn about your business, customers, and goals — what works, what doesn\'t, what\'s next.' },
              { step: '02', title: 'Strategy', desc: 'Sitemap, wireframes, content plan. We map out every detail before we touch a pixel.' },
              { step: '03', title: 'Design & Build', desc: 'Visual design and development with regular check-ins. No surprises, no last-minute changes.' },
              { step: '04', title: 'Launch & Care', desc: 'Launch is the start. We keep your site secure, fast, and current — every month, indefinitely.' },
            ].map((p, i) => (
              <div key={i}>
                <div className="serif" style={{ fontSize: 'clamp(44px, 5vw, 56px)', color: 'var(--caramel)', marginBottom: 12, lineHeight: 1 }}>{p.step}</div>
                <h3 className="serif" style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: 'var(--espresso-2)', fontSize: 15 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="tight reveal">
        <div className="container">
          <div style={{ background: 'var(--foam)', borderRadius: 24, padding: 'clamp(32px, 6vw, 80px)', border: '1px solid var(--line)', position: 'relative' }}>
            <div className="serif" style={{ fontSize: 'clamp(72px, 10vw, 120px)', color: 'var(--caramel)', lineHeight: 0.6, position: 'absolute', top: 'clamp(28px, 4vw, 40px)', left: 'clamp(20px, 3vw, 32px)', opacity: 0.4 }}>"</div>
            <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
              <p className="serif" style={{ fontSize: 'clamp(20px, 3vw, 36px)', lineHeight: 1.3, marginBottom: 'clamp(24px, 3vw, 32px)' }}>
                We tried building it ourselves. Twice. Latte rebuilt our whole site in three weeks — worth every cup of coffee — and it's been getting compliments and customers ever since.
              </p>
              <div className="placeholder-img" style={{ width: 56, height: 56, borderRadius: '50%', margin: '0 auto 12px', minHeight: 0 }}>
                AV
              </div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
                Anika V. · Maple & Birch Bakery · Toronto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tight reveal">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <h2 className="serif" style={{ marginBottom: 24 }}>
              Ready to get <em style={{ fontStyle: 'italic', color: 'var(--caramel-deep)' }}>started</em>?
            </h2>
            <p style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', color: 'var(--espresso-2)', marginBottom: 32 }}>
              Tell us a little about your business. We'll respond within one business day with a quote, a timeline, and a no-pressure conversation — coffee optional, but encouraged.
            </p>
            <a href="#/contact" className="btn btn-primary">Get a quote →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export { HomePage };
