export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">

      {/* HERO */}
      <section className="space-y-6">
        <h1 className="text-5xl font-bold">Charan</h1>
        <p className="text-xl text-gray-400">
          Backend Engineer | Scalable Systems | Payment Integrations
        </p>
        <p className="text-gray-500 max-w-2xl">
          Backend Engineer experienced in building scalable REST and GraphQL APIs using
          Node.js, TypeScript, MongoDB, and Redis. Designed production systems
          serving 15K+ users with performance and reliability focus.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded-lg font-medium"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="border border-gray-600 px-6 py-2 rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="text-gray-400 leading-relaxed">
          I specialize in backend architecture, database design, and high-performance
          API development. I have worked on queue-based distribution systems and
          payment gateway integrations in production environments supporting
          15K+ active users.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-400">
          <div>Node.js</div>
          <div>TypeScript</div>
          <div>NestJS</div>
          <div>MongoDB</div>
          <div>Redis</div>
          <div>REST & GraphQL</div>
          <div>PM2</div>
          <div>Nginx</div>
          <div>Docker</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-10">
        <h2 className="text-3xl font-semibold">Projects</h2>

        <div className="space-y-8">

          {/* Project 1 */}
          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold">
              Distribution System (15K+ Users)
            </h3>
            <p className="text-gray-400 mt-2">
              Designed a queue-based token distribution system handling
              concurrent requests with locking mechanisms to prevent race conditions.
              Optimized MongoDB queries and ensured scalability under load.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold">
              Payment Gateway Microservice
            </h3>
            <p className="text-gray-400 mt-2">
              Built secure payment processing backend with idempotency handling,
              webhook verification, retry mechanisms, and transaction consistency.
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold">
              URL Shortener (System Design Project)
            </h3>
            <p className="text-gray-400 mt-2">
              Designed scalable URL shortener using Redis caching,
              rate limiting, and efficient database indexing strategies.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <div className="text-gray-400">
          <p>Email: your.email@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="underline"
            >
              github.com/yourusername
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}