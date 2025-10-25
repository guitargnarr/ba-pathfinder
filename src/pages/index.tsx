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

        <p style={{ fontSize: '1.5rem', color: '#666', textAlign: 'center', maxWidth: '700px', marginBottom: '0.5rem' }}>
          Interactive career roadmaps for Business Analysts
        </p>
        <p style={{ fontSize: '1rem', color: '#888', textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}>
          Community-driven learning paths to accelerate your BA career
        </p>

        <div style={{
          background: '#f0f9ff',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '800px',
          marginBottom: '2rem',
          border: '2px solid #bae6fd'
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '1rem', color: '#0c4a6e' }}>🎯 Available Roadmaps</h2>
          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ margin: 0, marginBottom: '0.5rem', color: '#1e293b' }}>
                  🎓 Junior Business Analyst
                </h3>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>
                  Complete learning path for aspiring BAs (0-2 years experience)
                </p>
                <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#475569' }}>
                  ✅ 6 modules • 20+ topics • 12-18 months to complete
                </div>
              </div>
            </div>
            <a
              href="/roadmaps/junior-ba"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                background: '#2563eb',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}
            >
              Explore Junior BA Roadmap →
            </a>
          </div>

          <div style={{
            padding: '1rem',
            background: '#fef3c7',
            borderRadius: '8px',
            border: '1px solid #fde68a'
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#78350f' }}>
              <strong>🚧 Coming Soon:</strong> Mid-Level BA, Senior BA, Product Owner, BSA, Data Analyst, Agile Coach, and Director/VP paths
            </p>
          </div>
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

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'white',
          borderRadius: '12px',
          maxWidth: '800px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>✨ What's Inside?</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            textAlign: 'left'
          }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🗺️</div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, marginBottom: '0.5rem' }}>Visual Paths</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
                Structured learning modules from beginner to expert
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, marginBottom: '0.5rem' }}>Rich Content</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
                In-depth articles, resources, and practical examples
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, marginBottom: '0.5rem' }}>Career Focus</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
                Aligned with CBAP, CCBA, and industry best practices
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, marginBottom: '0.5rem' }}>Open Source</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
                Free forever, community-driven, and always improving
              </p>
            </div>
          </div>
        </div>

        <footer style={{ marginTop: '4rem', color: '#999', textAlign: 'center' }}>
          <p>Made with ❤️ by the Business Analysis community</p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href="https://github.com/guitargnarr" style={{ color: '#2563eb', textDecoration: 'none' }}>
              @guitargnarr
            </a>
          </p>
        </footer>
      </main>
    </>
  )
}
