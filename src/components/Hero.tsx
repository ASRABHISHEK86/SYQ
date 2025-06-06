import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import photo1 from './assest/photo1.png'; 
import web1 from './assest/web1.webp'; 
import web2 from './assest/web2.png'; 
import web3 from './assest/web3.webp'; 
import web4 from './assest/web4.webp'; 
import web5 from './assest/web5.png'; 
import web6 from './assest/web6.png'; 
import Gamedevelopment from './Gamedevelopment';

import lo1 from './assest/lo1.png'; 
import lo2 from './assest/lo2.png'; 
import lo3 from './assest/lo3.png'; 
import lo4 from './assest/lo4.png'; 
import Game from './assest/unity.jpg'


import { Target, Users, BarChart3, Flag, Gamepad2, Rocket } from 'lucide-react'

function App() {
  // Text layout matches the image with split lines
  const titleLine1 = "SPECIALIZED";   
const titleLine3 = "GAME\u2002DEVELOPMENT";   
const titleLine4 = "COMPANY";   
const [formData, setFormData] = useState({     
  firstName: '',     
  lastName: '',     
  company: '',     
  email: '',     
  contact: '',     
  budget: '',     
  message: ''   
});    

const handleInputChange = (e) => {     
  setFormData({       
    ...formData,       
    [e.target.name]: e.target.value     
  });   
};   


  
 
  const projectImages = [
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-[#130026] text-white">
      
      {/* Hero Section */}
      

  <div className="flex flex-col md:flex-row justify-between items-start py-16 px-8 min-h-[80vh] bg-[#130026z]">         
  <div className="max-w-full md:max-w-4xl">           
    <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-white font-orbitron leading-tight word-spacing">             
      <div className="mt-2">
        {titleLine1.split('').map((letter, index) => (
          <span 
            key={`title1-${index}`} 
            className="animated-letter inline-block transition-all duration-300 cursor-pointer"
          >
            {letter}
          </span>
        ))}
      </div>                          
      <div className="mt-2">
        {titleLine3.split('').map((letter, index) => (
          <span 
            key={`title3-${index}`} 
            className="animated-letter inline-block transition-all duration-300 cursor-pointer"
          >
            {letter}
          </span>
        ))}
      </div>             
      <div className="mt-2">
        {titleLine4.split('').map((letter, index) => (
          <span 
            key={`title4-${index}`} 
            className="animated-letter inline-block transition-all duration-300 cursor-pointer"
          >
            {letter}
          </span>
        ))}
      </div>           
    </h1>           
    <p className="text-lg leading-relaxed mb-16 text-white/70 font-rajdhani max-w-xl">             
      At Synnoviq Technologies, we offer a comprehensive suite of services designed to meet the              
      evolving needs of businesses and entertainment industries.           
    </p>           
    <button className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button" 
      onClick={() => window.location.href = '/contactus'} >   
      Connect 
    </button>         
  </div>                    
  <div className="mt-10 md:mt-0 w-full md:w-auto flex justify-end self-start pt-0 md:pt-10">           
    <div className="w-64 h-64 md:w-80 md:h-80 relative">             
      <img src={photo1} alt="Game Controller" className="photo1" />           
    </div>         
  </div>       
</div>

    <Gamedevelopment />

    {/* Careers Section - With Split and Join Animation */}
<div className="bg-[#130026] py-16 px-8">
  <div className="container mx-auto max-w-7xl">
    {/* Header */}
    <header className="mb-10">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#60A5FA] via-[#F472B6] to-[#FCA5A5] bg-clip-text text-transparent font-['jura']">
        CAREERS
      </h1>
    </header>
    
    {/* Main Content - Made smaller */}
    <div className="bg-[#1a0b2e] rounded-lg overflow-hidden shadow-2xl group perspective-1000">
      <div className="grid lg:grid-cols-2 gap-0 relative">
        {/* Image Section */}
        <div className="relative h-full transform transition-all duration-1000 origin-left group-hover:-translate-x-full group-hover:opacity-0 group-hover:rotate-y-45">
          <div className="h-64 lg:h-full">
            <img
              src={web1}
              alt="Game Developer at Work"
              className="w-full h-full object-cover"
            />
            {/* Neon Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 md:p-8 transform transition-all duration-1000 origin-right group-hover:translate-x-full group-hover:opacity-0 group-hover:rotate-y-45">
          <h2 className="text-xl md:text-2xl font-bold leading-tight mb-4 font-['Jura']">
            Join the Revolution in Game Development & Technology! We are on the lookout for 
            passionate, creative, and skilled individuals to be part of our dynamic team.
          </h2>
          <div className="space-y-3 text-gray-300 font-['Jura'] font-bold">
            <p className="leading-relaxed text-sm">
              Opportunities Available: Game Developers - Unity, Unreal Engine, and AI-based game development technologies. Software
              Engineers - Creating intelligent business solutions. 3D Artists & Animators - Creating impressive worlds and realistic models.
              Digital Content Creators - Video editors, VFX artists, and creative storytellers. Whether you're an
              experienced professional or a fresh talent, Synnoviq Technologies is the perfect place to grow, innovate, and
              lead the future of digital entertainment! Check out our job openings and internship opportunities.
            </p>
          </div>
          <button 
            className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button"
            onClick={() => window.location.href = '/contactus'}
          >
            Connect 
          </button>
        </div>
        
        {/* Combined Content (appears after split) */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 delay-300 group-hover:opacity-100 grid lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-full transform translate-x-full opacity-0 transition-all duration-1000 delay-500 group-hover:translate-x-0 group-hover:opacity-100">
            <div className="h-64 lg:h-full">
              <img
                src={web1}
                alt="Game Developer at Work"
                className="w-full h-full object-cover"
              />
              {/* Neon Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-6 md:p-8 transform -translate-x-full opacity-0 transition-all duration-1000 delay-500 group-hover:translate-x-0 group-hover:opacity-100">
            <h2 className="text-xl md:text-2xl font-bold leading-tight mb-4 font-['Jura']">
              Join the Revolution in Game Development & Technology! We are on the lookout for 
              passionate, creative, and skilled individuals to be part of our dynamic team.
            </h2>
            <div className="space-y-3 text-gray-300 font-['Jura'] font-bold">
              <p className="leading-relaxed text-sm">
                Opportunities Available: Game Developers - Unity, Unreal Engine, and AI-based game development technologies. Software
                Engineers - Creating intelligent business solutions. 3D Artists & Animators - Creating impressive worlds and realistic models.
                Digital Content Creators - Video editors, VFX artists, and creative storytellers. Whether you're an
                experienced professional or a fresh talent, Synnoviq Technologies is the perfect place to grow, innovate, and
                lead the future of digital entertainment! Check out our job openings and internship opportunities.
              </p>
            </div>
            <button 
              className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button"
              onClick={() => window.location.href = '/contactus'}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/* Talent Pool Section - Fixed Layout with Connect Button on Right */}
<div 
  className="py-16 px-8 bg-[#130026] overflow-hidden"
  style={{
    position: 'relative'
  }}
>
  <div className="container mx-auto max-w-7xl">
    {/* Header - Consistent Size with other sections */}                                 
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content - Enhanced Text Section */}
      <div 
        className="space-y-8"
        style={{
          animation: 'fadeIn 1s ease-out',
        }}
      >
        {/* Fixed title with proper visibility */}
        <h1 
          className="text-5xl font-bold bg-gradient-to-r from-[#60A5FA] via-[#F472B6] to-[#FCA5A5] bg-clip-text text-transparent"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientShift 8s ease infinite, titleAppear 1s ease-out forwards',
          }}
        >
          OUR TALENT POOL
        </h1>
        <p 
          className="text-xl leading-relaxed font-light relative overflow-hidden"
          style={{
            position: 'relative',
          }}
        >
          <span
            style={{
              display: 'block',
              animation: 'revealText 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0.8s forwards',
              transform: 'translateY(100%)',
            }}
          >
            Explore a world where creativity meets technology. Whether you're a gamer, 
            a business looking for custom software, or an industry leader in search of 
            innovative solutions, you've come to the right place.
          </span>
          <span 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0"
            style={{
              animation: 'lineWidth 1.5s ease-out 1.2s forwards',
              width: '0%',
            }}
          ></span>
        </p>
        <div 
          className="flex items-center space-x-4 relative"
          style={{
            opacity: 0,
            animation: 'fadeSlideIn 0.8s ease-out 1.5s forwards',
          }}
        >
          <h2 
            className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent relative"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradientPulse 4s ease infinite',
            }}
          >
            Reach out to us now and let's get started!
            <span 
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-300/0 via-purple-300 to-purple-300/0"
              style={{
                animation: 'underlineGlow 3s ease-in-out infinite',
              }}
            ></span>
          </h2>
          {/* Connect Button placed to the right of "get started" text */}
          <button 
  className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button"
  onClick={() => window.location.href = '/contactus'}
