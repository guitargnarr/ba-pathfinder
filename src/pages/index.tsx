import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>BA Pathfinder - Interactive Career Roadmaps for Business Analysts</title>
        <meta name="description" content="Community-driven, interactive career roadmaps to help Business Analysts at every level" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
          🗺️ BA Pathfinder
        </h1>

        <p style={{ fontSize: '1.5rem', color: '#666', textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}>
          Interactive career roadmaps for Business Analysts
        </p>

        <div style={{
          background: '#f0f9ff',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '800px',
          marginBottom: '2rem'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>🚧 Under Construction</h2>
          <p style={{ marginBottom: '1rem' }}>
            We're building the world's most comprehensive visual career roadmaps for Business Analysts!
          </p>
          <ul style={{ lineHeight: '1.8' }}>
            <li>✅ Repository created</li>
            <li>⏳ Junior BA Roadmap (coming soon)</li>
            <li>⏳ Mid-Level BA Roadmap (coming soon)</li>
            <li>⏳ Senior BA Roadmap (coming soon)</li>
            <li>⏳ Product Owner Path (coming soon)</li>
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
              background: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              marginRight: '1rem'
            }}
          >
            ⭐ Star on GitHub
          </a>

          <a
            href="https://github.com/guitargnarr/ba-pathfinder/discussions"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#16a34a',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600'
            }}
          >
            💬 Join Community
          </a>
        </div>

        <footer style={{ marginTop: '4rem', color: '#999', textAlign: 'center' }}>
          <p>Made with ❤️ by the Business Analysis community</p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href="https://github.com/guitargnarr" style={{ color: '#2563eb' }}>
              @guitargnarr
            </a>
          </p>
        </footer>
      </main>
    </>
  )
}
