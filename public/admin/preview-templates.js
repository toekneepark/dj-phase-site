/**
 * Decap CMS Custom Preview Templates
 * Styles the preview pane to match the DJ Phase site look & feel
 */

// Shared styles that mimic the site
const siteStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  body, .frame-content {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0a0a0f;
    color: #e2e8f0;
    -webkit-font-smoothing: antialiased;
  }

  .preview-container {
    min-height: 100vh;
    background: #0a0a0f;
    padding: 0;
  }

  .hero {
    padding: 48px 24px;
    background: linear-gradient(to bottom, rgba(124,58,237,0.05), #0a0a0f);
  }

  .hero .label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #a78bfa;
    margin-bottom: 8px;
  }

  .hero h1 {
    font-size: 36px;
    font-weight: 900;
    color: #e2e8f0;
  }

  .hero h1 .gradient {
    background: linear-gradient(135deg, #a78bfa, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero .subtitle {
    margin-top: 8px;
    font-size: 16px;
    color: rgba(226,232,240,0.5);
  }

  .content {
    padding: 32px 24px;
    max-width: 800px;
  }

  .card {
    background: #13131a;
    border: 1px solid #1e1e2e;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 12px;
  }

  .card:hover { border-color: rgba(124,58,237,0.3); }

  .card .meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: rgba(226,232,240,0.4);
  }

  .card .category {
    background: rgba(124,58,237,0.1);
    color: #a78bfa;
    padding: 2px 12px;
    border-radius: 999px;
    font-size: 11px;
  }

  .card h2 {
    margin-top: 12px;
    font-size: 22px;
    font-weight: 700;
    color: #e2e8f0;
  }

  .card .body-text {
    margin-top: 12px;
    color: rgba(226,232,240,0.5);
    line-height: 1.7;
    font-size: 15px;
  }

  .card .body-text p { margin-bottom: 12px; }
  .card .body-text a { color: #a78bfa; text-decoration: none; }
  .card .body-text a:hover { color: #fff; }

  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 0 24px 32px;
  }

  .photo-grid img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid #1e1e2e;
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

  .badge {
    display: inline-block;
    padding: 4px 16px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
  }

  .badge-green {
    background: rgba(34,197,94,0.1);
    color: #4ade80;
  }

  .badge-purple {
    background: rgba(124,58,237,0.1);
    color: #a78bfa;
  }

  .badge-cyan {
    background: rgba(6,182,212,0.1);
    color: #06b6d4;
  }

  .profile-photo {
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 16px;
    margin: 16px 0;
  }

  .tagline {
    font-style: italic;
    color: rgba(226,232,240,0.4);
    margin-top: 16px;
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
    margin-top: 8px;
  }
`;

// --- Blog Post Preview ---
const BlogPreview = createClass({
  render: function () {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']) || 'Untitled Post';
    const date = entry.getIn(['data', 'date']);
    const readTime = entry.getIn(['data', 'readTime']) || '3 min read';
    const category = entry.getIn(['data', 'category']) || 'Music';

    return h('div', { className: 'preview-container' },
      h('style', {}, siteStyles),
      h('div', { className: 'hero' },
        h('p', { className: 'label' }, 'Thoughts & Updates'),
        h('h1', {}, 'The ', h('span', { className: 'gradient' }, 'Blog')),
      ),
      h('div', { className: 'content' },
        h('div', { className: 'card' },
          h('div', { className: 'meta' },
            h('time', {}, date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No date'),
            h('span', {}, '·'),
            h('span', {}, readTime),
            h('span', { className: 'category' }, category),
          ),
          h('h2', {}, title),
          h('div', { className: 'body-text' }, this.props.widgetFor('body')),
        ),
      ),
    );
  },
});

// --- Gig Preview ---
const GigPreview = createClass({
  render: function () {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']) || 'Untitled Event';
    const venue = entry.getIn(['data', 'venue']) || '';
    const location = entry.getIn(['data', 'location']) || '';
    const time = entry.getIn(['data', 'time']) || '';
    const cover = entry.getIn(['data', 'cover']) || 'Free';
    const type = entry.getIn(['data', 'type']) || 'Special Event';
    const date = entry.getIn(['data', 'date']);

    const badgeClass = cover.toLowerCase() === 'free' || cover.toLowerCase() === 'no cover' ? 'badge badge-green' : 'badge badge-purple';

    return h('div', { className: 'preview-container' },
      h('style', {}, siteStyles),
      h('div', { className: 'hero' },
        h('p', { className: 'label' }, 'Live Shows'),
        h('h1', {}, 'Where to Find ', h('span', { className: 'gradient' }, 'DJ Phase')),
      ),
      h('div', { className: 'content' },
        h('div', { className: 'card', style: { display: 'flex', gap: '20px', alignItems: 'center' } },
          h('div', { style: { flexShrink: 0, width: '70px', textAlign: 'center' } },
            h('p', { style: { fontSize: '20px', fontWeight: 900, color: '#a78bfa' } },
              date ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase() : 'TBD'
            ),
          ),
          h('div', { style: { flexGrow: 1 } },
            h('h2', { style: { marginTop: 0, fontSize: '18px' } }, title),
            h('p', { style: { fontSize: '13px', color: 'rgba(226,232,240,0.5)', marginTop: '4px' } }, '📍 ' + venue + ' · ' + location),
            time && h('p', { style: { fontSize: '13px', color: 'rgba(226,232,240,0.4)', marginTop: '4px' } }, '🕘 ' + time),
            h('p', { style: { fontSize: '12px', color: 'rgba(226,232,240,0.4)', marginTop: '4px' } }, type),
          ),
          h('span', { className: badgeClass }, cover),
        ),
        this.props.widgetFor('body') && h('div', { className: 'card' },
          h('div', { className: 'body-text' }, this.props.widgetFor('body')),
        ),
      ),
    );
  },
});

// Helper: resolve image paths (handles both /images/... and blob URLs from uploads)
function resolveImg(src) {
  if (!src) return null;
  if (src.startsWith('blob:') || src.startsWith('http')) return src;
  // Prepend base path for local images
  return '/dj-phase-site' + (src.startsWith('/') ? src : '/' + src);
}

// --- Media Preview ---
const MediaPreview = createClass({
  render: function () {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']) || 'Untitled';
    const type = entry.getIn(['data', 'type']) || 'Photo';
    const url = entry.getIn(['data', 'url']) || '';
    const thumbSrc = resolveImg(entry.getIn(['data', 'thumbnail']));
    const date = entry.getIn(['data', 'date']);

    return h('div', { className: 'preview-container' },
      h('style', {}, siteStyles),
      h('div', { className: 'hero' },
        h('p', { className: 'label' }, 'Gallery'),
        h('h1', {}, 'Photos & ', h('span', { className: 'gradient' }, 'Videos')),
      ),
      h('div', { className: 'content' },
        type === 'Mix' ? (
          h('div', { className: 'card', style: { display: 'flex', alignItems: 'center', gap: '16px' } },
            thumbSrc && h('img', { src: thumbSrc, style: { width: '64px', height: '64px', borderRadius: '8px', objectFit: 'cover' } }),
            h('div', { style: { flexGrow: 1 } },
              h('h2', { style: { marginTop: 0, fontSize: '18px' } }, title),
              date && h('p', { style: { fontSize: '13px', color: 'rgba(226,232,240,0.4)', marginTop: '4px' } },
                new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })),
            ),
            url && h('a', { className: 'listen-btn', href: url }, 'Listen'),
          )
        ) : type === 'Video' ? (
          h('div', { className: 'card' },
            url ? h('div', { style: { aspectRatio: '16/9', marginBottom: '12px', borderRadius: '8px', overflow: 'hidden' } },
              h('iframe', { src: url.replace('watch?v=', 'embed/'), style: { width: '100%', height: '100%', border: 'none' }, allowFullScreen: true })
            ) : thumbSrc ? h('img', { src: thumbSrc, style: { width: '100%', borderRadius: '8px', marginBottom: '12px' } }) : null,
            h('h2', { style: { marginTop: 0 } }, title),
            this.props.widgetFor('body') && h('div', { className: 'body-text', style: { marginTop: '12px' } }, this.props.widgetFor('body')),
          )
        ) : (
          h('div', {},
            thumbSrc && h('div', { style: { display: 'inline-block', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e1e2e' } },
              h('img', { src: thumbSrc, style: { width: '100%', maxWidth: '400px', display: 'block' } }),
            ),
            h('div', { className: 'card', style: { marginTop: '12px' } },
              h('h2', { style: { marginTop: 0 } }, title),
              h('span', { className: 'badge badge-purple' }, type),
              this.props.widgetFor('body') && h('div', { className: 'body-text', style: { marginTop: '12px' } }, this.props.widgetFor('body')),
            ),
          )
        ),
      ),
    );
  },
});

// --- About/Bio Preview ---
const AboutPreview = createClass({
  render: function () {
    const entry = this.props.entry;
    const name = entry.getIn(['data', 'title']) || 'DJ Phase';
    const tagline = entry.getIn(['data', 'tagline']) || '';
    const photo = resolveImg(entry.getIn(['data', 'photo']));
    const venues = entry.getIn(['data', 'venues']);

    return h('div', { className: 'preview-container' },
      h('style', {}, siteStyles),
      h('div', { className: 'hero' },
        h('p', { className: 'label' }, 'The Story'),
        h('h1', {}, 'About ', h('span', { className: 'gradient' }, name)),
      ),
      h('div', { className: 'content' },
        photo && h('img', { src: photo, className: 'profile-photo' }),
        h('div', { className: 'card' },
          h('p', { style: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#a78bfa', marginBottom: '8px' } }, 'Legendary'),
          h('h2', { style: { marginTop: 0 } }, 'The Man Behind the Decks'),
          h('div', { className: 'body-text' }, this.props.widgetFor('body')),
          tagline && h('p', { className: 'tagline' }, '"' + tagline + '" — ' + name),
        ),
        venues && venues.size > 0 && h('div', { style: { marginTop: '24px' } },
          h('h2', { style: { fontSize: '20px', fontWeight: 900, marginBottom: '16px' } }, 'Notable Venues'),
          h('div', { className: 'venue-grid' },
            venues.map((v) => h('div', { className: 'venue-chip', key: v }, v)),
          ),
        ),
      ),
    );
  },
});

// Register all previews
CMS.registerPreviewTemplate('blog', BlogPreview);
CMS.registerPreviewTemplate('gigs', GigPreview);
CMS.registerPreviewTemplate('media', MediaPreview);
// For 'files' type collections, register by file name
CMS.registerPreviewTemplate('bio', AboutPreview);
