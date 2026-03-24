import { motion } from 'framer-motion';

export default function OutroSlide() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-[0_0_40px_rgba(236,72,153,0.3)] mb-8">
          HAPPY <br /> BIRTHDAY
        </h1>
        <p className="text-xl md:text-2xl text-white/70 font-bold max-w-lg mx-auto leading-relaxed mb-16">
          Here's to a hundred more memories, a thousand more laughs, and a lifetime of being awesome.
        </p>

        <motion.button
           onClick={() => window.location.reload()}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="px-10 py-4 bg-white text-black font-black text-lg tracking-widest uppercase rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all duration-300"
        >
          Replay ↺
        </motion.button>
      </motion.div>
    </div>
  );
}
