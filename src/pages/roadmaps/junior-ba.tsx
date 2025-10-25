import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import roadmapData from '@/data/roadmaps/junior-ba/roadmap.json'

interface Resource {
  type: string
  title: string
  url?: string
  duration?: string
  author?: string
  isbn?: string
  provider?: string
}

interface RoadmapNode {
  id: string
  type: string
  label: string
  description: string
  priority?: string
  timeEstimate?: string
  dependencies?: string[]
  resources?: Resource[]
  skills?: string[]
  certifications?: string[]
  children?: RoadmapNode[]
}

interface Category extends RoadmapNode {
  color: string
  children: RoadmapNode[]
}

export default function JuniorBARoadmap() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    foundations: true,
  })

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'critical': return '#dc2626'
      case 'high': return '#ea580c'
      case 'medium': return '#ca8a04'
      default: return '#64748b'
    }
  }

  const getPriorityEmoji = (priority?: string) => {
    switch (priority) {
      case 'critical': return '🔴'
      case 'high': return '🟠'
      case 'medium': return '🟡'
      default: return '⚪'
    }
  }

  return (
    <>
      <Head>
        <title>{roadmapData.title} - BA Pathfinder</title>
        <meta name="description" content={roadmapData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#f8fafc'
      }}>
        {/* Header */}
        <header style={{
          background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          color: 'white',
          padding: '2rem 1rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Link href="/" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.9rem',
              opacity: 0.9,
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              ← Back to Home
            </Link>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', margin: 0 }}>
              {roadmapData.title}
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, margin: '0.5rem 0' }}>
              {roadmapData.description}
            </p>
            <div style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '1rem',
              flexWrap: 'wrap',
              fontSize: '0.9rem'
            }}>
              <div>⏱️ <strong>{roadmapData.estimatedTimeToComplete}</strong> to complete</div>
              <div>📅 Last updated: <strong>{roadmapData.lastUpdated}</strong></div>
              <div>📝 Version <strong>{roadmapData.version}</strong></div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem 1rem'
        }}>
          {/* Overview */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ marginTop: 0 }}>🎯 Your Learning Path</h2>
            <p style={{ lineHeight: '1.6', color: '#475569' }}>
              This roadmap guides you through the essential skills and knowledge needed to become a
              successful Junior Business Analyst. Follow the structured path below, or explore topics
              that interest you most.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <div style={{ padding: '1rem', background: '#fef3c7', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#92400e' }}>
                  {roadmapData.nodes.length}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#78350f' }}>Learning Categories</div>
              </div>
              <div style={{ padding: '1rem', background: '#dbeafe', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af' }}>
                  {roadmapData.nodes.reduce((acc, cat) => acc + (cat.children?.length || 0), 0)}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#1e3a8a' }}>Topics to Master</div>
              </div>
              <div style={{ padding: '1rem', background: '#dcfce7', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#166534' }}>
                  {roadmapData.milestones.length}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#14532d' }}>Career Milestones</div>
              </div>
            </div>
          </div>

          {/* Roadmap Categories */}
          <div style={{ marginBottom: '2rem' }}>
            <h2>📚 Learning Modules</h2>
            {(roadmapData.nodes as Category[]).map((category) => (
              <div key={category.id} style={{
                background: 'white',
                borderRadius: '12px',
                marginBottom: '1rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                overflow: 'hidden'
              }}>
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    background: category.color,
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    <div>{category.label}</div>
                    <div style={{
                      fontSize: '0.85rem',
                      opacity: 0.9,
                      fontWeight: 'normal',
                      marginTop: '0.25rem'
                    }}>
                      {category.description}
                    </div>
                  </div>
                  <span style={{ fontSize: '1.5rem' }}>
                    {expandedCategories[category.id] ? '▼' : '▶'}
                  </span>
                </button>

                {/* Topics */}
                {expandedCategories[category.id] && category.children && (
                  <div style={{ padding: '1rem' }}>
                    {category.children.map((topic) => (
                      <div key={topic.id} style={{
                        padding: '1.25rem',
                        marginBottom: '0.75rem',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        backgroundColor: '#fafafa'
                      }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '0.5rem'
                        }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              {getPriorityEmoji(topic.priority)}
                              <h3 style={{
                                margin: 0,
                                fontSize: '1.1rem',
                                color: '#1e293b'
                              }}>
                                {topic.label}
                              </h3>
                            </div>
                            <p style={{
                              margin: '0.5rem 0',
                              color: '#64748b',
                              fontSize: '0.95rem'
                            }}>
                              {topic.description}
                            </p>
                          </div>
                        </div>

                        {/* Metadata */}
                        <div style={{
                          display: 'flex',
                          gap: '1rem',
                          flexWrap: 'wrap',
                          fontSize: '0.85rem',
                          color: '#475569',
                          marginBottom: '0.75rem'
                        }}>
                          {topic.timeEstimate && (
                            <span>⏱️ {topic.timeEstimate}</span>
                          )}
                          {topic.priority && (
                            <span style={{
                              color: getPriorityColor(topic.priority),
                              fontWeight: '600'
                            }}>
                              {topic.priority.toUpperCase()}
                            </span>
                          )}
                          {topic.skills && topic.skills.length > 0 && (
                            <span>💪 {topic.skills.join(', ')}</span>
                          )}
                        </div>

                        {/* Resources */}
                        {topic.resources && topic.resources.length > 0 && (
                          <div style={{ marginTop: '1rem' }}>
                            <div style={{
                              fontSize: '0.85rem',
                              fontWeight: '600',
                              marginBottom: '0.5rem',
                              color: '#475569'
                            }}>
                              📚 Resources:
                            </div>
                            <div style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.5rem'
                            }}>
                              {topic.resources.map((resource, idx) => (
                                <Link
                                  key={idx}
                                  href={resource.url?.startsWith('/content')
                                    ? `/roadmaps/junior-ba/${topic.id}`
                                    : resource.url || '#'}
                                  target={resource.url?.startsWith('http') ? '_blank' : undefined}
                                  rel={resource.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  style={{
                                    fontSize: '0.85rem',
                                    color: '#2563eb',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                  }}
                                >
                                  <span>
                                    {resource.type === 'article' && '📄'}
                                    {resource.type === 'video' && '🎥'}
                                    {resource.type === 'book' && '📖'}
                                    {resource.type === 'course' && '🎓'}
                                    {resource.type === 'template' && '📋'}
                                    {resource.type === 'tool' && '🔧'}
                                  </span>
                                  <span style={{ flex: 1 }}>
                                    {resource.title}
                                    {resource.duration && ` (${resource.duration})`}
                                    {resource.author && ` by ${resource.author}`}
                                  </span>
                                  {resource.url?.startsWith('/content') && '→'}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Milestones */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ marginTop: 0 }}>🏆 Career Milestones</h2>
            <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
              Track your progress through these key achievements
            </p>
            {roadmapData.milestones.map((milestone, idx) => (
              <div key={milestone.id} style={{
                padding: '1.5rem',
                marginBottom: '1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                background: 'linear-gradient(to right, #fafafa 0%, white 100%)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#2563eb',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#1e293b' }}>
                      {milestone.title}
                    </h3>
                    <p style={{ margin: '0.25rem 0', color: '#64748b', fontSize: '0.9rem' }}>
                      {milestone.description}
                    </p>
                    <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.5rem' }}>
                      ⏱️ Estimated: {milestone.estimatedTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h2 style={{ marginTop: 0 }}>Ready to Start Your BA Journey?</h2>
            <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>
              Begin with the Foundations category and work your way through each topic
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/guitargnarr/ba-pathfinder"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  background: 'white',
                  color: '#2563eb',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600'
                }}
              >
                ⭐ Star on GitHub
              </a>
              <Link
                href="/"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600'
                }}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer style={{
          background: '#1e293b',
          color: 'white',
          padding: '2rem 1rem',
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0 }}>Made with ❤️ by the Business Analysis community</p>
          <p style={{ margin: '0.5rem 0 0 0', opacity: 0.7 }}>
            <a href="https://github.com/guitargnarr" style={{ color: '#60a5fa' }}>
              @guitargnarr
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}
