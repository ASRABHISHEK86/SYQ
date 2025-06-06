import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Gamedev from './assest/3d.jpg';
import im4 from './assest/im4.jpg'
import im5 from './assest/im8.jpg'



// Animation component for scroll reveal - adding from first code
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

// Landing Section Component with animations
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
            3D Modeling & Animation Services
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At Synnoviq, we bring imagination to life with stunning 3D models and dynamic animations. Whether you need hyper-realistic character designs, immersive environments, or fluid motion graphics, our expert artists and animators create high-quality visuals that enhance gaming, films, virtual reality, and other digital experiences
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

// Services Section Component with animations
function ServicesSection() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            3D Modeling & Animation Services
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
                src={im4}
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
              At Synnoviq, we bring imagination to life with stunning 3D models and dynamic animations. Whether you need hyper-realistic character designs, immersive environments, or fluid motion graphics, our expert artists and animators create high-quality visuals that enhance gaming, films, virtual reality, and other digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// GameDevServices with staggered animation
const GameDevServices = () => {
  const services = [
    {
      title: "Concept Art & Sketching",
      description: "Our artists begin with detailed concept sketches, ensuring that every model and animation aligns with the project's vision and style.",
    },
    {
      title: "Rigging & Skinning",
      description: "We develop complex rigs for characters, enabling smooth movement and lifelike expressions for both humanoid and non-human models.",
    },
    {
      title: "Lighting & Rendering",
      description: "We optimize lighting and rendering to ensure stunning visuals with realistic shadows, reflections, and dynamic effects.",
    },
    {
      title: "Texturing & Shading",
      description: "We create detailed textures and realistic shading to bring depth and authenticity to every model, enhancing the overall visual appeal.",
    },
    {
      title: "Animation & Motion Capture",
      description: "Our animation team utilizes motion capture and keyframe techniques to create fluid and immersive character movements.",
    },
    {
      title: "Game Optimization & Performance",
      description: "We fine-tune game assets and code to ensure smooth performance, reducing lag and enhancing player experience across all platforms.",
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

// Benefits Section Component with animations
function BenefitsSection() {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "User-Centric Approach",
      description: "We prioritize user needs, behaviors, and pain points to create intuitive and engaging designs."
    },
    {
      title: "Innovative & Aesthetic Designs",
      description: "Our designers blend creativity with modern design trends to build visually compelling interfaces."
    },
    {
      title: "Seamless Cross-Platform Experience",
      description: "We ensure consistent performance and design across web, mobile, and desktop applications."
    },
    {
      title: "Data-Driven Decisions",
      description: "Our research-based approach ensures that every design element is backed by user insights and analytics."
    },
    {
      title: "Efficient Collaboration & Communication",
      description: "We work closely with stakeholders, developers, and product teams for a smooth design-to-development transition."
    },
    {
      title: "Cutting-Edge Tools & Technologies",
      description: "We leverage Figma, Adobe XD, Sketch, and other industry-leading tools to create high-fidelity prototypes and interactive designs."
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
            Benefits of 3D Modeling & animations with Synnoviq
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
              <p className="text-lg text-gray-300 mb-8">
                Our full-cycle game development company provides all kinds of services in the industry, working smart to supply our clients with world-class solutions and bringing them the following benefits:
              </p>
              
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
                src={im5}
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

// ScrollProgress component from first code
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
      <ServicesSection />
      <BenefitsSection />
    </>
  );
}

export default GameDev;