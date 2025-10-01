import { motion } from "framer-motion";

const experiences = [
  {
    role: "Android Developer Intern",
    company: "NIPI NGO (Norway India Partnership Initiative)",
    duration: "June 2025 – July 2025",
    description:
      "Developed the ASHA HBYC App for digital health reporting. Built bilingual forms, milestone reminders, dashboards, and Firebase Firestore backend integration.",
  },
  {
    role: "Red Bull Basement",
    company: "Global Student Innovation Program",
    duration: "31st December 2024",
    description:
      "Qualified till the 3rd round with an innovative idea to solve real-world challenges using technology.",
  },
  {
    role: "Smart India Hackathon 2025",
    company: "Government of India",
    duration: "16th – 18th August 2025",
    description:
      "Worked on fintech-based MSME solution in internal round. Gained hands-on experience in teamwork, presentation, and pitching ideas.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-dark text-center">
      <motion.h2
        className="text-3xl font-heading text-neon mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience & Achievements
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 text-left shadow-lg hover:border-neon transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-gray-200">{exp.role}</h4>
            <p className="text-neon text-sm">
              {exp.company} • {exp.duration}
            </p>
            <p className="text-gray-400 mt-3">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}