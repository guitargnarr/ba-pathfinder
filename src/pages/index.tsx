import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>BA Pathfinder - Business Analyst Career Roadmaps | 7 Specialty Tracks</title>
        <meta name="description" content="Interactive career development platform for Business Analysts. 7 specialty tracks from Junior to Enterprise BA. Certification guides, skill progression maps. Built by a Senior BA with 10 years healthcare IT experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Matthew Scott" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="BA Pathfinder - Business Analyst Career Roadmaps | 7 Specialty Tracks" />
        <meta property="og:description" content="Interactive career development platform for Business Analysts. 7 specialty tracks, certification guides, skill progression maps. Built by a Senior BA with 10 years healthcare IT experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ba-pathfinder.projectlavos.com" />
        <meta property="og:site_name" content="BA Pathfinder" />
        <meta property="og:image" content="https://ba-pathfinder.projectlavos.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BA Pathfinder - 7 Career Tracks for Business Analysts" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BA Pathfinder - Business Analyst Career Roadmaps" />
        <meta name="twitter:description" content="7 specialty tracks from Junior to Enterprise BA. Certification guides, skill progression maps." />
        <meta name="twitter:image" content="https://ba-pathfinder.projectlavos.com/og-image.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "BA Pathfinder",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Interactive career development platform for Business Analysts with 7 specialty tracks and certification guides.",
              "url": "https://ba-pathfinder.projectlavos.com",
              "image": "https://ba-pathfinder.projectlavos.com/og-image.png",
              "author": {
                "@type": "Person",
                "name": "Matthew Scott",
                "jobTitle": "Senior Business Analyst"
              },
              "featureList": [
                "7 specialty career tracks",
                "Junior to Enterprise BA paths",
                "CBAP/CCBA certification guides",
                "Interactive skill progression maps",
                "Healthcare BA specialization"
              ]
            })
          }}
        />
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

        {/* Available Roadmaps */}
        <div style={{
          display: 'grid',
          gap: '1rem',
          maxWidth: '800px',
          width: '100%',
          marginBottom: '2rem'
        }}>
          {/* Junior BA - Available */}
          <Link href="/roadmap/junior" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #14b8a620, #0d948820)',
              border: '2px solid #14b8a6',
              padding: '1.5rem',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(20, 184, 166, 0.2)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h2 style={{ color: '#2dd4bf', fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
                      Junior Business Analyst
                    </h2>
                    <span style={{
                      background: '#14b8a6',
                      color: 'white',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      NEW
                    </span>
                  </div>
                  <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.875rem' }}>
                    0-2 years experience • 6 categories • 25+ topics • 12-18 months path
                  </p>
                </div>
                <div style={{ color: '#14b8a6', fontSize: '1.5rem' }}>→</div>
              </div>
            </div>
          </Link>

          {/* Coming Soon Roadmaps */}
          <div style={{
            background: '#1e293b',
            border: '1px solid #334155',
            padding: '1.5rem',
            borderRadius: '12px',
            opacity: 0.7
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h2 style={{ color: '#cbd5e1', fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
                    Mid-Level Business Analyst
                  </h2>
                  <span style={{
                    background: '#f97316',
                    color: 'white',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    COMING SOON
                  </span>
                </div>
                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.875rem' }}>
                  2-5 years experience • Advanced elicitation • Stakeholder management
                </p>
              </div>
            </div>
          </div>

          <div style={{
            background: '#1e293b',
            border: '1px solid #334155',
            padding: '1.5rem',
            borderRadius: '12px',
            opacity: 0.7
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h2 style={{ color: '#cbd5e1', fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
                    Senior / Lead Business Analyst
                  </h2>
                  <span style={{
                    background: '#f97316',
                    color: 'white',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    COMING SOON
                  </span>
                </div>
                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.875rem' }}>
                  5+ years experience • Strategy • Team leadership • Enterprise BA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link
            href="/roadmap/junior"
            style={{
              display: 'inline-block',
              padding: '0.875rem 1.5rem',
              minHeight: '44px',
              background: '#14b8a6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              marginRight: '1rem',
              boxSizing: 'border-box'
            }}
          >
            Explore Junior BA Path
          </Link>

          <a
            href="https://github.com/guitargnarr/ba-pathfinder"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.875rem 1.5rem',
              minHeight: '44px',
              background: 'transparent',
              border: '2px solid #f97316',
              color: '#f97316',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              boxSizing: 'border-box'
            }}
          >
            Star on GitHub
          </a>
        </div>

        <footer style={{ marginTop: '4rem', color: '#94a3b8', textAlign: 'center' }}>
          <p>Built by Matthew Scott</p>
          <p style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <a href="https://github.com/guitargnarr" style={{
              color: '#2dd4bf',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center'
            }}>
              @guitargnarr
            </a>
            <span>•</span>
            <a href="https://resume.projectlavos.com" style={{
              color: '#2dd4bf',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center'
            }}>
              Portfolio
            </a>
          </p>
        </footer>
      </main>
    </>
  )
}
