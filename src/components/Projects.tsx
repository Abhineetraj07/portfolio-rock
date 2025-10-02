import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ASHA HBYC App",
    description:
      "Digitized Home-Based Care reporting for ASHA workers with bilingual forms, milestone reminders, and Firebase backend.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    image: "/Asha.png",
    github: "https://github.com/Abhineetraj07/Asha_HBYC_App",
    demo: "https://www.youtube.com/shorts/mWrlcAZX1qE",
  },
  {
    title: "Recipe Finder",
    description:
      "Web app to search recipes by ingredients with YouTube integration. Features dark/light mode and dynamic filtering.",
    tech: ["React", "Tailwind", "API Integration"],
    image: "/recipe.png",
    github: "https://github.com/Abhineetraj07/Recipe-finder",
    demo: "https://recipe-finder-abhineet.netlify.app/",
  },
  {
    title: "Unity Web",
    description:
      "Event management project built with SQL-based backend and Java Swing frontend UI.",
    tech: ["Java Swing", "SQL", "Core Java"],
    image: "/unity-web.png",
    github: "https://github.com/Abhineetraj07/unity-web",
    demo: "",
  },
  {
    title: "FarmLand",
    description:
      "Farming management system with crop, market, and inventory modules. Built with Streamlit & MySQL.",
    tech: ["Streamlit", "MySQL", "Python"],
    image: "/farmland.png",
    github: "https://github.com/Kuravarsha/FarmLand",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-dark text-center">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl font-extrabold italic uppercase text-neon mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        PROJECTS
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative group [perspective:1000px] w-full h-80 sm:h-96 lg:h-[400px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Flip Container */}
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front (Album Cover) */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Back (Details) */}
              <div className="absolute inset-0 bg-dark border border-gray-700 rounded-xl p-4 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-xl font-bold text-gray-200 mb-2 font-sans">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3 justify-center">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded font-sans"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-neon hover:underline flex items-center space-x-1"
                    >
                      <FaGithub /> <span className="font-sans">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-neon hover:underline flex items-center space-x-1"
                    >
                      <FaExternalLinkAlt /> <span className="font-sans">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}