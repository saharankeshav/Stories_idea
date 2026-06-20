import { Link } from 'react-router-dom'

export default function StoryCard({ story }) {
  const { id, storyNumber, title, excerpt, isPremium } = story

  return (
    <Link
      to={`/loading/${id}`}
      className="block rounded-xl p-5 border card-hover group"
      style={{
        backgroundColor: '#16161f',
        borderColor: '#2a2a35',
        textDecoration: 'none',
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className="font-ui text-xs tracking-widest uppercase"
          style={{ color: '#4a4a58' }}
        >
          {storyNumber}
        </span>
        {isPremium && (
          <span
            className="font-ui text-xs tracking-wide px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: 'rgba(212,132,26,0.12)',
              color: '#d4841a',
              border: '1px solid rgba(212,132,26,0.25)',
            }}
          >
            Premium
          </span>
        )}
      </div>

      <h3
        className="font-bold text-base mb-2 leading-snug transition-colors duration-200"
        style={{ color: '#f0ece4' }}
      >
        {title}
      </h3>

      <p
        className="font-ui text-sm leading-relaxed line-clamp-3"
        style={{ color: '#6b6570' }}
      >
        {excerpt}
      </p>

      <div
        className="mt-4 flex items-center gap-1.5 font-ui text-xs font-medium transition-colors duration-200"
        style={{ color: '#c0392b' }}
      >
        Read story
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6h7M7 3.5L9.5 6 7 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  )
}
