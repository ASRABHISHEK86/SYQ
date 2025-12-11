import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TowerControl as GameController2, Menu, X } from 'lucide-react';
import logo from './assest/logo-Photoroom.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

  const handleLinkClick = (link) => {
    setIsMenuOpen(false);
    if (link.name === 'CAREERS') {
      // Use window.location for better redirect
      window.location.href = 'https://bes-j2gn.vercel.app/';
    } else {
      // Use lowercase paths for consistency
      const path = link.path.toLowerCase();
      window.location.href = path;
    }
  };

  return (
    <nav className="relative flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8 border-b border-white/10 bg-[#130026] z-50">
      {/* Logo and Hamburger */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="SYNNOVIQ Logo" 
            className="w-12 md:w-16 h-12 md:h-16 mr-2 object-cover"
          />
          <h1 className="text-xl md:text-2xl font-bold tracking-wide font-orbitron">SYNNOVIQ</h1>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.name === 'CAREERS' ? 'https://bes-j2gn.vercel.app/' : link.path.toLowerCase()}
            onClick={(e) => {
              if (link.name === 'CAREERS') {
                e.preventDefault();
                window.location.href = 'https://bes-j2gn.vercel.app/';
              }
            }}
            target={link.name === 'CAREERS' ? '_blank' : undefined}
            rel={link.name === 'CAREERS' ? 'noopener noreferrer' : undefined}
            className="text-sm font-medium tracking-wide hover:text-purple-400 transition-colors font-rajdhani px-2 py-1 min-h-[44px] flex items-center"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Desktop JOIN US Button */}
      <button 
        className="hidden md:block px-8 py-3 text-base rounded border-2 border-purple-500 text-white font-orbitron glow-button hover:bg-purple-500/10 transition-colors"
        onClick={() => window.location.href = '/contactus'}
      >
        JOIN US
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Menu */}
          <div className="md:hidden fixed inset-0 top-[73px] bg-[#130026] z-40 overflow-y-auto">
            <div className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLinkClick(link);
                  }}
                  className="text-left text-base font-medium tracking-wide text-white hover:text-purple-400 transition-colors font-rajdhani py-4 px-4 border-b border-white/10 active:bg-purple-500/10 min-h-[48px] touch-manipulation"
                >
                  {link.name}
                </button>
              ))}
              <button 
                className="mt-4 px-8 py-4 text-base rounded border-2 border-purple-500 text-white font-orbitron glow-button hover:bg-purple-500/10 transition-colors w-full touch-manipulation"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(false);
                  window.location.href = '/contactus';
                }}
              >
                JOIN US
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;