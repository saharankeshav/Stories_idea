import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFoundPage() {
  return (
    <div className="page-enter flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
      <Helmet>
        <title>Page Not Found — Shady Stories</title>
      </Helmet>

      <p style={{ color: '#c0392b', fontSize: '3rem', lineHeight: 1 }}>◈</p>

      <h1 className="text-2xl font-bold mt-6 mb-3" style={{ color: '#f0ece4' }}>
        Nothing here
      </h1>
      <p className="font-ui text-sm mb-8 max-w-xs leading-relaxed" style={{ color: '#4a4a58' }}>
        That page doesn't exist. If you're looking for a specific story, try entering its number on the home page.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="font-ui text-sm px-6 py-3 rounded-lg transition-colors duration-200"
          style={{ backgroundColor: '#c0392b', color: '#fff' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e74c3c')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#c0392b')}
        >
          Back to Home
        </Link>
        <Link
          to="/browse"
          className="font-ui text-sm px-6 py-3 rounded-lg border transition-colors duration-200"
          style={{ borderColor: '#2a2a35', color: '#8a8580', backgroundColor: 'transparent' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#4a4a58'; e.currentTarget.style.color = '#f0ece4' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a35'; e.currentTarget.style.color = '#8a8580' }}
        >
          Browse All Stories
        </Link>
      </div>
    </div>
  )
}
