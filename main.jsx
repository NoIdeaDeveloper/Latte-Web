import { useTweaks, TweaksPanel, TweakSection, TweakSelect, TweakButton } from './tweaks-panel.jsx';
import { Logo, Nav, Footer } from './shared.jsx';
import { HomePage } from './pages-home.jsx';
import { ServicesPage, PricingPage } from './pages-services.jsx';
import { AboutPage } from './pages-about.jsx';
import { FAQPage } from './pages-faq.jsx';
import { BlogPage } from './pages-blog.jsx';
import { ContactPage } from './pages-contact.jsx';
import { PrivacyPage } from './pages-privacy.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "modern",
  "metaphor": "balanced",
  "heroVariant": "default"
}/*EDITMODE-END*/;

const PALETTES = {
  warm:    { cream: '#F5EFE6', foam: '#FAF6F0', espresso: '#2B1810', caramel: '#C68B59', caramelDeep: '#A86C3D' },
  moody:   { cream: '#1F1612', foam: '#2A1F19', espresso: '#F5EFE6', caramel: '#D9A574', caramelDeep: '#E8B780' },
  modern:  { cream: '#F4F1EC', foam: '#FFFFFF', espresso: '#1A1A1A', caramel: '#C7553A', caramelDeep: '#A8442E' },
  maple:   { cream: '#F5EFE6', foam: '#FAF6F0', espresso: '#2B1810', caramel: '#B8392E', caramelDeep: '#8E2A22' },
};

const useHashRoute = () => {
  const [route, setRoute] = React.useState(() => (location.hash || '#/').slice(2) || '');
  React.useEffect(() => {
    const onHash = () => {
      setRoute((location.hash || '#/').slice(2) || '');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const route = useHashRoute();

  React.useEffect(() => {
    const p = PALETTES[tweaks.palette] || PALETTES.warm;
    const r = document.documentElement.style;
    r.setProperty('--cream', p.cream);
    r.setProperty('--foam', p.foam);
    r.setProperty('--espresso', p.espresso);
    r.setProperty('--ink', p.espresso);
    r.setProperty('--caramel', p.caramel);
    r.setProperty('--caramel-deep', p.caramelDeep);
    if (tweaks.palette === 'moody') {
      r.setProperty('--espresso-2', '#D8CDB8');
      r.setProperty('--muted', '#9C8A78');
      r.setProperty('--line', 'rgba(245, 239, 230, 0.1)');
      r.setProperty('--line-strong', 'rgba(245, 239, 230, 0.2)');
    } else {
      r.setProperty('--espresso-2', '#3D261A');
      r.setProperty('--muted', '#7A6A5C');
      r.setProperty('--line', 'rgba(43, 24, 16, 0.12)');
      r.setProperty('--line-strong', 'rgba(43, 24, 16, 0.22)');
    }
  }, [tweaks.palette]);

  const mainRef = React.useRef(null);
  React.useEffect(() => {
    if (mainRef.current) mainRef.current.focus();
  }, [route]);

  let Page;
  switch (route) {
    case 'services': Page = ServicesPage; break;
    case 'pricing':  Page = PricingPage;  break;
    case 'about':    Page = AboutPage;    break;
    case 'blog':     Page = BlogPage;     break;
    case 'faq':      Page = FAQPage;      break;
    case 'contact':  Page = ContactPage;  break;
    case 'privacy':  Page = PrivacyPage;  break;
    default:         Page = HomePage;
  }

  return (
    <>
      <Nav route={route} />
      <main key={route} id="main-content" tabIndex="-1" ref={mainRef} style={{ outline: 'none' }}><Page /></main>
      <Footer />
      <TweaksPanel title="Latte Tweaks">
        <TweakSection label="Brand" />
        <TweakSelect label="Palette" value={tweaks.palette}
          options={[
            { value: 'warm',   label: 'Warm Cafe' },
            { value: 'moody',  label: 'Moody / Dark' },
            { value: 'modern', label: 'Modern Indie' },
            { value: 'maple',  label: 'Canadian Maple' },
          ]}
          onChange={v => setTweak('palette', v)} />
        <TweakSection label="Quick links" />
        <TweakButton label="Home"     onClick={() => location.hash = '#/'} secondary />
        <TweakButton label="Services" onClick={() => location.hash = '#/services'} secondary />
        <TweakButton label="Pricing"  onClick={() => location.hash = '#/pricing'} secondary />
        <TweakButton label="About"    onClick={() => location.hash = '#/about'} secondary />
        <TweakButton label="FAQ"      onClick={() => location.hash = '#/faq'} secondary />
        <TweakButton label="Blog"     onClick={() => location.hash = '#/blog'} secondary />
        <TweakButton label="Contact"  onClick={() => location.hash = '#/contact'} secondary />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
