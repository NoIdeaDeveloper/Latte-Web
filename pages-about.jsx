// pages-misc.jsx — About, FAQ, Blog, Contact

const AboutPage = () => (
  <div className="page-fade">
    <section style={{ padding: 'clamp(56px, 8vw, 80px) 0 clamp(32px, 5vw, 40px)' }}>
      <div className="container">
        <span className="canadian-badge" style={{ marginBottom: 24 }}>
          <MapleLeaf size={12} color="var(--maple)" /> Canadian Owned & Operated
        </span>
        <h1 className="serif" style={{ marginTop: 16, marginBottom: 32, maxWidth: 900 }}>
          A small <em style={{ color: 'var(--caramel-deep)' }}>studio</em> for big ideas.
        </h1>
        <p style={{ fontSize: 'clamp(17px, 1.7vw, 22px)', color: 'var(--espresso-2)', maxWidth: 740, lineHeight: 1.5 }}>
          Latte is a small Canadian web studio. We design, build, and look after websites for small businesses across the country.
        </p>
      </div>
    </section>

    <section className="tight reveal">
      <div className="container">
        <div className="grid-split">
          <div className="placeholder-img" style={{ aspectRatio: '4/5', minHeight: 0 }}>FOUNDER PORTRAIT</div>
          <div>
            <span className="eyebrow">The Story</span>
            <h2 className="serif" style={{ marginTop: 16, marginBottom: 20 }}>Why Latte exists.</h2>
            <p style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'var(--espresso-2)', lineHeight: 1.7, marginBottom: 16 }}>The name comes from a simple observation. You can buy the beans, buy the machine, and pull a latte at home — but it never quite tastes the same as one made by a professional. The little decisions add up.</p>
            <p style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'var(--espresso-2)', lineHeight: 1.7, marginBottom: 16 }}>Websites work the same way. You can buy a builder. You can buy a template. You can technically do it yourself. But the result rarely matches what a professional team can build for you.</p>
            <p style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'var(--espresso-2)', lineHeight: 1.7 }}>Latte is built around that idea — a small, careful studio that handles the design, the build, the hosting, and the ongoing care, so your site always represents you well.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="reveal" style={{ background: 'var(--foam)' }}>
      <div className="container">
        <span className="eyebrow">Our Values</span>
        <h2 className="serif" style={{ marginTop: 12, marginBottom: 'clamp(36px, 5vw, 56px)' }}>What we <em style={{ color: 'var(--caramel-deep)' }}>stand</em> for.</h2>
        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(24px, 3vw, 32px)' }}>
          {[
            { t: 'Craft over speed', d: 'A site we ship in three weeks beats one we slap together in three days.' },
            { t: 'Small on purpose', d: 'A handful of clients each season. You get a real human, not a project manager.' },
            { t: 'Canadian, end to end', d: 'We go further than most. Domains from Canadian registrars. Sites hosted on Canadian-owned servers. When Canadian options don\'t exist, we choose privacy-focused providers, never the data-hungry defaults. We believe Canadians should support Canadians.' },
            { t: 'Honest pricing', d: 'One quote. No surprise hours, no scope-creep invoices, no upsells.' },
          ].map((v, i) => (
            <div key={i}>
              <div className="serif" style={{ fontSize: 'clamp(30px, 3.5vw, 36px)', color: 'var(--caramel)', lineHeight: 1, marginBottom: 12 }}>{(i+1).toString().padStart(2, '0')}</div>
              <h3 className="serif" style={{ fontSize: 'clamp(20px, 2.2vw, 24px)', marginBottom: 10 }}>{v.t}</h3>
              <p style={{ color: 'var(--espresso-2)', fontSize: 15 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

window.AboutPage = AboutPage;
