import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaPython } from "react-icons/fa";
import { SiKotlin, SiFirebase, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" />, level: "Professional" },
  { name: "SQL", icon: <FaDatabase className="text-blue-400 text-3xl" />, level: "Professional" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" />, level: "Intermediate" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" />, level: "Intermediate" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-3xl" />, level: "Intermediate" },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-500 text-3xl" />, level: "Intermediate" },
  { name: "C++", icon: <SiCplusplus className="text-blue-600 text-3xl" />, level: "Intermediate" },
  { name: "Python", icon: <FaPython className="text-green-400 text-3xl" />, level: "Intermediate" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-dark text-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-extrabold italic uppercase text-neon mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        SKILLS
      </motion.h2>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="p-6 bg-dark border border-gray-700 rounded-lg flex flex-col items-center shadow-md hover:border-neon hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {skill.icon}
            <h3 className="mt-3 text-lg font-bold text-gray-200 font-sans">{skill.name}</h3>
            <p className="text-sm text-gray-400 font-sans">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}