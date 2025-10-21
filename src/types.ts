export interface Resource {
  type: string;
  title: string;
  url: string;
  duration?: string;
  author?: string;
  isbn?: string;
}

export interface RoadmapNodeData {
  id: string;
  type: string;
  label: string;
  description: string;
  color?: string;
  children?: RoadmapNodeData[];
  resources?: Resource[];
}

export interface Roadmap {
  title: string;
  description: string;
  nodes: RoadmapNodeData[];
}
