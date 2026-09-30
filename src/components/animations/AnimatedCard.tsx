import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
}

const AnimatedCard = ({ 
  children, 
  className = "",
  hoverScale = 1.02
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }}
      whileHover={{ 
        scale: hoverScale,
        y: -5,
        transition: {
          duration: 0.2,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
