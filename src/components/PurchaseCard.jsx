import { Link } from 'react-router-dom'

export default function PurchaseCard({ inline = false }) {
  return (
    <div
      className={`rounded-xl p-6 sm:p-8 border ${inline ? '' : 'max-w-md mx-auto'}`}
      style={{
        backgroundColor: '#0f0f18',
        borderColor: '#c0392b',
        boxShadow: '0 0 40px rgba(192,57,43,0.15)',
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span style={{ color: '#c0392b', fontSize: '1.1rem' }}>◈</span>
        <span className="font-ui text-xs tracking-widest uppercase" style={{ color: '#c0392b' }}>
          Shady Stories Premium
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold mb-1 leading-tight" style={{ color: '#f0ece4' }}>
        Unlock the Full Vault
      </h2>
      <p className="font-ui text-sm mb-5" style={{ color: '#6b6570' }}>
        One-time bundle. Yours forever.
      </p>

      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-4xl font-bold" style={{ color: '#f0ece4' }}>₹99</span>
        <span className="font-ui text-sm line-through" style={{ color: '#333340' }}>₹299</span>
        <span
          className="font-ui text-xs px-2 py-0.5 rounded"
          style={{ backgroundColor: 'rgba(192,57,43,0.15)', color: '#c0392b' }}
        >
          67% OFF
        </span>
      </div>

      <ul className="flex flex-col gap-3 mb-7">
        {[
          'A growing vault of real shady stories, updated regularly',
          'Instant access after payment',
          'All genres: haunted, betrayal, corporate, relationships',
          'No subscription — pay once, read forever',
          'Works on mobile, tablet, and desktop',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
              <circle cx="8" cy="8" r="7" stroke="#c0392b" strokeWidth="1.2"/>
              <path d="M5 8l2 2 4-4" stroke="#c0392b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-ui text-sm leading-relaxed" style={{ color: '#9a9590' }}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* BUY NOW button — wire up Razorpay / Gumroad payment here */}
      <Link
        to="/purchase"
        className="block w-full text-center py-4 rounded-lg font-ui text-sm font-bold tracking-wide transition-all duration-200"
        style={{ backgroundColor: '#c0392b', color: '#fff' }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#e74c3c'
          e.currentTarget.style.boxShadow = '0 0 32px rgba(192,57,43,0.5)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#c0392b'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        Buy Now — ₹99
      </Link>

      <p className="font-ui text-xs text-center mt-3" style={{ color: '#333340' }}>
        Secure payment · Instant delivery
      </p>
    </div>
  )
}
