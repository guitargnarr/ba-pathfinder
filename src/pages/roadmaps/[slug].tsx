import { GetStaticPaths, GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

import Head from 'next/head';
import RoadmapNode from '../../components/RoadmapNode';
import { Roadmap } from '../../types';

interface RoadmapPageProps {
  roadmap: Roadmap;
}

const RoadmapPage: React.FC<RoadmapPageProps> = ({ roadmap }) => {
  if (!roadmap) {
    return <div>Roadmap not found</div>;
  }

  return (
    <>
      <Head>
        <title>{roadmap.title} - BA Pathfinder</title>
        <meta name="description" content={roadmap.description} />
      </Head>
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-2">{roadmap.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{roadmap.description}</p>

          <div>
            {roadmap.nodes.map((node) => (
              <RoadmapNode key={node.id} node={node} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const roadmapsDir = path.join(process.cwd(), 'src', 'data', 'roadmaps');
  const roadmapFolders = await fs.readdir(roadmapsDir);

  const paths = roadmapFolders.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const filePath = path.join(process.cwd(), 'src', 'data', 'roadmaps', slug, 'roadmap.json');

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const roadmap = JSON.parse(fileContents);

    return {
      props: {
        roadmap,
      },
    };
  } catch (error) {
    return {
      props: {
        roadmap: null,
      },
    };
  }
};

export default RoadmapPage;
