import { Helmet } from 'react-helmet-async'

export default function ContactPage() {
  return (
    <div className="page-enter flex-1 flex flex-col">
      <Helmet>
        <title>Contact — Shady Stories</title>
        <meta name="description" content="Got a story to share, a question, or found a bug? Reach out to Shady Stories." />
      </Helmet>

      <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-14">

        <div className="mb-10">
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1.25rem' }}>
            <circle cx="32" cy="32" r="28" stroke="#df4f30" strokeWidth="2.5"/>
            <circle cx="32" cy="22" r="8" fill="#df4f30"/>
            <polygon points="23,30 41,30 32,48" fill="#df4f30"/>
          </svg>
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#f4ede9' }}>Contact</h1>
        </div>

        <div className="h-px mb-10" style={{ backgroundColor: '#1e1e28' }} />

        <p className="font-ui text-sm leading-relaxed mb-8" style={{ color: '#7a7570' }}>
          Got a story to share, a question, or found a bug? Reach out.
        </p>

        <a
          href="mailto:shadystoriesindia@gmail.com"
          className="font-ui text-sm font-medium transition-colors duration-200"
          style={{ color: '#df4f30' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#e8613f')}
          onMouseLeave={e => (e.currentTarget.style.color = '#df4f30')}
        >
          shadystoriesindia@gmail.com
        </a>

        <div className="h-px mt-10" style={{ backgroundColor: '#1e1e28' }} />
      </div>
    </div>
  )
}
