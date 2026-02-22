export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-8 max-w-7xl mx-auto">
        <h1 className="text-lg font-semibold">Sri Charan BJ</h1>
        <div className="space-x-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-10 pt-16 pb-32">
        <h2 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
          Backend Engineer
          <br />
          <span className="text-gray-500">
            Building Scalable & Reliable Systems
          </span>
        </h2>

        <p className="text-gray-400 mt-10 max-w-2xl text-lg leading-relaxed">
          3+ years of experience designing high-performance microservices using
          Node.js, TypeScript, MongoDB and Redis. Built systems serving 15K+
          users, integrated 5+ payment gateways, and reduced API latency by 75%.
        </p>

        <div className="mt-10 space-x-6">
          <a
            href="#work"
            className="bg-white text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            View Work
          </a>

          <a
            href="/resume.pdf"
            className="text-gray-400 hover:text-white transition underline"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-10 py-24">
          <h3 className="text-4xl font-semibold mb-10">About</h3>

          <p className="text-gray-400 max-w-3xl leading-relaxed text-lg">
            Currently working at Vlinder Labs as a Software Engineer.
            I specialize in scalable backend architectures, Redis-based queue
            systems, real-time WebSocket communication, and payment gateway
            integrations within microservice environments.
            <br /><br />
            Experienced with load balancing (PM2, Nginx), Redis Pub/Sub,
            BullMQ queues, and production system optimization.
          </p>
        </div>
      </section>

      {/* WORK / PROJECTS */}
      <section id="work" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-10 py-24">
          <h3 className="text-4xl font-semibold mb-16">Selected Work</h3>

          <div className="space-y-20">

            {/* Project 1 */}
            <div>
              <h4 className="text-2xl font-semibold">
                GEMS — Costume Sales & Distribution Platform
              </h4>

              <p className="text-gray-400 mt-6 max-w-3xl leading-relaxed">
                Built scalable backend APIs allowing admins to manage costume
                themes, committees and users. Integrated secure payment gateways
                and implemented Redis-based queue token system ensuring fair,
                low-latency distribution. Optimized to handle 15,000+ users.
              </p>
            </div>

            {/* Project 2 */}
            <div>
              <h4 className="text-2xl font-semibold">
                Payment Gateway Microservices
              </h4>

              <p className="text-gray-400 mt-6 max-w-3xl leading-relaxed">
                Designed and developed 5+ payment integrations within a
                microservices architecture. Implemented idempotency handling,
                webhook verification and retry strategies. Reduced API latency
                from 4s to 1s through optimization and indexing.
              </p>
            </div>

            {/* Project 3 */}
            <div>
              <h4 className="text-2xl font-semibold">
                Real-Time Distribution & Live Map
              </h4>

              <p className="text-gray-400 mt-6 max-w-3xl leading-relaxed">
                Implemented WebSocket-based live tracking using Redis Pub/Sub.
                Built concurrency-safe queue workflows using BullMQ enabling
                smooth distribution operations under heavy load.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-10 py-24">
          <h3 className="text-4xl font-semibold mb-8">Contact</h3>

          <p className="text-gray-400 mb-6">
            Open to backend engineering roles and scalable systems challenges.
          </p>

          <div className="space-y-2 text-gray-300">
            <p>Email: charanbj10042002@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
            <p>GitHub: github.com/yourusername</p>
          </div>
        </div>
      </section>

    </main>
  );
}