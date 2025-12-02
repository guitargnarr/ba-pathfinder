import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>BA Pathfinder - Interactive Career Roadmaps for Business Analysts</title>
        <meta name="description" content="Community-driven, interactive career roadmaps to help Business Analysts at every level" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="BA Pathfinder - Career Guidance for Business Analysts" />
        <meta property="og:description" content="Interactive career roadmaps for Business Analysts at every level" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ba-pathfinder.vercel.app" />
        <meta property="og:image" content="https://ba-pathfinder.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BA Pathfinder - Career Guidance" />
        <meta name="twitter:description" content="Interactive career roadmaps for Business Analysts" />
        <meta name="twitter:image" content="https://ba-pathfinder.vercel.app/og-image.png" />
      </Head>

      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
        color: '#fff'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          textAlign: 'center',
          background: 'linear-gradient(to right, #2dd4bf, #f97316)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          BA Pathfinder
        </h1>

        <p style={{ fontSize: '1.5rem', color: '#cbd5e1', textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}>
          Interactive career roadmaps for Business Analysts
        </p>

        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '800px',
          marginBottom: '2rem'
        }}>
          <h2 style={{ marginBottom: '1rem', color: '#2dd4bf' }}>Under Construction</h2>
          <p style={{ marginBottom: '1rem', color: '#cbd5e1' }}>
            We&apos;re building the world&apos;s most comprehensive visual career roadmaps for Business Analysts!
          </p>
          <ul style={{ lineHeight: '1.8', color: '#cbd5e1' }}>
            <li style={{ color: '#2dd4bf' }}>Repository created</li>
            <li style={{ color: '#f97316' }}>Junior BA Roadmap (coming soon)</li>
            <li style={{ color: '#f97316' }}>Mid-Level BA Roadmap (coming soon)</li>
            <li style={{ color: '#f97316' }}>Senior BA Roadmap (coming soon)</li>
            <li style={{ color: '#f97316' }}>Product Owner Path (coming soon)</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://github.com/guitargnarr/ba-pathfinder"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#14b8a6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              marginRight: '1rem'
            }}
          >
            Star on GitHub
          </a>

          <a
            href="https://github.com/guitargnarr/ba-pathfinder/discussions"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#f97316',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600'
            }}
          >
            Join Community
          </a>
        </div>

        <footer style={{ marginTop: '4rem', color: '#64748b', textAlign: 'center' }}>
          <p>Made by the Business Analysis community</p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href="https://github.com/guitargnarr" style={{ color: '#2dd4bf' }}>
              @guitargnarr
            </a>
          </p>
        </footer>
      </main>
    </>
  )
}
