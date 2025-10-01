import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-dark flex flex-col md:flex-row items-center justify-center"
    >
      {/* Profile Image */}
      <motion.img
        src="/me.png"
        alt="Abhineet Raj"
        className="w-36 h-36 md:w-56 md:h-56 object-cover rounded-full mb-6 md:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      {/* Text */}
      <motion.div
        className="md:ml-8 text-center md:text-left max-w-3xl"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-heading text-neon mb-4">About Me</h2>
        <p className="text-gray-300 text-base leading-relaxed">
         I’m a third-year Computer Science and Engineering student at SRM Institute of Science & Technology with a strong interest in software development, problem-solving, and building real-world applications. 
         Over the past few years, I’ve gained experience with technologies such as Java, Kotlin, React, Node.js, Firebase, MySQL, and PostgreSQL, allowing me to work across both frontend and backend development. 
         I enjoy creating responsive web apps, scalable backends, and mobile solutions that focus on usability and impact.
          <br /><br />
         Beyond academics, I actively participate in projects, hackathons, and collaborations, 
         as I believe working in teams not only improves technical skills but also enhances communication and creativity. 
         I’m passionate about continuous learning and excited to explore opportunities where I can apply my knowledge while growing as a developer.
        Outside of coding, I enjoy music, travelling, and playing sports, which keep 
        me energized and bring balance to my life. 
        I’m always open to new ideas, collaborations, and challenges that inspire innovation.
        </p>
      </motion.div>
    </section>
  );
}