import React from 'react';
import { useNavigate } from 'react-router-dom';
import web3 from './assest/web3.webp';  // Fixed typo in path
import web4 from './assest/web4.webp';  // Fixed typo in path
import blog from './assest/blog.jpg';  // Fixed typo in path


function Home() {
  const navigate = useNavigate();

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

  return (
    <div className="bg-black">
      {/* Blog Section with Background Image */}
      <div className="relative">
        {/* Hero Image - only behind blog content */}
        <div 
 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
 style={{
   backgroundImage: `url(${blog})`,
   filter: 'brightness(0.4) blur(8px)' // optional blur
 }}
 
/>
        
        {/* Content Overlay */}
        <div className="relative z-10 py-24 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg bg-gradient-to-r from-rose-200 to-purple-300 text-transparent bg-clip-text">
              BLOG
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Welcome to our blog, your go-to source for everything related to game development, industry trends, and cutting-edge technology. Whether you're an aspiring developer, a seasoned pro, or simply passionate about gaming, our blog is packed with valuable insights to keep you informed and inspired.
            </p>
            
            {/* Contact Button */}
            <button 
  className="px-10 py-4 text-xl rounded border-2 border-purple-500 text-white font-orbitron glow-button"
  onClick={() => window.location.href = '/Contactus'}
>
  Connect
</button>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
      </div>

      {/* Careers Section 1 */}
      <div className="bg-[#130026] py-16 px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Main Content */}
          <div className="bg-[#1a0b2e] rounded-lg overflow-hidden shadow-2xl group perspective-1000">
            <div className="grid lg:grid-cols-2 gap-0 relative">
              {/* Image Section */}
              <div className="relative h-full transform transition-all duration-1000 origin-left group-hover:-translate-x-full group-hover:opacity-0 group-hover:rotate-y-45">
                <div className="h-64 lg:h-full">
                  <img
                    src={web3}
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
                  Innovate With Us: Pushing the Boundaries of Interactive Entertainment
                </h2>
                <div className="space-y-3 text-gray-300 font-['Jura'] font-bold">
                  <p className="leading-relaxed text-sm">
                    At Synnoviq Technologies, we're redefining what's possible in game development. Our team combines cutting-edge 
                    technologies with creative vision to produce next-generation gaming experiences. From immersive VR worlds to 
                    AI-driven NPCs that adapt to player behavior, we create games that don't just entertain—they revolutionize the 
                    industry. Partner with us to transform your gaming concepts into reality and set new standards in digital 
                    entertainment that captivate players worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Section 2 - With fixed animations to match section 1 */}
      <div className="bg-[#130026] py-16 px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Main Content */}
          <div className="bg-[#1a0b2e] rounded-lg overflow-hidden shadow-2xl group perspective-1000">
            <div className="grid lg:grid-cols-2 gap-0 relative">
              {/* Content Section - Now on the left */}
              <div className="p-6 md:p-8 transform transition-all duration-1000 origin-left group-hover:-translate-x-full group-hover:opacity-0 group-hover:rotate-y-45">
                <h2 className="text-xl md:text-2xl font-bold leading-tight mb-4 font-['Jura']">
                  Join Our Team: Shape the Future of Gaming
                </h2>
                <div className="space-y-3 text-gray-300 font-['Jura'] font-bold">
                  <p className="leading-relaxed text-sm">
                    Synnoviq Technologies is seeking visionaries and innovators ready to push the boundaries of what's possible in 
                    gaming. Whether you're a Unity expert, an Unreal Engine specialist, an AI programmer, or a 3D artist with a 
                    passion for creating stunning environments—we have a place for you. Our collaborative workspace encourages 
                    experimentation, supports professional growth, and rewards bold thinking. Join a team where your ideas matter 
                    and your skills can help create the games that will define the next generation of digital entertainment.
                  </p>
                </div>
              </div>
              
              {/* Image Section - Now on the right */}
              <div className="relative h-full transform transition-all duration-1000 origin-right group-hover:translate-x-full group-hover:opacity-0 group-hover:rotate-y-45">
                <div className="h-64 lg:h-full">
                  <img
                    src={web4}
                    alt="Technology Workspace"
                    className="w-full h-full object-cover"
                  />
                  {/* Neon Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;