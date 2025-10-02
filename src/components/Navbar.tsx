import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-dark/80 backdrop-blur-sm z-50 px-6 py-4 flex justify-between items-center"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo (scrolls to Hero) */}
      <a href="#hero" className="flex items-center space-x-2 hover:opacity-80">
        <img
          src="/logo.webp" // ✅ replace with your actual filename in /public
          alt="Abhineet Raj Logo"
          className="h-32 w-auto" // adjust size as you like
        />
      </a>

      {/* Center Menu */}
      <div className="hidden md:flex space-x-8 text-gray-300 font-sans font-medium">
        <a href="#about" className="hover:text-neon transition">About</a>
        <a href="#skills" className="hover:text-neon transition">Skills</a>
        <a href="#projects" className="hover:text-neon transition">Projects</a>
        <a href="#experience" className="hover:text-neon transition">Experience</a>
        <a href="#contact" className="hover:text-neon transition">Contact</a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-5 text-xl text-gray-300">
        <a
          href="https://github.com/Abhineetraj07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abhineet2005/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/abhineetraj07/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neon"
        >
          <FaInstagram />
        </a>
      </div>
    </motion.nav>
  );
}