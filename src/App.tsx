import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Add this import (install with npm if needed)
import { Analytics } from '@vercel/analytics/react'; // Add this import
import { SpeedInsights } from '@vercel/speed-insights/react'; // Add this import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Projects from './components/Projects';
import Services from './components/Services';
import Careeres from './components/Careers';
import Blog from './components/Blog';
import GameServices from './components/Gamedevelopment';
import Footer from './components/Footer';

// Import the game development detail component
// All services are currently using the same component (Gamedev)
import Gamedev from './components/Gamedev';
import Softdev from './components/Softdev';
import Uidev from './components/uidev';
import Web from './components/web';
import Modelig from './components/modelig';
import Cntent from './components/cntent';


import GameDeveloperDetails from './components/Gamedev';
import ArtistDetails from './components/modelig';
import SoftwareEngineerDetails from './components/Softdev';
import ContentCreatorDetails from './components/cntent';

import UnityGameDev from './components/unity';
import UnrealGameDev from './components/unreal';

import logo from './components/assest/logo-Photoroom.png'


// Layout component to avoid repetition
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-[#1a0122] to-[#220a29] text-white">
    <Helmet>
      <title>Synnoviq</title>
      <link rel="icon" href={logo} /> {/* Adjust the path based on where your favicon is located */}
    </Helmet>
    <div className="max-w-7xl mx-auto">
      <Navbar />
      {children}
      <Footer/>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/hero" element={<Navigate to="/" replace />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careeres />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Game Services main page */}
          <Route path="/Gamedevelopment" element={<GameServices />} />
          
          {/* Game Services sub-pages - all using the same Gamedev component */}
          <Route path="/game-development" element={<Gamedev />} />
          <Route path="/software-development" element={<Softdev />} />
          <Route path="/uiux-design" element={<Uidev />} />
          <Route path="/web-development" element={<Web />} />
          <Route path="/3d-modeling" element={<Modelig />} />
          <Route path="/digital-content" element={<Cntent />} />

          <Route path="/game-developer-details" element={<GameDeveloperDetails />} />
          <Route path="/artist-details" element={<ArtistDetails />} />
          <Route path="/software-engineer-details" element={<SoftwareEngineerDetails />} />
          <Route path="/content-creator-details" element={<ContentCreatorDetails />} />

          <Route path="/unity" element={<UnityGameDev />} />
          <Route path="/unreal" element={<UnrealGameDev />} />


          <Route path="/Gamedev" element={<Gamedev />} />
          <Route path="/software-development" element={<Softdev />} />
          <Route path="/web-development" element={<Web />} />
          <Route path="/ui-ux-design" element={<Uidev />} />
          <Route path="/3d-modeling-animation" element={<Modelig />} />
          <Route path="/digital-content-creation" element={<Cntent />} />
          

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;