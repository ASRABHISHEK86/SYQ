import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Gamedev from './assest/unity.jpg'
import Gamedev1 from './assest/im4.jpg'
import Gamedev2 from './assest/im7.jpg'
import Gamedev3 from './assest/im9.jpg'



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
            Unity Game Development Services
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md">
            Unity is a powerful and versatile game development platform, offering a seamless experience for both
            developers and players. With its user-friendly interface and robust features, Unity enables us at Synnoviq
            Technologies to create high-quality, immersive games. From stunning 3D worlds to interactive VR
            experiences, we harness Unity's full potential to bring your vision to life.
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
                onClick={() => navigate('/contactus')}
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

// Unity Game Dev Services Component
const UnityGameDevServices = () => {
  const services = [
    {
      title: "Full-Cycle Game Development",
      description: "We develop games from scratch and concept art to release. Our team ensures your game enters Unity in its newest form, our specialists make sure it leaves the engine as an entirely polished product."
    },
    {
      title: "Unity Mobile Development",
      description: "The Game-Ace team creates mobile games across all the major genres on Unity, which run smoothly on both iOS and Android thanks to the cross-platform development approach."
    },
    {
      title: "AR/VR Unity Game Development",
      description: "Get involved in the future of VR games by using our custom Unity game development services. We make sure your virtual reality project is released in time and features everything required."
    },
    {
      title: "2D/3D Game Development",
      description: "Since Unity is a multidimensional engine, we can leverage this opportunity to build either 2D or 3D games based on your ideas. With our solutions, you will reach any business goals faster."
    },
    {
      title: "Cross-Platform Game Development",
      description: "From the concept art and all the way toward technical support, our Unity 3D game development services ensure your game's functionality on mobile, PC, console, and VR platforms."
    },
    {
      title: "Metaverse Game Development",
      description: "Our experts are ready to improve the user experience of your metaverse game by integrating third-party services into the product during any product lifecycle."
    }
  ];

  return (
    <div className="bg-[#1A0B2E] min-h-screen flex justify-center items-center p-4">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <AnimatedSection className="mb-12" animationDirection="up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            Unity Game Development Services We Provide
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

// Unity Requirements Section Component
function RequirementsSection() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection className="mb-12" animationDirection="up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            What Do You Need For Unity Game Development
          </h2>
        </AnimatedSection>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimatedSection className="md:w-2/5" animationDirection="left">
            <div className="rounded-3xl overflow-hidden transform transition-transform duration-700 hover:scale-105">
              <img 
                src={Gamedev1}
                alt="Unity Logo"
                className="w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:w-3/5" animationDirection="right">
            <p className="text-xl leading-relaxed text-gray-300">
              Game development in Unity is a multidimensional process that blends creativity with cutting-edge technology. To build a truly engaging and high-quality game, you need a skilled team of developers, talented artists, and strategic managers working seamlessly together. At Synnoviq, we specialize in Unity 3D game development, turning visionary ideas into polished, immersive experiences. With years of expertise and a proven track record of successful commercial releases, we ensure that every project meets the highest industry standards.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

// Team Section Component
function TeamSection() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimatedSection className="md:w-1/2" animationDirection="left">
            <div className="rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:rotate-1">
              <img 
                src={Gamedev2}
                alt="Unity Developer"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:w-1/2" animationDirection="right">
            <p className="text-xl leading-relaxed text-gray-300">
              Selecting the right game development team is a crucial decision, and when it comes to specialized platforms like Unity, the challenge only intensifies. The key is to focus on cost-efficiency while ensuring quality results. By partnering with Synnoviq Technologies, you can streamline the entire game development process, saving on hiring costs, time, and resources. Our expert team handles every stage of development, allowing you to focus on the creative aspects of your project. What sets us apart is our ability to effectively allocate resources, ensuring your game is developed with precision and excellence. Let us help bring your game to life while making the development journey smoother and more efficient.
            </p>
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
      title: "Expertise and Innovation",
      description: "Our team of skilled Unity developers brings years of experience and creative thinking to every project, ensuring high-quality and unique game experiences."
    },
    {
      title: "Cost-Effective Solutions",
      description: "We optimize resources and time, delivering exceptional results without exceeding your budget. Our efficient processes save you money while ensuring top-tier development."
    },
    {
      title: "Cross-Platform Compatibility",
      description: "Unity's powerful engine allows us to develop games for multiple platforms, ensuring your game reaches a wider audience with seamless performance on both mobile and desktop devices."
    },
    {
      title: "Faster Time-to-Market",
      description: "With our streamlined development process, we help you bring your game to life quicker, reducing development time and allowing you to focus on marketing and user engagement."
    },
    {
      title: "Immersive & Engaging Experiences",
      description: "We specialize in creating visually stunning and interactive worlds that captivate players and keep them coming back for more."
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous support throughout the development cycle and post-launch, ensuring your game runs smoothly and evolves based on user feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection className="mb-12" animationDirection="up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left">
            Benefits of Creating Unity Games with Synnoviq
          </h2>
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
                src={Gamedev3}
                alt="Unity Game Development"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-12" animationDirection="up">
          <p className="text-xl text-gray-300 text-center italic">
            At Synnoviq, we don't just develop Unity games—we create immersive, next-gen gaming experiences that stand out.
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
function UnityGameDev() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ParallaxBackground>
      <LandingSection />
      <UnityGameDevServices />
      <RequirementsSection />
      <TeamSection />
      <BenefitsSection />
    </ParallaxBackground>
  );
}

export default UnityGameDev;