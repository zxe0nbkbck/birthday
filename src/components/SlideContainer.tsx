import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideContainerProps {
  children: ReactNode;
  onNext: () => void;
  onPrev: () => void;
  canNext: boolean;
  canPrev: boolean;
  disableClickNav?: boolean;
  direction: number;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0.5
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%', // If we just clicked prev (direction < 0), current slide exits to the RIGHT ('100%')
    opacity: 0.5
  })
};

export default function SlideContainer({ children, onNext, onPrev, canNext, canPrev, disableClickNav, direction }: SlideContainerProps) {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        {children}
      </div>

      {/* Invisible Click Zones for Navigation — hidden when disableClickNav is true */}
      {!disableClickNav && (
        <>
          <div className="absolute inset-y-0 left-0 w-1/3 z-20" onClick={canPrev ? onPrev : undefined} style={{ cursor: canPrev ? 'pointer' : 'default' }} />
          <div className="absolute inset-y-0 right-0 w-2/3 z-20" onClick={canNext ? onNext : undefined} style={{ cursor: canNext ? 'pointer' : 'default' }} />
        </>
      )}
      
      {/* Progress Bars (Spotify Style) */}
      <div className="absolute top-4 left-4 right-4 z-30 flex gap-2">
         {/* We will pass total slides from App, but for simplicity we'll just handle it in App.tsx */}
      </div>
    </motion.div>
  );
}
