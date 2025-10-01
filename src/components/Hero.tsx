import { motion } from "framer-motion";
import { FaGithub, FaFilePdf } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-dark text-center px-6"
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl sm:text-6xl font-heading text-neon mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Abhineet Raj
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-gray-300 text-lg max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Third-year Computer Science & Engineering student passionate about
        software development, problem-solving, and building impactful projects.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-2 bg-neon text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
        >
          <FaFilePdf /> Resume
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/Abhineetraj07"
          target="_blank"
          className="flex items-center gap-2 border border-neon text-neon px-6 py-3 rounded-lg font-bold hover:bg-neon hover:text-black transition-colors"
        >
          <FaGithub /> GitHub
        </a>
      </motion.div>
    </section>
  );
}