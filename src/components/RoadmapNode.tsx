import { RoadmapNodeData } from '../types';

interface RoadmapNodeProps {
  node: RoadmapNodeData;
}

const RoadmapNode: React.FC<RoadmapNodeProps> = ({ node }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6 bg-white shadow-md">
      <h3 className="text-xl font-semibold" style={{ color: node.color || '#1f2937' }}>
        {node.label}
      </h3>
      <p className="text-gray-600 mt-2">
        {node.description}
      </p>
      {node.resources && node.resources.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Resources:</h4>
          <ul className="list-disc pl-6">
            {node.resources.map((resource) => (
              <li key={resource.url} className="mb-1">
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {resource.title} ({resource.type})
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoadmapNode;
