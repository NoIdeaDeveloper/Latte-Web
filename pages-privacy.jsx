// pages-privacy.jsx
const PrivacyPage = () => (
  <div className="page-fade">
    <section style={{ padding: 'clamp(56px, 8vw, 80px) 0 clamp(32px, 5vw, 40px)' }}>
      <div className="container">
        <span className="eyebrow">Privacy Policy</span>
        <h1 className="serif" style={{ marginTop: 16, marginBottom: 24 }}>Your data stays <em style={{ color: 'var(--caramel-deep)' }}>yours</em>.</h1>
      </div>
    </section>
    <section className="tight reveal">
      <div className="container" style={{ maxWidth: 720 }}>
        <p style={{ color: 'var(--espresso-2)', fontSize: 'clamp(16px, 1.6vw, 18px)', lineHeight: 1.75, marginBottom: 24 }}>
          We don't track you. No cookies, no hidden scripts, no third-party analytics. When you visit this site, your browser leaves no footprint behind.
        </p>
        <p style={{ color: 'var(--espresso-2)', fontSize: 'clamp(16px, 1.6vw, 18px)', lineHeight: 1.75, marginBottom: 24 }}>
          If you send us a message, we keep it for 90 days to ensure we can follow up and reference our conversation. After that, it's permanently deleted. We don't share it, sell it, or use it for anything else — it stays between you and us.
        </p>
        <p style={{ color: 'var(--espresso-2)', fontSize: 'clamp(16px, 1.6vw, 18px)', lineHeight: 1.75, marginBottom: 24 }}>
          We build sites with privacy by design and data minimization as core principles. A great website doesn't need to spy on its visitors to be effective — we prove that every day by creating useful, fast sites that collect only what's necessary and respect the people who use them.
        </p>
        <p style={{ color: 'var(--muted)', fontSize: 14, marginTop: 32 }}>
          Questions? <a href="#/contact" style={{ color: 'var(--caramel-deep)' }}>Get in touch</a>.
        </p>
      </div>
    </section>
  </div>
);
window.PrivacyPage = PrivacyPage;
