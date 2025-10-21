import { RoadmapNodeData } from '../types';

interface RoadmapNodeProps {
  node: RoadmapNodeData;
  onStatusChange: (nodeId: string, status: 'completed' | 'notStarted') => void;
}

const RoadmapNode: React.FC<RoadmapNodeProps> = ({ node, onStatusChange }) => {
  const priorityStyles = {
    critical: 'bg-red-100 text-red-800 border-red-300',
    high: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    medium: 'bg-blue-100 text-blue-800 border-blue-300',
    low: 'bg-green-100 text-green-800 border-green-300',
  };

  const isCompleted = node.status === 'completed';

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStatusChange(node.id, e.target.checked ? 'completed' : 'notStarted');
  };

  return (
    <div className={`border rounded-lg p-6 mb-6 shadow-md transition-colors ${
      isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
    }`}>
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold" style={{ color: node.color || '#1f2937' }}>
          {node.label}
        </h3>
        <div className="flex items-center">
          <label htmlFor={`progress-${node.id}`} className="text-sm text-gray-600 mr-2 select-none">Mark as complete</label>
          <input
            id={`progress-${node.id}`}
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
            className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-2 mt-3 text-xs">
        {node.priority && (
          <span className={`px-2 py-1 rounded-full font-semibold border ${priorityStyles[node.priority]}`}>
            {node.priority.toUpperCase()} PRIORITY
          </span>
        )}
        {node.timeEstimate && (
          <span className="px-2 py-1 rounded-full font-semibold border bg-gray-100 text-gray-700">
            ⏱️ {node.timeEstimate}
          </span>
        )}
        {node.skills?.map(skill => (
          <span key={skill} className="px-2 py-1 rounded-full font-semibold border bg-indigo-100 text-indigo-700">
            {skill}
          </span>
        ))}
      </div>

      <p className="text-gray-600 mt-4">
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

      {node.dependencies && node.dependencies.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-semibold mb-2 text-sm text-gray-600">Prerequisites:</h4>
          <div className="flex flex-wrap gap-2">
            {node.dependencies.map((dep) => (
              <span key={dep} className="px-2 py-1 text-xs bg-gray-200 text-gray-800 rounded">
                {dep}
              </span>
            ))}
          </div>
        </div>
      )}

      {node.practiceProject && (
        <details className="mt-4 pt-4 border-t border-gray-200 group">
          <summary className="font-semibold text-gray-700 cursor-pointer hover:text-blue-600">
            🛠️ Practice Project: {node.practiceProject.title}
          </summary>
          <div className="mt-2 pl-4 text-sm text-gray-600">
            <p>{node.practiceProject.description}</p>
            {node.practiceProject.deliverables && (
              <div className="mt-2">
                <strong>Deliverables:</strong>
                <ul className="list-disc pl-5 mt-1">
                  {node.practiceProject.deliverables.map(d => <li key={d}>{d}</li>)}
                </ul>
              </div>
            )}
          </div>
        </details>
      )}
    </div>
  );
};

export default RoadmapNode;
