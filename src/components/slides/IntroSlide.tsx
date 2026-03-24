import { motion } from 'framer-motion';

export default function IntroSlide() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto h-full pb-20 px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 mb-6 drop-shadow-2xl">
          READY TO <br /> REWIND?
        </h1>
        <motion.p
          className="text-xl md:text-2xl font-bold text-white/50 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Let's take a look back.
        </motion.p>
      </motion.div>

      {/* Pulsing tap indicator */}
      <motion.div 
        className="absolute bottom-16 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-3">Tap right to continue</p>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-white"
        />
      </motion.div>
    </div>
  );
}
