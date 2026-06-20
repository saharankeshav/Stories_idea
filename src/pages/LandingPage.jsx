import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SearchBar from '../components/SearchBar'
import AdSlot from '../components/AdSlot'
import StoryCard from '../components/StoryCard'
import stories from '../data/stories.json'

export default function LandingPage() {
  const featuredStories = stories.slice(0, 3)

  return (
    <div className="page-enter flex-1 flex flex-col">
      <Helmet>
        <title>Shady Stories — True Stories Told in the Dark</title>
        <meta name="description" content="Real stories. Real shady. Enter a story number from our Instagram reels or browse the full vault of true, unexplained accounts." />
        <meta property="og:title" content="Shady Stories — True Stories Told in the Dark" />
        <meta property="og:description" content="Real stories. Real shady. Browse our growing vault of true, unexplained accounts." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-4 py-20 sm:py-28 overflow-hidden"
        style={{ minHeight: '88vh' }}
      >
        {/* Ambient glow behind title */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(192,57,43,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Eyebrow badge */}
        <div
          className="font-ui text-xs tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full inline-flex items-center gap-2"
          style={{
            backgroundColor: 'rgba(192,57,43,0.1)',
            border: '1px solid rgba(192,57,43,0.25)',
            color: '#c0392b',
          }}
        >
          <span className="pulse-slow inline-block w-1.5 h-1.5 rounded-full bg-red-600" />
          True Stories. Told in the Dark.
        </div>

        {/* Logo / Site name */}
        <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-4 tracking-tight">
          <span className="text-gradient">Shady</span>
          <br />
          <span style={{ color: '#f0ece4' }}>Stories</span>
        </h1>

        <p
          className="font-ui text-base sm:text-lg max-w-sm sm:max-w-md mb-3 leading-relaxed"
          style={{ color: '#6b6570' }}
        >
          Real stories. Real shady.
        </p>
        <p
          className="font-ui text-sm max-w-xs sm:max-w-sm mb-10 leading-relaxed"
          style={{ color: '#4a4a58' }}
        >
          Enter the story number from our Instagram reel to dive straight in.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-sm sm:max-w-md">
          <SearchBar autoFocus />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-sm sm:max-w-md mt-7 mb-7">
          <div className="flex-1 h-px" style={{ backgroundColor: '#1e1e28' }} />
          <span className="font-ui text-xs" style={{ color: '#333340' }}>OR</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#1e1e28' }} />
        </div>

        {/* Browse All button */}
        <Link
          to="/browse"
          className="font-ui text-sm tracking-wide px-7 py-3 rounded-lg border transition-all duration-200"
          style={{
            borderColor: '#2a2a35',
            color: '#8a8580',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#4a4a58'
            e.currentTarget.style.color = '#f0ece4'
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#2a2a35'
            e.currentTarget.style.color = '#8a8580'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          Browse All Stories →
        </Link>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span className="font-ui text-xs" style={{ color: '#2a2a35' }}>scroll</span>
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            className="pulse-slow"
            style={{ color: '#2a2a35' }}
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ── Ad Banner ─────────────────────────────────── */}
      <section className="px-4 pb-6 max-w-5xl mx-auto w-full">
        {/* INSERT ad network script in AdSlot component */}
        <AdSlot type="banner" />
      </section>

      {/* ── Featured Stories ──────────────────────────── */}
      <section className="px-4 pb-16 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#f0ece4' }}>
              Featured Stories
            </h2>
            <p className="font-ui text-sm" style={{ color: '#4a4a58' }}>
              Start here if you're new.
            </p>
          </div>
          <Link
            to="/browse"
            className="font-ui text-xs tracking-wide transition-colors duration-200"
            style={{ color: '#c0392b' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#e74c3c')}
            onMouseLeave={e => (e.currentTarget.style.color = '#c0392b')}
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      {/* ── Why Shady Stories ─────────────────────────── */}
      <section
        className="px-4 py-16"
        style={{ backgroundColor: '#0d0d14', borderTop: '1px solid #1e1e28', borderBottom: '1px solid #1e1e28' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#f0ece4' }}>
            Why people can't stop reading
          </h2>
          <p className="font-ui text-base leading-relaxed mb-10" style={{ color: '#4a4a58' }}>
            These aren't fiction. They are real accounts from real people — neighbors, strangers,
            colleagues — who experienced something they can't explain and wrote it down.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: '👁',
                title: 'Real Accounts',
                body: 'Every story is based on a genuine submission. Nothing is invented for effect.',
              },
              {
                icon: '🔕',
                title: 'No Filler',
                body: 'Short, punchy, and paced for the midnight scroll. Each story lands exactly once.',
              },
              {
                icon: '🔒',
                title: 'Vault Unlocked',
                body: 'Unlock the full vault with a one-time payment. No subscription, no renewal.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl p-5 border"
                style={{ backgroundColor: '#16161f', borderColor: '#2a2a35' }}
              >
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-bold mb-2 text-base" style={{ color: '#f0ece4' }}>{title}</h3>
                <p className="font-ui text-sm leading-relaxed" style={{ color: '#4a4a58' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ─────────────────────────────────── */}
      <section className="px-4 py-14 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#f0ece4' }}>
            Ready to go deeper?
          </h2>
          <p className="font-ui text-sm mb-7" style={{ color: '#4a4a58' }}>
            Unlock our growing vault of stories for ₹99. One-time. No expiry.
          </p>
          <Link
            to="/purchase"
            className="inline-block px-8 py-4 rounded-lg font-ui text-sm font-bold tracking-wide transition-all duration-200 glow-red"
            style={{ backgroundColor: '#c0392b', color: '#fff' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#e74c3c'
              e.currentTarget.style.boxShadow = '0 0 36px rgba(192,57,43,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#c0392b'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(192,57,43,0.3)'
            }}
          >
            Unlock All Stories — ₹99
          </Link>
        </div>
      </section>

    </div>
  )
}
