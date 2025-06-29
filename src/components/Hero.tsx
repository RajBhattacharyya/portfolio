import { motion } from "framer-motion";
import { Linkedin, Mail, Download } from "lucide-react";
import rajProf from "../../assets/raj_prof.png";
import resumePDF from "../../assets/Raj_Resume.pdf";
import { LuGithub } from "react-icons/lu";
import { useState, useEffect } from "react";

const Hero = () => {
  const roles = [
    "Full Stack Web Developer",
    "Android App Developer",
    "AI/ML Developer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentRoleIndex, roles]);

  const socialLinks = [
    {
      icon: LuGithub,
      href: "https://github.com/RajBhattacharyya",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rajbhattacharyya2004/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:rajbhattacharyya18110@gmail.com",
      label: "Email",
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-dark-900 dark:to-dark-800 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-primary-200 dark:bg-primary-800 rounded-full opacity-60"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-accent-200 dark:bg-accent-800 rounded-full opacity-60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-3 h-3 bg-primary-300 dark:bg-primary-700 rounded-full opacity-60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div className="mb-10" variants={itemVariants}>
            <motion.div
              className="relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
              variants={pulseVariants}
              animate="animate"
            >
              <motion.img
                src={rajProf}
                alt="Profile"
                className="w-full h-full rounded-full object-cover object-center shadow-lg border-4 border-white dark:border-dark-700"
                style={
                  {
                    imageRendering: "crisp-edges",
                    WebkitImageRendering: "crisp-edges",
                    objectPosition: "center 40%", // Adjust this to zoom into a specific part
                    transform: "scale(1.2)", // Zoom the image content
                  } as React.CSSProperties
                }
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div className="space-y-1" variants={itemVariants}>
              <motion.p
                className="text-primary-600 dark:text-primary-400 font-medium text-lg md:text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              >
                <motion.span
                  className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Raj Bhattacharyya
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-300 font-light min-h-[2.5rem] flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <span className="relative">
                  {displayedText}
                  <motion.span
                    className="inline-block w-0.5 h-6 bg-primary-600 dark:bg-primary-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </span>
              </motion.p>
            </motion.div>

            <motion.p
              className="max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
              variants={itemVariants}
            >
              Passionate about creating exceptional digital experiences through
              clean code and thoughtful design. I bring ideas to life with
              modern technologies and user-centered approach.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              variants={itemVariants}
            >
              <a
                href={resumePDF}
                download="Raj_Resume.pdf"
                className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 group"
              >
                <Download size={20} />
                Download Resume
                <motion.div
                  className="ml-1"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </a>
              <motion.button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-900 px-8 py-3 rounded-lg font-medium transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-6 mt-8"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-neutral-400 dark:text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 p-2"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
