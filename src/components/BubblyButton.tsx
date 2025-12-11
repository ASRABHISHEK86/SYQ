import React from 'react';

const FancyButton = ({ text = "Fancy, isn't it?" }) => {
  return (
    <button className="Button">
      <svg  
        className="Button-svg"
        width="150" 
        height="40" 
        viewBox="0 0 150 40"
      >
        <rect 
          className="Button-line Button-line--outer"
          strokeWidth="4"
          stroke="#C026D3"
          strokeLinecap="round"
          fill="none" 
          x="2" 
          y="2" 
          width="146" 
          height="36" 
          rx="18"
        />
        <rect 
          className="Button-line Button-line--inner"
          strokeWidth="2"
          stroke="#EC4899"
          strokeLinecap="round"
          fill="none" 
          x="2" 
          y="2" 
          width="146" 
          height="36" 
          rx="18"
        />
      </svg>
      <div className="Button-content">
        {text}
      </div>
      
      <style jsx>{`
        .Button {
          background: none;
          padding: 0;
          margin: 30px auto;
          border: none;
          display: block;
          backface-visibility: hidden;
          width: 150px;
          height: 40px;
          position: relative;
          color: #98A5A6;
          font-size: 14px;
          transition: transform 300ms, color 300ms;
          cursor: pointer;
        } 
        
        .Button:hover,
        .Button:focus {
          color: #BEC3C7;
          transform: scale(1.05);
        }
        
        .Button:hover .Button-line,
        .Button:focus .Button-line {
          animation-play-state: paused;
        }
        
        .Button-svg {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%; 
        }
        
        @keyframes outer-dashoffset {
          0% {
            stroke-dashoffset: 0;
            stroke-dasharray: 168px 168px;
          }
          50% {
            stroke-dasharray: 112px 224px;
          }
          100% {
            stroke-dashoffset: 336px;
            stroke-dasharray: 168px 168px;
          }
        }
        
        .Button-line--outer {
          stroke-dasharray: 168px 168px;
          stroke-dashoffset: 0;
          animation: outer-dashoffset infinite linear 6s;
        }
        
        @keyframes inner-dashoffset {
          0% {
            stroke-dashoffset: 0;
            stroke-dasharray: 168px 168px;
          }
          50% {
            stroke-dasharray: 112px 224px;
          }
          100% {
            stroke-dashoffset: -336px;
            stroke-dasharray: 168px 168px;
          }
        }
        
        .Button-line--inner {
          stroke-dashoffset: 0;
          stroke-dasharray: 168px 168px;
          animation: inner-dashoffset infinite 5s;
        }
        
        .Button-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
      `}</style>
    </button>
  );
};

export default FancyButton;