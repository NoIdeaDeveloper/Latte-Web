// pages-privacy.jsx
const PrivacyPage = () => (
  <div className="page-enter">
    <section className="section-hero">
      <div className="container">
        <span className="eyebrow">Privacy Policy</span>
        <h1 className="serif" style={{ marginTop: 16, marginBottom: 32, maxWidth: 800 }}>
          Your data stays <em style={{ color: 'var(--caramel-deep)' }}>yours</em>.
        </h1>
      </div>
    </section>

    <section className="tight reveal">
      <div className="container" style={{ maxWidth: 760 }}>
        <div style={{ background: 'var(--foam)', padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 32px)', borderRadius: 12, border: '1px solid var(--line-strong)' }}>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px, 1.7vw, 20px)', color: 'var(--espresso)', lineHeight: 1.7, marginBottom: 28 }}>
            I don't track you. No cookies, no third-party analytics. When you visit this site, your browser leaves no footprint behind.
          </p>

          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px, 1.7vw, 20px)', color: 'var(--espresso)', lineHeight: 1.7, marginBottom: 28 }}>
            This site loads two external resources — <strong>React</strong> from <a href="https://hop.js.org" target="_blank" rel="noopener">hop.js</a> (via <code>cdn.hopjs.net</code>) and display fonts from <a href="https://fonts.bunny.net" target="_blank" rel="noopener">Bunny Fonts</a> (via <code>fonts.bunny.net</code>). Both CDNs are operated by Bunny.net and designed with privacy first — no cookies, no fingerprinting, no logging of visitor IPs. They are the only third-party requests your browser makes when loading this page.
          </p>

          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px, 1.7vw, 20px)', color: 'var(--espresso)', lineHeight: 1.7, marginBottom: 28 }}>
            If you send me a message, I keep it for 90 days to ensure I can follow up and reference our conversation. After that, it's permanently deleted. I don't share it, sell it, or use it for anything else — it stays between you and me.
          </p>

          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px, 1.7vw, 20px)', color: 'var(--espresso)', lineHeight: 1.7, marginBottom: 32 }}>
            I build sites with privacy by design and data minimization as core principles. A great website doesn't need to spy on its visitors to be effective — I prove that every day by creating useful, fast sites that collect only what's necessary and respect the people who use them.
          </p>

          <p style={{ color: 'var(--muted)', fontSize: 'clamp(15px, 1.4vw, 16px)', lineHeight: 1.6 }}>
            Questions? <a href="#/contact" style={{ color: 'var(--caramel-deep)' }}>Get in touch</a>.
          </p>
        </div>
      </div>
    </section>
  </div>
);
export { PrivacyPage };
