import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PersonalMessageSlideProps {
  onPrev: () => void;
}

export default function PersonalMessageSlide({ onPrev }: PersonalMessageSlideProps) {
  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Back button — lives outside the mask so it stays crisp */}
      <button
        onClick={onPrev}
        className="fixed top-12 left-4 z-50 flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase"
      >
        <ArrowLeft size={16} /> Back
      </button>

      {/* Fade mask wrapper */}
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-slim px-6 md:px-12 pt-16 pb-10"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl w-full mx-auto bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl relative"
        >
          {/* Glow effect slightly behind the letter */}
          <div className="absolute inset-0 bg-pink-500/10 blur-3xl -z-10 rounded-3xl" />

          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
            A Note For You
          </h2>

          <div className="text-left space-y-6 text-lg md:text-xl font-medium leading-relaxed text-white/80">
            <p className="font-bold text-white pt-4">
              HAPPYYYY BIRTHDAYYYYYYYYY RIDDHIKAAAAAAAA💗💗
            </p>
            <p>
              Hello Bhondu Jii,
            </p>
            <p>
              Namasteee me aapka apna gandu dost hehe, first of all thank you for being such an amazing friend and for always being there for me. Helping me out with each and every issue i face in my life. I'm blessed to have a bestfriend like you I mean who whould not be blessed to have a friend like you hehh mand badak. I have so much to say but I can't say all of it in words.
            </p>
            <p>
              I wish apan paas me rehete toh kitna maza aata na yaar, har din ek naya adventure hota. Har roj ghumte gedi maarte khaane jaate huihuihui.
            </p>
            <p>
              And yk what bhai I miss you a lottt tu imagine bhi nahi kar paati hogi kitna miss karta hu i feel jealous when log apne mahila mitr k sath ghumne jaate hai gedi maarte hai trass dete hai, I miss you a little more tevha. Well jyada kuch likhunga nahi idhar kyuki baaki sab toh phone pe bol hi dunga hehe "AGAR UTHAYA TOH😒😒". once again Happyyyy 18th Birthdayyyyy Niggu 😋😋 Maje karo partyy do jaldi hehe 🥳. Also Sorry Itna Low effort type wish k liye. Milte hai fir Jaldiii
            </p>
            <p className="font-bold text-white pt-4">
              With Love,
            </p>
            <p className="font-bold text-white pt-4">
              Amogh (The Tallest, Smartest😝)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
