import { Link } from 'react-router-dom';  // Import for React Router

const Footer = () => {
  return (
    <footer className="bg-[#202020] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Connect Hub */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Connect Hub:</h3>
            <div className="space-y-1">
              <p className="font-medium">Registered Office:</p>
              <p>Kovilpatti,</p>
              <p>Tuticorin District, Tamil Nadu – 628501</p>
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:asrabhishek860@gmail.com" 
                  className="hover:text-purple-400 transition-colors"
                >
                  synnoviqtechnologies@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a 
                  href="tel:9003873082" 
                  className="hover:text-purple-400 transition-colors"
                >
                  9003873082
                </a>
              </p>
            </div>
            
            <div className="pt-4">
              <p className="mb-3">Follow us on Social Media:</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/share/16XTFmSuLa/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0F0121">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/synnoviq_technologies?utm_source=qr&igsh=MW1kbHI2MXpwNDAxcQ==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0F0121">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column - What we do */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">What we do</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/Gamedev" className="text-white-400 hover:text-purple-500 transition-colors">
                  Game Development
                </Link>
              </li>
              <li>
                <Link to="/software-development" className="text-white-400 hover:text-purple-500 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/web-development" className="text-white-400 hover:text-purple-500 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/ui-ux-design" className="text-white-400 hover:text-purple-500 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/3d-modeling-animation" className="text-white-400 hover:text-purple-500 transition-colors">
                  3D Modeling & Animation
                </Link>
              </li>
              <li>
                <Link to="/digital-content-creation" className="text-white-400 hover:text-purple-500 transition-colors">
                  Digital Content Creation
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Company Description */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Synnoviq Technologies Private Limited</h3>
            <p className="mb-4">
              is a next-generation game development and technology company committed to pushing the boundaries of digital entertainment and interactive experiences.
            </p>
            <p>
              We specialize in: Game Development, Software Solutions, Web Development & UI/UX Design, 3D Modeling & Animation, Digital Content Creation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;