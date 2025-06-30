import { motion } from "framer-motion";
import ava2d from "../../assets/ava2d.png";

interface SimpleAvatarProps {
  width?: string;
  height?: string;
  className?: string;
}

const SimpleAvatar = ({
  width = "48px",
  height = "48px",
}: SimpleAvatarProps) => {
  return (
    <div style={{ width, height }}>
      <motion.div
        className="w-full h-full relative overflow-hidden rounded-full bg-transparent"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        whileHover={{
          scale: 1.1,
          rotateY: 180,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        animate={{
          rotateY: [0, 5, -5, 0],
          scale: [1, 1.02, 1],
        }}
      >
        <motion.img
          src={ava2d}
          alt="Raj"
          className="w-full h-full object-cover rounded-full"
          style={{
            backfaceVisibility: "hidden",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        {/* Floating particles effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default SimpleAvatar;
