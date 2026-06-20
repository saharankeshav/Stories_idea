import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            backgroundColor: '#0a0a0f',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <p style={{ color: '#c0392b', fontSize: '2.5rem', marginBottom: '1.5rem' }}>◈</p>
          <h1 style={{ color: '#f0ece4', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#4a4a58', fontSize: '0.875rem', marginBottom: '2rem', maxWidth: '320px', lineHeight: 1.6 }}>
            An unexpected error occurred. Please refresh the page — your unlock status is saved and won't be lost.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: '#c0392b',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Refresh page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
