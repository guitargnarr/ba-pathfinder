export interface Resource {
  type: string;
  title: string;
  url: string;
  duration?: string;
  author?: string;
  isbn?: string;
}

export interface PracticeProject {
  title: string;
  description: string;
  deliverables?: string[];
  rubric?: string[];
}

export interface RoadmapNodeData {
  id: string;
  type: string;
  label: string;
  description: string;
  color?: string;
  children?: RoadmapNodeData[];
  resources?: Resource[];
  priority?: 'critical' | 'high' | 'medium' | 'low';
  timeEstimate?: string;
  skills?: string[];
  dependencies?: string[];
  practiceProject?: PracticeProject;
  status?: 'completed' | 'inProgress' | 'notStarted';
}

export interface Roadmap {
  title: string;
  description: string;
  nodes: RoadmapNodeData[];
}
