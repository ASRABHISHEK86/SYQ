import { Link } from 'react-router-dom';
import { TowerControl as GameController2 } from 'lucide-react';
import logo from './assest/logo-Photoroom.png'

function Navbar() {
  // Define navigation links with paths
  const navLinks = [
    { name: 'HOME', path: '/Hero' },
    { name: 'ABOUT US', path: '/Aboutus' },
    { name: 'SERVICES', path: '/Services' },
    { name: 'PROJECTS', path: '/Projects' },
    { name: 'BLOG', path: '/Blog' },
    { name: 'CAREERS', path: '/Careers' },
    { name: 'CONTACT US', path: '/Contactus' }
  ];

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8 border-b border-white/10">
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="SYNNOVIQ Logo" 
          className="w-12 md:w-16 h-12 md:h-16 mr-2 object-cover"
        />
        <h1 className="text-xl md:text-2xl font-bold tracking-wide font-orbitron">SYNNOVIQ</h1>
      </div>

      <div className="flex flex-wrap justify-center my-4 md:my-0 gap-2 md:gap-4">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className="text-xs md:text-sm font-medium tracking-wide hover:text-purple-400 transition-colors font-rajdhani"
          >
            {link.name}
          </a>
        ))}
      </div>

      <button 
        className="px-8 py-3 text-l rounded border-2 border-purple-500 text-white font-orbitron glow-button"
        onClick={() => window.location.href = '/contactus'}
      >
        JOIN US
      </button>
    </nav>
  );
}

export default Navbar;