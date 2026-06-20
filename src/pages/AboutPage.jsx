import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function AboutPage() {
  return (
    <div className="page-enter flex-1 flex flex-col">
      <Helmet>
        <title>About — Shady Stories</title>
        <meta name="description" content="Shady Stories is a platform for real confessions, betrayals, and unexplained events — stories people tell in hushed voices." />
      </Helmet>

      <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-14">

        <div className="mb-10">
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1.25rem' }}>
            <circle cx="32" cy="32" r="28" stroke="#df4f30" strokeWidth="2.5"/>
            <circle cx="32" cy="22" r="8" fill="#df4f30"/>
            <polygon points="23,30 41,30 32,48" fill="#df4f30"/>
          </svg>
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#f4ede9' }}>
            About Shady Stories
          </h1>
          <p className="font-ui text-xs" style={{ color: '#4a4a58' }}>Real stories. Real shady.</p>
        </div>

        <div className="h-px mb-10" style={{ backgroundColor: '#1e1e28' }} />

        <div className="space-y-7 font-ui text-sm leading-relaxed" style={{ color: '#7a7570' }}>
          <p>
            Shady Stories is a platform for real, anonymous accounts — workplace betrayals, relationships that turned dark,
            suspicions that turned out to be right, and things that happened that still don't have a clean explanation.
            Every story was submitted by someone who lived it. Nothing here is invented, dramatised, or cleaned up for comfort.
          </p>
          <p>
            This is for people who've spent three hours at 2am going down a Reddit thread they can't stop reading.
            For people who feel that particular thrill when someone lowers their voice and says <em style={{ color: '#9a9590' }}>"okay, wait — I have to tell you something."</em>{' '}
            If you like true-crime energy without needing a murder — you're in the right place.
          </p>
          <p>
            New stories are added regularly. Free stories are always available to read, no account needed.
            Premium access unlocks a deeper collection — longer, more intense, the kind people were most reluctant to share.
            If you've got a story of your own, reach out. The shadier, the better.
          </p>
        </div>

        <div className="h-px my-10" style={{ backgroundColor: '#1e1e28' }} />

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/browse"
            className="font-ui text-sm px-6 py-3 rounded-lg text-center transition-colors duration-200"
            style={{ backgroundColor: '#df4f30', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e8613f')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#df4f30')}
          >
            Browse Stories
          </Link>
          <Link
            to="/contact"
            className="font-ui text-sm px-6 py-3 rounded-lg text-center border transition-colors duration-200"
            style={{ borderColor: '#2a2a35', color: '#8a8580', backgroundColor: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#4a4a58'; e.currentTarget.style.color = '#f4ede9' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a35'; e.currentTarget.style.color = '#8a8580' }}
          >
            Submit a Story
          </Link>
        </div>
      </div>
    </div>
  )
}
