// pages-blog.jsx
import { TiltCard } from './shared.jsx';

const POSTS = [
    { slug: 'one-page-website', tag: 'Insights', date: 'Apr 22, 2026', title: 'The case against the "one-page" website', excerpt: 'Yes, single-page sites can work. No, they\'re not the answer for most small businesses.', read: '6 min' },
    { slug: 'why-good-hosting-matters', tag: 'Hosting', date: 'Apr 09, 2026', title: 'Why hosting matters more than you think', excerpt: 'Speed, reliability, and why your site\'s foundation is just as important as its design.', read: '4 min' },
    { slug: 'bakery-case-study', tag: 'Case Study', date: 'Mar 28, 2026', title: 'How a small bakery doubled their wholesale orders with one new page', excerpt: 'A case study from Maple & Birch — three weeks of work, a year of compounding results.', read: '8 min' },
    { slug: 'maintenance-checklist', tag: 'Insights', date: 'Mar 14, 2026', title: 'The website maintenance you\'re probably skipping', excerpt: 'Sites age fast when nobody looks after them. A 15-minute monthly checklist.', read: '5 min' },
    { slug: 'homepage-hero-writing', tag: 'Workshop', date: 'Feb 28, 2026', title: 'Writing a homepage hero that actually says something', excerpt: 'Drop "Welcome to our website." A four-step framework that earns the scroll.', read: '7 min' },
    { slug: 'performance-is-a-feature', tag: 'Performance', date: 'Feb 16, 2026', title: 'Performance is a feature.', excerpt: 'Image budgets, font strategy, and the tools I lean on to keep Lighthouse scores up.', read: '9 min' },
];

const BlogPage = () => {
  const posts = POSTS;
  return (
    <div className="page-enter">
      <section className="section-hero">
        <div className="container">
          <span className="eyebrow">The Journal</span>
          <h1 className="serif" style={{ marginTop: 16, marginBottom: 24 }}>Notes & <em style={{ color: 'var(--caramel-deep)' }}>insights</em>.</h1>
          <p style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'var(--espresso-2)', maxWidth: 640 }}>What I'm learning, what I'm shipping, and the occasional rant about web fonts.</p>
        </div>
      </section>
      <section className="tight reveal">
        <div className="container">
          <a href={`#/blog/${posts[0].slug}`} style={{ display: 'block', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
            <div className="grid-split center" style={{ gap: 'clamp(28px, 4vw, 48px)' }}>
              <div className="placeholder-img" style={{ aspectRatio: '4/3', minHeight: 0, borderRadius: 20 }}>Feature image</div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="tag" style={{ alignSelf: 'flex-start', marginBottom: 16 }}>Featured</span>
                <span className="mono" style={{ color: 'var(--muted)', marginBottom: 12 }}>{posts[0].tag} · {posts[0].date}</span>
                <h2 className="serif" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', marginBottom: 16 }}>{posts[0].title}</h2>
                <p style={{ color: 'var(--espresso-2)', fontSize: 'clamp(15px, 1.4vw, 17px)', marginBottom: 20 }}>{posts[0].excerpt}</p>
                <span className="mono" style={{ color: 'var(--caramel-deep)' }}>Read · {posts[0].read} →</span>
              </div>
            </div>
          </a>
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(24px, 3vw, 32px)' }}>
            {posts.slice(1).map((p, i) => (
              <a href={`#/blog/${p.slug}`} key={i} style={{ display: 'block' }}>
                <TiltCard className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="placeholder-img" style={{ minHeight: 180, marginBottom: 20 }}>Image</div>
                  <span className="mono" style={{ color: 'var(--muted)', fontSize: 11, marginBottom: 10 }}>{p.tag} · {p.date}</span>
                  <h3 className="serif" style={{ fontSize: 'clamp(18px, 1.8vw, 24px)', marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: 'var(--espresso-2)', fontSize: 14, flex: 1, marginBottom: 16 }}>{p.excerpt}</p>
                  <span className="mono" style={{ color: 'var(--caramel-deep)', fontSize: 11 }}>Read · {p.read} →</span>
                </TiltCard>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogPostPage = ({ slug }) => {
  const post = POSTS.find(p => p.slug === slug);
  if (!post) {
    return (
      <div className="page-enter">
        <section className="section-hero">
          <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">404</span>
            <h1 className="serif" style={{ marginTop: 16, marginBottom: 24, fontSize: 'clamp(40px, 6vw, 80px)' }}>
              Post not <em style={{ color: 'var(--caramel-deep)' }}>found</em>.
            </h1>
            <p className="body-lg" style={{ marginBottom: 32 }}>That article doesn't exist — it may have moved or never made it past the draft stage.</p>
            <a href="#/blog" className="btn btn-primary">Back to the Journal →</a>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="page-enter">
      <section className="section-hero">
        <div className="container" style={{ maxWidth: 880 }}>
          <a href="#/blog" className="mono" style={{ color: 'var(--caramel-deep)', display: 'inline-block', marginBottom: 28 }}>← The Journal</a>
          <div className="mono" style={{ color: 'var(--muted)', marginBottom: 16 }}>{post.tag} · {post.date} · {post.read} read</div>
          <h1 className="serif" style={{ fontSize: 'clamp(34px, 5vw, 64px)', marginBottom: 24 }}>{post.title}</h1>
          <p className="body-lg" style={{ maxWidth: 680 }}>{post.excerpt}</p>
        </div>
      </section>
      <section className="tight reveal">
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="placeholder-img" style={{ aspectRatio: '16/9', minHeight: 0, marginBottom: 40 }}>Feature image</div>
          <div className="card" style={{ textAlign: 'center', padding: 'clamp(32px, 5vw, 56px)' }}>
            <h3 className="serif" style={{ marginBottom: 12 }}>This one's still in the workshop.</h3>
            <p className="body-md" style={{ maxWidth: 520, margin: '0 auto 24px' }}>
              The full article is being written. In the meantime, if this topic is on your mind for your own site, I'm happy to talk it through.
            </p>
            <a href="#/contact" className="btn btn-ghost">Ask me about it →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export { BlogPage, BlogPostPage, POSTS };
