import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Gamedev from './assest/unreal.webp';
import im6 from './assest/im6.jpg'
import im7 from './assest/im7.jpg'

// Custom hook for scroll animations
function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
}

// Animated Section Component
function AnimatedSection({ children, className, animationDirection = "up" }) {
  const [ref, isVisible] = useIntersectionObserver();
  
  // Define animation classes based on direction
  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out";
    
    if (!isVisible) {
      switch (animationDirection) {
        case "up": return `${baseClass} opacity-0 translate-y-10`;
        case "down": return `${baseClass} opacity-0 -translate-y-10`;
        case "left": return `${baseClass} opacity-0 translate-x-10`;
        case "right": return `${baseClass} opacity-0 -translate-x-10`;
        case "fade": return `${baseClass} opacity-0`;
        default: return `${baseClass} opacity-0 translate-y-10`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div ref={ref} className={`${className} ${getAnimationClass()}`}>
      {children}
    </div>
  );
}

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 transform scale-105"
        style={{
          backgroundImage: `url(${Gamedev})`,
        }}
      />
      <div className="relative z-10 min-h-screen flex flex-col items-start justify-center px-8 lg:px-16">
        <AnimatedSection className="max-w-3xl" animationDirection="left">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Unreal Engine Game Development Company
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md">
            Unreal Engine is a powerful and versatile game engine perfect for bringing ambitious projects to life. At
            Synnoviq Technologies, we specialize in leveraging Unreal's capabilities to create stunning, high-performance
            games. Let our expert team handle your project, turning your vision into a truly immersive gaming experience.
          </p>
          
          <div 
            ref={buttonRef}
            className="relative w-64 h-16 cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button transition-transform duration-300 hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Connect
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

// Unreal Game Dev Services Component
const UnrealGameDevServices = () => {
  const services = [
    {
      title: "Full-Cycle Game Development",
      description: "We deliver end-to-end game development services so that you can track all the processes under one roof. As a result, you can stay focused on your company development while we cover your product creation."
    },
    {
      title: "XR-Based Game Development",
      description: "The practical use of Unreal Engine for AR/VR game development gave our team priceless experience in creating immersive gaming experiences. With a skillful application of specific UE tools, we make players feel the realism of gameplay."
    },
    {
      title: "Metaverse/NFT Game Development",
      description: "Unreal Engine's powerful capabilities are a perfect fit for complex projects like metaverse/NFT game development. With our deep expertise in blockchain technology, your project will stand out as one-of-a-kind."
    }
  ];

  return (
    <div className="bg-[#1A0B2E] min-h-screen flex justify-center items-center p-4">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <AnimatedSection className="mb-12" animationDirection="up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            Unreal Engine Game Development Services
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              className="relative p-5 rounded-xl text-white"
              animationDirection={index % 2 === 0 ? "left" : "right"}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-red-600"></div>
              <div className="absolute inset-0.5 rounded-xl bg-purple-950"></div>
              <div className="relative">
                <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                <p className="text-lg">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

// Unreal Engine About Section Component
function AboutUnrealSection() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection className="mb-12" animationDirection="up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            Unreal Engine Game Development with Synnoviq:
          </h2>
        </AnimatedSection>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimatedSection className="md:w-2/5" animationDirection="left">
            <div className="rounded-3xl overflow-hidden transform transition-transform duration-700 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80"
                alt="Unreal Engine Logo"
                className="w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:w-3/5" animationDirection="right">
            <p className="text-xl leading-relaxed text-gray-300">
              At Synnoviq Technologies, we may be a startup, but our passion for Unreal Engine game development is limitless. Despite being a new player in the industry, we are driven by a commitment to innovation, creativity, and delivering exceptional gaming experiences. Our talented team is dedicated to utilizing Unreal Engine's powerful features to create visually stunning and high-performance games. As we grow, we offer flexible collaboration models that allow us to work closely with you to bring your vision to life while achieving your business goals. Partner with us to unlock the full potential of Unreal Engine and build something extraordinary from the ground up.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

// Pros of Unreal Engine Section Component
function ProsSection() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection className="mb-12" animationDirection="up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            Pros of Choosing Unreal Engine Game Development:
          </h2>
        </AnimatedSection>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimatedSection className="md:w-3/5" animationDirection="left">
            <p className="text-xl leading-relaxed text-gray-300">
              Opting for professional Unreal Engine game development unlocks a world of possibilities for your project. By harnessing Unreal's advanced tools, you can achieve stunning graphics, exceptional VFX, and access cutting-edge technologies that set your game apart. Additionally, leveraging pre-built assets and resources helps streamline development, significantly reducing time-to-market. Outsourcing your Unreal Engine game development not only cuts costs but also optimizes your internal resources, allowing you to focus on key areas of your project.
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="md:w-2/5" animationDirection="right">
            <div className="rounded-3xl overflow-hidden transform transition-transform duration-700 hover:scale-105 hover:rotate-1">
              <img 
                src={im6}
                alt="Unreal Engine Development"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </AnimatedSection>
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
      title: "End-to-End Solutions",
      description: "When you choose Synnoviq, every stage of your Unreal Engine game development is covered. From strategy and content creation to coding, testing, and deployment, we handle it all."
    },
    {
      title: "Expert Unreal Engine Developers",
      description: "Our team brings years of experience and technical expertise to the table, creating stunning graphics and an unparalleled user experience."
    },
    {
      title: "Advanced Tech Stack",
      description: "With state-of-the-art hardware and the latest technologies, we ensure peak performance and precision in every aspect of the project."
    },
    {
      title: "Flexible Collaboration Models",
      description: "We offer adaptable business models to suit your needs—whether you prefer to augment your team with our experts on an hourly basis or prefer a tailored contract agreement."
    },
    {
      title: "Data Security and IP Protection",
      description: "Your intellectual property and data security are our top priority. We safeguard your project with comprehensive NDA agreements and robust security measures."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection className="mb-12" animationDirection="up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            Developing Unreal Games with Synnoviq Technologies: Your Path to Success
          </h2>
        </AnimatedSection>
        <AnimatedSection className="mb-8" animationDirection="up">
          <p className="text-xl text-gray-300">
            At Synnoviq Technologies, we fully harness the power of Unreal Engine to craft captivating and immersive video games for any platform. Our clients' needs are always at the forefront of our process, ensuring the project aligns perfectly with your vision.
          </p>
        </AnimatedSection>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-2/3">
            <div className="space-y-6">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <AnimatedSection key={index} animationDirection={index % 2 === 0 ? "left" : "right"}>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </AnimatedSection>
                ))}

                <AnimatedSection animationDirection="up">
                  <button 
                    className="mt-6 px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button transition-all duration-300 hover:scale-105 hover:bg-purple-900 hover:bg-opacity-30"
                    onClick={() => window.location.href = '/contactus'}
                  >
                    GET STARTED
                  </button>
                </AnimatedSection>
              </div>
            </div>
          </div>

          <AnimatedSection className="md:w-1/3" animationDirection="right">
            <div className="rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-rotate-1">
              <img 
                src={im7}
                alt="Unreal Engine Development"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-12" animationDirection="up">
          <p className="text-xl text-gray-300 text-center italic">
            At Synnoviq, we don't just develop Unreal Engine games—we create extraordinary, high-performance gaming experiences that stand out in the market.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}

// Parallax Background Effect Component
function ParallaxBackground({ children }) {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(45, 10, 100, 0.2) 0%, rgba(10, 10, 30, 0.4) 100%)',
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />
      {children}
    </div>
  );
}

// Main Component
function UnrealEngineDev() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ParallaxBackground>
      <LandingSection />
      <UnrealGameDevServices />
      <AboutUnrealSection />
      <ProsSection />
      <BenefitsSection />
    </ParallaxBackground>
  );
}

export default UnrealEngineDev;