import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Gamedev from './assest/softwer developement.jpg'
import Gamedev1 from './assest/im7.jpg'
import Gamedev2 from './assest/im8.jpg'
import Gamedev3 from './assest/im9.jpg'




// Add Jura font import
import '@fontsource/jura';

// ====================================================
// Animation Context and Provider
// ====================================================
const AnimationContext = createContext();

// Hook to use animations
export const useAnimation = () => useContext(AnimationContext);

// Animation Provider Component
export const AnimationProvider = ({ children }) => {
  // Preload necessary animations on initial render
  useEffect(() => {
    // Preload GSAP
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Animation functions that can be used throughout the application
  const animationFunctions = {
    // Fade in element
    fadeIn: (element, delay = 0, duration = 0.8) => {
      if (window.gsap) {
        window.gsap.fromTo(
          element,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
        );
      }
    },
    
    // Section reveal animation
    revealSection: (element, delay = 0) => {
      if (window.gsap) {
        window.gsap.fromTo(
          element,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, delay, ease: 'power2.out' }
        );
      }
    },
    
    // Staggered items animation (for grids, lists)
    staggerItems: (elements, delay = 0, stagger = 0.1) => {
      if (window.gsap) {
        window.gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.7, 
            stagger, 
            delay, 
            ease: 'power2.out' 
          }
        );
      }
    },
    
    // Button hover effect
    buttonHover: (element) => {
      const onEnter = () => {
        if (window.gsap) {
          window.gsap.to(element, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        }
      };
      
      const onLeave = () => {
        if (window.gsap) {
          window.gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
        }
      };
      
      element.addEventListener('mouseenter', onEnter);
      element.addEventListener('mouseleave', onLeave);
      
      return () => {
        element.removeEventListener('mouseenter', onEnter);
        element.removeEventListener('mouseleave', onLeave);
      };
    },
    
    // Text reveal animation for headings
    revealText: (element, delay = 0) => {
      if (window.gsap) {
        window.gsap.fromTo(
          element,
          { 
            backgroundSize: '0 100%',
            opacity: 0.7
          },
          { 
            backgroundSize: '100% 100%',
            opacity: 1, 
            duration: 1.2, 
            delay,
            ease: 'power2.out'
          }
        );
      }
    },
    
    // Parallax effect for background images
    parallaxBackground: (element) => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const speed = 0.5;
        const yPos = -(scrollPosition * speed);
        if (element) {
          element.style.backgroundPosition = `50% ${yPos}px`;
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },

    // Page transition effect
    pageTransition: (direction = 'in') => {
      if (window.gsap) {
        const tl = window.gsap.timeline();
        
        if (direction === 'in') {
          tl.fromTo(
            'body > div', 
            { opacity: 0 }, 
            { opacity: 1, duration: 0.5, ease: 'power2.out' }
          );
        } else {
          tl.to(
            'body > div', 
            { opacity: 0, duration: 0.5, ease: 'power2.in' }
          );
        }
        
        return tl;
      }
      return null;
    }
  };

  return (
    <AnimationContext.Provider value={animationFunctions}>
      {children}
    </AnimationContext.Provider>
  );
};

// ====================================================
// Animated Components
// ====================================================

