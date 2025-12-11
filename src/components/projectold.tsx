import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { Gamepad2, ChevronRight, Star, ArrowRight } from 'lucide-react';

const games = [
  {
    id: 1,
    title: "Fantasy World",
    description: "Embark on an epic journey through magical realms filled with mythical creatures and ancient mysteries.",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&q=80",
    category: "RPG",
    rating: 4.8
  },
  {
    id: 2,
    title: "Neon City",
    description: "Navigate the dangerous streets of a dystopian metropolis where technology and corruption rule the night.",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    category: "Cyberpunk",
    rating: 4.5
  },
  {
    id: 3,
    title: "Battle Royale",
    description: "Drop into an intense battlefield where only the strongest survive in this fast-paced action experience.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    category: "Action",
    rating: 4.7
  },
  {
    id: 4,
    title: "Space Wars",
    description: "Command your starship through interstellar conflicts in the far reaches of the galaxy.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    category: "Sci-Fi",
    rating: 4.6
  },
  {
    id: 5,
    title: "Medieval Quest",
    description: "Forge your legacy as a knight in a historically-inspired world full of castles, dragons, and political intrigue.",
    image: "https://images.unsplash.com/photo-1599689018034-48e2ead82951?w=800&q=80",
    category: "Adventure",
    rating: 4.3
  },
  {
    id: 6,
    title: "Stealth Operative",
    description: "Master the shadows as an elite agent on high-stakes infiltration missions across global hotspots.",
    image: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?w=800&q=80",
    category: "Stealth",
    rating: 4.4
  },
  {
    id: 7,
    title: "Haunted Mansion",
    description: "Uncover dark secrets and supernatural phenomena in this psychological horror experience.",
    image: "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=800&q=80",
    category: "Horror",
    rating: 4.9
  },
  {
    id: 8,
    title: "Racing Evolution",
    description: "Feel the adrenaline as you drift through neon-lit streets and compete in underground racing leagues.",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
    category: "Racing",
    rating: 4.2
  }
];

