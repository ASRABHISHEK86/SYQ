import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import Gamedev from './assest/digital content.jpg';
import im6 from './assest/im6.jpg'
import im7 from './assest/im7.jpg'



// Animation utility functions
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Particle Animation Component
function ParticleBackground() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Initialize particles
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const particleCount = 50;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.5
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(130, 233, 255, ${particle.opacity})`;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = dimensions.width;
        if (particle.x > dimensions.width) particle.x = 0;
        if (particle.y < 0) particle.y = dimensions.height;
        if (particle.y > dimensions.height) particle.y = 0;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions.width, dimensions.height]);
  
  return (
    <canvas 
      ref={canvasRef} 
      width={dimensions.width} 
      height={dimensions.height} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}

// Animated Landing Section Component
function LandingSection() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Gamedev})`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
      <div className="relative z-10 min-h-screen flex flex-col items-start justify-center px-8 lg:px-16">
        <motion.div 
          className="max-w-3xl"
          variants={staggerContainerVariants}
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            variants={fadeInUpVariants}
          >
            Digital Content Creations
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md"
            variants={fadeInUpVariants}
          >
            At Synnoviq, we specialize in crafting compelling digital content that captivates audiences and strengthens brand presence. Whether you need engaging social media content, high-quality videos, interactive animations, or immersive brand storytelling, our expert team delivers visually stunning and strategically optimized content that drives results
          </motion.p>
          <motion.div 
            ref={buttonRef}
            className="relative w-64 h-16 cursor-pointer"
            onClick={() => navigate('/contact')}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button 
                className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button"
                onClick={() => window.location.href = '/contactus'}
                whileHover={{ boxShadow: "0 0 15px rgba(130, 233, 255, 0.8)" }}
              >
                Connect
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Animated Services Section Component
function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          How to Choose the Right Digital Content Creation Team?
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={im6}
                alt="Game Development"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-xl leading-relaxed text-gray-300">
              A strong content creation team should have expertise in design, storytelling, multimedia prodution, and audience engagement. The right team ensures your content is visually appealing, strategically optimized, and aligned with your brand message.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Animated Game Dev Services
function GameDevServices() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const services = [
    {
      title: "Content Strategy & Planning",
      description: "We analyze your brand goals, target audience, and industry trends to develop a customized content strategy that maximizes engagement and impact.",
    },
    {
      title: "Social Media Content Creation",
      description: "We design eye-catching posts, reels, and interactive content tailored for platforms like Instagram, TikTok, YouTube, and LinkedIn to boost audience engagement.",
    },
    {
      title: "Graphic Design & Branding",
      description: "Our designers create visually striking graphics, infographics, and branding materials that enhance your digital presence and brand identity.",
    },
    {
      title: "Copywriting & Content Writing",
      description: "Our skilled writers create compelling blogs, articles, website content, and ad copy that align with your brand voice and drive conversions.",
    },
    {
      title: "Video Production & Editing",
      description: "From promotional videos to cinematic storytelling, we produce high-quality video content with professional editing, motion graphics, and visual effects.",
    },
    {
      title: "AR/VR Content & Interactive Experiences",
      description: "We develop immersive augmented and virtual reality content that offers next-level storytelling and engagement for brands, games, and marketing campaigns.",
    }
  ];

  return (
    <div className="bg-[#1A0B2E] min-h-screen flex justify-center items-center p-4" ref={sectionRef}>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="relative p-5 rounded-xl text-white cursor-pointer"
            variants={fadeInUpVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
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
}

// Animated Benefits Section Component
function BenefitsSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  const benefits = [
    {
      title: "Creative & Engaging Content",
      description: "We craft visually stunning and interactive content that captures attention and drives engagement."
    },
    {
      title: "Multi-Platform Optimization",
      description: "Our content is tailored for various platforms, including social media, websites, mobile apps, and digital marketing campaigns."
    },
    {
      title: "Data-Driven Strategy",
      description: "We use analytics and industry insights to create content that resonates with your target audience and achieves business goals."
    },
    {
      title: "High-Quality Production",
      description: "From concept to execution, we ensure top-tier production quality in videos, graphics, animations, and written content."
    },
    {
      title: "Scalable & Custom Solutions",
      description: "Whether you need a one-time campaign or ongoing content creation, we adapt to your brand's needs and growth."
    },
    {
      title: "Cutting-Edge Tools & Technology",
      description: "We utilize industry-leading software like Adobe Creative Suite, After Effects, Premiere Pro, Blender, and AI-driven content tools."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          Benefits of Digital Content Creation with Synnoviq
        </motion.h1>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-gray-300 mb-8"
                variants={fadeInUpVariants}
              >
                Our full-cycle game development company provides all kinds of services in the industry, working smart to supply our clients with world-class solutions and bringing them the following benefits:
              </motion.p>
              
              <motion.div 
                className="space-y-6"
                variants={staggerContainerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUpVariants}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}

                <motion.button 
                  onClick={() => navigate('/contact')}
                  className="group relative inline-flex items-center justify-center px-8 py-3 mt-4 text-lg font-bold text-white bg-transparent border-2 border-white overflow-hidden transition-all duration-300 ease-in-out hover:bg-white hover:text-[#1A0B2E]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeInUpVariants}
                >
                  <span className="relative z-10">GET STARTED</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            style={{ scale: imageScale, opacity: imageOpacity }}
          >
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={im7}
                alt="Game Development Character"
                className="w-full h-[700px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.p 
          className="text-xl text-gray-300 text-center mt-12 italic"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          At Synnoviq, we don't just develop games—we create immersive, next-gen gaming experiences that stand out.
        </motion.p>
      </div>
    </div>
  );
}

// Page Transition Component
function PageTransition({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Scroll Progress Indicator
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-purple-500 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
}

// Main Component with Animations
function GameDev() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  if (!mounted) return null;
  
  return (
    <PageTransition>
      <ParticleBackground />
      <ScrollProgressBar />
      <LandingSection />
      <GameDevServices />
      <ServicesSection />
      <BenefitsSection />
    </PageTransition>
  );
}

export default GameDev;