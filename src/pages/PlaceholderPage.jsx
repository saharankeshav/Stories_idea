import { Link, useLocation } from 'react-router-dom'

const PAGES = {
  '/about': {
    title: 'About Shady Stories',
    body: 'Shady Stories started as an Instagram series sharing real, unbelievable accounts from everyday people. What began as a late-night project grew into a community of readers who couldn\'t get enough of the truth hiding in plain sight. This platform is the next chapter.',
  },
  '/contact': {
    title: 'Contact',
    body: 'Have a shady story of your own? Want to collaborate? Reach us at shadystoriesindia@gmail.com — we read every submission.',
  },
  '/privacy': {
    title: 'Privacy Policy',
    body: 'We collect only what\'s necessary: email addresses for delivery of purchased content, and anonymous analytics to understand how the site is used. We do not sell your data. We do not share it. Full policy details coming soon.',
  },
}

export default function PlaceholderPage() {
  const { pathname } = useLocation()
  const page = PAGES[pathname] ?? { title: 'Page', body: 'Coming soon.' }

  return (
    <div className="page-enter flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
      <div
        className="w-full max-w-lg rounded-2xl p-10 border"
        style={{ backgroundColor: '#16161f', borderColor: '#2a2a35' }}
      >
        <span style={{ color: '#c0392b', fontSize: '1.8rem' }}>◈</span>
        <h1 className="text-2xl font-bold mt-5 mb-4" style={{ color: '#f0ece4' }}>
          {page.title}
        </h1>
        <p className="font-ui text-sm leading-relaxed mb-8" style={{ color: '#6b6570' }}>
          {page.body}
        </p>
        <Link
          to="/"
          className="font-ui text-sm px-6 py-2.5 rounded-lg transition-colors duration-200"
          style={{ backgroundColor: '#c0392b', color: '#fff' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e74c3c')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#c0392b')}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
