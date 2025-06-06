import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Gamedev from './assest/web developement.jpg';
import im1 from './assest/im1.jpg'
import im2 from './assest/im2.jpg'
import im3 from './assest/im3.jpeg'


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

// ScrollProgress component
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
            Web Development Services
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At Synnoviq, we specialize in building high-performance, visually stunning, and scalable web solutions using the latest technologies. Whether you need a dynamic website, a custom web application, or an AI-powered platform, our expert team transforms your vision into reality with precision and creativity
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

// Web Dev Services with staggered animation
const GameDevServices = () => {
  const services = [
    {
      title: "Planning & Strategy",
      description: "Our consultants analyze your business needs and define a strategic roadmap to create a powerful, user-friendly, and goal-oriented web solution."
    },
    {
      title: "E-Commerce Solutions",
      description: "From custom online stores to enterprise-grade e-commerce platforms, we develop feature-rich solutions with secure payment integrations and advanced analytics."
    },
    {
      title: "Web Performance & SEO Optimization",
      description: "Our web solutions are optimized for speed, responsiveness, and search engines, ensuring a smooth user experience and maximum online visibility."
    },
    {
      title: "Frontend & Backend Development",
      description: "Our developers specialize in modern frameworks and technologies, ensuring fast, secure, and scalable web applications that run smoothly on any platform."
    },
    {
      title: "CMS Development",
      description: "We build and customize content management systems (CMS) like WordPress, Drupal, and headless CMS solutions, making content updates easy and efficient."
    },
    {
      title: "Testing & Quality Assurance",
      description: "We perform rigorous testing, including functionality, security, and performance checks, to ensure a flawless web experience across all browsers and devices."
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

// Services Section Component with animations
function ServicesSectionone() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            What Do You Need to Build a Full-Cycle Web Solution?
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
                src={im1}
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
              Developing a high-quality website or web application requires a skilled team of professionals, each focusing on different aspects of the project. From concept to launch, our developers at Synnoviq work seamlessly to create an efficient, engaging, and high-performing web experience
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
            How to Choose a Full-Cycle Web Development Team?
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
              Selecting the right web development team is crucial for creating a secure, scalable, and visually appealing web presence. A reliable team should have expertise in both frontend and backend technologies, UI/UX design, security, and performance optimization to ensure long-term success
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
                src={im2}
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

// Benefits Section Component with animations
function BenefitsSection() {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Comprehensive Development",
      description: "We handle everything from UI/UX design and coding to testing, deployment, and maintenance for a seamless development process."
    },
    {
      title: "Expert & Passionate Team",
      description: "Our skilled designers, developers, and engineers bring technical expertise and creative vision to every project."
    },
    {
      title: "Security & Data Protection",
      description: "We implement strong security protocols, encryption, and GDPR compliance to safeguard your website and user data."
    },
    {
      title: "Clear & Transparent Communication",
      description: "We provide regular progress updates, milestone tracking, and open collaboration throughout the development cycle."
    },
    {
      title: "Scalable & Future-Ready Solutions",
      description: "Our web solutions grow with your business, integrating new features, cloud services, and emerging technologies."
    },
    {
      title: "Cutting-Edge Technologies",
      description: "We leverage modern frameworks like React, Angular, Vue.js, Node.js, and cloud platforms for high-performance, future-proof web applications."
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
            Benefits of Full-Cycle Web Development with Synnoviq
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
                  onClick={() => navigate('/Contactus')}
                  className="group relative inline-flex items-center justify-center px-8 py-3 mt-4 text-lg font-bold text-white bg-transparent border-2 border-white overflow-hidden transition-all duration-300 ease-in-out hover:bg-white hover:text-[#1A0B2E]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="relative z-10">GET STARTED</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                    whileHover={{ opacity: 1 }}
                  ></motion.div>
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
                src={im3}
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