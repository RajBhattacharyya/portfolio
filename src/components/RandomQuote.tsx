import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

interface QuoteData {
  text: string;
  author: string;
}

const RandomQuote = () => {
  const [quote, setQuote] = useState<QuoteData>({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  const inspirationalQuotes: QuoteData[] = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
    },
    {
      text: "The best error message is the one that never shows up.",
      author: "Thomas Fuchs",
    },
    {
      text: "Programs must be written for people to read, and only incidentally for machines to execute.",
      author: "Harold Abelson",
    },
    {
      text: "The most damaging phrase in the language is: 'We've always done it this way!'",
      author: "Grace Hopper",
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    },
    {
      text: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde",
    },
    {
      text: "In order to be irreplaceable, one must always be different.",
      author: "Coco Chanel",
    },
    {
      text: "Java is to JavaScript what car is to Carpet.",
      author: "Chris Heilmann",
    },
    {
      text: "The computer was born to solve problems that did not exist before.",
      author: "Bill Gates",
    },
    {
      text: "A language that doesn't affect the way you think about programming is not worth knowing.",
      author: "Alan Perlis",
    },
    {
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "Everything you've ever wanted is on the other side of fear.",
      author: "George Addair",
    },
  ];

  useEffect(() => {
    // Simulate loading and select random quote
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(
        Math.random() * inspirationalQuotes.length
      );
      setQuote(inspirationalQuotes[randomIndex]);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div variants={quoteVariants} className="relative">
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg"
              >
                <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </motion.div>
            </div>

            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4 mx-auto max-w-2xl"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mx-auto max-w-xs"></div>
              </div>
            ) : (
              <>
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 dark:text-gray-200 mb-6 leading-relaxed"
                >
                  "{quote.text}"
                </motion.blockquote>

                <motion.cite
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium not-italic"
                >
                  — {quote.author}
                </motion.cite>
              </>
            )}

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-blue-300 dark:border-blue-500"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-blue-300 dark:border-blue-500"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8 text-sm text-gray-500 dark:text-gray-400"
          >
            ✨ A new quote appears on every visit
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RandomQuote;
