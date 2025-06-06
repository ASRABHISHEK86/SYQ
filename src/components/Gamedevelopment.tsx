import { useNavigate } from 'react-router-dom';
import GameController from './assest/I1.png';
import MonitorPlay from './assest/I2.png';
import Palette from './assest/I3.png';
import Globe2 from './assest/I4.png';
import Box from './assest/I5.png';
import Film from './assest/I6.png';

function GameServices() {
  const navigate = useNavigate();

  // Services data for the grid
  const services = [
    { 
      icon: <img src={GameController} alt="Game Controller" className="w-12 h-12" />,
      title: "Game Development",
      path: "/game-development"
    },
    { 
      icon: <img src={MonitorPlay} alt="Monitor Play" className="w-12 h-12" />,
      title: "Software Development",
      path: "/software-development"
    },
    { 
      icon: <img src={Palette} alt="Palette" className="w-12 h-12" />,
      title: "UI/UX Design",
      path: "/uiux-design"
    },
    { 
      icon: <img src={Globe2} alt="Globe" className="w-12 h-12" />,
      title: "Web Development",
      path: "/web-development"
    },
    { 
      icon: <img src={Box} alt="Box" className="w-12 h-12" />,
      title: "3D Modeling & Animation",
      path: "/3d-modeling"
    },
    { 
      icon: <img src={Film} alt="Film" className="w-12 h-12" />,
      title: "Digital Content Creation",
      path: "/digital-content"
    }
  ];

  return (
    <div className="bg-[#130026] py-20 px-16 overflow-hidden min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Main Heading with Animation */}
        <h2 className="text-6xl font-bold mb-20 text-left">
          <span className="bg-gradient-to-r from-[#60A5FA] via-[#F472B6] to-[#FCA5A5] bg-clip-text text-transparent">
            GAME DEVELOPMENT
            <br />
            SERVICES <span className="text-[#FF9D00]">⚜</span>
          </span>
        </h2>
        
        {/* Animated version of the heading that will replace the static one */}
        <div className="absolute top-20 left-16">
          <h2 className="text-6xl font-bold mb-20 text-left">
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#F472B6] to-[#FCA5A5] bg-clip-text text-transparent">
              <span className="inline-block">
                {'GAME DEVELOPMENT'.split('').map((letter, i) => (
                  <span 
                    key={i} 
                    className="inline-block opacity-0"
                    style={{
                      display: 'inline-block',
                      whiteSpace: 'pre',
                      animation: 'fadeIn 0.5s forwards',
                      transform: `translate(${Math.floor(Math.random() * 300 - 150)}px, ${Math.floor(Math.random() * 300 - 150)}px) rotate(${Math.floor(Math.random() * 180 - 90)}deg)`,
                      animationDelay: `${i * 0.05}s`,
                      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    onAnimationStart={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0) rotate(0)';
                      e.currentTarget.style.transition = 'transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
              <br />
              <span className="inline-block">
                {'SERVICES '.split('').map((letter, i) => (
                  <span 
                    key={i} 
                    className="inline-block opacity-0"
                    style={{
                      display: 'inline-block',
                      whiteSpace: 'pre',
                      animation: 'fadeIn 0.5s forwards',
                      transform: `translate(${Math.floor(Math.random() * 300 - 150)}px, ${Math.floor(Math.random() * 300 - 150)}px) rotate(${Math.floor(Math.random() * 180 - 90)}deg)`,
                      animationDelay: `${(i * 0.05) + 0.8}s`,
                      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    onAnimationStart={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0) rotate(0)';
                      e.currentTarget.style.transition = 'transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    }}
                  >
                    {letter}
                  </span>
                ))}
                
              </span>
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden opacity-0 cursor-pointer"
              onClick={() => navigate(service.path)}
              style={{
                animation: 'fadeIn 0.5s forwards',
                transform: `translate(${Math.floor(Math.random() * 600 - 300)}px, ${Math.floor(Math.random() * 400 - 200)}px) rotate(${Math.floor(Math.random() * 90 - 45)}deg) scale(0.2)`,
                animationDelay: `${1.5 + (index * 0.2)}s`
              }}
              onAnimationStart={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0) rotate(0) scale(1)';
                e.currentTarget.style.transition = 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              }}
            >
              {/* Gradient border background - thicker border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 rounded-lg"></div>
              
              {/* Inner content container with thicker border - larger box */}
              <div className="relative m-[5px] bg-[#1E0A3C] rounded-lg p-6 hover:bg-[#2A1052] transition-colors duration-300">
                <div className="flex flex-col items-center justify-center h-full py-10">
                  <div 
                    className="text-white mb-6 flex justify-center opacity-0"
                    style={{
                      animation: 'fadeIn 0.5s forwards',
                      transform: `translate(${Math.floor(Math.random() * 300 - 150)}px, ${Math.floor(Math.random() * 300 - 150)}px) rotate(${Math.floor(Math.random() * 180 - 90)}deg)`,
                      animationDelay: `${1.7 + (index * 0.2)}s`
                    }}
                    onAnimationStart={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0) rotate(0)';
                      e.currentTarget.style.transition = 'transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-white text-xl font-medium text-center">
                    {service.title.split('').map((letter, i) => (
                      <span 
                        key={i} 
                        className="inline-block opacity-0"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'pre',
                          animation: 'fadeIn 0.5s forwards',
                          transform: `translate(${Math.floor(Math.random() * 300 - 150)}px, ${Math.floor(Math.random() * 300 - 150)}px) rotate(${Math.floor(Math.random() * 180 - 90)}deg)`,
                          animationDelay: `${1.9 + (index * 0.2) + (i * 0.03)}s`,
                          animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                        onAnimationStart={(e) => {
                          e.currentTarget.style.transform = 'translate(0, 0) rotate(0)';
                          e.currentTarget.style.transition = 'transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add the required CSS for the animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default GameServices;