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
  "palette": "bone",
  "metaphor": "balanced",
  "heroVariant": "default"
}/*EDITMODE-END*/;

const PALETTES = {
  bone:    { cream: '#F7F4EE', foam: '#FFFFFF', espresso: '#2B2219', caramel: '#C4754E', caramelDeep: '#A85C38' },
  dusk:    { cream: '#1C1815', foam: '#292420', espresso: '#F7F4EE', caramel: '#D4936E', caramelDeep: '#E0A880' },
  clay:    { cream: '#FAF5F0', foam: '#FDF9F5', espresso: '#3D2B1E', caramel: '#D4845A', caramelDeep: '#B5683E' },
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
    const p = PALETTES[tweaks.palette] || PALETTES.bone;
    const r = document.documentElement.style;
    r.setProperty('--cream', p.cream);
    r.setProperty('--foam', p.foam);
    r.setProperty('--espresso', p.espresso);
    r.setProperty('--ink', p.espresso);
    r.setProperty('--caramel', p.caramel);
    r.setProperty('--caramel-deep', p.caramelDeep);
    if (tweaks.palette === 'dusk') {
      r.setProperty('--espresso-2', '#C4B6A8');
      r.setProperty('--muted', '#8C7D6F');
      r.setProperty('--line', 'rgba(247, 244, 238, 0.1)');
      r.setProperty('--line-strong', 'rgba(247, 244, 238, 0.2)');
    } else {
      r.setProperty('--espresso-2', '#5C4E40');
      r.setProperty('--muted', '#7A6C5E');
      r.setProperty('--line', 'rgba(43, 34, 25, 0.12)');
      r.setProperty('--line-strong', 'rgba(43, 34, 25, 0.22)');
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
      <TweaksPanel title="Good Bones Tweaks">
        <TweakSection label="Brand" />
        <TweakSelect label="Palette" value={tweaks.palette}
          options={[
            { value: 'bone',  label: 'Bone (Default)' },
            { value: 'dusk',  label: 'Dusk (Dark)' },
            { value: 'clay',  label: 'Clay (Warm)' },
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