// Reusable Animated Section Component
export const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const sectionRef = useRef(null);
  const { revealSection } = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            revealSection(sectionRef.current, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, revealSection]);
  
  return (
    <div ref={sectionRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

// Animated Heading Component with gradient text reveal
export const AnimatedHeading = ({ children, className = '', delay = 0.2 }) => {
  const headingRef = useRef(null);
  const { revealText } = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            revealText(headingRef.current, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, [delay, revealText]);
  
  return (
    <h1 
      ref={headingRef} 
      className={`font-jura bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent ${className}`}
      style={{ backgroundSize: '0 100%', backgroundRepeat: 'no-repeat', opacity: 0.7 }}
    >
      {children}
    </h1>
  );
};

// Animated Grid Component for services and benefits
export const AnimatedGrid = ({ children, className = '', itemDelay = 0.1 }) => {
  const gridRef = useRef(null);
  const { staggerItems } = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const childElements = gridRef.current.children;
            staggerItems(childElements, 0.1, itemDelay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
    
    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, [itemDelay, staggerItems]);
  
  return (
    <div ref={gridRef} className={className}>
      {children}
    </div>
  );
};

// Animated Button Component
export const AnimatedButton = ({ children, onClick, className = '' }) => {
  const buttonRef = useRef(null);
  const { buttonHover } = useAnimation();
  
  useEffect(() => {
    if (buttonRef.current) {
      const cleanup = buttonHover(buttonRef.current);
      return cleanup;
    }
  }, [buttonHover]);
  
  return (
    <button 
      ref={buttonRef}
      onClick={onClick}
      className={`font-jura transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

// Animated Background Component with parallax effect
export const AnimatedBackground = ({ imageUrl, children, className = '' }) => {
  const backgroundRef = useRef(null);
  const { parallaxBackground } = useAnimation();
  
  useEffect(() => {
    if (backgroundRef.current) {
      const cleanup = parallaxBackground(backgroundRef.current);
      return cleanup;
    }
  }, [parallaxBackground]);
  
  return (
    <div 
      ref={backgroundRef}
      className={`relative bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      {children}
    </div>
  );
};

// Page Transition Wrapper for React Router navigation
export const PageTransition = ({ children }) => {
  const { pageTransition } = useAnimation();
  
  useEffect(() => {
    // Run entrance animation when component mounts
    const tl = pageTransition('in');
    
    return () => {
      // Run exit animation when component unmounts
      if (tl) tl.kill();
    };
  }, [pageTransition]);
  
  return <>{children}</>;
};

// ====================================================
// Responsive Layout Components
// ====================================================

function LandingSection() {
  const navigate = useNavigate();
  
  return (
    <AnimatedBackground 
      imageUrl={Gamedev}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="relative z-10 min-h-screen flex flex-col items-start justify-center px-4 sm:px-8 lg:px-16">
        <AnimatedSection delay={0.3} className="max-w-3xl">
          <AnimatedHeading className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
            Software Development Services
          </AnimatedHeading>
          
          <AnimatedSection delay={0.6} className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl drop-shadow-md">
            <p className="font-jura">
              At Synnoviq, we push the boundaries of innovation to build high-quality, scalable software solutions using the latest technologies. Whether you need a custom enterprise application, AI-driven automation, or a cloud-based SaaS platform, our expert team brings your vision to life with precision and creativity.
            </p>
          </AnimatedSection>
          
          <AnimatedButton 
            onClick={() => navigate('/contact')}
            className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl rounded border-2 border-purple-500 text-white glow-button"
          >
            Connect
          </AnimatedButton>
        </AnimatedSection>
      </div>
    </AnimatedBackground>
  );
}

function ServicesSectionone() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedHeading className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center md:text-left">
          What Do You Need to Build Full-Cycle Software?
        </AnimatedHeading>
        
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <AnimatedSection delay={0.3} className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={Gamedev1}
                alt="Game Development"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="md:w-1/2">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 font-jura">
              Developing software from the ground up requires a dedicated team of professionals, each specializing in different aspects of the project. From initial concept to deployment, our developers at Synnoviq work collaboratively to ensure a seamless and efficient development process.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

function ServicesSectiontwo() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedHeading className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center md:text-left">
          How to Choose a Full-Cycle Software Development Team?
        </AnimatedHeading>
        
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <AnimatedSection delay={0.3} className="md:w-1/2">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 font-jura">
              Selecting the right software development team is crucial for transforming your vision into a high-quality, scalable solution. A reliable team should have the right balance of technical expertise, creative problem-solving skills, and project management capabilities to handle every stage of development.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5} className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={Gamedev2}
                alt="Game Development"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
  
function BenefitsSection() {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "End-to-End Development",
      description: "From ideation to deployment, we manage every aspect of software development to deliver seamless, high-quality solutions."
    },
    {
      title: "Expert & Passionate Team",
      description: "Our experienced developers, designers, and engineers bring innovative ideas and technical proficiency to create world-class software."
    },
    {
      title: "Security & IP Protection",
      description: "We enforce strict NDAs, robust data protection measures, and ensure full ownership rights for our clients."
    },
    {
      title: "Clear & Transparent Communication",
      description: "Regular updates, milestone tracking, and open collaboration keep you informed throughout the development cycle."
    },
    {
      title: "Flexible & Scalable Solutions",
      description: "Our solutions are adaptable to your business needs, integrating the latest technologies and evolving with market trends."
    },
    {
      title: "Cutting-Edge Technology",
      description: "We utilize AI, blockchain, cloud computing, and advanced analytics to build powerful, future-ready software solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedHeading className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center md:text-left">
          Benefits of Full-Cycle Software Development with Synnoviq
        </AnimatedHeading>
        
        <div className="flex flex-col md:flex-row items-start gap-8 sm:gap-10 md:gap-12">
          <AnimatedSection delay={0.3} className="md:w-1/2">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <AnimatedGrid className="space-y-4 sm:space-y-5 md:space-y-6" itemDelay={0.1}>
                {benefits.map((benefit, index) => (
                  <div key={index}>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 font-jura">{benefit.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 font-jura">{benefit.description}</p>
                  </div>
                ))}

                <AnimatedButton 
                  onClick={() => navigate('/contact')}
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl font-bold text-white bg-transparent border-2 border-white overflow-hidden transition-all duration-300 ease-in-out hover:bg-white hover:text-[#1A0B2E]"
                >
                  <span className="relative z-10">GET STARTED</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                </AnimatedButton>
              </AnimatedGrid>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={Gamedev3}
                alt="Game Development Character"
                className="w-full h-[400px] sm:h-[500px] md:h-[700px] object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.7} className="text-base sm:text-lg md:text-xl text-gray-300 text-center mt-8 sm:mt-10 md:mt-12 italic">
          <p className="font-jura">
            At Synnoviq, we don't just develop games—we create immersive, next-gen gaming experiences that stand out.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}

const GameDevServices = () => {
  const services = [
    {
      title: "Planning & Strategy",
      description: "Our analysts and consultants work closely with you to define project goals, technical requirements, and a roadmap that ensures a seamless development process."
    },
    {
      title: "Software Development",
      description: "Our experienced developers specialize in a wide range of technologies, including web, mobile, and desktop applications, ensuring robust and high-performing solutions."
    },
    {
      title: "Software Testing & Quality Assurance",
      description: "Our QA specialists perform comprehensive testing, including functional, performance, security, and usability testing, to ensure flawless software operation."
    },
    {
      title: "UI/UX Design",
      description: "Our designers create intuitive and visually appealing interfaces that enhance user experience, ensuring seamless interaction with your software."
    },
    {
      title: "Cloud & DevOps",
      description: "We optimize software deployment with cloud-based architectures, CI/CD pipelines, and automated processes for enhanced performance, scalability, and security."
    },
    {
      title: "Maintenance & Support",
      description: "We provide ongoing support, updates, and optimization services to keep your software running smoothly and up-to-date with industry trends."
    }
  ];
  
  return (
    <div className="bg-[#1A0B2E] min-h-screen flex justify-center items-center p-4">
      <AnimatedSection className="w-full max-w-6xl">
        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6" itemDelay={0.1}>
          {services.map((service, index) => (
            <div key={index} className="relative p-4 sm:p-5 rounded-xl text-white">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-red-600"></div>
              <div className="absolute inset-0.5 rounded-xl bg-purple-950"></div>
              <div className="relative">
                <h3 className="text-base sm:text-lg font-medium mb-2 font-jura">{service.title}</h3>
                <p className="text-sm sm:text-base font-jura">{service.description}</p>
              </div>
            </div>
          ))}
        </AnimatedGrid>
      </AnimatedSection>
    </div>
  );
};

// Main Component with Animation Provider
function GameDev() {
  return (
    <AnimationProvider>
      <PageTransition>
        <LandingSection />
        <GameDevServices/>
        <ServicesSectionone />
        <ServicesSectiontwo />
        <BenefitsSection />
      </PageTransition>
    </AnimationProvider>
  );
}

export default GameDev;