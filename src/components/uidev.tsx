import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import ServicesSection from './Services';
import Gamedev from './assest/ui_ux.jpg'
import Gamedev1 from './assest/im4.jpg'
import Gamedev2 from './assest/im8.jpg'
import Gamedev3 from './assest/im9.jpg'



// Landing Section Component with Enhanced Animation
function LandingSection() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.3, 
        ease: "easeOut" 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.6, 
        ease: "easeOut" 
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 0 25px rgba(130, 233, 255, 0.7)",
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div ref={sectionRef} className="relative min-h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ 
          scale: isInView ? 1 : 1.1,
          opacity: isInView ? 1 : 0.8,
        }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: `url(${Gamedev})`,
        }}
      />
      <div className="relative z-10 min-h-screen flex flex-col items-start justify-center px-8 lg:px-16">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            UI/UX DESIGN SERVICES
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            At Synnoviq, we craft visually stunning and user-friendly digital experiences that drive engagement and enhance usability. Whether you need a sleek mobile app interface, a responsive website design, or an intuitive enterprise dashboard, our expert designers blend creativity with functionality to deliver seamless user experiences.
          </motion.p>
          
          <motion.div 
            ref={buttonRef}
            className="relative w-64 h-16 cursor-pointer"
            onClick={() => navigate('/contact')}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button 
                className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#82E9FF"
                }}
                onClick={() => window.location.href = '/contactus'}
              >
                Connect
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Services Section Component with Animation
function ServicesSectionone() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#1A0B2E] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 30 
          }}
          transition={{ duration: 0.7 }}
        >
          What Do You Need for a Successful UI/UX Design Process?
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              x: isInView ? 0 : -50 
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              x: isInView ? 0 : 50 
            }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-xl leading-relaxed text-gray-300">
              Creating an engaging and effective UI/UX design requires a strategic approach, blending creativity with user psychology and technical feasibility. Our designers at Synnoviq focus on every detail to ensure a seamless, high-performing user experience.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ServicesSectiontw() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#1A0B2E] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 30 
          }}
          transition={{ duration: 0.7 }}
        >
          How to Choose the Right UI/UX Design Team?
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              x: isInView ? 0 : -50 
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-xl leading-relaxed text-gray-300">
              Selecting a skilled UI/UX design team is crucial for crafting a product that is both visually appealing and functionally efficient. A reliable team should have expertise in user research, design thinking, usability principles, and cutting-edge design tools.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              x: isInView ? 0 : 50 
            }}
            transition={{ duration: 0.7, delay: 0.4 }}
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

// Benefits Section Component with Animation
function BenefitsSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        delay: 0.1 * i 
      } 
    })
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#1A0B2E] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 30 
          }}
          transition={{ duration: 0.7 }}
        >
          Benefits of UI/UX design with Synnoviq
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-start gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              x: isInView ? 0 : -30 
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}

                <motion.button 
                  onClick={() => navigate('/contact')}
                  className="group relative inline-flex items-center justify-center px-8 py-3 mt-4 text-lg font-bold text-white bg-transparent border-2 border-white overflow-hidden transition-all duration-300 ease-in-out hover:bg-white hover:text-[#1A0B2E]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0, 
                    y: isInView ? 0 : 20 
                  }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="relative z-10">GET STARTED</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              x: isInView ? 0 : 30 
            }}
            transition={{ duration: 0.7, delay: 0.4 }}
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
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 20 
          }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          At Synnoviq, we don't just develop games—we create immersive, next-gen gaming experiences that stand out.
        </motion.p>
      </div>
    </div>
  );
}

// Services Grid with Animated Cards
const GameDevServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const services = [
    {
      title: "User Research & Analysis",
      description: "We conduct in-depth user research, analyze market trends, and create detailed user personas to ensure data-driven design decisions."
    },
    {
      title: "UI Design & Visual Identity",
      description: "We create aesthetically pleasing, brand-aligned interfaces with intuitive navigation, ensuring a consistent and engaging digital experience."
    },
    {
      title: "Interaction & Motion Design",
      description: "We integrate micro-interactions, animations, and dynamic effects to enhance user engagement and bring interfaces to life."
    },
    {
      title: "Wireframing & Prototyping",
      description: "Our team develops low- and high-fidelity wireframes and interactive prototypes, allowing for early testing and refinements before final implementation."
    },
    {
      title: "User Experience (UX) Design",
      description: "Our UX designers optimize usability, accessibility, and functionality, ensuring smooth interactions and seamless user journeys across all platforms."
    },
    {
      title: "Responsive & Adaptive Design",
      description: "Our designs are optimized for all screen sizes, ensuring a flawless user experience across mobile, tablet, and desktop devices."
    }
  ];

  return (
    <div ref={sectionRef} className="bg-[#1A0B2E] min-h-screen flex justify-center items-center p-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="relative p-5 rounded-xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              y: isInView ? 0 : 50 
            }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-red-600"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            ></motion.div>
            <div className="absolute inset-0.5 rounded-xl bg-purple-950"></div>
            <div className="relative">
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Scroll-to-Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-[#FF8FAB] to-[#82E9FF] text-white shadow-lg z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Custom page transition for route changes
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// Main Component
function GameDev() {
  // Add scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <PageTransition>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8FAB] to-[#82E9FF] transform origin-left z-50"
        style={{ scaleX }}
      />
      <LandingSection />
      <GameDevServices />
      <ServicesSectionone />
      <ServicesSectiontw />
      <BenefitsSection />
      <ScrollToTopButton />
    </PageTransition>
  );
}

export default GameDev;