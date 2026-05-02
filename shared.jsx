// shared.jsx — Logo, Nav, Footer, CoffeeCup, MapleLeaf

const MapleLeaf = ({ size = 12, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} aria-hidden="true">
    <path d="M12 2 L13.2 6.8 L17 5 L15.5 9 L20 9.5 L17 12 L21 14 L16 14.8 L17 18 L13 17 L12 22 L11 17 L7 18 L8 14.8 L3 14 L7 12 L4 9.5 L8.5 9 L7 5 L10.8 6.8 Z"/>
  </svg>
);

const CoffeeCup = ({ size = 280, withSteam = true, dark = false }) => {
  const cupColor = dark ? 'var(--cream)' : 'var(--espresso)';
  const liquid = dark ? 'var(--caramel)' : 'var(--caramel-deep)';
  const foam = 'var(--foam)';
  return (
    <div className="cup" style={{ width: size, height: size * 1.1 }}>
      {withSteam && (
        <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', width: 90, height: 80 }}>
          <div className={`steam s1 ${dark ? 'steam-dark' : ''}`} />
          <div className={`steam s2 ${dark ? 'steam-dark' : ''}`} />
          <div className={`steam s3 ${dark ? 'steam-dark' : ''}`} />
        </div>
      )}
      <svg viewBox="0 0 200 220" width={size} height={size * 1.1} style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Saucer */}
        <ellipse cx="100" cy="200" rx="85" ry="10" fill={cupColor} opacity="0.18" />
        <ellipse cx="100" cy="195" rx="80" ry="9" fill={cupColor} />
        {/* Cup body */}
        <path d="M30 90 Q30 80 40 80 L160 80 Q170 80 170 90 L162 175 Q160 192 142 192 L58 192 Q40 192 38 175 Z" fill={cupColor} />
        {/* Handle */}
        <path d="M170 100 Q200 100 200 130 Q200 160 170 160 L170 145 Q185 145 185 130 Q185 115 170 115 Z" fill={cupColor} />
        {/* Cup interior */}
        <ellipse cx="100" cy="86" rx="65" ry="10" fill={dark ? '#1A0F0A' : '#1A0F0A'} />
        {/* Liquid */}
        <ellipse cx="100" cy="86" rx="60" ry="8" fill={liquid} />
        {/* Foam dots / latte art */}
        <ellipse cx="100" cy="86" rx="40" ry="5.5" fill={foam} opacity="0.95" />
        <circle cx="100" cy="86" r="3" fill={liquid} opacity="0.6" />
        <path d="M75 86 Q100 80 125 86" stroke={liquid} strokeWidth="0.8" fill="none" opacity="0.5" />
      </svg>
    </div>
  );
};

const Logo = ({ size = 26 }) => (
  <a href="#/" className="logo" style={{ fontSize: size }}>
    <span className="logo-mark" style={{ width: size * 1.23, height: size * 1.23 }} />
    <span>Latte</span>
  </a>
);

const NAV_ITEMS = [
  { href: '#/services', label: 'Services' },
  { href: '#/pricing', label: 'Pricing' },
  { href: '#/about', label: 'About' },
  { href: '#/blog', label: 'Journal' },
  { href: '#/faq', label: 'FAQ' },
  { href: '#/contact', label: 'Contact' },
];

const Nav = ({ route }) => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { setOpen(false); }, [route]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className="nav">
        <div className="nav-inner">
          <Logo />
          <div className="nav-links">
            {NAV_ITEMS.map(item => {
              const isActive = route === item.href.slice(2);
              return (
                <a key={item.href} href={item.href}
                   className={isActive ? 'active' : ''}
                   aria-current={isActive ? 'page' : undefined}>
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="nav-cta">
            <a href="#/contact" className="btn btn-primary">Order a site →</a>
            <button
              className="menu-btn"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span />
            </button>
          </div>
        </div>
      </nav>
      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        {NAV_ITEMS.map(item => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}
             tabIndex={open ? 0 : -1}>
            {item.label}
          </a>
        ))}
        <a href="#/contact" onClick={() => setOpen(false)}
           tabIndex={open ? 0 : -1}
           style={{ marginTop: 16, color: 'var(--caramel-deep)' }}>
          Order a site →
        </a>
      </div>
    </>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <Logo size={30} />
          <p style={{ marginTop: 18, opacity: 0.75, fontSize: 14, maxWidth: 280 }}>
            A small studio that designs, builds, and looks after websites for small businesses. Brewed fresh, served daily.
          </p>
          <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--caramel)' }}>
            <MapleLeaf size={14} color="var(--maple)" />
            Proudly Canadian
          </div>
        </div>
        <div>
          <h4>The Menu</h4>
          <ul>
            <li><a href="#/services">Web Design</a></li>
            <li><a href="#/services">Site Management</a></li>
            <li><a href="#/services">Hosting</a></li>
            <li><a href="#/pricing">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4>The Cafe</h4>
          <ul>
            <li><a href="#/about">About</a></li>
            <li><a href="#/blog">Journal</a></li>
            <li><a href="#/faq">FAQ</a></li>
            <li><a href="#/contact">Contact</a></li>
            <li><a href="#/privacy">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li><a href="mailto:hello@latte.studio">hello@latte.studio</a></li>
            <li><a href="tel:+18885288393">1-888-LATTE-WEB</a></li>
            <li>Open Mon–Fri</li>
            <li>9am – 6pm ET</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Latte Web Co. All rights reserved.</span>
        <span>Brewed with care in Canada 🍁</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Logo, Nav, Footer, CoffeeCup, MapleLeaf, NAV_ITEMS });

// ── Scroll-reveal engine ─────────────────────────────────────────────────────
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
    }),
    { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
  );

  function observe() {
    document.querySelectorAll('.reveal:not(.revealed), .reveal-stagger:not(.revealed)')
      .forEach(el => io.observe(el));
  }

  // Fire whenever React commits children to #root — catches both the initial
  // render (which happens long after this script runs, due to Babel compile
  // time) and subsequent route changes (key={route} on <main> swaps the node).
  const root = document.getElementById('root');
  if (root) new MutationObserver(observe).observe(root, { childList: true });

  // Belt-and-suspenders: also re-scan two frames after every hashchange
  window.addEventListener('hashchange', () =>
    requestAnimationFrame(() => requestAnimationFrame(observe))
  );
}());
