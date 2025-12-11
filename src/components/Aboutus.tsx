"use client";
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import web3 from './assest/web3.webp'; 
import Gamedev from './assest/ab1.png';
import Gamedev1 from './assest/about syn.jpg';
import Gamedev2 from './assest/output.png';
import abb from './assest/abb.png';
function SynnoviqWebsite() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    welcome: false,
    about: false,
    why: false,
    services: false,
    team: false,
  });

  // Animation states for each section's elements
  const [aboutElements, setAboutElements] = useState({
    image: false,
    description: false,
    gamingSetup: false,
  });

  const [whyElements, setWhyElements] = useState({
    image: false,
    cards: Array(4).fill(false),
  });

  const [serviceElements, setServiceElements] = useState({
    topCards: Array(3).fill(false),
    image: false,
    bottomCards: Array(2).fill(false),
  });

  // Refs for intersection observer
  const sectionRefs = {
    welcome: useRef(null),
    about: useRef(null),
    why: useRef(null),
    services: useRef(null),
    team: useRef(null),
  };

  useEffect(() => {
    // Trigger initial animations after component mounts
    setIsLoaded(true);

    // Staggered animation for sections
    const sectionDelay = 300;
    setTimeout(
      () => setVisibleSections((prev) => ({ ...prev, welcome: true })),
      sectionDelay,
    );
    setTimeout(
      () => setVisibleSections((prev) => ({ ...prev, about: true })),
      sectionDelay * 2,
    );
    setTimeout(
      () => setVisibleSections((prev) => ({ ...prev, why: true })),
      sectionDelay * 3,
    );
    setTimeout(
      () => setVisibleSections((prev) => ({ ...prev, services: true })),
      sectionDelay * 4,
    );
    setTimeout(
      () => setVisibleSections((prev) => ({ ...prev, team: true })),
      sectionDelay * 5,
    );

    // About section staggered animations
    setTimeout(
      () => setAboutElements((prev) => ({ ...prev, image: true })),
      sectionDelay * 2 + 300,
    );
    setTimeout(
      () => setAboutElements((prev) => ({ ...prev, description: true })),
      sectionDelay * 2 + 600,
    );
    setTimeout(
      () => setAboutElements((prev) => ({ ...prev, gamingSetup: true })),
      sectionDelay * 2 + 900,
    );

    // Why section staggered animations
    setTimeout(
      () => setWhyElements((prev) => ({ ...prev, image: true })),
      sectionDelay * 3 + 300,
    );
    whyElements.cards.forEach((_, index) => {
      setTimeout(
        () => {
          setWhyElements((prev) => {
            const newCards = [...prev.cards];
            newCards[index] = true;
            return { ...prev, cards: newCards };
          });
        },
        sectionDelay * 3 + 600 + index * 200,
      );
    });

    // Services section staggered animations
    serviceElements.topCards.forEach((_, index) => {
      setTimeout(
        () => {
          setServiceElements((prev) => {
            const newTopCards = [...prev.topCards];
            newTopCards[index] = true;
            return { ...prev, topCards: newTopCards };
          });
        },
        sectionDelay * 4 + 300 + index * 200,
      );
    });

    setTimeout(
      () => setServiceElements((prev) => ({ ...prev, image: true })),
      sectionDelay * 4 + 900,
    );

    serviceElements.bottomCards.forEach((_, index) => {
      setTimeout(
        () => {
          setServiceElements((prev) => {
            const newBottomCards = [...prev.bottomCards];
            newBottomCards[index] = true;
            return { ...prev, bottomCards: newBottomCards };
          });
        },
        sectionDelay * 4 + 1100 + index * 200,
      );
    });

    // For team members staggered animation
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < teamMembers.length) {
        setVisibleCount((prev) => prev + 1);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    // Setup intersection observers for scroll-based animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));

          // Trigger section-specific animations when scrolled into view
          if (sectionId === "about") {
            setTimeout(
              () => setAboutElements((prev) => ({ ...prev, image: true })),
              300,
            );
            setTimeout(
              () =>
                setAboutElements((prev) => ({ ...prev, description: true })),
              600,
            );
            setTimeout(
              () =>
                setAboutElements((prev) => ({ ...prev, gamingSetup: true })),
              900,
            );
          }

          if (sectionId === "why") {
            setTimeout(
              () => setWhyElements((prev) => ({ ...prev, image: true })),
              300,
            );
            whyElements.cards.forEach((_, index) => {
              setTimeout(
                () => {
                  setWhyElements((prev) => {
                    const newCards = [...prev.cards];
                    newCards[index] = true;
                    return { ...prev, cards: newCards };
                  });
                },
                600 + index * 200,
              );
            });
          }

          if (sectionId === "services") {
            serviceElements.topCards.forEach((_, index) => {
              setTimeout(
                () => {
                  setServiceElements((prev) => {
                    const newTopCards = [...prev.topCards];
                    newTopCards[index] = true;
                    return { ...prev, topCards: newTopCards };
                  });
                },
                300 + index * 200,
              );
            });

            setTimeout(
              () => setServiceElements((prev) => ({ ...prev, image: true })),
              900,
            );

            serviceElements.bottomCards.forEach((_, index) => {
              setTimeout(
                () => {
                  setServiceElements((prev) => {
                    const newBottomCards = [...prev.bottomCards];
                    newBottomCards[index] = true;
                    return { ...prev, bottomCards: newBottomCards };
                  });
                },
                1100 + index * 200,
              );
            });
          }

          if (sectionId === "team") {
            // Reset and restart team member animation when scrolled into view
            setVisibleCount(0);
            let teamIndex = 0;
            const teamIntervalId = setInterval(() => {
              if (teamIndex < teamMembers.length) {
                setVisibleCount((prev) => prev + 1);
                teamIndex++;
              } else {
                clearInterval(teamIntervalId);
              }
            }, 100);
          }

          // Unobserve after triggering
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all section refs
    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        ref.current.id = id;
        sectionObserver.observe(ref.current);
      }
    });

    return () => {
      clearInterval(intervalId);
      sectionObserver.disconnect();
    };
  }, []);

  // Team members data
  const teamMembers = [
    { name: "Oleg", role: "CEO, Founder" },
    { name: "Dmytro", role: "Head of Game Production" },
    { name: "Anastasiia", role: "Account Director" },
    { name: "Pavlo", role: "Head of Business Analysis" },
    { name: "Anastasiia", role: "Business Development Manager" },
    { name: "Alex", role: "Head of QA" },
    { name: "Julia", role: "Project Manager" },
    { name: "Dima", role: "Tech Lead, UE" },
    { name: "Edward", role: "Tech Lead, Unity Developer" },
    { name: "Max", role: "Senior Unity Developer" },
    { name: "Alex", role: "Tech Artist" },
    { name: "Nick", role: "3D Animator" },
    { name: "Yuliya", role: "UI/UX Designer" },
    { name: "Andriy", role: "2D Artist, Animator" },
    { name: "Dmytro", role: "3D Artist" },
    { name: "Artem", role: "Game Designer" },
    { name: "Sofia", role: "QA Engineer" },
    { name: "Ivan", role: "Backend Developer" },
    { name: "Maria", role: "Content Writer" },
    { name: "Viktor", role: "Sound Designer" },
    
  ];

  // Why Synnoviq cards data for staggered animation
  const whyCards = [
    {
      title: "Our Mission",
      description:
        "To blend creativity with technology, delivering world-class gaming and digital solutions that redefine industries and enrich lives",
    },
    {
      title: "Next Level",
      description:
        "Crafting immersive gaming experiences and cutting-edge technology solutions. Join us in revolutionizing digital entertainment.",
    },
    {
      title: "Our Team",
      description:
        "At the heart of Synnoviq Technologies is a passionate team of developers, designers, and tech innovators. Our experts come from diverse backgrounds, sharing a common goal—to craft cutting-edge solutions that leave a lasting impact.",
    },
    {
      title: "Our Vision",
      description:
        "With a vision for the future, we are expanding our expertise into cybersecurity, AI-driven solutions, digital marketing, and media production, positioning ourselves as leaders in IT innovation and entertainment technology",
    },
  ];

  // Service cards data for staggered animation
  const serviceCards = [
    {
      title: "SOFTWARE SOLUTIONS",
      description:
        "We offer tailor-made software solutions that are designed to streamline processes, improve productivity, and elevate the digital experience. From enterprise applications to custom software systems, we help bring your ideas to life.",
    },
    {
      title: "GAME DEVELOPMENT",
      description:
        "Whether you're looking to develop mobile, console, or PC games, Synnoviq specializes in creating engaging and immersive gaming experiences. We work closely with our clients to understand their ideas, creating games that captivate and entertain players worldwide.",
    },
    {
      title: "WEB DEVELOPMENT & UI/UX DESIGN",
      description:
        "Our expert web development team creates responsive, interactive websites, while our UI/UX designers focus on delivering seamless user experiences that are intuitive and visually appealing. We ensure your digital presence stands out.",
    },
    {
      title: "3D MODELING & ANIMATION",
      description:
        "We bring your ideas to life with stunning 3D models and animations. Our team uses the latest tools to create highly detailed, realistic, and dynamic 3D visuals for your projects—whether for games, advertisements, or virtual experiences.",
    },
    {
      title: "DIGITAL CONTENT CREATION",
      description:
        "We craft compelling digital content designed to engage, inform, and inspire. Whether it's social media assets, video production, or interactive media, we help your brand tell its story in a creative and impactful way.",
    },
  ];

  return (
    <main className="bg-[#1e1033] overflow-x-hidden">
      {/* Font imports - only need to include once */}
      <link
        href={web3}
        rel="stylesheet"
      />

      {/* Welcome Section */}
      <section
        ref={sectionRefs.welcome}
        className={`p-6 w-full min-h-screen overflow-hidden relative transition-all duration-1000 ${
          visibleSections.welcome ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Background blur with proper positioning and color - updated to match 4th page */}
        <div
        className={`absolute top-1/2 left-1/2 h-96 bg--600 -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-[200px] w-[500px] transition-opacity duration-1000 ease-in-out ${
          isLoaded ? "opacity-70 animate-pulse" : "opacity-0"
        }`}
        style={{ animationDuration: "4s", zIndex: "0" }}
      />



        <div className="relative pt-16 z-[1] mx-auto max-w-[1440px]">
          <div
            className={`mb-10 text-6xl text-center max-md:text-5xl max-sm:px-5 max-sm:py-0 max-sm:text-4xl transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            style={{
              background: "linear-gradient(90deg, #4ECDC4, #E684AE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Ledger', serif",
            }}
          >
            WELCOME TO SYNNOVIQ!
          </div>

          <div className="flex justify-center mt-16">
            <div
              className={`animate-border-gradient relative rounded-[30px] p-[3px] z-10 w-[476px] max-md:w-4/5 max-md:max-w-[476px] max-sm:w-[90%] transition-all duration-1000 delay-300 transform ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <article className="p-10 bg-[#1e0c39] rounded-[28px] max-sm:p-5">
                <div
                  className="text-2xl leading-snug text-center text-white max-sm:text-lg"
                  style={{ fontFamily: "'Jura', sans-serif" }}
                >
                  <span>
                    Driven by innovation, we design captivating gaming
                    experiences for players across the globe.
                  </span>
                  <br />
                  <br />
                  <span>
                    Our imagination shapes the future of interactive
                    entertainment for everyone.
                  </span>
                </div>
              </article>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <div
              className={`border-gradient-wrapper relative rounded-[30px] p-[3px] z-10 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "600ms" }}
            >
              <div
                className="px-10 py-3 text-2xl text-white rounded-[28px] cursor-pointer bg-[#1e0c39] max-sm:px-6 max-sm:py-2 max-sm:text-xl"
                style={{ fontFamily: "'Ledger', serif" }}
              >
                Let's dive into our project
              </div>
            </div>
          </div>
        </div>

        <img
          src={Gamedev}
          alt="Cyberpunk character"
          className={`absolute right-0 left--100 z-10 w-6/12 h-auto top-[311px] max-md:w-2/5 max-sm:bottom-0 max-sm:top-auto max-sm:w-[70%] transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 animate-float" : "opacity-0"
          }`}
        />

        <img   
          src={Gamedev2}
          alt="Gaming controller"
          className={`absolute bottom-0 left-0 z-0 h-auto opacity-60 rotate-[27.945deg] w-[33%] max-md:w-3/12 max-sm:hidden transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-60 animate-slow-spin" : "opacity-0"
          }`}
        />
      </section>

      {/* About Section */}
      <section
  ref={sectionRefs.about}
  className={`box-border overflow-hidden relative w-full min-h-screen bg-[#1e1033] py-16 px-8 transition-all duration-1000 ${
    visibleSections.about ? "opacity-100" : "opacity-0"
  }`}
>
  {/* Loading indicator */}
  <div
    className={`absolute inset-0 bg-[#1e1033] z-50 flex items-center justify-center transition-opacity duration-500 ${
      visibleSections.about && aboutElements.image
        ? "opacity-0 pointer-events-none"
        : "opacity-100"
    }`}
  >
    <div className="animate-spin-slow w-16 h-16 border-t-4 border-b-4 border-[#4ECDC4] rounded-full"></div>
  </div>

  {/* Background blur with proper positioning and color - updated to match 4th page */}
  
  {/* Heading with gradient text effect */}
  <h2
    className={`mb-16 text-6xl font-bold text-center max-md:text-5xl max-sm:text-4xl transition-all duration-1000 ease-out relative z-10 ${
      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
    }`}
    style={{
      background: "linear-gradient(90deg, #4ECDC4, #E684AE)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "'Ledger', serif",
    }}
  >
    ABOUT SYNNOVIQ
  </h2>

  <div className="flex justify-center items-center gap-8 relative max-md:flex-col z-10">
    {/* Team image with proper border styling */}
    <div
      className={`relative transition-all duration-1000 ease-out ${
        aboutElements.image
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      }`}
    >
     <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg -m-1 z-0"></div>
     <div className="relative z-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a50adb83b165ea8f9d41439da6d765de6851b38"
          className="object-cover rounded-lg border-2 border-orange-400 h-[400px] w-[400px] max-md:w-full max-md:h-auto max-md:max-w-[400px]"
          alt="Esports team gaming"
          style={{ boxShadow: "0 0 20px rgba(246, 135, 179, 0.5)" }}
        />
      </div>
    </div>
    
    {/* Content box with animated border */}
    <div
      className={`relative max-w-[500px] transition-all duration-1000 ease-out ${
        aboutElements.description
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-20"
      }`}
    >
      {/* Animated border container */}
      <div className="animate-border-gradient relative rounded-2xl p-[3px] z-10">
        {/* Content box inside with solid background */}
        <div
          className="bg-[#1e0c39] p-8 rounded-2xl relative z-10"
          style={{ boxShadow: "0 0 15px rgba(157, 78, 221, 0.3)" }}
        >
          <article
            className="text-xl text-white"
            style={{ fontFamily: "'Jura', sans-serif" }}
          >
            Synnoviq Technologies Private Limited is a cutting-edge game
            development and tech firm dedicated to revolutionizing digital
            entertainment and interactive experiences. Our expertise spans
            across: Game Development, Software Solutions, Web Development
            &amp; UI/UX Design, 3D Modeling & Animation, and Digital
            Content Creation.
          </article>
        </div>
      </div>
    </div>
  </div>

  {/* PlayStation 5 image with proper positioning */}
 
</section>

      {/* Why Synnoviq Section */}
<section
  ref={sectionRefs.why}
  className={`p-6 w-full min-h-screen overflow-hidden transition-all duration-1000 ${
    visibleSections.why ? "opacity-100" : "opacity-0"
  }`}
>
  {/* Loading indicator */}
  <div
    className={`absolute inset-0 bg-[#1e1033] z-50 flex items-center justify-center transition-opacity duration-500 ${
      visibleSections.why && whyElements.image
        ? "opacity-0 pointer-events-none"
        : "opacity-100"
    }`}
  >
    <div className="animate-spin-slow w-16 h-16 border-t-4 border-b-4 border-[#4ECDC4] rounded-full"></div>
  </div>

  {/* Background blur with proper positioning and color */}
  <div className="mx-auto max-w-[1440px] relative z-10">
    {/* Heading with gradient text effect */}
    <h2
      className={`text-5xl font-bold mb-32 text-center transition-all duration-1000 ease-out ${
        isLoaded
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10"
      }`}
      style={{
        background: "linear-gradient(90deg, #4ECDC4, #E684AE)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "'Ledger', serif",
      }}
    >
      WHY SYNNOVIQ!?
    </h2>

    <div className="flex gap-5 max-md:flex-col">
      {/* Left column with image */}
      <div
        className={`w-[32%] max-md:w-full transition-all duration-1000 ease-out ${
          whyElements.image
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-20"
        }`}
      >
        <img
          src={Gamedev1}
          alt="Synnoviq visual representation"
          className="object-contain w-full rounded-3xl aspect-[0.59]"
        />
      </div>

      {/* Right column with cards */}
      <div className="w-[68%] max-md:w-full">
        {/* Cards grid with equal sizing */}
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 h-full">
          {whyCards.map((card, index) => (
            <div
              key={`why-card-${index}`}
              className={`transition-all duration-500 ease-out transform h-full ${
                whyElements.cards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="animate-border-gradient relative rounded-[30px] p-[3px] z-10 h-full">
                <article className="flex flex-col items-center justify-center text-center px-4 py-4 bg-[#1e0c39] rounded-[28px] h-full">
                  <h3
                    className="text-2xl text-[#4ECDC4] mb-2"
                    style={{ fontFamily: "'Ledger', serif" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-medium text-white"
                    style={{ fontFamily: "'Jura', sans-serif" }}
                  >
                    {card.description}
                  </p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
<br></br>
<br></br>
<br></br>



<h2
      className={`text-5xl font-bold mb-32 text-center transition-all duration-1000 ease-out ${
        isLoaded
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10"
      }`}
      style={{
        background: "linear-gradient(90deg, #4ECDC4, #E684AE)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "'Ledger', serif",
      }}
    >
      OUR SERVICES
    </h2>
      {/* Services with staggered animation */}
<div className="grid grid-cols-3 gap-6 mb-16 max-md:grid-cols-2 max-sm:grid-cols-1">
  
  {serviceCards.slice(0, 3).map((service, index) => (
    <div
      key={`service-${index}`}
      className={`transition-all duration-500 ease-out transform ${
        serviceElements.topCards[index]
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="animate-border-gradient relative rounded-[30px] p-[3px] z-10 h-[300px]">
        <article className="p-6 bg-[#1e0c39] rounded-[28px] h-full flex flex-col">
          <h3
            className="mb-4 text-2xl text-white font-semibold"
            style={{ fontFamily: "'Ledger', serif" }}
            >
            {service.title}
          </h3>
          <p
            className="text-medium text-white"
            style={{ fontFamily: "'Jura', sans-serif" }}
          >
            {service.description}
          </p>
        </article>
      </div>
    </div>
  ))}
</div>

{/* Bottom row with image and two services */}
<div className="flex flex-wrap gap-6 items-start max-md:flex-col">
  {/* Image without animation or color effects */}
  <div
    className={`transition-all duration-1000 ease-out ${
      serviceElements.image
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-20"
    }`}
  >
    <img
      src={abb}
      alt="Gaming support representative"
      className="w-[400px] h-[300px] object-cover rounded-lg max-lg:w-full max-lg:h-auto"
    />
  </div>

  {/* Two more services with staggered animation */}
  <div className="grid flex-1 grid-cols-2 gap-6 max-sm:grid-cols-1">
    {serviceCards.slice(3, 5).map((service, index) => (
      <div
        key={`service-bottom-${index}`}
        className={`transition-all duration-500 ease-out transform ${
          serviceElements.bottomCards[index]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="animate-border-gradient relative rounded-[30px] p-[3px] z-10 h-[300px]">
          <article className="p-6 bg-[#1e0c39] rounded-[28px] h-full flex flex-col">
            <h3
              className="mb-4 text-2xl text-white font-semibold"
              style={{ fontFamily: "'Ledger', serif" }}
            >
              {service.title}
            </h3>
            <p
              className="text-medium text-white"
              style={{ fontFamily: "'Jura', sans-serif" }}
            >
              {service.description}
            </p>
          </article>
        </div>
      </div>
    ))}
  </div>
</div>
<br></br>
<br></br>

<br></br>
{/* Custom animation keyframes */}
<style jsx>{`
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.8;
    }
  }
  .animate-pulse {
    animation: pulse 4s infinite;
  }

  /* Border animation with the requested colors */
  .animate-border-gradient {
    background: linear-gradient(
      90deg,
      #3b82f6,
      /* blue */ #ec4899,
      /* pink */ #ef4444,
      /* red / #8b5cf6 / violet */
    );
    background-size: 300% 300%;
    animation: gradient-animation 4s ease infinite;
  }

  /* Special border gradient for the button, no other animations */
  .border-gradient-wrapper {
    background: linear-gradient(
      90deg,
      #3b82f6,
      /* blue */ #ec4899,
      /* pink */ #ef4444,
      /* red / #8b5cf6 / violet */
    );
    background-size: 300% 300%;
    animation: gradient-animation 4s ease infinite;
  }

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Keep original animations from WelcomePage */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  @keyframes slow-spin {
    0% {
      transform: rotate(27.945deg);
    }
    50% {
      transform: rotate(32.945deg);
    }
    100% {
      transform: rotate(27.945deg);
    }
  }

  /* Loading spinner animation */
  @keyframes spin-slow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spin-slow 1.5s linear infinite;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-slow-spin {
    animation: slow-spin 10s ease-in-out infinite;
  }
`}</style>
</main>
);
}

export default SynnoviqWebsite;