>
  Connect
</button>
        </div>
      </div>
                
      {/* Right Content - Properly placed image without background color */}
      <div 
        className="relative flex justify-center"
        style={{
          animation: 'float 6s ease-in-out infinite',
        }}
      >
        <div 
          className="relative w-full max-w-md transform transition-all duration-700 hover:scale-105 hover:rotate-1"
        >
          {/* Main Image */}
          <img
            src={web2}
            alt="Gamer"
            className="rounded-lg w-full object-cover shadow-xl transition-all duration-500 hover:shadow-2xl"
          />
                      
          {/* Subtle glow effect */}
          <div 
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
            style={{
              animation: 'pulse 2s infinite',
            }}
          ></div>
        </div>
        {/* Subtle glow background */}
        <div 
          className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-500 rounded-full"
          style={{
            animation: 'pulse 3s infinite',
          }}
        ></div>
      </div>
    </div>
  </div>

  {/* Inline style definitions */}
  <style jsx>{`
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    
    @keyframes titleAppear {
      0% { opacity: 0; transform: translateY(-10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes gradientPulse {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes pulse {
      0% { opacity: 0.9; }
      50% { opacity: 1; }
      100% { opacity: 0.9; }
    }
    
    @keyframes revealText {
      0% { transform: translateY(100%); }
      100% { transform: translateY(0%); }
    }
    
    @keyframes lineWidth {
      0% { width: 0%; }
      100% { width: 100%; }
    }
    
    @keyframes fadeSlideIn {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes underlineGlow {
      0% { opacity: 0.3; width: 0%; left: 0; }
      50% { opacity: 1; width: 100%; left: 0; }
      100% { opacity: 0.3; width: 0%; left: 100%; }
    }
    
    @keyframes buttonGlow {
      0% { box-shadow: 0 0 5px rgba(167, 139, 250, 0.3); }
      50% { box-shadow: 0 0 20px rgba(167, 139, 250, 0.6); }
      100% { box-shadow: 0 0 5px rgba(167, 139, 250, 0.3); }
    }
    
    @keyframes shine {
      100% { transform: translateX(100%); }
    }
    
    .group:hover .group-hover\\:animate-shine {
      animation: shine 1s;
    }
  `}</style>
