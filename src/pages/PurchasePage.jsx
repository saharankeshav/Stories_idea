import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { GUMROAD_URL } from '../config'

const FAQ = [
  {
    q: 'What do I get after purchasing?',
    a: 'Instant access to our growing collection of exclusive shady stories. You\'ll receive a confirmation with your access link immediately after payment. No waiting, no accounts required.',
  },
  {
    q: 'Is this a subscription? Will I be charged again?',
    a: 'No subscription. Ever. You pay ₹99 once and own every story in the vault forever. Any new stories added are also yours at no extra cost.',
  },
  {
    q: 'What is the refund policy?',
    a: 'Since this is a digital product with instant delivery, we generally do not offer refunds. However, if you have a genuine issue — wrong order, technical problem — reach out within 48 hours and we\'ll make it right.',
  },
  {
    q: 'How will I receive the stories?',
    a: 'After payment, you\'ll get an email with a private link to the full story vault. The link works on any device — phone, tablet, desktop. No app download needed.',
  },
  {
    q: 'Are the stories really true?',
    a: 'Every story is based on a genuine submission from a real person. We lightly edit for clarity and pacing, but we never fabricate events. Some details are changed to protect identities.',
  },
]

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className="border-b"
      style={{ borderColor: '#1e1e28' }}
    >
      <button
        className="w-full text-left py-5 flex items-center justify-between gap-4 font-ui text-sm font-medium transition-colors duration-200"
        style={{ color: isOpen ? '#f0ece4' : '#8a8580' }}
        onClick={onToggle}
      >
        <span>{q}</span>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className="shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5 fade-in">
          <p className="font-ui text-sm leading-relaxed" style={{ color: '#6b6570' }}>
            {a}
          </p>
        </div>
      )}
    </div>
  )
}

export default function PurchasePage() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)

  return (
    <div className="page-enter flex-1 flex flex-col">
      <Helmet>
        <title>Unlock the Full Vault — Shady Stories</title>
        <meta name="description" content="One-time payment of ₹99 unlocks our entire vault of real, unexplained shady stories. No subscription. Yours forever." />
        <meta property="og:title" content="Unlock the Full Vault — Shady Stories" />
        <meta property="og:description" content="One-time ₹99. Unlock our entire vault of real, unexplained stories. No subscription." />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-12">

        {/* Page header */}
        <div className="text-center mb-12">
          <div
            className="font-ui text-xs tracking-widest uppercase mb-4 inline-block px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(192,57,43,0.1)',
              border: '1px solid rgba(192,57,43,0.25)',
              color: '#c0392b',
            }}
          >
            One-time offer
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f0ece4' }}>
            Unlock the Full Vault
          </h1>
          <p className="font-ui text-base" style={{ color: '#4a4a58' }}>
            A growing collection of stories that will keep you up at night. Pay once. Read forever.
          </p>
        </div>

        {/* Pricing card + side benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">

          {/* Pricing card */}
          <div
            className="rounded-2xl p-7 sm:p-9 border"
            style={{
              backgroundColor: '#0f0f18',
              borderColor: '#c0392b',
              boxShadow: '0 0 60px rgba(192,57,43,0.15)',
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span style={{ color: '#c0392b' }}>◈</span>
              <span className="font-ui text-xs tracking-widest uppercase" style={{ color: '#c0392b' }}>
                Premium Bundle
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-1" style={{ color: '#f0ece4' }}>
              Shady Stories Bundle
            </h2>
            <p className="font-ui text-sm mb-6" style={{ color: '#4a4a58' }}>
              A growing vault of real, unfiltered accounts
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-5xl font-bold" style={{ color: '#f0ece4' }}>₹99</span>
              <div>
                <span className="font-ui text-base line-through block" style={{ color: '#2a2a35' }}>₹299</span>
                <span
                  className="font-ui text-xs px-2 py-0.5 rounded"
                  style={{ backgroundColor: 'rgba(192,57,43,0.15)', color: '#c0392b' }}
                >
                  67% OFF
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-3.5 mb-8">
              {[
                'A growing vault of exclusive shady stories',
                'Instant access after payment',
                'New stories added regularly',
                'Read on any device',
                'No account needed',
                'Pay once — own forever',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#c0392b" strokeWidth="1.2" fill="rgba(192,57,43,0.06)"/>
                    <path d="M5 8l2 2 4-4" stroke="#c0392b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-ui text-sm leading-relaxed" style={{ color: '#9a9590' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* BUY NOW — wire up Razorpay / Gumroad / payment link here */}
            <button
              className="w-full py-4 rounded-xl font-ui text-sm font-bold tracking-wide transition-all duration-200"
              style={{ backgroundColor: '#c0392b', color: '#fff' }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#e74c3c'
                e.currentTarget.style.boxShadow = '0 0 36px rgba(192,57,43,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#c0392b'
                e.currentTarget.style.boxShadow = 'none'
              }}
              onClick={() => { window.location.href = GUMROAD_URL }}
            >
              Buy Now — ₹99
            </button>

            <div className="mt-4 flex items-center justify-center gap-4">
              {['🔒 Secure', '⚡ Instant', '💸 One-time'].map((t) => (
                <span key={t} className="font-ui text-xs" style={{ color: '#333340' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Trust / testimonials side */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-xl p-5 border"
              style={{ backgroundColor: '#16161f', borderColor: '#2a2a35' }}
            >
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#8a8580' }}>
                "Read SS001 on a Sunday night. Couldn't sleep till 4 AM. Worth every rupee."
              </p>
              <span className="font-ui text-xs" style={{ color: '#4a4a58' }}>— Rahul M., Mumbai</span>
            </div>

            <div
              className="rounded-xl p-5 border"
              style={{ backgroundColor: '#16161f', borderColor: '#2a2a35' }}
            >
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#8a8580' }}>
                "Shared SS004 with 3 friends. All of them bought the bundle the same day."
              </p>
              <span className="font-ui text-xs" style={{ color: '#4a4a58' }}>— Shreya K., Bangalore</span>
            </div>

            <div
              className="rounded-xl p-5 border"
              style={{ backgroundColor: '#16161f', borderColor: '#2a2a35' }}
            >
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#8a8580' }}>
                "I've read horror novels for years. Nothing hits like these because they're real."
              </p>
              <span className="font-ui text-xs" style={{ color: '#4a4a58' }}>— Aryan T., Delhi</span>
            </div>

            <div
              className="rounded-xl p-5 border text-center"
              style={{ backgroundColor: '#0d0d14', borderColor: '#1e1e28' }}
            >
              <p className="text-3xl font-bold mb-1" style={{ color: '#c0392b' }}>Growing</p>
              <p className="font-ui text-xs" style={{ color: '#4a4a58' }}>New stories added regularly</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-6" style={{ color: '#f0ece4' }}>
            Frequently Asked Questions
          </h2>
          <div>
            {FAQ.map((item, i) => (
              <AccordionItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIdx === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