function App() {
  const [hoveredGame, setHoveredGame] = useState(null);
  const controls = useAnimation();
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    });
  }, [controls]);

  // Custom scrollbar styles
  useEffect(() => {
    // Add custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: rgba(19, 0, 31, 0.8);
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(147, 51, 234, 0.5);
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(147, 51, 234, 0.8);
      }
      body {
        scrollbar-color: rgba(147, 51, 234, 0.5) rgba(19, 0, 31, 0.8);
        scrollbar-width: thin;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#13001f] overflow-x-hidden">
      {/* Main content with proper spacing from navbar */}
      <div className="relative pt-4">
        <h2 className="text-5xl font-bold mb-20 text-left">
          <span className="bg-gradient-to-r from-[#60A5FA] via-[#F472B6] to-[#FCA5A5] bg-clip-text text-transparent">
            PROJECTS
            <span className="text-[#FF9D00]"></span>
          </span>
        </h2>
        
        {/* Optimized Background Particles - Reduced count and complexity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500/30"
              initial={{ 
                x: Math.random() * windowSize.width, 
                y: Math.random() * windowSize.height,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: [null, Math.random() * windowSize.height, Math.random() * windowSize.height],
                x: [null, Math.random() * windowSize.width, Math.random() * windowSize.width],
                opacity: [null, Math.random() * 0.2 + 0.1, Math.random() * 0.5 + 0.3]
              }}
              transition={{ 
                duration: Math.random() * 20 + 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ 
                width: Math.random() * 3 + 1, 
                height: Math.random() * 3 + 1,
                filter: `blur(${Math.random() * 2}px)`
              }}
            />
          ))}
        </div>

        {/* Enhanced Center Line - Optimized for performance */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-900/50 overflow-hidden">
          {/* Animated center line with geometric patterns */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(
                to bottom,
                rgba(147, 51, 234, 0.1) 0px,
                rgba(147, 51, 234, 0.6) 5px,
                rgba(147, 51, 234, 0.1) 10px
              )`
            }}
            animate={{ 
              backgroundPosition: ["0px 0px", "0px 100px"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />

          {/* DNA-like helix pattern - Reduced count for better performance */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`helix-${i}`}
                className="absolute w-6 h-1 bg-purple-400/30 rounded-full left-1/2 -translate-x-1/2"
                style={{ top: `${i * 60}px` }}
                animate={{ 
                  rotateZ: [0, 180, 360],
                  width: ["24px", "4px", "24px"],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.1 % 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Pulsing glowing effect - Simplified for better performance */}
          <motion.div
            className="absolute inset-0 bg-purple-600/20"
            animate={{ 
              boxShadow: [
                "0 0 5px rgba(147, 51, 234, 0.3), 0 0 10px rgba(147, 51, 234, 0.2)",
                "0 0 10px rgba(147, 51, 234, 0.6), 0 0 20px rgba(147, 51, 234, 0.4)",
                "0 0 5px rgba(147, 51, 234, 0.3), 0 0 10px rgba(147, 51, 234, 0.2)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Reduced and simplified floating elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500"
            style={{ top: `${20 + i * 30}%` }}
            animate={{ 
              y: [0, -10, 0, 10, 0],
              scale: [1, 1.1, 1, 0.9, 1],
              opacity: [0.7, 0.9, 0.7, 0.9, 0.7]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              delay: i * 0.7,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-purple-400"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            />
          </motion.div>
        ))}

        {/* Projects Grid - FIXED BOX SIZES */}
        <div className="max-w-[1400px] mx-auto py-16 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                className={`relative ${index % 2 === 0 ? 'md:justify-self-end md:pr-16' : 'md:justify-self-start md:pl-16'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, rotateY: index % 2 === 0 ? 10 : -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false, margin: "-50px", amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: Math.min(index * 0.05, 0.3) }}
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
              >
                {/* FIXED SIZE CARD CONTAINER */}
                <motion.div
                  className="relative group cursor-pointer overflow-hidden w-[500px] h-[280px]"
                  whileHover={{ scale: 1.03, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Outer glow effect - Simplified for better performance */}
                  <motion.div
                    className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100"
                    style={{
                      boxShadow: "0 0 10px rgba(147, 51, 234, 0.3), 0 0 20px rgba(147, 51, 234, 0.2)"
                    }}
                  />

                  {/* Card Background & Image */}
                  <div className="absolute inset-0 bg-purple-600/20 group-hover:bg-purple-600/40 transition-colors rounded-lg" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* FIXED SIZE IMAGE */}
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-[500px] h-[280px] object-cover rounded-lg shadow-2xl shadow-purple-900/50"
                    loading="lazy"
                  />
                  
                  {/* Simplified animated overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Game Info Base Layer */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{game.title}</h2>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-white/80">{game.rating}</span>
                      </div>
                    </div>
                    <p className="text-purple-300 text-lg">{game.category}</p>
                  </div>
                  
                  {/* Expanded Description on Hover - Simplified transition */}
                  <motion.div 
                    className="absolute inset-0 bg-black/80 rounded-lg p-6 flex flex-col justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredGame === game.id ? 1 : 0,
                      y: hoveredGame === game.id ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      pointerEvents: hoveredGame === game.id ? 'auto' : 'none' 
                    }}
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{game.title}</h3>
                      <p className="text-gray-300 mb-4">{game.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-medium flex items-center gap-1">
                        Read more 
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm text-purple-300">
                        {game.category}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Connecting Line to Center - Simplified animation */}
                <div 
                  className={`absolute top-1/2 ${
                    index % 2 === 0 
                      ? 'right-0 w-16 border-t-2 border-purple-600/30' 
                      : 'left-0 w-16 border-t-2 border-purple-600/30'
                  } hidden md:block`}
                />
                
                {/* Simplified Pulse Effect at Connection Point */}
                <div 
                  className={`absolute top-1/2 ${
                    index % 2 === 0 ? 'right-[62px]' : 'left-[62px]'
                  } -translate-y-1/2 hidden md:block`}
                >
                  <div
                    className="w-4 h-4 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
