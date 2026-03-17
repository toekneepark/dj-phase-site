/**
 * Decap CMS Custom Preview Templates
 * Full-page replicas matching the DJ Phase website
 */

// Shared styles — full site replica
const siteStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  body, .frame-content {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0a0a0f;
    color: #e2e8f0;
    -webkit-font-smoothing: antialiased;
  }

  .preview-wrap {
    min-height: 100vh;
    background: #0a0a0f;
  }

  /* NAV */
  .nav {
    position: sticky;
    top: 0;
    z-index: 50;
    width: 100%;
    border-bottom: 1px solid #1e1e2e;
    background: rgba(10,10,15,0.8);
    backdrop-filter: blur(16px);
  }
  .nav-inner {
    max-width: 72rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
  }
  .nav-logo {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: -0.025em;
    background: linear-gradient(135deg, #a78bfa, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
  }
  .nav-links { display: flex; align-items: center; gap: 24px; }
  .nav-link {
    font-size: 13px;
    font-weight: 500;
    color: rgba(226,232,240,0.7);
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-link:hover { color: #fff; }
  .nav-link.active { color: #fff; }
  .nav-cta {
    display: inline-flex;
    align-items: center;
    padding: 8px 20px;
    border-radius: 999px;
    background: #7c3aed;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
  }

  /* HERO */
  .hero {
    position: relative;
    overflow: hidden;
    padding: 48px 24px;
    background: linear-gradient(to bottom, rgba(124,58,237,0.05), #0a0a0f, #0a0a0f);
  }
  .hero-inner { max-width: 72rem; margin: 0 auto; }
  .hero-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #a78bfa;
    margin-bottom: 8px;
  }
  .hero h1 { font-size: 36px; font-weight: 900; }
  .gradient {
    background: linear-gradient(135deg, #a78bfa, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero .subtitle {
    margin-top: 8px;
    font-size: 16px;
    color: rgba(226,232,240,0.5);
  }

  /* SECTIONS */
  .section { border-top: 1px solid #1e1e2e; }
  .section-inner { max-width: 56rem; margin: 0 auto; padding: 48px 24px; }
  .section-alt { background: #13131a; }

  .section-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #06b6d4;
    margin-bottom: 12px;
  }
  .section-title { font-size: 22px; font-weight: 900; margin-bottom: 24px; }

  /* CARDS */
  .card {
    background: #13131a;
    border: 1px solid #1e1e2e;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 16px;
    transition: border-color 0.2s;
  }
  .card:hover { border-color: rgba(124,58,237,0.3); }
  .card-highlight { border-color: rgba(124,58,237,0.5); box-shadow: 0 0 20px rgba(124,58,237,0.1); }
  .card-on-dark { background: #0a0a0f; }

  .meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: rgba(226,232,240,0.4);
  }

  .category {
    padding: 2px 12px;
    border-radius: 999px;
    font-size: 11px;
  }
  .cat-music { background: rgba(124,58,237,0.1); color: #a78bfa; }
  .cat-bts { background: rgba(6,182,212,0.1); color: #06b6d4; }
  .cat-gear { background: rgba(124,58,237,0.1); color: #a78bfa; }
  .cat-life { background: rgba(34,197,94,0.1); color: #4ade80; }
  .cat-events { background: rgba(6,182,212,0.1); color: #06b6d4; }

  .card h2 { margin-top: 12px; font-size: 22px; font-weight: 700; }
  .body-text {
    margin-top: 12px;
    color: rgba(226,232,240,0.5);
    line-height: 1.7;
    font-size: 15px;
  }
  .body-text p { margin-bottom: 12px; }
  .body-text a { color: #a78bfa; }
  .read-more {
    display: inline-block;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #a78bfa;
  }

  /* BADGES */
  .badge {
    display: inline-block;
    padding: 4px 16px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
  }
  .badge-green { background: rgba(34,197,94,0.1); color: #4ade80; }
  .badge-purple { background: rgba(124,58,237,0.1); color: #a78bfa; }
  .badge-cyan { background: rgba(6,182,212,0.1); color: #06b6d4; }
  .badge-dim { background: rgba(226,232,240,0.05); color: rgba(226,232,240,0.4); }

  /* GIG CARD */
  .gig-card {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .gig-date {
    flex-shrink: 0;
    width: 70px;
    text-align: center;
  }
  .gig-date-text { font-size: 20px; font-weight: 900; color: #a78bfa; }
  .gig-date-sub { font-size: 11px; color: rgba(226,232,240,0.4); }
  .gig-info { flex-grow: 1; }
  .gig-info h3 { font-size: 18px; font-weight: 700; }
  .gig-info .venue { font-size: 13px; color: rgba(226,232,240,0.5); margin-top: 4px; }
  .gig-info .time { font-size: 13px; color: rgba(226,232,240,0.4); margin-top: 4px; }
  .gig-info .type { font-size: 12px; color: rgba(226,232,240,0.4); margin-top: 4px; }

  /* MEDIA */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .photo-grid img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid #1e1e2e;
  }
  .listen-btn {
    background: #7c3aed;
    color: white;
    padding: 8px 20px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
  }

  /* ABOUT */
  .profile-photo {
    width: 100%;
    max-width: 280px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 16px;
    margin: 16px 0;
  }
  .venue-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-top: 16px;
  }
  .venue-chip {
    background: #0a0a0f;
    border: 1px solid #1e1e2e;
    border-radius: 12px;
    padding: 12px;
    text-align: center;
    font-size: 13px;
    color: rgba(226,232,240,0.7);
  }

  /* FOOTER */
  .footer {
    border-top: 1px solid #1e1e2e;
    background: #13131a;
  }
  .footer-inner {
    max-width: 72rem;
    margin: 0 auto;
    padding: 48px 24px;
  }
  .footer-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer-tagline {
    margin-top: 8px;
    font-size: 13px;
    color: rgba(226,232,240,0.5);
  }
  .footer-socials { display: flex; gap: 16px; }
  .footer-socials a {
    color: rgba(226,232,240,0.5);
    font-size: 18px;
    text-decoration: none;
  }
  .footer-bottom {
    margin-top: 32px;
    padding-top: 32px;
    border-top: 1px solid #1e1e2e;
    text-align: center;
    font-size: 11px;
    color: rgba(226,232,240,0.3);
  }

  /* CTA */
  .cta-section { text-align: center; padding: 48px 24px; }
  .cta-section h2 { font-size: 22px; font-weight: 900; }
  .cta-section p { margin-top: 8px; color: rgba(226,232,240,0.5); }
  .cta-btn {
    display: inline-flex;
    margin-top: 20px;
    padding: 12px 32px;
    border-radius: 999px;
    background: #7c3aed;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 0 20px rgba(124,58,237,0.3);
  }

  /* RESPONSIVE */
  @media (max-width: 600px) {
    .nav-links { gap: 12px; }
    .nav-link { font-size: 11px; }
    .nav-cta { padding: 6px 14px; font-size: 11px; }
    .nav-logo { font-size: 16px; }
    .nav-inner { padding: 12px 16px; }

    .hero { padding: 32px 16px; }
    .hero h1 { font-size: 26px; }
    .hero .subtitle { font-size: 14px; }
    .hero-label { font-size: 10px; }

    .section-inner { padding: 32px 16px; }
    .section-title { font-size: 18px; }

    .card { padding: 16px; }
    .card h2 { font-size: 18px; margin-top: 8px; }
    .body-text { font-size: 14px; }
    .meta { flex-wrap: wrap; gap: 4px; font-size: 11px; }

    .gig-card { flex-direction: column; align-items: flex-start; gap: 12px; }
    .gig-date { width: auto; text-align: left; }
    .gig-info h3 { font-size: 16px; }

    .photo-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }

    .profile-photo { max-width: 200px; }

    .venue-grid { grid-template-columns: 1fr; }
    .venue-chip { font-size: 12px; padding: 10px; }

    .footer-inner { padding: 32px 16px; }
    .footer-top { flex-direction: column; text-align: center; gap: 16px; }
    .footer-tagline { font-size: 12px; }

    .cta-section { padding: 32px 16px; }
    .cta-section h2 { font-size: 18px; }
    .cta-btn { padding: 10px 24px; font-size: 13px; }

    .listen-btn { padding: 6px 16px; font-size: 12px; }
  }

  @media (max-width: 400px) {
    .nav-links { gap: 8px; }
    .nav-link { font-size: 10px; }
    .nav-cta { display: none; }
    .hero h1 { font-size: 22px; }
    .card h2 { font-size: 16px; }
    .photo-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

// Helper: resolve image paths
function resolveImg(src) {
  if (!src) return null;
  if (src.startsWith('blob:') || src.startsWith('http') || src.startsWith('data:')) return src;
  return '/dj-phase-site' + (src.startsWith('/') ? src : '/' + src);
}

// Nav component
function renderNav(activePage) {
  var pages = ['Home', 'About', 'Gigs', 'Media', 'Blog'];
  return h('nav', { className: 'nav' },
    h('div', { className: 'nav-inner' },
      h('span', { className: 'nav-logo' }, 'DJ PHASE'),
      h('div', { className: 'nav-links' },
        pages.map(function(p) {
          return h('span', { className: 'nav-link' + (p === activePage ? ' active' : ''), key: p }, p);
        }),
        h('span', { className: 'nav-cta' }, 'Book Now')
      )
    )
  );
}

// Footer component
function renderFooter() {
  return h('footer', { className: 'footer' },
    h('div', { className: 'footer-inner' },
      h('div', { className: 'footer-top' },
        h('div', {},
          h('span', { className: 'nav-logo' }, 'DJ PHASE'),
          h('p', { className: 'footer-tagline' }, "Seattle's Premier DJ & iHeartRadio Personality")
        ),
        h('div', { className: 'footer-socials' },
          h('span', {}, '📸'),
          h('span', {}, '𝕏'),
          h('span', {}, '☁️')
        )
      ),
      h('div', { className: 'footer-bottom' }, '© 2026 DJ Phase. All rights reserved.')
    )
  );
}

// Category class map
function catClass(cat) {
  var map = { 'Music': 'cat-music', 'Behind the Scenes': 'cat-bts', 'Gear': 'cat-gear', 'Life': 'cat-life', 'Events': 'cat-events' };
  return 'category ' + (map[cat] || 'cat-music');
}

// ============================================
// BLOG PREVIEW
// ============================================
var BlogPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || 'Untitled Post';
    var date = entry.getIn(['data', 'date']);
    var readTime = entry.getIn(['data', 'readTime']) || '3 min read';
    var category = entry.getIn(['data', 'category']) || 'Music';
    var image = resolveImg(entry.getIn(['data', 'image']));

    return h('div', { className: 'preview-wrap' },
      h('style', {}, siteStyles),
      renderNav('Blog'),

      // Hero
      h('div', { className: 'hero' },
        h('div', { className: 'hero-inner' },
          h('p', { className: 'hero-label' }, 'Thoughts & Updates'),
          h('h1', {}, 'The ', h('span', { className: 'gradient' }, 'Blog')),
          h('p', { className: 'subtitle' }, 'Music, life, and everything in between.')
        )
      ),

      // Posts
      h('div', { className: 'section' },
        h('div', { className: 'section-inner' },
          // Current post (highlighted)
          h('article', { className: 'card card-highlight' },
            h('div', { className: 'meta' },
              h('time', {}, date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No date'),
              h('span', {}, '·'),
              h('span', {}, readTime),
              h('span', { className: catClass(category) }, category)
            ),
            h('h2', {}, title),
            image && h('img', { src: image, style: { width: '100%', borderRadius: '8px', marginTop: '12px' } }),
            h('div', { className: 'body-text' }, this.props.widgetFor('body')),
            h('span', { className: 'read-more' }, 'Read more →')
          ),

          // Placeholder posts
          h('article', { className: 'card', style: { opacity: 0.4 } },
            h('div', { className: 'meta' },
              h('time', {}, 'February 15, 2026'), h('span', {}, '·'), h('span', {}, '3 min read'),
              h('span', { className: 'category cat-bts' }, 'Behind the Scenes')
            ),
            h('h2', {}, 'A Day in the Life: Radio to the Club'),
            h('p', { className: 'body-text' }, "People always ask what it's like to do radio during the week and DJ on weekends..."),
            h('span', { className: 'read-more' }, 'Read more →')
          ),
          h('article', { className: 'card', style: { opacity: 0.4 } },
            h('div', { className: 'meta' },
              h('time', {}, 'January 28, 2026'), h('span', {}, '·'), h('span', {}, '4 min read'),
              h('span', { className: 'category cat-gear' }, 'Gear')
            ),
            h('h2', {}, 'My 2026 Setup: Gear That Makes the Magic Happen'),
            h('p', { className: 'body-text' }, "Every DJ gets asked about their setup. Here's what I'm rocking this year..."),
            h('span', { className: 'read-more' }, 'Read more →')
          )
        )
      ),

      renderFooter()
    );
  }
});

// ============================================
// GIGS PREVIEW
// ============================================
var GigPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || 'Untitled Event';
    var venue = entry.getIn(['data', 'venue']) || '';
    var location = entry.getIn(['data', 'location']) || '';
    var time = entry.getIn(['data', 'time']) || '';
    var cover = entry.getIn(['data', 'cover']) || 'Free';
    var type = entry.getIn(['data', 'type']) || 'Special Event';
    var date = entry.getIn(['data', 'date']);
    var badgeClass = 'badge ' + (cover.toLowerCase() === 'free' || cover.toLowerCase() === 'no cover' ? 'badge-green' : 'badge-purple');

    return h('div', { className: 'preview-wrap' },
      h('style', {}, siteStyles),
      renderNav('Gigs'),

      // Hero
      h('div', { className: 'hero' },
        h('div', { className: 'hero-inner' },
          h('p', { className: 'hero-label' }, 'Live Shows'),
          h('h1', {}, 'Where to Find ', h('span', { className: 'gradient' }, 'DJ Phase')),
          h('p', { className: 'subtitle' }, 'Catch me live at these venues and events.')
        )
      ),

      // Current gig
      h('div', { className: 'section' },
        h('div', { className: 'section-inner' },
          h('p', { className: 'section-label' }, type === 'Weekly Residency' ? 'Every Week' : 'Upcoming'),
          h('h2', { className: 'section-title' }, type === 'Weekly Residency' ? 'Weekly Residencies' : 'Upcoming Events'),

          h('div', { className: 'card card-highlight gig-card' },
            h('div', { className: 'gig-date' },
              h('p', { className: 'gig-date-text' },
                date ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase() : 'TBD')
            ),
            h('div', { className: 'gig-info' },
              h('h3', {}, title),
              h('p', { className: 'venue' }, '📍 ' + venue + (location ? ' · ' + location : '')),
              time && h('p', { className: 'time' }, '🕘 ' + time),
              h('p', { className: 'type' }, type)
            ),
            h('span', { className: badgeClass }, cover)
          ),
          this.props.widgetFor('body') && h('div', { className: 'card', style: { marginTop: '8px', marginBottom: '24px' } },
            h('div', { className: 'body-text' }, this.props.widgetFor('body'))
          ),

          // Placeholder gigs
          h('div', { className: 'card gig-card', style: { opacity: 0.4 } },
            h('div', { className: 'gig-date' },
              h('p', { className: 'gig-date-text' }, 'FRI'),
              h('p', { className: 'gig-date-sub' }, 'Every Week')
            ),
            h('div', { className: 'gig-info' },
              h('h3', {}, 'FUEGO Fridays'),
              h('p', { className: 'venue' }, '📍 Fuego Bar & Lounge · Seattle, WA')
            ),
            h('span', { className: 'badge badge-green' }, 'FREE Entry')
          ),
          h('div', { className: 'card gig-card', style: { opacity: 0.4 } },
            h('div', { className: 'gig-date' },
              h('p', { style: { fontSize: '20px', fontWeight: 900, color: '#06b6d4' } }, 'FRI &'),
              h('p', { style: { fontSize: '20px', fontWeight: 900, color: '#06b6d4' } }, 'SAT')
            ),
            h('div', { className: 'gig-info' },
              h('h3', {}, 'Legion Sports Bar'),
              h('p', { className: 'venue' }, '📍 700 Bellevue Way NE · Bellevue, WA')
            ),
            h('span', { className: 'badge badge-green' }, 'No Cover')
          )
        )
      ),

      // Booking CTA
      h('div', { className: 'section' },
        h('div', { className: 'cta-section' },
          h('h2', {}, 'Want DJ Phase at Your Event?'),
          h('p', {}, 'Weddings, corporate events, private parties, festivals — let\'s make it happen.'),
          h('span', { className: 'cta-btn' }, 'Book Now')
        )
      ),

      renderFooter()
    );
  }
});

// ============================================
// MEDIA PREVIEW
// ============================================
var MediaPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || 'Untitled';
    var type = entry.getIn(['data', 'type']) || 'Photo';
    var url = entry.getIn(['data', 'url']) || '';
    var thumbSrc = resolveImg(entry.getIn(['data', 'thumbnail']));
    var date = entry.getIn(['data', 'date']);

    return h('div', { className: 'preview-wrap' },
      h('style', {}, siteStyles),
      renderNav('Media'),

      // Hero
      h('div', { className: 'hero' },
        h('div', { className: 'hero-inner' },
          h('p', { className: 'hero-label' }, 'Gallery'),
          h('h1', {}, 'Photos & ', h('span', { className: 'gradient' }, 'Videos')),
          h('p', { className: 'subtitle' }, 'Highlights from the decks, the stage, and behind the scenes.')
        )
      ),

      // Content based on type
      type === 'Mix' ? (
        h('div', { className: 'section' },
          h('div', { className: 'section-inner' },
            h('h2', { className: 'section-title' }, 'Mixes'),
            h('div', { className: 'card card-highlight', style: { display: 'flex', alignItems: 'center', gap: '16px' } },
              thumbSrc && h('img', { src: thumbSrc, style: { width: '64px', height: '64px', borderRadius: '8px', objectFit: 'cover' } }),
              h('div', { style: { flexGrow: 1 } },
                h('h3', { style: { fontSize: '18px', fontWeight: 700 } }, title),
                date && h('p', { style: { fontSize: '13px', color: 'rgba(226,232,240,0.4)', marginTop: '4px' } },
                  new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))
              ),
              url && h('span', { className: 'listen-btn' }, 'Listen')
            ),
            this.props.widgetFor('body') && h('div', { className: 'body-text', style: { marginTop: '12px' } }, this.props.widgetFor('body'))
          )
        )
      ) : type === 'Video' ? (
        h('div', { className: 'section' },
          h('div', { className: 'section-inner' },
            h('h2', { className: 'section-title' }, 'Videos'),
            h('div', { className: 'card card-highlight' },
              url ? h('div', { style: { aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px' } },
                h('iframe', { src: url.replace('watch?v=', 'embed/'), style: { width: '100%', height: '100%', border: 'none' }, allowFullScreen: true })
              ) : thumbSrc ? h('img', { src: thumbSrc, style: { width: '100%', borderRadius: '8px', marginBottom: '12px' } }) : null,
              h('h3', { style: { fontSize: '18px', fontWeight: 700 } }, title),
              this.props.widgetFor('body') && h('div', { className: 'body-text', style: { marginTop: '12px' } }, this.props.widgetFor('body'))
            )
          )
        )
      ) : (
        // Photo — show in a grid context
        h('div', { className: 'section section-alt' },
          h('div', { className: 'section-inner' },
            h('h2', { className: 'section-title' }, 'Photos'),
            h('div', { className: 'photo-grid' },
              // All existing photos — the current one gets highlighted
              (function() {
                var base = '/dj-phase-site/images/';
                var existingPhotos = [
                  { src: base + 'crowd-blue.jpg', alt: 'DJ Phase performing - crowd with blue lights' },
                  { src: base + 'crowd-lucky-strike.jpg', alt: 'DJ Phase at Lucky Strike Lanes' },
                  { src: base + 'djphase-decks.jpg', alt: 'DJ Phase behind the decks' },
                  { src: base + 'headshot-1.jpg', alt: 'DJ Phase portrait' },
                  { src: base + 'headshot-2.jpg', alt: 'DJ Phase' },
                  { src: base + 'headshot-3.jpg', alt: 'DJ Phase - dramatic lighting' },
                  { src: base + 'headshot-4.jpg', alt: 'DJ Phase - close up' },
                ];
                // Check if current thumbnail matches any existing photo
                var currentThumb = thumbSrc;
                var matched = false;
                var cells = existingPhotos.map(function(p) {
                  var isCurrentEdit = currentThumb && currentThumb.indexOf(p.src.split('/').pop()) !== -1;
                  if (isCurrentEdit) matched = true;
                  return h('img', {
                    src: isCurrentEdit && currentThumb ? currentThumb : p.src,
                    alt: p.alt,
                    key: p.src,
                    style: isCurrentEdit ? { border: '3px solid rgba(167,139,250,0.9)', boxShadow: '0 0 30px rgba(124,58,237,0.6), 0 0 60px rgba(124,58,237,0.3)' } : {}
                  });
                });
                // If it's a brand new photo not matching existing ones, add it at the end
                if (!matched && currentThumb) {
                  cells.push(h('img', {
                    src: currentThumb,
                    alt: title,
                    key: 'new',
                    style: { border: '3px solid rgba(167,139,250,0.9)', boxShadow: '0 0 30px rgba(124,58,237,0.6), 0 0 60px rgba(124,58,237,0.3)' }
                  }));
                }
                return cells;
              })()
            ),
            h('div', { style: { marginTop: '16px' } },
              h('p', { style: { fontWeight: 700, fontSize: '16px' } }, title),
              this.props.widgetFor('body') && h('div', { className: 'body-text' }, this.props.widgetFor('body'))
            )
          )
        )
      ),

      renderFooter()
    );
  }
});

// ============================================
// ABOUT PREVIEW
// ============================================
var AboutPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var name = entry.getIn(['data', 'title']) || 'DJ Phase';
    var tagline = entry.getIn(['data', 'tagline']) || '';
    var photo = resolveImg(entry.getIn(['data', 'photo']));
    var venues = entry.getIn(['data', 'venues']);

    return h('div', { className: 'preview-wrap' },
      h('style', {}, siteStyles),
      renderNav('About'),

      // Hero
      h('div', { className: 'hero' },
        h('div', { className: 'hero-inner' },
          h('p', { className: 'hero-label' }, 'The Story'),
          h('h1', {}, 'About ', h('span', { className: 'gradient' }, name))
        )
      ),

      // Bio section
      h('div', { className: 'section' },
        h('div', { className: 'section-inner', style: { display: 'flex', gap: '40px', flexWrap: 'wrap' } },
          // Left: Photo
          photo && h('div', { style: { flexShrink: 0 } },
            h('img', { src: photo, className: 'profile-photo' })
          ),
          // Right: Bio text
          h('div', { style: { flex: 1, minWidth: '250px' } },
            h('p', { style: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#a78bfa', marginBottom: '8px' } }, 'Legendary'),
            h('h2', { style: { fontSize: '22px', fontWeight: 900, marginBottom: '16px' } }, 'The Man Behind the Decks'),
            h('div', { className: 'body-text' }, this.props.widgetFor('body')),
            tagline && h('p', { style: { fontStyle: 'italic', color: 'rgba(226,232,240,0.4)', marginTop: '20px', borderLeft: '3px solid #7c3aed', paddingLeft: '16px' } },
              '"' + tagline + '" — ' + name)
          )
        )
      ),

      // Venues
      venues && venues.size > 0 && h('div', { className: 'section section-alt' },
        h('div', { className: 'section-inner' },
          h('p', { className: 'section-label', style: { color: '#a78bfa' } }, 'Experience'),
          h('h2', { className: 'section-title' }, 'Notable Venues'),
          h('div', { className: 'venue-grid' },
            venues.map(function(v) { return h('div', { className: 'venue-chip', key: v }, v); })
          )
        )
      ),

      // CTA
      h('div', { className: 'section' },
        h('div', { className: 'cta-section' },
          h('h2', {}, 'Want to Work Together?'),
          h('p', {}, 'Weddings, corporate events, private parties — let\'s talk.'),
          h('span', { className: 'cta-btn' }, 'Book Now')
        )
      ),

      renderFooter()
    );
  }
});

// Register all previews
CMS.registerPreviewTemplate('blog', BlogPreview);
CMS.registerPreviewTemplate('gigs', GigPreview);
CMS.registerPreviewTemplate('media', MediaPreview);
CMS.registerPreviewTemplate('bio', AboutPreview);
