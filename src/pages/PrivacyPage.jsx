import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-base font-bold mb-3" style={{ color: '#f0ece4' }}>{title}</h2>
      <div className="font-ui text-sm leading-relaxed space-y-3" style={{ color: '#6b6570' }}>
        {children}
      </div>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <div className="page-enter flex-1 flex flex-col">
      <Helmet>
        <title>Privacy Policy — Shady Stories</title>
        <meta name="description" content="Shady Stories privacy policy — what we collect, how we use it, and your rights." />
      </Helmet>

      <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-14">

        {/* Header */}
        <div className="mb-10">
          <span style={{ color: '#c0392b', fontSize: '1.4rem' }}>◈</span>
          <h1 className="text-3xl font-bold mt-4 mb-2" style={{ color: '#f0ece4' }}>
            Privacy Policy
          </h1>
          <p className="font-ui text-xs" style={{ color: '#4a4a58' }}>
            Last updated: June 2025
          </p>
        </div>

        <p className="font-ui text-sm leading-relaxed mb-10" style={{ color: '#6b6570' }}>
          This is a plain-English privacy policy. We've tried to write it the way we'd want to read one — no filler, no legal padding, just what actually matters.
        </p>

        <div className="h-px mb-10" style={{ backgroundColor: '#1e1e28' }} />

        <Section title="Who we are">
          <p>Shady Stories is a story platform run by an independent creator. We publish real, anonymous accounts submitted by people who've experienced unexplained events. If you have questions about this policy, email us at <span style={{ color: '#c0392b' }}>shadystoriesindia@gmail.com</span>.</p>
        </Section>

        <Section title="What we collect — and what we don't">
          <p><strong style={{ color: '#9a9590' }}>We do not collect your name, email address, or any personal information</strong> just by visiting or reading stories on this site. You can read free stories without giving us anything.</p>
          <p>If you purchase access to premium stories, the transaction is handled entirely by <strong style={{ color: '#9a9590' }}>Gumroad</strong> (our payment processor). We never see your card details, bank details, or billing address. Gumroad sends you a purchase confirmation and unlock code by email — that email address is held by Gumroad under their own privacy policy, not by us.</p>
          <p>We do not maintain a customer database or mailing list.</p>
        </Section>

        <Section title="Analytics">
          <p>We use <strong style={{ color: '#9a9590' }}>Google Analytics (GA4)</strong> to understand how people use the site — which stories get read, how long people stay, which pages they come from. This data is anonymous and aggregated. Google Analytics sets cookies in your browser to track sessions.</p>
          <p>Google Analytics data is processed by Google under their own privacy terms. We use it only to improve the site. We do not use it to identify individual users or run targeted advertising.</p>
          <p>If you'd prefer not to be tracked by Google Analytics, you can use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#c0392b' }}>Google Analytics opt-out browser add-on</a> or a browser extension that blocks tracking scripts.</p>
        </Section>

        <Section title="localStorage (unlock status)">
          <p>When you enter a valid unlock code to access premium stories, we store a flag in your browser's <strong style={{ color: '#9a9590' }}>localStorage</strong> (a key called <code style={{ color: '#9a9590', fontFamily: 'monospace' }}>shady_unlocked</code> with value <code style={{ color: '#9a9590', fontFamily: 'monospace' }}>true</code>). This stays in your browser so you don't have to re-enter your code every visit.</p>
          <p>This data never leaves your device. It's not sent to any server. You can clear it at any time by clearing your browser's site data, or we'll provide a "reset" option if you need it.</p>
        </Section>

        <Section title="Cookies">
          <p>We don't set our own cookies. Google Analytics sets its own cookies (<code style={{ color: '#9a9590', fontFamily: 'monospace' }}>_ga</code>, <code style={{ color: '#9a9590', fontFamily: 'monospace' }}>_ga_*</code>) for session tracking. These are persistent cookies — they stay until they expire or you clear them.</p>
          <p>We do not use cookies for advertising, retargeting, or tracking you across other websites.</p>
        </Section>

        <Section title="Third-party services">
          <p>The only third-party services used on this site are:</p>
          <ul className="list-disc list-inside space-y-1 mt-2" style={{ color: '#6b6570' }}>
            <li><strong style={{ color: '#9a9590' }}>Gumroad</strong> — payment processing and purchase delivery</li>
            <li><strong style={{ color: '#9a9590' }}>Google Analytics</strong> — anonymous usage analytics</li>
            <li><strong style={{ color: '#9a9590' }}>Google Fonts</strong> — font delivery (Inter typeface)</li>
          </ul>
          <p className="mt-3">We do not use Facebook Pixel, advertising networks, or any other tracking services.</p>
        </Section>

        <Section title="Data retention">
          <p>We don't store your data, so there's nothing to retain or delete on our end. If you want Gumroad to delete the email associated with your purchase, contact Gumroad's support directly.</p>
        </Section>

        <Section title="Children">
          <p>This site is intended for adults. We do not knowingly collect information from anyone under 13. The stories deal with mature and unsettling themes.</p>
        </Section>

        <Section title="Changes to this policy">
          <p>If we make meaningful changes to this policy, we'll update the "Last updated" date at the top. We'll only change things if we actually change how the site works — this isn't a document we update quarterly for appearances.</p>
        </Section>

        <Section title="Contact">
          <p>For any privacy questions or concerns, email us at <span style={{ color: '#c0392b' }}>shadystoriesindia@gmail.com</span>. We'll respond within a few days.</p>
        </Section>

        <div className="h-px mb-8" style={{ backgroundColor: '#1e1e28' }} />

        <Link
          to="/"
          className="font-ui text-sm transition-colors duration-200"
          style={{ color: '#4a4a58' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#8a8580')}
          onMouseLeave={e => (e.currentTarget.style.color = '#4a4a58')}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
