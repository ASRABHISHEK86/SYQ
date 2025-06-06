import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Gamedev from './assest/Gamedevelopement.jpg'
import Gamedev1 from './assest/im6.jpg'
import Gamedev2 from './assest/im7.jpg'
import Gamedev3 from './assest/im8.jpg'


// Landing Section Component
function LandingSection() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Gamedev})`,
        }}
      />
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col items-start justify-center px-8 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-3xl">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Game Development Services
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At Synnoviq, we push the boundaries of innovation to create high-quality, immersive games using the latest technologies. Whether you're envisioning a hyper-casual mobile game, an expansive open-world adventure, or an AI-powered simulation, our expert team brings your ideas to life with precision and creativity.
          </motion.p>
          
          <motion.div 
            ref={buttonRef}
            className="relative w-64 h-16 cursor-pointer"
            onClick={() => navigate('/contact')}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button 
                className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button"
                onClick={() => window.location.href = '/contactus'}
                whileHover={{ 
                  boxShadow: "0 0 25px 5px rgba(138, 43, 226, 0.5)"
                }}
              >
                Connect
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Animation component for scroll reveal
const AnimatedSection = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

// Services Card Component with staggered animation
const GameDevServices = () => {
  const services = [
    {
      title: "Pre-production & Concept",
      description: "Our artists can create as many high-quality sketches and concept art for your game as you need in order to make the pre-production stage more productive."
    },
    {
      title: "Art Production",
      description: "Everybody knows that games consist of assets, and our artists are equally good at creating either low- or high-poly environments, characters, weapons, props, as well as other game constituents."
    },
    {
      title: "Game Programming",
      description: "Whether you want your game to be built on Unity or Unreal, our programmers already master both, so you can be confident that the result is high in performance and functionality."
    },
    {
      title: "Game Design",
      description: "Game designers at our studio know the score and are able to put their knowledge to good use by coming up with the best-in-class mechanics as well as the backstory for your game."
    },
    {
      title: "2D & 3D Animation",
      description: "Synergy boasts professionals who specialize in animating 2D/3D virtual assets and breathing life into the most distant places framed in zeros and ones."
    },
    {
      title: "Quality Assurance",
      description: "Our QA specialists execute a high number of complex tests at each product life cycle to ensure that your game performs maximally well during every development phase."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-[#1A0B2E] min-h-screen flex justify-center items-center p-4">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="relative p-5 rounded-xl text-white"
            variants={item}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-red-600"></div>
            <div className="absolute inset-0.5 rounded-xl bg-purple-950"></div>
            <div className="relative">
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Services Section Component with animation
function ServicesSectionone() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            What Do You Need To Create A Full-Cycle Game?
          </h1>
        </AnimatedSection>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={Gamedev1}
                alt="Game Development"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl leading-relaxed text-gray-300">
              Developing video games from scratch requires a dedicated team of professionals, each working on different aspects of the project to bring a vision to life. From concept to launch, our developers at Synnoviq focus on seamlessly aligning every detail, ensuring a smooth and efficient development process
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ServicesSectiontwo() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            What Do You Need To Create A Full-Cycle Game?
          </h1>
        </AnimatedSection>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl leading-relaxed text-gray-300">
              Developing video games from scratch requires a dedicated team of professionals, each working on different aspects of the project to bring a vision to life. From concept to launch, our developers at Synnoviq focus on seamlessly aligning every detail, ensuring a smooth and efficient development process
            </p>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={Gamedev2}
                alt="Game Development"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Benefits Section Component
function BenefitsSection() {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Pre-production & Concept",
      description: "Our artists can create as many high-quality sketches and concept art for your game as you need in order to make the pre-production stage more productive."
    },
    {
      title: "Art Production",
      description: "Our skilled developers, artists, and designers bring innovative ideas and technical expertise to craft engaging gaming experiences."
    },
    {
      title: "Security & IP Protection",
      description: "Your project remains 100% secure with strict NDAs, data protection measures, and full ownership rights for clients."
    },
    {
      title: "Clear & Transparent Communication",
      description: "Regular updates, milestone tracking, and open collaboration keep you informed throughout the development cycle."
    },
    {
      title: "Flexible & Scalable Solutions",
      description: "We adapt to your project's needs, integrating new features, technologies, and monetization strategies to maximize success."
    }
  ];

  const benefitItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            Benefits of Full-Cycle Game Development with Synnoviq
          </h1>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-start gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    variants={benefitItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}

                <motion.button 
                  className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button"
                  onClick={() => window.location.href = '/contactus'}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 25px 5px rgba(138, 43, 226, 0.5)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  GET STARTED
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={Gamedev3}
                alt="Game Development Character"
                className="w-full h-[700px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.p 
          className="text-xl text-gray-300 text-center mt-12 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Synnoviq, we don't just develop games—we create immersive, next-gen gaming experiences that stand out.
        </motion.p>
      </div>
    </div>
  );
}

// ScrollProgress component to show scroll progress
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-purple-600 z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    />
  );
}

// Main Component
function GameDev() {
  return (
    <>
      <ScrollProgress />
      <LandingSection />
      <GameDevServices />
      <ServicesSectionone />
      <ServicesSectiontwo />
      <BenefitsSection />
    </>
  );
}

export default GameDev;