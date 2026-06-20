import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="mt-auto w-full py-10 px-4"
      style={{
        borderTop: '1px solid #1e1e28',
        backgroundColor: '#0a0a0f',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span style={{ color: '#c0392b', fontSize: '1.2rem' }}>◈</span>
          <span className="font-ui font-bold text-sm" style={{ color: '#f0ece4' }}>
            Shady Stories
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-5">
          {[
            { label: 'About', to: '/about' },
            { label: 'Browse', to: '/browse' },
            { label: 'Contact', to: '/contact' },
            { label: 'Privacy Policy', to: '/privacy' },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="font-ui text-xs tracking-wide transition-colors duration-200"
              style={{ color: '#4a4a58' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8a8580')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4a4a58')}
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="font-ui text-xs" style={{ color: '#333340' }}>
          © {new Date().getFullYear()} Shady Stories
        </p>
      </div>
    </footer>
  )
}
