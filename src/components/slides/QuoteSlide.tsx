import { motion } from 'framer-motion';

export default function QuoteSlide() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-20 px-8 text-center text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="max-w-3xl"
      >
        <span className="text-pink-500 text-6xl md:text-8xl font-black block mb-[-20px] md:mb-[-40px] text-left opacity-50">"</span>
        <h2 className="text-3xl md:text-5xl font-extrabold leading-snug tracking-tight mb-8">
          A friend is someone who knows all about you and still loves you anyway. Par tu Friend nahi bhondu hai apna 😝
        </h2>
        <span className="text-pink-500 text-6xl md:text-8xl font-black block mt-[-40px] text-right opacity-50">"</span>

        <motion.p
          className="text-lg md:text-2xl font-bold text-white/50 tracking-[0.2em] uppercase mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          — Thank you for everything.
        </motion.p>
      </motion.div>
    </div>
  );
}
