"use client";
import { motion } from "framer-motion";

const BgCircle = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <div className="absolute w-full h-full rounded-full bg-primary -z-10" />
      <div className="absolute w-3/4 h-3/4 rounded-full bg-accent -z-10" />
      <div className="absolute w-1/2 h-1/2 rounded-full bg-input -z-10" />
      <div className="absolute w-1/4 h-1/4 rounded-full bg-background -z-10" />
    </motion.div>
  );
};

export default BgCircle;
