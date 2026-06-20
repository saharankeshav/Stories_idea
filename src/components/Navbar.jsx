import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle = (path) =>
    `font-ui text-sm tracking-wide transition-colors duration-200 ${
      pathname === path
        ? 'text-red-500'
        : 'text-stone-400 hover:text-stone-100'
    }`

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: 'rgba(10,10,15,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1e1e28',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <svg
            width="26"
            height="26"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0, filter: 'drop-shadow(0 0 6px rgba(223,79,48,0.45))' }}
          >
            <circle cx="32" cy="32" r="28" stroke="#df4f30" strokeWidth="2.5"/>
            <circle cx="32" cy="22" r="8" fill="#df4f30"/>
            <polygon points="23,30 41,30 32,48" fill="#df4f30"/>
          </svg>
          <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.05rem', letterSpacing: '0.03em', lineHeight: 1 }}>
            <span style={{ color: '#f4ede9' }}>SHADY </span>
            <span style={{ color: '#df4f30' }}>STORIES</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6">
          <Link to="/" className={linkStyle('/')}>Home</Link>
          <Link to="/browse" className={linkStyle('/browse')}>Browse</Link>
          <Link to="/purchase" className={`font-ui text-sm tracking-wide px-4 py-1.5 rounded transition-all duration-200 glow-red`}
            style={{
              backgroundColor: '#c0392b',
              color: '#fff',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e74c3c')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#c0392b')}
          >
            Get Premium
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 rounded transition-colors"
          style={{ color: '#8a8580' }}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="sm:hidden px-4 pb-4 flex flex-col gap-4"
          style={{ borderTop: '1px solid #1e1e28' }}
        >
          <Link to="/" className={`${linkStyle('/')} pt-4`} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/browse" className={linkStyle('/browse')} onClick={() => setMenuOpen(false)}>Browse</Link>
          <Link
            to="/purchase"
            className="font-ui text-sm font-medium text-center py-2.5 rounded"
            style={{ backgroundColor: '#c0392b', color: '#fff' }}
            onClick={() => setMenuOpen(false)}
          >
            Get Premium
          </Link>
        </div>
      )}
    </header>
  )
}
