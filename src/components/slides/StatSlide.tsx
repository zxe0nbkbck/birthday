import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export default function StatSlide() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const animation = animate(count, 43800, {
      duration: 3,
      ease: 'easeOut',
      delay: 0.5
    });
    return animation.stop;
  }, [count]);

  return (
    <div className="flex flex-col justify-center w-full max-w-6xl mx-auto h-full pb-20 px-8 md:px-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white/70 mb-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        You spent around...
      </motion.h2>

      <motion.div
        className="text-[6rem] md:text-[10rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
      >
        <motion.span>{rounded}</motion.span>
      </motion.div>

      <motion.h3
        className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        hours making my <br /> <span className="text-pink-500">life better.</span> Thats about 5 Years Thats Crazy right?
      </motion.h3>
    </div>
  );
}
