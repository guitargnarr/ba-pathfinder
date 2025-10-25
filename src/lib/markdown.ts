import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const contentDirectory = path.join(process.cwd(), 'content/roadmaps')

export interface TopicMetadata {
  title?: string
  priority?: string
  timeEstimate?: string
  [key: string]: any
}

export interface TopicContent {
  metadata: TopicMetadata
  content: string
  htmlContent: string
}

/**
 * Get content for a specific topic
 */
export async function getTopicContent(
  roadmap: string,
  topicId: string
): Promise<TopicContent | null> {
  try {
    const fullPath = path.join(contentDirectory, roadmap, `${topicId}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Configure marked for better HTML output
    marked.setOptions({
      gfm: true,
      breaks: true,
    })

    const htmlContent = marked(content)

    return {
      metadata: data,
      content,
      htmlContent: htmlContent as string,
    }
  } catch (error) {
    console.error(`Error reading topic ${topicId}:`, error)
    return null
  }
}

/**
 * Get all available topic IDs for a roadmap
 */
export function getTopicIds(roadmap: string): string[] {
  try {
    const roadmapPath = path.join(contentDirectory, roadmap)

    if (!fs.existsSync(roadmapPath)) {
      return []
    }

    const files = fs.readdirSync(roadmapPath)
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''))
  } catch (error) {
    console.error(`Error getting topic IDs for ${roadmap}:`, error)
    return []
  }
}

/**
 * Check if a topic exists
 */
export function topicExists(roadmap: string, topicId: string): boolean {
  const fullPath = path.join(contentDirectory, roadmap, `${topicId}.md`)
  return fs.existsSync(fullPath)
}
