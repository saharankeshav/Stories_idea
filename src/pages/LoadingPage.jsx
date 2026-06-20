import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AdSlot from '../components/AdSlot'
import stories from '../data/stories.json'

const MESSAGES = [
  'Pulling up the file…',
  'Verifying the story number…',
  'Almost there…',
]

export default function LoadingPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [msgIdx, setMsgIdx] = useState(0)
  const [progress, setProgress] = useState(0)

  const story = stories.find((s) => String(s.id) === String(id))

  useEffect(() => {
    if (!story) {
      navigate('/', { replace: true })
      return
    }

    // Cycle through loading messages
    const msgInterval = setInterval(() => {
      setMsgIdx((i) => (i + 1) % MESSAGES.length)
    }, 800)

    // Progress bar fills over 2.4 seconds
    const start = Date.now()
    const duration = 2400
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min((elapsed / duration) * 100, 100)
      setProgress(pct)
      if (pct >= 100) clearInterval(progressInterval)
    }, 30)

    // Redirect after 2.6 seconds
    const timeout = setTimeout(() => {
      navigate(`/story/${id}`, { replace: true })
    }, 2600)

    return () => {
      clearInterval(msgInterval)
      clearInterval(progressInterval)
      clearTimeout(timeout)
    }
  }, [id, story, navigate])

  if (!story) return null

  return (
    <div
      className="flex-1 flex flex-col items-center justify-center px-4 py-16"
      style={{ minHeight: '80vh' }}
    >
      {/* Ad slot at top of interstitial */}
      {/* INSERT interstitial ad network code in AdSlot component */}
      <div className="w-full max-w-md mb-12">
        <AdSlot type="interstitial" />
      </div>

      {/* Loading indicator */}
      <div className="text-center max-w-xs fade-in">
        {/* Spinning logo */}
        <div className="relative w-16 h-16 mx-auto mb-8">
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ animation: 'spin 2s linear infinite' }}
            viewBox="0 0 64 64"
          >
            <circle
              cx="32" cy="32" r="28"
              stroke="#2a2a35"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="32" cy="32" r="28"
              stroke="#c0392b"
              strokeWidth="2"
              fill="none"
              strokeDasharray="88 88"
              strokeDashoffset="22"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span style={{ color: '#c0392b', fontSize: '1.4rem' }}>◈</span>
          </div>
        </div>

        <p
          className="font-bold text-lg mb-2 transition-all duration-300"
          style={{ color: '#f0ece4' }}
        >
          {story.storyNumber}
        </p>
        <p
          className="font-ui text-sm mb-8 transition-all duration-300"
          style={{ color: '#4a4a58' }}
        >
          {MESSAGES[msgIdx]}
        </p>

        {/* Progress bar */}
        <div
          className="w-full h-0.5 rounded-full overflow-hidden"
          style={{ backgroundColor: '#1e1e28' }}
        >
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              backgroundColor: '#c0392b',
              boxShadow: '0 0 8px rgba(192,57,43,0.6)',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
