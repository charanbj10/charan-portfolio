export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0c0c0c] to-black text-white">

      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">Sri Charan BJ</h1>
        <div className="space-x-6 text-gray-400 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">

        {/* HERO */}
        <section className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Backend Software Engineer
          </h2>

          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            3+ years building scalable microservices using Node.js, TypeScript,
            NestJS, MongoDB and Redis. Designed systems serving 15,000+ users,
            integrated 5+ payment gateways, and improved API latency from 4s to 1s.
          </p>

          <div className="flex gap-6 pt-4">
            <a
              href="#projects"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              View Work
            </a>
            <a
              href="/resume.pdf"
              className="border border-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="space-y-6">
          <h3 className="text-3xl font-semibold">About</h3>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            Currently working at Vlinder Labs as a Software Engineer.
            I specialize in backend architecture, scalable API design,
            microservices and real-time systems. Experienced in load balancing
            (PM2, Nginx), Redis-based queue systems, WebSocket real-time updates,
            and production troubleshooting.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-8">
          <h3 className="text-3xl font-semibold">Experience</h3>

          <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl space-y-4">
            <h4 className="text-xl font-semibold">Vlinder Labs — Software Engineer</h4>
            <p className="text-gray-400">
              • Designed REST & GraphQL APIs using NestJS ensuring performance & scalability  
              • Integrated 5+ payment gateways with microservice architecture  
              • Reduced API latency from 4s → 1s via DB indexing and optimization  
              • Implemented queue handling using BullMQ + Redis  
              • Achieved 40% improvement in request handling using PM2 & Nginx load balancing  
              • Built real-time workflows using MQTT & Redis Pub/Sub  
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-12">
          <h3 className="text-3xl font-semibold">Key Projects</h3>

          <div className="grid md:grid-cols-2 gap-8">

            {/* GEMS */}
            <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition">
              <h4 className="text-xl font-semibold">
                GEMS — Costume Sales & Distribution Platform
              </h4>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Built scalable backend APIs enabling admins to manage costume
                themes, committees, and users. Integrated secure payment gateways,
                and implemented Redis-based queue token system for fair distribution.
                Optimized system to support 15,000+ customers during peak load.
              </p>
            </div>

            {/* Distribution + Live Map */}
            <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition">
              <h4 className="text-xl font-semibold">
                Real-Time Distribution & Live Map
              </h4>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Implemented WebSocket-based real-time location tracking with
                Redis Pub/Sub enabling live delivery tracking. Built concurrency-
                safe queue handling with BullMQ ensuring low latency processing.
              </p>
            </div>

            {/* EPCC */}
            <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition">
              <h4 className="text-xl font-semibold">
                EPCC — E-Police Clearance Certificate
              </h4>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Developed secure backend APIs for application workflow,
                implemented real-time status tracking, and automated PDF certificate
                generation for verified digital downloads.
              </p>
            </div>

          </div>
        </section>

        {/* TECH STACK */}
        <section className="space-y-8">
          <h3 className="text-3xl font-semibold">Tech Stack</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-400">
            <div>Node.js</div>
            <div>TypeScript</div>
            <div>NestJS</div>
            <div>MongoDB</div>
            <div>Redis</div>
            <div>BullMQ</div>
            <div>PM2</div>
            <div>Nginx</div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="space-y-6 pb-24">
          <h3 className="text-3xl font-semibold">Contact</h3>
          <div className="text-gray-400">
            <p>Email: charanbj10042002@gmail.com</p>
            <p>LinkedIn: https://www.linkedin.com/in/sri-charan-bj-349039196/</p>
            {/* <p>GitHub: github.com/yourusername</p> */}
          </div>
        </section>

      </div>
    </main>
  );
}