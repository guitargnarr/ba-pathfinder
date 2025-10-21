import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>BA Pathfinder - Interactive Career Roadmaps for Business Analysts</title>
        <meta name="description" content="Community-driven, interactive career roadmaps to help Business Analysts at every level" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-bold mb-4 text-center">
          🗺️ BA Pathfinder
        </h1>

        <p className="text-2xl text-gray-600 text-center max-w-2xl mb-8">
          Interactive career roadmaps for Business Analysts
        </p>

        <div className="bg-blue-50 p-8 rounded-xl max-w-3xl mb-8">
          <h2 className="text-2xl font-bold mb-4">🚧 Under Construction</h2>
          <p className="mb-4">
            We're building the world's most comprehensive visual career roadmaps for Business Analysts!
          </p>
          <ul className="space-y-2">
            <li>✅ Repository created</li>
            <li>
              <Link href="/roadmaps/junior-ba" className="text-blue-600 hover:underline">
                Junior BA Roadmap
              </Link>
            </li>
            <li>⏳ Mid-Level BA Roadmap (coming soon)</li>
            <li>⏳ Senior BA Roadmap (coming soon)</li>
            <li>⏳ Product Owner Path (coming soon)</li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/guitargnarr/ba-pathfinder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold mr-4 hover:bg-blue-700"
          >
            ⭐ Star on GitHub
          </a>

          <a
            href="https://github.com/guitargnarr/ba-pathfinder/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-6 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
          >
            💬 Join Community
          </a>
        </div>

        <footer className="mt-16 text-gray-500 text-center">
          <p>Made with ❤️ by the Business Analysis community</p>
          <p className="mt-2">
            <a href="https://github.com/guitargnarr" className="text-blue-600 hover:underline">
              @guitargnarr
            </a>
          </p>
        </footer>
      </main>
    </>
  )
}
