import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const photos = [
  // ✏️ Drop your photos into public/memories/ and list them here
  "/memories/photo1.jpeg",
  "/memories/photo2.jpeg",
  "/memories/photo3.jpeg",
  "/memories/photo4.jpeg",
  "/memories/photo5.jpeg",
  "/memories/photo6.jpeg",
  "/memories/photo7.jpeg",
  // You can add as many as you want here!
];

// Dynamic, alternating messy fan layout:
// - 1st background photo goes Left
// - 2nd background photo goes Right
// - 3rd background photo goes Far Left, etc.
// Gives that "tossed pile" messy look but strictly alternates sides so the center is clear.
const getRestingPosition = (indexOffset: number) => {
  if (indexOffset === 0) return { x: '-50%', y: '-55%', rotate: 0, scale: 1.15 };

  // Odd numbers go left, even numbers go right.
  const isLeft = indexOffset % 2 !== 0;

  // How many pairs deep (1 & 2 = pair 1, 3 & 4 = pair 2)
  const pairDepth = Math.ceil(indexOffset / 2);

  // Spread out horizontally by 45% per pair
  const x = (isLeft ? -1 : 1) * (pairDepth * 45);

  // Slight messy vertical jitter
  const y = (isLeft ? 8 : -8) + (pairDepth * 2);

  // Messy tilts
  const rotate = (isLeft ? -1 : 1) * (12 + (indexOffset * 4));

  // Get slightly smaller as they get further back
  const scale = Math.max(0.65, 0.95 - (pairDepth * 0.1));

  return {
    x: `calc(-50% + ${x}%)`,
    y: `calc(-50% + ${y}%)`,
    rotate,
    scale
  };
};

export default function MemoryGridSlide() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-cycle through the photos every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prevIdx) => (prevIdx + 1) % photos.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden">

      <motion.h2
        className="absolute top-20 left-0 right-0 z-40 text-2xl md:text-3xl font-bold uppercase tracking-[0.3em] text-white/70 text-center pointer-events-none drop-shadow-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        The Highlights
      </motion.h2>

      {/* Neat Scattered Photo Deck */}
      <div className="relative w-full max-w-lg aspect-square mx-auto z-20 pointer-events-none">
        {photos.map((src, idx) => {
          const isActive = idx === activeIdx;

          // Calculate how far back this card is in the deck
          // Adding photos.length ensures we don't get negative modulo
          let indexOffset = (idx - activeIdx + photos.length) % photos.length;
          // If it's active, indexOffset is 0.

          const pos = getRestingPosition(indexOffset);

          return (
            <motion.div
              key={idx}
              className="absolute top-1/2 left-1/2 bg-white/10 p-[6px] md:p-[8px] rounded-2xl backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 origin-center pointer-events-auto"
              style={{ width: 'clamp(220px, 45%, 360px)' }}
              animate={
                isActive
                  ? {
                    x: '-50%',
                    y: '-55%', // Lifted up slightly
                    rotate: 0,
                    scale: 1.15,
                    zIndex: 50,
                    opacity: 1,
                  }
                  : {
                    x: pos.x,
                    y: pos.y,
                    rotate: pos.rotate,
                    scale: pos.scale,
                    // The further back in the deck, the lower the z-index
                    zIndex: 40 - indexOffset,
                    opacity: Math.max(0.4, 0.9 - (indexOffset * 0.15)),
                  }
              }
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 14,
                mass: 1.2
              }}
              whileHover={{
                scale: isActive ? 1.2 : pos.scale * 1.05,
                zIndex: 60,
                opacity: 1
              }}
            >
              <img
                src={src}
                alt={`Memory ${idx + 1}`}
                className="w-full aspect-square object-cover rounded-xl"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.2)] ${idx === activeIdx ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
