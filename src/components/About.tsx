import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description:
        "Creating user-centered designs that balance aesthetics with functionality.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and user experience.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively in cross-functional teams to deliver exceptional results.",
    },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-dark-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm a passionate developer with over 4 years of experience creating
            digital solutions that make a difference. I love turning complex
            problems into simple, beautiful, and intuitive solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                My journey in technology started with a curiosity about how
                things work. What began as tinkering with code has evolved into
                a career dedicated to crafting exceptional digital experiences.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                I specialize in full-stack development with expertise in
                Flutter, React Native, and various modern Javascript frameworks. I
                believe in continuous learning and staying up-to-date with the
                latest industry trends.
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                What Drives Me
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                I'm motivated by the impact technology can have on people's
                lives. Whether it's streamlining a business process or creating
                an engaging user interface, I strive to build solutions that are
                both functional and delightful to use.
              </p>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-neutral-50 dark:bg-dark-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  className="text-primary-600 dark:text-primary-400 mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <highlight.icon size={32} />
                </motion.div>
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
