import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import roadmapData from '../../data/roadmaps/junior-ba/roadmap.json'

// Dynamic import to avoid SSR issues with D3
const RoadmapVisualization = dynamic(
  () => import('../../components/RoadmapVisualization'),
  { ssr: false, loading: () => <div className="h-[600px] bg-slate-900 rounded-xl animate-pulse flex items-center justify-center text-slate-400">Loading visualization...</div> }
)

export default function JuniorBARoadmap() {
  return (
    <>
      <Head>
        <title>Junior BA Roadmap | BA Pathfinder</title>
        <meta name="description" content="Interactive career roadmap for Junior Business Analysts (0-2 years experience). 6 categories, 25+ topics, 12-18 month path." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Junior BA Roadmap | BA Pathfinder" />
        <meta property="og:description" content="Interactive career roadmap for Junior Business Analysts. 6 categories, 25+ topics, 12-18 month learning path." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ba-pathfinder.vercel.app/roadmap/junior" />
        <meta property="og:image" content="https://ba-pathfinder.vercel.app/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Junior BA Roadmap | BA Pathfinder" />
        <meta name="twitter:description" content="Interactive career roadmap for Junior Business Analysts. 6 categories, 25+ topics." />
        <meta name="twitter:image" content="https://ba-pathfinder.vercel.app/og-image.png" />
      </Head>

      <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/" style={{ color: '#14b8a6', textDecoration: 'none', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0.5rem 0' }}>
              ← Back to Home
            </Link>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #2dd4bf, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginTop: '1rem',
              marginBottom: '0.5rem'
            }}>
              Junior Business Analyst Roadmap
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>
              {roadmapData.description} • {roadmapData.estimatedTimeToComplete}
            </p>
          </div>

          {/* Milestones Overview */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {roadmapData.milestones.slice(0, 4).map((milestone, i) => (
              <div key={milestone.id} style={{
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '0.75rem',
                padding: '1rem'
              }}>
                <div style={{ color: '#14b8a6', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                  MILESTONE {i + 1}
                </div>
                <div style={{ color: 'white', fontWeight: '600', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                  {milestone.title}
                </div>
                <div style={{ color: '#64748b', fontSize: '0.75rem' }}>
                  {milestone.estimatedTime}
                </div>
              </div>
            ))}
          </div>

          {/* Visualization */}
          <div style={{ marginBottom: '2rem' }}>
            <RoadmapVisualization data={roadmapData} />
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{ background: '#1e293b', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
              <div style={{ color: '#14b8a6', fontSize: '2rem', fontWeight: 'bold' }}>
                {roadmapData.nodes.length}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Categories</div>
            </div>
            <div style={{ background: '#1e293b', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
              <div style={{ color: '#f97316', fontSize: '2rem', fontWeight: 'bold' }}>
                {roadmapData.nodes.reduce((acc, node) => acc + (node.children?.length || 0), 0)}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Topics</div>
            </div>
            <div style={{ background: '#1e293b', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
              <div style={{ color: '#2dd4bf', fontSize: '2rem', fontWeight: 'bold' }}>
                {roadmapData.milestones.length}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Milestones</div>
            </div>
            <div style={{ background: '#1e293b', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
              <div style={{ color: '#fb923c', fontSize: '2rem', fontWeight: 'bold' }}>
                {roadmapData.practiceProjects.length}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Projects</div>
            </div>
          </div>

          {/* Practice Projects */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Practice Projects
            </h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {roadmapData.practiceProjects.map(project => (
                <div key={project.id} style={{
                  background: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '0.75rem',
                  padding: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ color: 'white', fontWeight: '600' }}>{project.title}</h3>
                    <span style={{
                      background: project.difficulty === 'Beginner' ? '#14b8a620' : '#f9731620',
                      color: project.difficulty === 'Beginner' ? '#14b8a6' : '#f97316',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem'
                    }}>
                      {project.difficulty}
                    </span>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.deliverables.map((d, i) => (
                      <span key={i} style={{
                        background: '#334155',
                        color: '#cbd5e1',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.375rem',
                        fontSize: '0.75rem'
                      }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.875rem', paddingTop: '2rem', borderTop: '1px solid #334155' }}>
            <p>BA Pathfinder • Built by Matthew Scott</p>
            <p style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Link href="/" style={{ color: '#14b8a6', textDecoration: 'none', padding: '0.5rem 0.75rem', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>Home</Link>
              <span>•</span>
              <a href="https://projectlavos.com" style={{ color: '#14b8a6', textDecoration: 'none', padding: '0.5rem 0.75rem', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>Project Lavos</a>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
