import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import carrers from './assest/career.jpg';
import Gamedev1 from './assest/u2.jpg'
import Gamedev2 from './assest/ani.jpg'

import Gamedev3 from './assest/g2.jpg'
import Gamedev4 from './assest/im8.jpg'
import Gamedev5 from './assest/im7.jpg'

// Import missing image assets
// Replace these with your actual image paths
const web3 = "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80";
const web4 = "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80";

// Landing Section Component
function LandingSection() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
    
    // Removed parallax effect on scroll
  }, []);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Generate rangoli/mandala pattern elements - removed for stability

  return (
    <div className="relative min-h-screen overflow-hidden">
     
     <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${carrers})`,
        filter: 'brightness(0.8)'
      }}
    />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-black/50"></div>
      <div className="relative z-10 min-h-screen flex flex-col items-start justify-center px-8 lg:px-16">
        <div className={`max-w-3xl transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            CAREERS
          </h1>
          <p className={`text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            We are on the lookout for passionate, creative, and skilled individuals to be part of our dynamic team.
          </p>
          
          
          
          {/* New added button */}
          <button
            className="relative px-10 py-4 text-xl rounded text-white font-orbitron mt-8"
            onClick={() => window.location.href = '/Contactus'}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
          >
            <div className="absolute inset-0 rounded border-2 border-purple-500 transition-all duration-300"></div>
            {isHovering && (
              <div className="absolute inset-0 rounded border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
            )}
            <span className="relative z-10">Connect</span>
          </button>
        </div>
      </div>
      
      {/* Removed Rangoli/Mandala effect with explosion animation */}
      
      {/* Simplified styling - removed most animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

// Services Section Component (renamed to follow proper conventions)
function ServicesSection() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => [...prev, parseInt(entry.target.dataset.index)]);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.dataset.index = index;
        observer.observe(ref.current);
      }
    });
    
    return () => {
      sectionRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  
  return (
    <div className="max-w-6xl mx-auto relative z-10 px-4 py-16">
        <style jsx>{`
          @keyframes slideIn {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      
      <div 
        ref={sectionRefs[0]}
        className={`flex flex-col md:flex-row gap-16 items-center mb-32 transition-all duration-1000 ease-out transform ${visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <div className="md:w-1/2">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">Game Developers <span className="font-light">–</span></h3>
          <p className="text-xl mb-6">
            Masters of Unity, Unreal Engine, and AI-driven game development, our team specializes in building immersive gaming experiences. From concept to launch, we craft engaging mechanics, seamless controls, and visually stunning worlds.
          </p>
          <p className="text-xl">
            Leveraging cutting-edge AI, we create smarter NPCs, adaptive gameplay, and procedurally generated content to enhance player immersion. Whether it's mobile, console, or VR gaming, we push the boundaries of interactive entertainment.
          </p>
        </div>
        
        <div className="md:w-1/2 w-full relative overflow-hidden rounded-lg shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-purple-400/20 rounded-lg"></div>
          <div className="aspect-w-16 aspect-h-9 w-full h-64 overflow-hidden"> {/* Reduced height to h-64 */}
            <img 
              src={Gamedev1} 
              alt="Game developer working at a high-tech setup with multiple screens" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Second Content Section */}
      <div 
        ref={sectionRefs[1]}
        className={`flex flex-col md:flex-row gap-16 items-center mb-32 transition-all duration-1000 ease-out transform ${visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <div className="md:w-1/2 w-full relative overflow-hidden rounded-lg shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-pink-400/20 rounded-lg"></div>
          <div className="aspect-w-16 aspect-h-9 w-full h-64 overflow-hidden"> {/* Reduced height to h-64 */}
            <img 
              src={Gamedev2} 
              alt="Game developer working at a high-tech setup with multiple screens" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-pink-400 bg-clip-text text-transparent">3D Artists & Animators <span className="font-light">–</span></h3>
          <p className="text-xl mb-6">
            Bringing virtual worlds to life with breathtaking realism, our artists and animators craft detailed environments, lifelike characters, and fluid animations. Whether it's hyper-realistic AAA assets or stylized indie creations, we masterfully blend artistic vision with technical expertise. From concept art and modeling to rigging and motion capture, we ensure every visual element enhances storytelling and gameplay
          </p>
        </div>
      </div>

      {/* Third Content Section */}
      <div 
        ref={sectionRefs[2]}
        className={`flex flex-col md:flex-row gap-16 items-center mb-32 transition-all duration-1000 ease-out transform ${visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <div className="md:w-1/2">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent">Software Engineers <span className="font-light">–</span></h3>
          <p className="text-xl mb-6">
            Innovators in intelligent business solutions, our engineers develop robust software tailored to streamline operations and enhance productivity. From AI-driven automation tools and cloud-based platforms to custom enterprise applications, we design scalable, secure, and efficient solutions. Our expertise spans machine learning, big data, and IoT integration, ensuring businesses stay ahead in the digital landscape.
          </p>
        </div>
        <div className="md:w-1/2 w-full relative overflow-hidden rounded-lg shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-blue-400/20 rounded-lg"></div>
          <div className="aspect-w-16 aspect-h-9 w-full h-64 overflow-hidden"> {/* Reduced height to h-64 */}
            <img 
              src={Gamedev3} 
              alt="Game developer working at a high-tech setup with multiple screens" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <div 
        ref={sectionRefs[3]}
        className={`flex flex-col md:flex-row gap-16 items-center mb-32 transition-all duration-1000 ease-out transform ${visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <div className="md:w-1/2 w-full relative overflow-hidden rounded-lg shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-pink-400/20 rounded-lg"></div>
          <div className="aspect-w-16 aspect-h-9 w-full h-64 overflow-hidden"> {/* Reduced height to h-64 */}
            <img 
              src={Gamedev4} 
              alt="Game developer working at a high-tech setup with multiple screens" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-pink-400 bg-clip-text text-transparent">Digital Content Creators <span className="font-light">–</span></h3>
          <p className="text-xl mb-6">
            Our team of video editors, VFX artists, and creative storytellers breathe life into digital content. Specializing in cinematic trailers, promotional videos, and in-game cutscenes, we blend stunning visuals with compelling narratives. With expertise in motion graphics, post-production effects, and immersive storytelling, we create engaging content that captivates audiences across gaming, entertainment, and marketing platforms.
          </p>
        </div>
      </div>
    </div>
  );
}

// Benefits Section Component
function BenefitsSection() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const benefits = [
    {
      title: "Comprehensive Development",
      description: "We handle everything from concept, design, and coding to testing and deployment, ensuring a seamless game development process."
    },
    {
      title: "Expert & Passionate Team",
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
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX - e.target.getBoundingClientRect().left,
      y: e.clientY - e.target.getBoundingClientRect().top
    });
  };

  // Removed mandala burst elements

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#1A0B2E] text-white relative overflow-hidden">
      {/* Removed animated backgrounds */}
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className={`text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF8FAB] via-[#82E9FF] to-[#82E9FF] bg-clip-text text-transparent text-center md:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          Benefits of Full-Cycle Game Development with Synnoviq
        </h1>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}

<button 
  className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button"
  onClick={() => window.location.href = '/contactus'}
>
  GET STARTED
</button>
                
              </div>
            </div>
          </div>

          <div className={`md:w-1/2 transition-all duration-1000 transform delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(130,233,255,0.3)]">
              <div className="relative w-full h-[700px]">
                <img 
                  src={Gamedev5}
                  alt="Game Development Character"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] to-transparent opacity-40"></div>
              </div>
            </div>
          </div>
        </div>

        <p className={`text-xl text-gray-300 text-center mt-12 italic transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          At Synnoviq, we don't just develop games—we create immersive, next-gen gaming experiences that stand out.
        </p>
        
      </div>
      
      {/* Removed animation keyframes */}
    </div>
  );
}

// Main Component
function GameDev() {
  return (
    <>
      <LandingSection />
      <ServicesSection />
      <BenefitsSection />
    </>
  );
}

export default GameDev;