</div>
{/* Core Engines Section */}
<div className="bg-[#130026] py-16 px-8">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="text-cyan-400">CORE ENGINES WE</span>{' '}
            <span className="text-pink-400">USE</span>
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Unity Card */}
            <div className="group relative aspect-square">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg animate-border-flow"></div>
              
              {/* Content container */}
              <div className="absolute inset-[2px] bg-purple-900/90 rounded-lg overflow-hidden">
                {/* Image with overlay */}
                <div className="relative w-full h-full">
                  <img 
                    src={Game}
                    alt="Unity Development" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">Unity game development</h3>
                      <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        Create immersive gaming experiences with Unity's powerful engine and tools.
                      </p>
                      <Link 
                        to="/unity"
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Unreal Card */}
            <div className="group relative aspect-square">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg animate-border-flow"></div>
              
              {/* Content container */}
              <div className="absolute inset-[2px] bg-purple-900/90 rounded-lg overflow-hidden">
                {/* Image with overlay */}
                <div className="relative w-full h-full">
                  <img 
                    src={web4}
                    alt="Unreal Development" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">Unreal engine game development</h3>
                      <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        Build stunning, high-fidelity games with Unreal Engine's cutting-edge technology.
                      </p>
                      <Link 
                        to="/unreal" 
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* WHY SYNNOVIQ Section with animated background and floating boxes */}
       <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] to-black relative overflow-hidden">
  {/* Animated background circles */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-64 sm:w-96 md:w-[400px] lg:w-[500px] h-64 sm:h-96 md:h-[400px] lg:h-[500px] bg-[#2d00ff]/20 rounded-full blur-3xl animate-blob top-0 left-0"></div>
    <div className="absolute w-64 sm:w-96 md:w-[400px] lg:w-[500px] h-64 sm:h-96 md:h-[400px] lg:h-[500px] bg-[#ff2d94]/20 rounded-full blur-3xl animate-blob animation-delay-2000 top-[20%] right-0"></div>
    <div className="absolute w-64 sm:w-96 md:w-[400px] lg:w-[500px] h-64 sm:h-96 md:h-[400px] lg:h-[500px] bg-[#7000ff]/20 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-0 left-[20%]"></div>
  </div>

  {/* Content container */}
  <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12">
    {/* Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center sm:text-left">
      <span className="text-white">WHY</span>{' '}
      <span className="bg-gradient-to-r from-[#ff2d94] via-[#7000ff] to-[#2d00ff] text-transparent bg-clip-text">SYNNOVIQ</span>
    </h1>

    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Left side - Robot Image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img 
          src={web5}
          alt="Futuristic Robot"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right side - Grid of boxes */}
      <div 
        className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" 
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Mission Box */}
        <div 
          className="group relative aspect-square" 
          style={{
            animation: 'float-1 3s ease-in-out infinite',
            transition: 'all 1.2s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
          }}
          onMouseEnter={(e) => {
            if (window.innerWidth >= 1024) {
              e.currentTarget.style.transform = 'scale(1.1) translateZ(80px)';
              e.currentTarget.style.zIndex = '20';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(112, 0, 255, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.zIndex = '';
            e.currentTarget.style.boxShadow = '';
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d00ff] via-[#7000ff] to-[#ff2d94] rounded-lg animate-border-flow"></div>
          <div className="absolute inset-[2px] bg-[#1a0b2e]/90 rounded-lg p-3 sm:p-4 md:p-6 flex flex-col items-start">
            <Target className="w-6 h-6 md:w-8 md:h-8 text-[#2d00ff] mb-2 md:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 md:mb-2">OUR MISSION</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              To blend creativity with technology, delivering world-class gaming and digital solutions that redefine industries and enrich lives.
            </p>
          </div>
        </div>

        {/* Next Level Box */}
        <div 
          className="group relative aspect-square" 
          style={{
            animation: 'float-2 3s ease-in-out infinite',
            animationDelay: '0.5s',
            transition: 'all 1.2s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
          }}
          onMouseEnter={(e) => {
            if (window.innerWidth >= 1024) {
              e.currentTarget.style.transform = 'scale(1.1) translateZ(80px)';
              e.currentTarget.style.zIndex = '20';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(112, 0, 255, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.zIndex = '';
            e.currentTarget.style.boxShadow = '';
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d00ff] via-[#7000ff] to-[#ff2d94] rounded-lg animate-border-flow"></div>
          <div className="absolute inset-[2px] bg-[#1a0b2e]/90 rounded-lg p-3 sm:p-4 md:p-6 flex flex-col items-start">
            <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-[#2d00ff] mb-2 md:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 md:mb-2">NEXT LEVEL</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Crafting immersive gaming experiences and cutting-edge technology solutions. Join us in revolutionizing digital entertainment.
            </p>
          </div>
        </div>

        {/* Teams Box */}
        <div 
          className="group relative aspect-square" 
          style={{
            animation: 'float-3 3s ease-in-out infinite',
            animationDelay: '1s',
            transition: 'all 1.2s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
          }}
          onMouseEnter={(e) => {
            if (window.innerWidth >= 1024) {
              e.currentTarget.style.transform = 'scale(1.1) translateZ(80px)';
              e.currentTarget.style.zIndex = '20';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(112, 0, 255, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.zIndex = '';
            e.currentTarget.style.boxShadow = '';
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d00ff] via-[#7000ff] to-[#ff2d94] rounded-lg animate-border-flow"></div>
          <div className="absolute inset-[2px] bg-[#1a0b2e]/90 rounded-lg p-3 sm:p-4 md:p-6 flex flex-col items-start">
            <Users className="w-6 h-6 md:w-8 md:h-8 text-[#2d00ff] mb-2 md:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 md:mb-2">OUR TEAMS</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              At the heart of Synnoviq Technologies is a passionate team of developers, designers, and tech innovators sharing a common goal.
            </p>
          </div>
        </div>

        {/* Vision Box */}
        <div 
          className="group relative aspect-square" 
          style={{
            animation: 'float-4 3s ease-in-out infinite',
            animationDelay: '1.5s',
            transition: 'all 1.2s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
          }}
          onMouseEnter={(e) => {
            if (window.innerWidth >= 1024) {
              e.currentTarget.style.transform = 'scale(1.1) translateZ(80px)';
              e.currentTarget.style.zIndex = '20';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(112, 0, 255, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.zIndex = '';
            e.currentTarget.style.boxShadow = '';
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d00ff] via-[#7000ff] to-[#ff2d94] rounded-lg animate-border-flow"></div>
          <div className="absolute inset-[2px] bg-[#1a0b2e]/90 rounded-lg p-3 sm:p-4 md:p-6 flex flex-col items-start">
            <Flag className="w-6 h-6 md:w-8 md:h-8 text-[#2d00ff] mb-2 md:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 md:mb-2">OUR VISION</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              With a vision for the future, we are expanding our expertise into cybersecurity, AI-driven solutions, and digital marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Keyframes for animations */}
  <style jsx>{`
    @keyframes float-1 {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(2deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    
    @keyframes float-2 {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(-1deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    
    @keyframes float-3 {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(1deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    
    @keyframes float-4 {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-18px) rotate(-2deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    
    @keyframes border-flow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .animate-border-flow {
      background-size: 300% 300%;
      animation: border-flow 4s ease infinite;
    }

    .animation-delay-2000 {
      animation-delay: 2s;
    }

    .animation-delay-4000 {
      animation-delay: 4s;
    }

    .animate-blob {
      animation: blob 7s infinite;
    }

    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
  `}</style>
</div>
  {/* Behind the Screens Section with Dramatic Image Zoom Effect */}
<div className="bg-[#130026] py-16 px-8 overflow-hidden">
  <div className="container mx-auto max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Text Content in Box */}
      <div className="relative group w-full">
        {/* Gradient border background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 rounded-lg"></div>
        
        {/* Inner content container */}
        <div className="relative m-[3px] bg-[#1E0A3C] rounded-lg p-8">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#60A5FA] via-[#F472B6] to-[#FCA5A5] bg-clip-text text-transparent">
              BEHIND THE SCREENS
            </h1>
            <p className="text-xl leading-relaxed font-light">
              Synnoviq Technologies Private Limited is a next-generation game development and technology company 
              committed to pushing the boundaries of digital entertainment and interactive experiences.
            </p>
            
            <div className="space-y-3">
              <p className="text-lg font-medium text-white/90">We specialize in:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Game Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Software Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Web Development & UI/UX Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>3D Modeling & Animation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Digital Content Creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-500 rounded-full"></div>
      </div>
      
      {/* Right Side - Image with Dramatic Zoom Animation */}
      <div className="relative w-full flex justify-center items-center">
        <div 
          id="zoomContainer" 
          className="w-full lg:w-11/12 overflow-hidden rounded-lg shadow-xl"
          onMouseEnter={() => {
            document.getElementById('zoomImage').style.transform = 'scale(1.8)';
            document.getElementById('zoomImage').style.transition = 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          }}
          onMouseLeave={() => {
            document.getElementById('zoomImage').style.transform = 'scale(1)';
            document.getElementById('zoomImage').style.transition = 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          }}
        >
          <img
            id="zoomImage"
            src={web2}
            alt="Behind the Screens at Synnoviq"
            className="w-full h-auto object-cover rounded-lg shadow-xl transition-all duration-1000"
            style={{transformOrigin: 'center center'}}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent rounded-lg"></div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-500 rounded-full"></div>
      </div>
    </div>
  </div>
</div>



{/* Add this CSS to your stylesheet */}
<style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-80px * ${projectImages.length} - 24px * ${projectImages.length}));
    }
  }
  
  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
`}</style>
{/* Contact Form Section */}
<div className="bg-[#130026] py-8 md:py-16 relative">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden">

      {/* Left Side - Background Image with animation */}
      <div className="w-full md:w-1/2 relative overflow-hidden" 
           style={{
             animation: 'fadeIn 1s ease-out'
           }}>
        <div className="relative h-[250px] sm:h-[300px] md:h-[600px] lg:h-[800px] overflow-hidden">
          <img
            src={web6}
            alt="Robot Background"
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            style={{
              objectPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#130026] to-transparent opacity-40"></div>
        </div>
      </div>
      
      {/* Form - Right Side */}
      <div className="w-full md:w-1/2 bg-[#130026] p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm flex flex-col justify-center"
           style={{
             animation: 'slideFromRight 0.8s ease-out'
           }}>
        {/* Heading */}
        <div className="mb-4 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% auto',
                animation: 'gradientFlow 4s ease infinite'
              }}>
            GET IN TOUCH
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-blue-600 mt-2 rounded"
               style={{
                 animation: 'expandWidth 1s ease-out forwards',
                 width: '0'
               }}></div>
        </div>
        
        <form className="space-y-4 md:space-y-6">
          {/* Name Fields - Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* First Name */}
            <div className="relative" style={{ animation: 'fadeUp 0.5s ease-out 0.1s both' }}>
              <label htmlFor="firstName" className="block text-white text-xs sm:text-sm mb-1 sm:mb-2">First Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                required
                className="w-full border-b-2 border-gray-400 bg-transparent text-white py-1 sm:py-2 px-1 focus:outline-none focus:border-pink-500 hover:border-pink-400 transition-colors duration-300"
              />
            </div>
            
            {/* Last Name */}
            <div className="relative" style={{ animation: 'fadeUp 0.5s ease-out 0.2s both' }}>
              <label htmlFor="lastName" className="block text-white text-xs sm:text-sm mb-1 sm:mb-2">Last Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                required
                className="w-full border-b-2 border-gray-400 bg-transparent text-white py-1 sm:py-2 px-1 focus:outline-none focus:border-pink-500 hover:border-pink-400 transition-colors duration-300"
              />
            </div>
          </div>
          
          {/* Company and Email - Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Company */}
            <div className="relative" style={{ animation: 'fadeUp 0.5s ease-out 0.3s both' }}>
              <label htmlFor="company" className="block text-white text-xs sm:text-sm mb-1 sm:mb-2">Company <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                required
                className="w-full border-b-2 border-gray-400 bg-transparent text-white py-1 sm:py-2 px-1 focus:outline-none focus:border-pink-500 hover:border-pink-400 transition-colors duration-300"
              />
            </div>
            
            {/* Email */}
            <div className="relative" style={{ animation: 'fadeUp 0.5s ease-out 0.4s both' }}>
              <label htmlFor="email" className="block text-white text-xs sm:text-sm mb-1 sm:mb-2">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="w-full border-b-2 border-gray-400 bg-transparent text-white py-1 sm:py-2 px-1 focus:outline-none focus:border-pink-500 hover:border-pink-400 transition-colors duration-300"
              />
            </div>
          </div>
          
          {/* Phone and Budget - Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Phone */}
            <div className="relative" style={{ animation: 'fadeUp 0.5s ease-out 0.5s both' }}>
              <label htmlFor="phone" className="block text-white text-xs sm:text-sm mb-1 sm:mb-2">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                className="w-full border-b-2 border-gray-400 bg-transparent text-white py-1 sm:py-2 px-1 focus:outline-none focus:border-pink-500 hover:border-pink-400 transition-colors duration-300"
              />
            </div>
            
            {/* Budget */}
            <div className="relative" style={{ animation: 'fadeUp 0.5s ease-out 0.6s both' }}>
              <label htmlFor="budget" className="block text-white text-xs sm:text-sm mb-1 sm:mb-2">Budget <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                id="budget" 
                name="budget" 
                required
                className="w-full border-b-2 border-gray-400 bg-transparent text-white py-1 sm:py-2 px-1 focus:outline-none focus:border-pink-500 hover:border-pink-400 transition-colors duration-300"
              />
            </div>
          </div>
          
          {/* Message */}
          <div className="relative" style={{ animation: 'fadeUp 0.5s ease-out 0.7s both' }}>
            <label htmlFor="message" className="block text-white text-xs sm:text-sm mb-1 sm:mb-2">Message <span className="text-red-500">*</span></label>
            <textarea
              id="message" 
              name="message" 
              required
              rows="3"
              className="w-full border-b-2 border-gray-400 bg-transparent text-white py-1 sm:py-2 px-1 focus:outline-none focus:border-pink-500 hover:border-pink-400 transition-colors duration-300 resize-none"
            ></textarea>
          </div>
          
          {/* File Attachment */}
          <div className="pt-2" style={{ animation: 'fadeUp 0.5s ease-out 0.8s both' }}>
            <label htmlFor="file" className="flex items-center text-white text-xs sm:text-sm cursor-pointer hover:text-pink-400 transition-colors duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:text-pink-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              Attach File
            </label>
            <input 
              type="file" 
              id="file" 
              name="file"
              className="hidden"
            />
          </div>
          
          {/* Submit Button */}
          <div className="pt-4" style={{ animation: 'fadeUp 0.5s ease-out 0.9s both' }}>
            <button 
              type="submit" 
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-blue-600 text-white text-sm sm:text-base font-medium rounded-lg relative overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  {/* Animation Styles */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideFromRight {
      from { transform: translateX(50px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes expandWidth {
      from { width: 0; }
      to { width: 80px; }
    }
    
    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
</div>
    </div>
  );
}

export default App;