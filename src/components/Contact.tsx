import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 Here you can integrate EmailJS or Formspree
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-dark text-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-extrabold italic uppercase text-neon mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        CONTACT
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-400 mb-8 max-w-xl mx-auto font-sans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Let’s connect! Reach out through email, LinkedIn, GitHub, or send me a
        message directly below.
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-8 text-3xl text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="mailto:abhineetraj2005@gmail.com"
          className="hover:text-neon transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/abhineet2005/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neon transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Abhineetraj07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neon transition"
        >
          <FaGithub />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-900/70 border border-gray-700 rounded-lg p-6 text-left shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="mb-4">
          <label className="block text-gray-300 mb-2 font-sans">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:border-neon font-sans"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2 font-sans">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:border-neon font-sans"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2 font-sans">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:border-neon font-sans"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-neon text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}