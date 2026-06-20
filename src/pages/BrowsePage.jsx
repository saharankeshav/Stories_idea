import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import SearchBar from '../components/SearchBar'
import StoryCard from '../components/StoryCard'
import AdSlot from '../components/AdSlot'
import stories from '../data/stories.json'

export default function BrowsePage() {
  const [filter, setFilter] = useState('all')

  const filtered = stories.filter((s) => {
    if (filter === 'free') return !s.isPremium
    if (filter === 'premium') return s.isPremium
    return true
  })

  return (
    <div className="page-enter flex-1 flex flex-col">
      <Helmet>
        <title>Browse All Stories — Shady Stories</title>
        <meta name="description" content="Browse our full vault of shady stories — real, unexplained accounts from everyday people across India." />
        <meta property="og:title" content="Browse All Stories — Shady Stories" />
        <meta property="og:description" content="Browse our full vault of shady stories — real, unexplained accounts from everyday people." />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f0ece4' }}>
            All Stories
          </h1>
          <p className="font-ui text-sm" style={{ color: '#4a4a58' }}>
            {stories.length} stories in the vault. Search by number, or browse below.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-md mx-auto">
          <SearchBar />
        </div>

        {/* INSERT ad network code in AdSlot component */}
        <AdSlot type="banner" className="mb-10" />

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-8">
          {[
            { key: 'all', label: 'All' },
            { key: 'free', label: 'Free' },
            { key: 'premium', label: 'Premium' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className="font-ui text-xs tracking-wide px-4 py-2 rounded-full transition-all duration-200"
              style={
                filter === key
                  ? { backgroundColor: '#c0392b', color: '#fff' }
                  : { backgroundColor: '#16161f', color: '#6b6570', border: '1px solid #2a2a35' }
              }
            >
              {label}
            </button>
          ))}
          <span className="font-ui text-xs ml-auto" style={{ color: '#333340' }}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Story grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">◈</p>
            <p className="font-ui text-sm" style={{ color: '#4a4a58' }}>
              No stories match that filter.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}
