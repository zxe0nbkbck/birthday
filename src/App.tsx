import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideContainer from './components/SlideContainer';

import IntroSlide from './components/slides/IntroSlide';
import StatSlide from './components/slides/StatSlide';
import MemoryGridSlide from './components/slides/MemoryGridSlide';
import QuoteSlide from './components/slides/QuoteSlide';
import PersonalMessageSlide from './components/slides/PersonalMessageSlide';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalSlides = 5;

  const handleNext = () => {
    setDirection(1);
    setActiveSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };
  
  const handlePrev = () => {
    setDirection(-1);
    setActiveSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full h-[100dvh] bg-black overflow-hidden selection:bg-pink-500/30">
      
      {/* Background Aurora Orbs - Placed here securely outside AnimatePresence so they never transition */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-purple-800/40 to-pink-600/40 blur-[100px] animate-aurora pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-blue-900/40 to-cyan-500/30 blur-[120px] animate-aurora pointer-events-none" style={{ animationDelay: '-10s' }} />

      {/* Memory Grid Marquee & Background (Only visible on slide 2) */}
      <AnimatePresence>
        {activeSlide === 2 && (
          <motion.div 
            className="absolute inset-0 z-0 bg-black/50 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="absolute flex flex-col justify-around opacity-[0.06] -rotate-6"
              style={{ top: '-30%', left: '-20%', right: '-20%', bottom: '-30%' }}
            >
              {[...Array(11)].map((_, row) => {
                const goRight = row % 2 === 0;
                return (
                  <motion.div
                    key={row}
                    className="flex whitespace-nowrap text-[3rem] md:text-[5rem] font-black uppercase text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, x: goRight ? ['0%', '-50%'] : ['-50%', '0%'] }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: row * 0.08, ease: "easeOut" },
                      scale: { duration: 0.6, delay: row * 0.08, ease: "easeOut" },
                      x: { repeat: Infinity, ease: 'linear', duration: 15 + row * 2 }
                    }}
                  >
                    <span>BEST MOMENTS EVER &nbsp;&nbsp; BEST MOMENTS EVER &nbsp;&nbsp; BEST MOMENTS EVER &nbsp;&nbsp; BEST MOMENTS EVER &nbsp;&nbsp; BEST MOMENTS EVER &nbsp;&nbsp; </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spotify-style Progress Bars Header */}
      <div className="absolute top-6 left-6 right-6 z-50 flex gap-2 pointer-events-none">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-white transition-all duration-[400ms] ease-out"
              style={{ width: idx < activeSlide ? '100%' : idx === activeSlide ? '100%' : '0%' }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <SlideContainer 
          key={activeSlide} 
          direction={direction}
          onNext={handleNext} 
          onPrev={handlePrev} 
          canNext={activeSlide < totalSlides - 1} 
          canPrev={activeSlide > 0}
          disableClickNav={activeSlide === totalSlides - 1}
        >
          {activeSlide === 0 && <IntroSlide />}
          {activeSlide === 1 && <StatSlide />}
          {activeSlide === 2 && <MemoryGridSlide />}
          {activeSlide === 3 && <QuoteSlide />}
          {activeSlide === 4 && <PersonalMessageSlide onPrev={handlePrev} />}
        </SlideContainer>
      </AnimatePresence>
    </div>
  );
}

export default App;
