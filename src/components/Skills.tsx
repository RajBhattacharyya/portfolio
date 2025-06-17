import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'React Native', level: 90 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Vue js', level: 75 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 87 },
        { name: 'MongoDB', level: 82 },
        { name: 'Express.js', level: 82 },
        { name: 'PostgreSQL', level: 79 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'GCP', level: 88 },
        { name: 'AWS', level: 85 },
        { name: 'CI/CD', level: 82 },
        { name: 'Docker', level: 77 },
      ],
    },
  ];

  const tools = [
    'VS Code', 'Figma', 'Postman', 'Slack', 'Notion', 'Oauth2', 
    'Chatgpt', 'Firebase', 'Vercel', 'Netlify'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    })
  };

  const toolVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-neutral-50 dark:bg-dark-700 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-dark-600"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-700 dark:text-neutral-300 font-medium">{skill.name}</span>
                      <motion.span 
                        className="text-sm text-neutral-500 dark:text-neutral-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 + 0.5 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-dark-600 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-primary-500 to-accent-500 dark:from-primary-400 dark:to-accent-400 h-2 rounded-full"
                        variants={skillBarVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8">
            Tools & Platforms
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.span 
                key={index}
                variants={toolVariants}
                whileHover="hover"
                custom={index}
                className="px-4 py-2 bg-neutral-100 dark:bg-dark-700 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-neutral-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-primary-300 rounded-lg border border-neutral-200 dark:border-dark-600 hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;