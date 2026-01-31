import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(190, 100%, 50%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(190, 100%, 50%) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsla(190, 100%, 50%, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsla(270, 80%, 60%, 0.12) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M-100,400 Q400,300 800,450 T1600,350"
          stroke="url(#gradient1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />
        <motion.path
          d="M-100,600 Q500,500 1000,600 T2000,500"
          stroke="url(#gradient2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(190, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(270, 80%, 60%)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(270, 80%, 60%)" />
            <stop offset="100%" stopColor="hsl(190, 100%, 50%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
