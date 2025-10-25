import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getTopicContent, getTopicIds, TopicContent } from '@/lib/markdown'
import roadmapData from '@/data/roadmaps/junior-ba/roadmap.json'

interface TopicPageProps {
  topic: TopicContent
  topicId: string
  topicInfo: any
}

export default function TopicPage({ topic, topicId, topicInfo }: TopicPageProps) {
  if (!topic) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Topic Not Found</h1>
          <p>The requested topic could not be found.</p>
          <Link href="/roadmaps/junior-ba" style={{ color: '#2563eb' }}>
            ← Back to Junior BA Roadmap
          </Link>
        </div>
      </div>
    )
  }

  const title = topic.metadata.title || topicInfo?.label || 'Topic'

  return (
    <>
      <Head>
        <title>{title} - Junior BA Roadmap - BA Pathfinder</title>
        <meta name="description" content={topicInfo?.description || 'Learn about Business Analysis'} />
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
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Link href="/roadmaps/junior-ba" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.9rem',
              opacity: 0.9,
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              ← Back to Junior BA Roadmap
            </Link>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', margin: 0 }}>
              {title}
            </h1>
            {topicInfo?.description && (
              <p style={{ fontSize: '1.1rem', opacity: 0.9, margin: '0.5rem 0' }}>
                {topicInfo.description}
              </p>
            )}
            {(topicInfo?.timeEstimate || topicInfo?.priority) && (
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '1rem',
                flexWrap: 'wrap',
                fontSize: '0.9rem'
              }}>
                {topicInfo.timeEstimate && (
                  <div>⏱️ <strong>{topicInfo.timeEstimate}</strong></div>
                )}
                {topicInfo.priority && (
                  <div>
                    {topicInfo.priority === 'critical' && '🔴'}
                    {topicInfo.priority === 'high' && '🟠'}
                    {topicInfo.priority === 'medium' && '🟡'}
                    {' '}
                    <strong>{topicInfo.priority.toUpperCase()}</strong> Priority
                  </div>
                )}
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '2rem 1rem'
        }}>
          {/* Article Content */}
          <article style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            lineHeight: '1.7'
          }}>
            <div
              dangerouslySetInnerHTML={{ __html: topic.htmlContent }}
              style={{
                fontSize: '1.05rem',
                color: '#1e293b'
              }}
              className="markdown-content"
            />
          </article>

          {/* Resources Section */}
          {topicInfo?.resources && topicInfo.resources.length > 0 && (
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              marginTop: '2rem'
            }}>
              <h2 style={{ marginTop: 0 }}>📚 Additional Resources</h2>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {topicInfo.resources.map((resource: any, idx: number) => (
                  <div key={idx} style={{
                    padding: '1rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    backgroundColor: '#fafafa'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>
                        {resource.type === 'article' && '📄'}
                        {resource.type === 'video' && '🎥'}
                        {resource.type === 'book' && '📖'}
                        {resource.type === 'course' && '🎓'}
                        {resource.type === 'template' && '📋'}
                        {resource.type === 'tool' && '🔧'}
                      </span>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontWeight: '600',
                          marginBottom: '0.25rem',
                          color: '#1e293b'
                        }}>
                          {resource.url ? (
                            <a
                              href={resource.url}
                              target={resource.url.startsWith('http') ? '_blank' : undefined}
                              rel={resource.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                              style={{ color: '#2563eb', textDecoration: 'none' }}
                            >
                              {resource.title}
                            </a>
                          ) : (
                            resource.title
                          )}
                        </div>
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#64748b'
                        }}>
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                          {resource.author && ` by ${resource.author}`}
                          {resource.provider && ` - ${resource.provider}`}
                          {resource.duration && ` (${resource.duration})`}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Self Assessment */}
          {topicInfo?.selfAssessment && topicInfo.selfAssessment.length > 0 && (
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              marginTop: '2rem'
            }}>
              <h2 style={{ marginTop: 0 }}>✅ Self-Assessment Questions</h2>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                Test your understanding of this topic:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {topicInfo.selfAssessment.map((question: string, idx: number) => (
                  <li key={idx} style={{
                    padding: '1rem',
                    background: '#f8fafc',
                    borderLeft: '4px solid #2563eb',
                    borderRadius: '4px'
                  }}>
                    <span style={{ fontWeight: '600', color: '#2563eb', marginRight: '0.5rem' }}>
                      Q{idx + 1}:
                    </span>
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <Link
              href="/roadmaps/junior-ba"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: '#2563eb',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600'
              }}
            >
              ← Back to Junior BA Roadmap
            </Link>
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

      <style jsx global>{`
        .markdown-content h1 {
          font-size: 2rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1e293b;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.5rem;
        }

        .markdown-content h2 {
          font-size: 1.6rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .markdown-content h3 {
          font-size: 1.3rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #334155;
        }

        .markdown-content h4 {
          font-size: 1.1rem;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          color: #475569;
        }

        .markdown-content p {
          margin-bottom: 1rem;
          color: #475569;
        }

        .markdown-content ul,
        .markdown-content ol {
          margin-bottom: 1rem;
          padding-left: 2rem;
        }

        .markdown-content li {
          margin-bottom: 0.5rem;
          color: #475569;
        }

        .markdown-content a {
          color: #2563eb;
          text-decoration: none;
        }

        .markdown-content a:hover {
          text-decoration: underline;
        }

        .markdown-content code {
          background: #f1f5f9;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-size: 0.9em;
          font-family: 'Monaco', 'Courier New', monospace;
        }

        .markdown-content pre {
          background: #1e293b;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
          margin-bottom: 1rem;
        }

        .markdown-content pre code {
          background: transparent;
          padding: 0;
          color: inherit;
        }

        .markdown-content blockquote {
          border-left: 4px solid #2563eb;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #64748b;
          font-style: italic;
        }

        .markdown-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1rem;
        }

        .markdown-content th,
        .markdown-content td {
          border: 1px solid #e2e8f0;
          padding: 0.75rem;
          text-align: left;
        }

        .markdown-content th {
          background: #f8fafc;
          font-weight: 600;
          color: #1e293b;
        }

        .markdown-content hr {
          border: none;
          border-top: 2px solid #e2e8f0;
          margin: 2rem 0;
        }

        .markdown-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1rem 0;
        }

        .markdown-content strong {
          font-weight: 600;
          color: #1e293b;
        }
      `}</style>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const topicIds = getTopicIds('junior-ba')

  const paths = topicIds.map(topic => ({
    params: { topic }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const topicId = params?.topic as string
  const topic = await getTopicContent('junior-ba', topicId)

  // Find topic info from roadmap data
  let topicInfo = null
  for (const category of roadmapData.nodes) {
    if (category.children) {
      const found = category.children.find((t: any) => t.id === topicId)
      if (found) {
        topicInfo = found
        break
      }
    }
  }

  if (!topic) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      topic,
      topicId,
      topicInfo
    }
  }
}
