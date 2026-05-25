// shared.jsx — Logo, Nav, Footer, HouseOutline, MapleLeaf

const MapleLeaf = ({ size = 12, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} aria-hidden="true">
    <path d="M12 2 L13.2 6.8 L17 5 L15.5 9 L20 9.5 L17 12 L21 14 L16 14.8 L17 18 L13 17 L12 22 L11 17 L7 18 L8 14.8 L3 14 L7 12 L4 9.5 L8.5 9 L7 5 L10.8 6.8 Z"/>
  </svg>
);

const HouseOutline = ({ size = 280, dark = false }) => {
  const lineColor = dark ? 'var(--cream)' : 'var(--espresso)';
  const accentColor = 'var(--caramel)';
  return (
    <svg viewBox="0 0 220 200" width={size} height={size * 0.9} style={{ overflow: 'visible' }}>
      {/* Foundation */}
      <rect x="42" y="174" width="136" height="8" rx="2" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.5" />
      <line x1="20" y1="182" x2="200" y2="182" stroke={accentColor} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* Main structure */}
      <rect x="48" y="54" width="124" height="124" fill="none" stroke={lineColor} strokeWidth="2" rx="2" />
      {/* Roof */}
      <path d="M28 60 L110 10 L192 60" fill="none" stroke={lineColor} strokeWidth="2" strokeLinejoin="round" />
      <line x1="30" y1="58" x2="190" y2="58" stroke={lineColor} strokeWidth="1" opacity="0.3" />
      {/* Chimney */}
      <rect x="140" y="20" width="16" height="36" rx="1" fill="none" stroke={lineColor} strokeWidth="1.5" />
      <line x1="142" y1="20" x2="154" y2="20" stroke={lineColor} strokeWidth="2" strokeLinecap="round" />
      {/* Chimney smoke */}
      <path d="M148 20 Q152 14 148 8 Q144 2 148 -4" fill="none" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M154 16 Q158 10 154 4 Q150 -2 154 -8" fill="none" stroke={accentColor} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      {/* Structural 'bones' lines */}
      <line x1="110" y1="54" x2="110" y2="178" stroke={accentColor} strokeWidth="1" opacity="0.35" strokeDasharray="5 4" />
      <line x1="48" y1="54" x2="172" y2="178" stroke={accentColor} strokeWidth="1" opacity="0.2" strokeDasharray="5 4" />
      <line x1="172" y1="54" x2="48" y2="178" stroke={accentColor} strokeWidth="1" opacity="0.2" strokeDasharray="5 4" />
      {/* Horizontal floor lines */}
      <line x1="48" y1="110" x2="172" y2="110" stroke={accentColor} strokeWidth="0.75" opacity="0.18" strokeDasharray="4 4" />
      {/* Door */}
      <rect x="94" y="124" width="32" height="54" rx="2" fill="none" stroke={lineColor} strokeWidth="1.5" />
      <circle cx="120" cy="152" r="2" fill={accentColor} opacity="0.6" />
      {/* Windows with mullions */}
      <rect x="58" y="78" width="22" height="22" rx="1" fill="none" stroke={lineColor} strokeWidth="1.2" />
      <line x1="69" y1="78" x2="69" y2="100" stroke={lineColor} strokeWidth="0.7" opacity="0.5" />
      <line x1="58" y1="89" x2="80" y2="89" stroke={lineColor} strokeWidth="0.7" opacity="0.5" />
      <rect x="140" y="78" width="22" height="22" rx="1" fill="none" stroke={lineColor} strokeWidth="1.2" />
      <line x1="151" y1="78" x2="151" y2="100" stroke={lineColor} strokeWidth="0.7" opacity="0.5" />
      <line x1="140" y1="89" x2="162" y2="89" stroke={lineColor} strokeWidth="0.7" opacity="0.5" />
    </svg>
  );
};

const HouseIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 10L12 3l9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const Logo = ({ size = 26, dark = false }) => (
  <a href="#/" className="logo" style={{ fontSize: size }}>
    <span className="logo-mark"><HouseIcon size={size * 1.1} /></span>
    <span>Good Bones</span>
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
  const [scrolled, setScrolled] = React.useState(false);
  const [underline, setUnderline] = React.useState(null);
  const navLinksRef = React.useRef(null);
  const ctaMagnetRef = React.useRef(null);

  React.useEffect(() => {
    setOpen(false);
    document.body.classList.remove('menu-open');
  }, [route]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); document.body.classList.remove('menu-open'); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const updateUnderline = React.useCallback((e) => {
    const link = e.target.closest('a');
    if (!link) { setUnderline(null); return; }
    const navRect = navLinksRef.current.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setUnderline({ left: linkRect.left - navRect.left, width: linkRect.width });
  }, []);
  const clearUnderline = React.useCallback(() => setUnderline(null), []);

  const handleMagneticMove = React.useCallback((e) => {
    const el = ctaMagnetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);
  const handleMagneticLeave = React.useCallback(() => {
    if (ctaMagnetRef.current) ctaMagnetRef.current.style.transform = 'translate(0, 0)';
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className="nav">
        <div className="nav-inner">
          <Logo size={scrolled ? 22 : 26} />
          <div ref={navLinksRef} className="nav-links"
               onMouseMove={updateUnderline}
               onMouseLeave={clearUnderline}>
            {underline && (
              <div className="nav-underline" style={{ left: underline.left, width: underline.width }} />
            )}
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
            <div ref={ctaMagnetRef} onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}
                 style={{ transition: 'transform 0.2s ease-out' }}>
              <a href="#/contact" className="btn btn-primary">
                Start a project →
              </a>
            </div>
            <button
              className="menu-btn"
              onClick={() => {
                const next = !open;
                setOpen(next);
                document.body.classList.toggle('menu-open', next);
              }}
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
          Start a project →
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
          <span className="logo" style={{ color: 'var(--cream)', fontSize: 30, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="logo-mark"><HouseIcon size={33} /></span>
            <span>Good Bones</span>
          </span>
          <p style={{ marginTop: 18, opacity: 0.75, fontSize: 14, maxWidth: 280 }}>
            A one-person Canadian studio that designs, builds, and looks after websites for small businesses. Solid foundations, beautiful results — built in Edmonton, end to end.
          </p>
          <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--caramel)' }}>
            <MapleLeaf size={14} color="var(--maple)" />
            Proudly Canadian
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#/services">Web Design</a></li>
            <li><a href="#/services">Site Care</a></li>
            <li><a href="#/services">Hosting</a></li>
            <li><a href="#/pricing">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4>Studio</h4>
          <ul>
            <li><a href="#/about">About</a></li>
            <li><a href="#/blog">Journal</a></li>
            <li><a href="#/faq">FAQ</a></li>
            <li><a href="#/contact">Contact</a></li>
            <li><a href="#/privacy">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h4>Reach Out</h4>
          <ul>
            <li><a href="mailto:hello@goodbonesweb.ca">hello@goodbonesweb.ca</a></li>
            <li>Edmonton, AB</li>
            <li>Open Mon–Fri</li>
            <li>9am – 5pm MT</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Good Bones Web. All rights reserved.</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          Built in Canada, end to end <MapleLeaf size={12} color="var(--caramel)" />
        </span>
      </div>
    </div>
  </footer>
);

export { Logo, Nav, Footer, HouseOutline, HouseIcon, MapleLeaf, NAV_ITEMS, TiltCard, CountOnView };

// ── New interactive components ──────────────────────────────────────────────────

const TiltCard = ({ children, className = '', ...props }) => {
  const ref = React.useRef(null);
  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0 });

  const onMouseMove = React.useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ ry: x * 8, rx: -y * 8 });
  }, []);
  const onMouseLeave = React.useCallback(() => setTilt({ rx: 0, ry: 0 }), []);

  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return <div className={className} {...props}>{children}</div>;
  }

  const { style: userStyle, ...rest } = props;
  return (
    <div ref={ref} className={`tilt-card ${className}`}
         onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
         style={{ ...userStyle, transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
         {...rest}>
      {children}
    </div>
  );
};

const CountOnView = ({ target, suffix = '', duration = 2000, style }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const decimals = target % 1 !== 0;
        const animate = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = eased * target;
          setCount(decimals ? val : Math.round(val));
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(target);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  const decimals = target % 1 !== 0;
  const display = decimals ? count.toFixed(1) : Math.round(count);

  return (
    <span ref={ref} className="serif" style={style}>
      {display}{suffix}
    </span>
  );
};

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

  const root = document.getElementById('root');
  if (root) new MutationObserver(observe).observe(root, { childList: true });

  window.addEventListener('hashchange', () =>
    requestAnimationFrame(() => requestAnimationFrame(observe))
  );
}());

// ── Global button ripple ─────────────────────────────────────────────────────
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    if (prefersReduced) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    btn.appendChild(ripple);
    const cleanup = () => ripple.remove();
    ripple.addEventListener('animationend', cleanup);
    setTimeout(cleanup, 700);
  });
}());
