import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "APPYGO SERVICES PVT LTD",
      location: "Kolkata, India",
      period: "2025 - Present",
      description: [
        "Led development of a food delevery flutter application, enhancing user engagement by 30%",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Developed and maintained RESTful APIs, improving data retrieval speed by 25%",
      ],
      technologies: ["React Native", "Node.js", "AWS", "Docker", "Redis"],
    },
    {
      title: "Full Stack Developer",
      company: "Banao Technologies",
      location: "Gurgaon, India",
      period: "2024-2025",
      description: [
        "Developed and deployed a photo and video contest application, accelerating user engagement by 40%",
        "Engineered and optimized a scalable Django backend and AWS architecture, increasing app performance by 35% while reducing server response time.",
        "Analyzed user interactions and segmented participation data, strengthening user retention by 25%",
      ],
      technologies: ["Flutter", "Django", "Chrome Extensions", "Node.js", "AWS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-neutral-50 dark:bg-dark-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            My professional journey and the impact I've made at each step
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-800 origin-top"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-dark-900 shadow-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 + 0.5, duration: 0.4 }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content Card */}
                <motion.div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-dark-700"
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-4">
                      <motion.h3
                        className="text-xl font-semibold text-neutral-900 dark:text-white mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.3 + 0.7 }}
                      >
                        {experience.title}
                      </motion.h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                          <ExternalLink size={16} />
                          <span className="font-medium">
                            {experience.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="text-neutral-600 dark:text-neutral-300 flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.3 + 0.8 + idx * 0.1 }}
                        >
                          <span className="text-primary-600 dark:text-primary-400 mr-2 mt-2">
                            •
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + 1.2 }}
                    >
                      {experience.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full border border-primary-200 dark:border-primary-700"
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.3 + 1.3 + idx * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
