import { useState, useEffect } from 'react';
import { Roadmap, RoadmapNodeData } from '../types';

export const useRoadmapState = (initialRoadmap: Roadmap) => {
  const [roadmap, setRoadmap] = useState<Roadmap>(initialRoadmap);
  const roadmapId = initialRoadmap.title.replace(/\s+/g, '-').toLowerCase();

  useEffect(() => {
    const savedState = localStorage.getItem(`roadmap-${roadmapId}`);
    if (savedState) {
      const savedRoadmap = JSON.parse(savedState);
      // Merge initial data with saved statuses to prevent outdated data issues
      const mergedNodes = initialRoadmap.nodes.map(node => {
        const savedNode = savedRoadmap.nodes.find(n => n.id === node.id);
        return savedNode ? { ...node, status: savedNode.status } : node;
      });
      setRoadmap({ ...initialRoadmap, nodes: mergedNodes });
    }
  }, [initialRoadmap, roadmapId]);

  const setNodeStatus = (nodeId: string, status: 'completed' | 'notStarted') => {
    const newNodes = roadmap.nodes.map(node => {
      if (node.id === nodeId) {
        return { ...node, status };
      }
      return node;
    });

    const newRoadmap = { ...roadmap, nodes: newNodes };
    setRoadmap(newRoadmap);
    localStorage.setItem(`roadmap-${roadmapId}`, JSON.stringify(newRoadmap));
  };

  return { roadmap, setNodeStatus };
};
