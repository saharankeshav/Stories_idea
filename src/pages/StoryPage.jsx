import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import AdSlot from '../components/AdSlot'
import PurchaseCard from '../components/PurchaseCard'
import stories from '../data/stories.json'
import { UNLOCK_CODE, UNLOCK_KEY, GUMROAD_URL } from '../config'

function PremiumGate({ onUnlock }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [showInput, setShowInput] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim().toUpperCase() === UNLOCK_CODE) {
      localStorage.setItem(UNLOCK_KEY, 'true')
      onUnlock()
    } else {
      setError('Incorrect code. Check your Gumroad email for your unlock code.')
      setInput('')
    }
  }

  return (
    <div className="relative mb-10">
      {/* Blurred preview overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10,10,16,0.85) 40%, rgba(10,10,16,0.98) 100%)',
          zIndex: 1,
        }}
      />

      {/* Unlock box */}
      <div
        className="relative rounded-xl p-7 border text-center"
        style={{
          backgroundColor: '#0f0f18',
          borderColor: '#c0392b',
          boxShadow: '0 0 60px rgba(192,57,43,0.12)',
          zIndex: 2,
        }}
      >
        <span style={{ color: '#c0392b', fontSize: '1.6rem' }}>◈</span>

        <h3 className="text-lg font-bold mt-4 mb-2" style={{ color: '#f0ece4' }}>
          This is a Premium Story
        </h3>
        <p className="font-ui text-sm mb-6 leading-relaxed" style={{ color: '#6b6570' }}>
          Unlock all premium stories for a one-time payment of ₹99.
        </p>

        <a
          href={GUMROAD_URL}
          className="inline-block w-full py-3.5 rounded-lg font-ui text-sm font-bold tracking-wide mb-4 transition-all duration-200"
          style={{ backgroundColor: '#c0392b', color: '#fff' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#e74c3c' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#c0392b' }}
        >
          Unlock All Stories — ₹99
        </a>

        {!showInput ? (
          <button
            className="font-ui text-xs transition-colors duration-200"
            style={{ color: '#4a4a58' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#8a8580' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#4a4a58' }}
            onClick={() => setShowInput(true)}
          >
            Already purchased? Enter your unlock code →
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3">
            <input
              type="text"
              value={input}
              onChange={e => { setInput(e.target.value); setError('') }}
              placeholder="Enter unlock code"
              autoFocus
              className="w-full px-4 py-3 rounded-lg font-ui text-sm text-center tracking-widest uppercase"
              style={{
                backgroundColor: '#16161f',
                border: '1px solid #2a2a35',
                color: '#f0ece4',
                outline: 'none',
              }}
            />
            {error && (
              <p className="font-ui text-xs" style={{ color: '#c0392b' }}>{error}</p>
            )}
            <button
              type="submit"
              className="py-3 rounded-lg font-ui text-sm font-bold transition-all duration-200"
              style={{ backgroundColor: '#1e1e28', color: '#f0ece4' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2a2a35' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1e1e28' }}
            >
              Unlock
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function StoryPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const story = stories.find((s) => String(s.id) === String(id))
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem(UNLOCK_KEY) === 'true'
  )

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  if (!story) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-5xl mb-4">◈</p>
        <h1 className="text-2xl font-bold mb-2" style={{ color: '#f0ece4' }}>Story not found</h1>
        <p className="font-ui text-sm mb-8" style={{ color: '#4a4a58' }}>
          That story number doesn't exist in our vault.
        </p>
        <Link
          to="/"
          className="font-ui text-sm px-6 py-3 rounded-lg"
          style={{ backgroundColor: '#c0392b', color: '#fff' }}
        >
          Back to Home
        </Link>
      </div>
    )
  }

  const prevStory = stories.find((s) => s.id === story.id - 1)
  const nextStory = stories.find((s) => s.id === story.id + 1)

  const isLocked = story.isPremium && !unlocked

  // For free stories or unlocked premium: split around ad slot
  const topParagraphs = story.content.slice(0, 3)
  const bottomParagraphs = story.content.slice(3)
  // For locked premium: show only first 2 paragraphs as preview
  const previewParagraphs = story.content.slice(0, 2)

  return (
    <div className="page-enter flex-1 flex flex-col">
      <Helmet>
        <title>Shady Stories | {story.storyNumber} — {story.title}</title>
        <meta name="description" content={story.excerpt} />
        <meta property="og:title" content={`${story.storyNumber} — ${story.title} | Shady Stories`} />
        <meta property="og:description" content={story.excerpt} />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>
      <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-ui text-xs mb-8" style={{ color: '#333340' }}>
          <Link to="/" className="hover:text-stone-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/browse" className="hover:text-stone-400 transition-colors">Stories</Link>
          <span>/</span>
          <span style={{ color: '#6b6570' }}>{story.storyNumber}</span>
        </div>

        {/* Story header */}
        <header className="mb-10">
          <div
            className="font-ui text-xs tracking-widest uppercase mb-3"
            style={{ color: '#c0392b' }}
          >
            {story.storyNumber}
            {story.isPremium && (
              <span
                className="ml-3 px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'rgba(212,132,26,0.12)',
                  color: '#d4841a',
                  border: '1px solid rgba(212,132,26,0.25)',
                  fontSize: '0.65rem',
                }}
              >
                Premium
              </span>
            )}
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ color: '#f0ece4' }}
          >
            {story.title}
          </h1>
          <div className="h-px" style={{ backgroundColor: '#1e1e28' }} />
        </header>

        {isLocked ? (
          <>
            {/* Preview: first 2 paragraphs */}
            <article className="prose-story mb-2">
              {previewParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </article>

            {/* Gate */}
            <PremiumGate onUnlock={() => setUnlocked(true)} />
          </>
        ) : (
          <>
            {/* Story content — top paragraphs */}
            <article className="prose-story mb-8">
              {topParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </article>

            {/* ── In-Content Ad ─────────────────────────── */}
            <AdSlot type="inContent" className="my-8" />

            {/* Story content — remaining paragraphs */}
            <article className="prose-story mb-10">
              {bottomParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </article>

            {/* Signature / end mark */}
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px" style={{ backgroundColor: '#1e1e28' }} />
              <span style={{ color: '#c0392b', fontSize: '1.1rem' }}>◈</span>
              <div className="flex-1 h-px" style={{ backgroundColor: '#1e1e28' }} />
            </div>

            {/* ── Purchase CTA ──────────────────────────── */}
            <div className="mb-12">
              <p
                className="font-ui text-xs tracking-widest uppercase text-center mb-5"
                style={{ color: '#333340' }}
              >
                Enjoying the story?
              </p>
              <PurchaseCard inline />
            </div>

            {/* ── Bottom Ad ─────────────────────────────── */}
            <AdSlot type="bottom" className="mb-12" />
          </>
        )}

        {/* ── Prev / Next navigation ────────────────── */}
        <nav className="grid grid-cols-2 gap-4">
          {prevStory ? (
            <Link
              to={`/loading/${prevStory.id}`}
              className="rounded-xl p-4 border text-left transition-all duration-200 group"
              style={{ backgroundColor: '#16161f', borderColor: '#2a2a35' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#c0392b')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a35')}
            >
              <span className="font-ui text-xs block mb-1" style={{ color: '#4a4a58' }}>
                ← Previous
              </span>
              <span className="font-ui text-xs font-medium block leading-snug" style={{ color: '#8a8580' }}>
                {prevStory.storyNumber}
              </span>
              <span
                className="text-sm font-bold block leading-snug mt-0.5 line-clamp-2"
                style={{ color: '#f0ece4' }}
              >
                {prevStory.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextStory ? (
            <Link
              to={`/loading/${nextStory.id}`}
              className="rounded-xl p-4 border text-right transition-all duration-200"
              style={{ backgroundColor: '#16161f', borderColor: '#2a2a35' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#c0392b')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a35')}
            >
              <span className="font-ui text-xs block mb-1" style={{ color: '#4a4a58' }}>
                Next →
              </span>
              <span className="font-ui text-xs font-medium block leading-snug" style={{ color: '#8a8580' }}>
                {nextStory.storyNumber}
              </span>
              <span
                className="text-sm font-bold block leading-snug mt-0.5 line-clamp-2"
                style={{ color: '#f0ece4' }}
              >
                {nextStory.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>

      </div>
    </div>
  )
}
