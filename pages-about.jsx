// pages-about.jsx — About page

import { MapleLeaf } from './shared.jsx';

const AboutPage = () => (
  <div className="page-enter">
    <section className="section-hero">
      <div className="container">
        <span className="canadian-badge" style={{ marginBottom: 24 }}>
          <MapleLeaf size={12} color="var(--maple)" /> Canadian Owned & Operated
        </span>
        <h1 className="serif" style={{ marginTop: 16, marginBottom: 32, maxWidth: 900 }}>
          A one-person studio with <em style={{ color: 'var(--caramel-deep)' }}>solid</em> foundations.
        </h1>
        <p style={{ fontSize: 'clamp(17px, 1.7vw, 22px)', color: 'var(--espresso-2)', maxWidth: 740, lineHeight: 1.5 }}>
          Good Bones Web is a one-person studio based in Edmonton, Alberta. I design, build, and look after websites for small businesses across Canada — one project at a time, with full attention and real care.
        </p>
      </div>
    </section>

    <section className="tight reveal">
      <div className="container">
        <div className="grid-split">
          <div className="placeholder-img" style={{ aspectRatio: '4/5', minHeight: 0 }}>Founder portrait</div>
          <div>
            <span className="eyebrow">The Story</span>
            <h2 className="serif" style={{ marginTop: 16, marginBottom: 20 }}>Why Good Bones exists.</h2>
            <p className="body-md" style={{ marginBottom: 16 }}>You know the saying — good bones. A house with nothing rotten, nothing hidden, built to last. Websites work the same way. Anyone can throw up a template. A site that loads fast, looks polished, and actually brings in customers? That takes structure. Craft. Care.</p>
            <p className="body-md" style={{ marginBottom: 16 }}>Good Bones Web is one person — me — handling design, build, hosting, and ongoing care. No hand-offs. No account managers. Just work I'm proud to put my name on.</p>
            <p className="body-md">A handful of clients at a time. Honest pricing. Canadian-owned, end to end.</p>
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
            { t: 'Craft over speed', d: 'A site done right in three weeks beats one slapped together in three days.' },
            { t: 'Small on purpose', d: 'A handful of clients at a time. You get a real human — me — not an account manager.' },
            { t: 'Honest pricing', d: 'One quote. No surprise hours, no scope-creep invoices, no upsells. What we agree on is what you pay.' },
            { t: 'Canadian, end to end', d: 'Based in Edmonton and built on Canadian values. Domains from Canadian registrars, sites hosted on Canadian servers. When Canadian options don\'t exist, I choose privacy-focused providers — never the data-hungry defaults.' },
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

export { AboutPage };
