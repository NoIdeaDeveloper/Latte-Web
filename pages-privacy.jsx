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
            We don't track you. No cookies, no hidden scripts, no third-party analytics. When you visit this site, your browser leaves no footprint behind.
          </p>

          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px, 1.7vw, 20px)', color: 'var(--espresso)', lineHeight: 1.7, marginBottom: 28 }}>
            If you send us a message, we keep it for 90 days to ensure we can follow up and reference our conversation. After that, it's permanently deleted. We don't share it, sell it, or use it for anything else — it stays between you and us.
          </p>

          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px, 1.7vw, 20px)', color: 'var(--espresso)', lineHeight: 1.7, marginBottom: 32 }}>
            We build sites with privacy by design and data minimization as core principles. A great website doesn't need to spy on its visitors to be effective — we prove that every day by creating useful, fast sites that collect only what's necessary and respect the people who use them.
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
