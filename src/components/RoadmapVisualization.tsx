'use client'

import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

interface RoadmapNode {
  id: string
  type: string
  label: string
  description: string
  color?: string
  priority?: string
  timeEstimate?: string
  children?: RoadmapNode[]
}

interface RoadmapData {
  title: string
  description: string
  nodes: RoadmapNode[]
}

// Brand colors mapping
const brandColors: Record<string, string> = {
  '#2563eb': '#14b8a6', // foundations -> teal
  '#16a34a': '#2dd4bf', // elicitation -> teal-400
  '#dc2626': '#f97316', // documentation -> orange
  '#7c3aed': '#0d9488', // tools -> teal-600
  '#ea580c': '#fb923c', // soft-skills -> orange-400
  '#0891b2': '#14b8a6', // career -> teal
}

export default function RoadmapVisualization({ data }: { data: RoadmapData }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null)
  const [dimensions, setDimensions] = useState({ width: 900, height: 600 })

  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(window.innerWidth - 48, 1200)
      setDimensions({ width, height: 600 })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!svgRef.current || !data.nodes.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const { width, height } = dimensions
    const margin = { top: 40, right: 120, bottom: 40, left: 120 }

    // Transform data into hierarchy
    const hierarchyData = {
      id: 'root',
      label: data.title,
      description: data.description,
      type: 'root',
      children: data.nodes.map(node => ({
        ...node,
        color: brandColors[node.color || ''] || node.color || '#14b8a6'
      }))
    }

    const root = d3.hierarchy(hierarchyData)

    // Create tree layout
    const treeLayout = d3.tree<typeof hierarchyData>()
      .size([height - margin.top - margin.bottom, width - margin.left - margin.right])
      .separation((a, b) => (a.parent === b.parent ? 1.5 : 2))

    treeLayout(root as d3.HierarchyNode<typeof hierarchyData>)

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // Draw links
    g.selectAll('.link')
      .data(root.links())
      .join('path')
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', '#334155')
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.6)
      .attr('d', d3.linkHorizontal<d3.HierarchyPointLink<typeof hierarchyData>, d3.HierarchyPointNode<typeof hierarchyData>>()
        .x(d => d.y)
        .y(d => d.x) as any)

    // Draw nodes
    const nodes = g.selectAll('.node')
      .data(root.descendants())
      .join('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`)
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        event.stopPropagation()
        setSelectedNode(d.data as RoadmapNode)
      })

    // Node circles
    nodes.append('circle')
      .attr('r', d => d.depth === 0 ? 20 : d.depth === 1 ? 14 : 8)
      .attr('fill', d => {
        if (d.depth === 0) return '#14b8a6'
        const nodeData = d.data as RoadmapNode
        return nodeData.color || '#14b8a6'
      })
      .attr('stroke', '#0f172a')
      .attr('stroke-width', 2)
      .on('mouseenter', function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', d => {
            const node = d as d3.HierarchyPointNode<typeof hierarchyData>
            return node.depth === 0 ? 24 : node.depth === 1 ? 18 : 12
          })
      })
      .on('mouseleave', function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', d => {
            const node = d as d3.HierarchyPointNode<typeof hierarchyData>
            return node.depth === 0 ? 20 : node.depth === 1 ? 14 : 8
          })
      })

    // Node labels
    nodes.append('text')
      .attr('dy', d => d.depth === 0 ? 35 : 4)
      .attr('x', d => {
        if (d.depth === 0) return 0
        return d.children ? -20 : 15
      })
      .attr('text-anchor', d => {
        if (d.depth === 0) return 'middle'
        return d.children ? 'end' : 'start'
      })
      .attr('fill', '#e2e8f0')
      .attr('font-size', d => d.depth === 0 ? '14px' : d.depth === 1 ? '12px' : '10px')
      .attr('font-weight', d => d.depth <= 1 ? 'bold' : 'normal')
      .text(d => {
        const label = (d.data as RoadmapNode).label
        return label.length > 25 ? label.slice(0, 22) + '...' : label
      })

    // Priority indicators for depth 2 nodes
    nodes.filter(d => d.depth === 2 && (d.data as RoadmapNode).priority === 'critical')
      .append('circle')
      .attr('r', 4)
      .attr('cx', -12)
      .attr('cy', 0)
      .attr('fill', '#f97316')

  }, [data, dimensions])

  return (
    <div style={{ position: 'relative', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        style={{ background: '#0f172a', borderRadius: '0.75rem', minWidth: '600px' }}
        onClick={() => setSelectedNode(null)}
      />

      {/* Detail Panel */}
      {selectedNode && selectedNode.type !== 'root' && (
        <div className="absolute top-4 right-4 w-80 bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-2xl">
          <button
            onClick={() => setSelectedNode(null)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white"
          >
            ×
          </button>
          <h3 className="text-lg font-bold text-white mb-2">{selectedNode.label}</h3>
          <p className="text-slate-300 text-sm mb-3">{selectedNode.description}</p>

          {selectedNode.priority && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-slate-400">Priority:</span>
              <span className={`text-xs px-2 py-0.5 rounded ${
                selectedNode.priority === 'critical' ? 'bg-orange-500/20 text-orange-400' :
                selectedNode.priority === 'high' ? 'bg-teal-500/20 text-teal-400' :
                'bg-slate-600 text-slate-300'
              }`}>
                {selectedNode.priority}
              </span>
            </div>
          )}

          {selectedNode.timeEstimate && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Time:</span>
              <span className="text-xs text-slate-300">{selectedNode.timeEstimate}</span>
            </div>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <span>Critical Priority</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-teal-500"></span>
          <span>Category</span>
        </div>
        <span className="text-slate-500">Click nodes for details</span>
      </div>
    </div>
  )
}
