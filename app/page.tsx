"use client";
import { useState } from "react";


export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* GLOW GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-cyan-600/30 blur-3xl opacity-40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-10">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center py-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            SRI CHARAN BJ
          </h1>

          <div className="space-x-8 text-gray-400 text-sm">
            <a href="#" className="text-purple-400 border-b border-purple-400 pb-1">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="pt-10 pb-0 max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2 mb-8 rounded-full border border-purple-500/40 text-sm bg-purple-500/10 backdrop-blur-md text-purple-300">
            🚀 Ready to Build Scalable Systems
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Backend
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg text-gray-400 leading-relaxed">
            3+ years designing scalable microservices using Node.js,
            TypeScript, MongoDB & Redis. Built systems serving 15K+ users,
            integrated 5+ payment gateways and improved API latency by 75%.
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Node.js", "TypeScript", "MongoDB", "Redis", "Microservices"].map(
              (tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm bg-black/40 backdrop-blur-sm"
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-6 mt-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-medium"
            >
              Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        <section id="about" className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-10 py-32">

            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              About <span className="text-purple-400">Me</span>
            </h2>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-16">

              {/* Left Content */}
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  I'm a Backend Software Engineer with 3+ years of experience
                  building scalable microservices and real-time distributed systems.
                </p>

                <p>
                  Currently working at Vlinder Labs, where I design high-performance
                  REST & GraphQL APIs using NestJS. I specialize in Redis-based
                  queue systems, WebSocket communication, and payment gateway
                  integrations in production environments.
                </p>

                <p>
                  I enjoy solving scalability challenges, optimizing database queries,
                  and building reliable backend architectures that handle thousands
                  of concurrent users efficiently.
                </p>
              </div>

              {/* Right Metrics / Highlights */}
              <div className="space-y-8">

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
                  <h3 className="text-3xl font-bold text-purple-400">15K+</h3>
                  <p className="text-gray-400 mt-2">
                    Users handled in production system
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
                  <h3 className="text-3xl font-bold text-purple-400">5+</h3>
                  <p className="text-gray-400 mt-2">
                    Payment gateways integrated
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
                  <h3 className="text-3xl font-bold text-purple-400">75%</h3>
                  <p className="text-gray-400 mt-2">
                    API latency improvement
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section id="projects" className="relative border-t border-white/10">
  <div className="max-w-6xl mx-auto px-10 py-32">

    {/* Section Title */}
    <h2 className="text-4xl md:text-5xl font-bold mb-16">
      <span className="text-purple-400">Projects</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* PROJECT 1 */}
      <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-purple-500/50 transition duration-300 backdrop-blur-md">

      <h3 className="text-2xl font-semibold mb-4">
        GEMS — Costume Sales & Distribution Platform
      </h3>

      {/* Default One-Line Summary */}
      <p className="text-gray-400 mb-4">
        Distributed Sales & Distribution ecosystem serving 15,000+ users with MongoDB persistence and Redis-based token orchestration.
      </p>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[600px] opacity-100 mb-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-400 leading-relaxed space-y-4">

          <div>
            <span className="text-white font-medium">Primary Database:</span><br />
            MongoDB used as the primary data store ensuring inventory consistency,
            transactional validation, and persistent operational data.
          </div>

          <div>
            <span className="text-white font-medium">Sales Service:</span><br />
            Implemented inventory lifecycle management and multi-user costume
            creation workflows with stock validation to prevent overselling.
          </div>

          <div>
            <span className="text-white font-medium">Adapter Layer:</span><br />
            Designed an integration bridge between Sales and Distribution services,
            enabling loose coupling and scalable inter-service communication.
          </div>

          <div>
            <span className="text-white font-medium">Distribution Service:</span><br />
            Engineered a Redis + BullMQ token orchestration system (generation,
            waiting, and delivery queues) with concurrency-safe locking for fair
            crowd management. Deployed behind Nginx for load balancing and
            horizontal scaling.
          </div>

        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["NestJS", "MongoDB", "Redis", "BullMQ", "Nginx", "PM2"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full border border-white/20 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <p className="text-purple-400 font-semibold">
          15,000+ Users Served
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="text-blue-400 hover:text-blue-300 transition"
        >
          {open ? "Hide Details" : "Details →"}
        </button>
      </div>

    </div>

      {/* PROJECT 2 */}
      <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-purple-500/50 transition duration-300 backdrop-blur-md">

      <h3 className="text-2xl font-semibold mb-4">
        Payment Gateway Microservices
      </h3>

      {/* Default One Line Summary */}
      <p className="text-gray-400 mb-4">
        Built scalable payment microservices integrating 5+ gateways with reliability, idempotency, and secure webhook handling.
      </p>

      {/* Expandable Section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[600px] opacity-100 mb-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-400 leading-relaxed space-y-4">

          <div>
            <span className="text-white font-medium">Gateway Integrations:</span><br />
            Integrated 5+ payment providers within a microservice architecture,
            supporting REST-based transaction initiation and status verification flows.
          </div>

          <div>
            <span className="text-white font-medium">Reliability & Idempotency:</span><br />
            Implemented idempotent APIs to prevent duplicate transactions,
            ensured safe retry mechanisms for transient failures,
            and designed resilient error-handling workflows.
          </div>

          <div>
            <span className="text-white font-medium">Webhook Security:</span><br />
            Built secure webhook processing with signature validation,
            IP whitelisting, payload verification, and replay attack protection.
          </div>

          <div>
            <span className="text-white font-medium">Transaction Integrity:</span><br />
            Designed reconciliation logic, payment status synchronization,
            and auditing mechanisms to ensure financial consistency across services.
          </div>

        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["Node.js", "TypeScript", "Microservices", "REST", "Redis"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full border border-white/20 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <p className="text-purple-400 font-semibold">
          Latency Reduced from 4s → 1s
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="text-blue-400 hover:text-blue-300 transition"
        >
          {open ? "Hide Details" : "Details →"}
        </button>
      </div>

    </div>

      {/* PROJECT 3 */}
      <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-purple-500/50 transition duration-300 backdrop-blur-md md:col-span-2">

        <h3 className="text-2xl font-semibold mb-4">
          Real-Time Live Map
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
          Implemented a real-time GPS tracking system using GraphQL WebSockets and Redis Pub/Sub for event-driven communication.

          Built with horizontal scalability and high concurrency in mind.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {["WebSocket", "GraphQL Subscriptions", "Redis Pub/Sub", "Node JS"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full border border-white/20 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-purple-400 font-semibold">
          Real-time High-Concurrency System
        </p>
      </div>

    </div>
  </div>
</section>

<section id="tech" className="relative border-t border-white/10">
  <div className="max-w-6xl mx-auto px-10 py-32">

    {/* Section Title */}
    <h2 className="text-4xl md:text-5xl font-bold mb-16">
      Tech <span className="text-purple-400">Stack</span>
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {[
        "Node.js",
        "TypeScript",
        "Javascript",
        "NestJS",
        "MongoDB",
        "Redis",
        "BullMQ",
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "Nginx",
        "Digital Ocean"
      ].map((tech) => (
        <div
          key={tech}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md hover:border-purple-500/50 hover:scale-105 transition duration-300"
        >
          <p className="text-lg font-medium text-gray-300">
            {tech}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

<section id="contact" className="relative border-t border-white/10">
  <div className="max-w-6xl mx-auto px-10 py-32">

    {/* Section Title */}
    <h2 className="text-4xl md:text-5xl font-bold mb-16">
      Let’s <span className="text-purple-400">Connect</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* EMAIL */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md hover:border-purple-500/50 transition duration-300">
        <h3 className="text-xl font-semibold mb-4">Email</h3>
        <a
          href="mailto:charanbj10042002@gmail.com"
          className="text-gray-400 hover:text-purple-400 transition break-words"
        >
          charanbj10042002@gmail.com
        </a>
      </div>

      {/* LINKEDIN */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md hover:border-purple-500/50 transition duration-300">
        <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
        <a
          href="https://linkedin.com/in/sri-charan-bj-349039196/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 transition break-words"
        >
          linkedin.com/in/sri-charan-bj-349039196
        </a>
      </div>

      {/* PHONE */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md hover:border-purple-500/50 transition duration-300">
        <h3 className="text-xl font-semibold mb-4">Phone</h3>
        <a
          href="tel:+919360163460"
          className="text-gray-400 hover:text-purple-400 transition"
        >
          +91 9360163460
        </a>
      </div>

    </div>

    {/* Footer Note */}
    <div className="mt-20 text-gray-500 text-sm">
      © {new Date().getFullYear()} Sri Charan BJ. Built with Next.js & Tailwind.
    </div>

  </div>
</section>

      </div>
    </main>
  );
}