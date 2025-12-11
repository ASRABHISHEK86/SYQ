import React, { useEffect, useState } from 'react';
import { FaSignInAlt, FaServer, FaUserCircle, FaGamepad, FaQuestionCircle, FaCreditCard } from 'react-icons/fa';
import Gamedev1 from './assest/login.jpg'
import Gamedev2 from './assest/server.jpg'
import Gamedev3 from './assest/account.jpg'
import Gamedev4 from './assest/games.jpg'
import Gamedev5 from './assest/ques.jpg'
import Gamedev6 from './assest/plans.jpg'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const services = [
    {
      title: "Login Failure",
      description: "Troubleshoot login issues, reset passwords, and recover accounts.",
      icon: <FaSignInAlt size={42} />,
      image: Gamedev1
    },
    {
      title: "Server Failure",
      description: "Check server status, troubleshoot connectivity, and report downtime.",
      icon: <FaServer size={42} />,
      image: Gamedev2
    },
    {
      title: "Account Status",
      description: "Verify account details, update information, and recover lost accounts.",
      icon: <FaUserCircle size={42} />,
      image: Gamedev3
    },
    {
      title: "Keep track of games",
      description: "View game history, sync progress, and get event notifications.",
      icon: <FaGamepad size={42} />,
      image: Gamedev4
    },
    {
      title: "Frequently Asked Questions",
      description: "Find answers to common issues, policies, and billing queries.",
      icon: <FaQuestionCircle size={42} />,
      image: Gamedev5
    },
    {
      title: "Plans and payments",
      description: "Manage subscriptions, payment methods, refunds, and cancellations.",
      icon: <FaCreditCard size={42} />,
      image: Gamedev6
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach((card, index) => {
      card.style.setProperty('--delay', `${index * 0.12 + 0.3}s`);
    });

    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <div className="bg-[#13001e] min-h-screen py-20 px-6 md:px-16 overflow-hidden flex flex-col">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Jura', sans-serif;
        }
        
        .main-title {
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: transparent;
          background: linear-gradient(90deg, #4299e1, #a855f7, #ec4899, #f43f5e, #4299e1);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          animation: borderFlow 6s linear infinite;
        }
        
        .main-title::after {
          content: '';
          display: block;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #4299e1, #ec4899, #f43f5e);
          margin-top: 10px;
          animation: expandLine 1.8s infinite;
        }
        
        @keyframes borderFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes expandLine {
          0%, 100% { width: 100%; }
          50% { width: 90%; }
        }
        
        @keyframes fadeScale {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.8);
            filter: blur(10px);
          }
          70% {
            opacity: 0.8;
            transform: translateY(-15px) scale(1.03);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0) rotateX(0);
          }
          50% {
            transform: translateY(-10px) rotateX(3deg);
          }
        }
        
        @keyframes glowBorder {
          0%, 100% {
            box-shadow: 0 0 15px rgba(66, 153, 225, 0.5);
          }
          50% {
            box-shadow: 0 0 25px rgba(236, 72, 153, 0.7);
          }
        }
        
        .flip-card {
          perspective: 1000px;
          height: 350px;
          opacity: 0;
        }
        
        .flip-card.animate {
          animation: fadeScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: var(--delay);
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 15px;
          overflow: hidden;
        }
        
        .flip-card-front {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          background: rgba(26, 0, 51, 0.8);
          background-size: cover;
          background-position: center;
          border: 3px solid;
          border-image: linear-gradient(90deg, #4299e1, #a855f7, #ec4899, #f43f5e) 1;
          animation: glowBorder 3s infinite;
        }
        
        .flip-card-front::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(13, 0, 30, 0.9) 30%, rgba(13, 0, 30, 0.3) 100%);
          z-index: 1;
        }
        
        .flip-card-front img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        
        .flip-card-title {
          position: relative;
          z-index: 2;
          margin-bottom: 30px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .flip-card-back {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, rgba(26, 0, 51, 0.95), rgba(66, 20, 90, 0.95));
          padding: 20px;
          transform: rotateY(180deg);
          border: 3px solid;
          border-image: linear-gradient(90deg, #a855f7, #ec4899, #4299e1, #a855f7) 1;
        }
        
        .icon-wrapper {
          background: linear-gradient(135deg, rgba(66, 153, 225, 0.2), rgba(236, 72, 153, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
          box-shadow: 0 0 15px rgba(66, 153, 225, 0.3);
        }
        
        .flip-card:nth-child(3n+1) {
          animation-delay: calc(var(--delay) + 0.2s);
        }
        
        .flip-card:nth-child(3n+2) {
          animation-delay: calc(var(--delay) + 0.4s);
        }
        
        .flip-card:nth-child(3n) {
          animation-delay: calc(var(--delay) + 0.6s);
        }
        
        .flip-card:hover {
          z-index: 10;
        }
      `}</style>

      <div className="container mx-auto max-w-7xl flex-grow">
        <h2 className="text-6xl md:text-7xl font-bold mb-16 md:mb-24 text-center tracking-wider">
          <span className="main-title">SERVICES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div key={index} className={`flip-card ${isLoaded ? 'animate' : ''}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={service.image} alt={service.title} />
                  <h3 className="flip-card-title text-white text-3xl font-bold">{service.title}</h3>
                </div>
                
                <div className="flip-card-back">
                  <div className="icon-wrapper">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-2xl font-medium mb-4">{service.title}</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;