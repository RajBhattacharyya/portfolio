import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import MindfulPals from "../../assets/mindfulpals.png";
import FitFusionAI from "../../assets/fitfusionai.png";
import FitFitWatch from "../../assets/fitfitwatch.png";

const Projects = () => {
  const projects = [
    {
      title: "Git-workflow-optimisation",
      description:
        "An AI-driven GitHub Workflow Optimizer automatically detects inefficiencies, reduces CPU/GPU usage, and optimizes resource consumption—saving time, money, and the environment.",
      image:
        "https://github.com/RajBhattacharyya/git-workflow-optimisation/raw/master/home.png",
      technologies: [
        "React",
        "Node.js",
        "Python",
        "Git",
        "Github",
        "Slack",
        "Docker",
        "firebase",
      ],
      githubUrl:
        "https://github.com/RajBhattacharyya/git-workflow-optimisation",
      featured: true,
    },
    {
      title: "MindfulPals: Virtual Pet Therapy Project",
      description:
        "A heartwarming initiative for kids, combining emotion recognition and a virtual companion. Our project fosters joy, companionship, and therapeutic interactions. With machine learning and React, it's a tech-powered haven where children connect, express, and feel supported.",
      image: MindfulPals,
      technologies: ["React", "Express", "MongoDB", "CNN", "TensorFlow", "Python", "Node.js", "Socket.io", "Rest API"],
      githubUrl: "https://github.com/RajBhattacharyya/MindfulPals/",
      featured: true,
    },
    {
      title: "FitFusionAI - AI-Powered Fitness App",
      description:
        "Revolutionize Your Fitness Journey with AI-powered Training! 🏋️‍♂️ Get personalized workouts that adapt to your progress, making every session more effective and enjoyable.",
      image: FitFusionAI,
      technologies: ["React", "TypeScript", "Chart.js", "CNN", "TensorFlow", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/RajBhattacharyya/FitFusionAI",
      featured: false,
    },
    {
      title: "FIT-FIT WATCH",
      description:
        "innovative application harnesses the power of artificial intelligence and blockchain technology to deliver real-time health checkups and secure data management, all from the convenience of your smartwatch. Our app ensures a seamless and interactive experience",
      image: FitFitWatch,
      technologies: ["Flutter","Dart", "Firebase", "Polygon", "Google Maps API", "REST API", "ESP32"],
      githubUrl: "https://github.com/RajBhattacharyya/Fit_Fit_watch",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've used to build
            them
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                className={index % 2 === 1 ? "lg:order-2" : ""}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover"
                    variants={imageVariants}
                    whileHover="hover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent flex items-center justify-center"
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="visible"
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.githubUrl}
                        className="bg-white/90 text-neutral-900 p-3 rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <LuGithub size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, staggerChildren: 0.1 }}
                >
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full border border-primary-200 dark:border-primary-700"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 border-2 border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LuGithub size={18} />
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            Other Projects
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-dark-700 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubUrl}
                        className="bg-white/90 text-neutral-900 p-2 rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <LuGithub size={18} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-2 py-1 bg-neutral-100 dark:bg-dark-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-md"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
