import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import stories from '../data/stories.json'

export default function SearchBar({ autoFocus = false }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim().toUpperCase()
    if (!trimmed) {
      setError('Enter a story number to continue.')
      return
    }

    const match = stories.find(
      (s) => s.storyNumber.toUpperCase() === trimmed
    )

    if (!match) {
      setError(`No story found for "${trimmed}". Try SS001 – SS006.`)
      return
    }

    setError('')
    // Navigate to loading screen with story id as destination
    navigate(`/loading/${match.id}`)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        <div className="relative flex items-center">
          {/* Search icon */}
          <svg
            className="absolute left-4 pointer-events-none"
            width="18" height="18" viewBox="0 0 20 20" fill="none"
            style={{ color: '#4a4a58' }}
          >
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>

          <input
            type="text"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError('') }}
            placeholder="Enter Story Number (e.g. SS001)"
            autoFocus={autoFocus}
            className="w-full pl-11 pr-4 py-3.5 rounded-lg font-ui text-sm outline-none transition-all duration-200"
            style={{
              backgroundColor: '#16161f',
              color: '#f0ece4',
              border: error ? '1px solid #c0392b' : '1px solid #2a2a35',
              letterSpacing: '0.04em',
            }}
            onFocus={e => {
              e.currentTarget.style.borderColor = error ? '#c0392b' : '#4a4a58'
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(192,57,43,0.12)'
            }}
            onBlur={e => {
              e.currentTarget.style.borderColor = error ? '#c0392b' : '#2a2a35'
              e.currentTarget.style.boxShadow = 'none'
            }}
          />
        </div>

        {error && (
          <p className="font-ui text-xs" style={{ color: '#c0392b', paddingLeft: '2px' }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3.5 rounded-lg font-ui text-sm font-semibold tracking-wide transition-all duration-200 glow-red"
          style={{ backgroundColor: '#c0392b', color: '#fff' }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#e74c3c'
            e.currentTarget.style.boxShadow = '0 0 28px rgba(192,57,43,0.5)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#c0392b'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(192,57,43,0.3)'
          }}
        >
          Find Story
        </button>
      </div>
    </form>
  )
}
