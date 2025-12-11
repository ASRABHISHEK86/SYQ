import React, { useState } from 'react';

import contact from './assest/contactus.png'; 



function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    contact: '',
    budget: '',
    message: ''
    
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-custom-gradient text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Heading and Image */}
          <div className="relative">
            <h1 className="text-6xl font-bold mb-12 animated-title">
              JOIN THE GUILD
            </h1>
            <div className="relative w-full">
              <img
                src={contact}
                alt="Gaming Headset"
                className="w-full max-w-8xl mx-auto transform hover:scale-105 transition-transform duration-300 rounded-lg glow-effect"
              />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="backdrop-blur-sm bg-black/30 p-8 rounded-xl border-gradient">
            <form className="space-y-6">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="FIRST NAME"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="LAST NAME"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="COMPANY"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="MAIL"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="CONTACT"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="BUDGET"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="MESSAGE"
                  className="form-input min-h-[100px]"
                />
              </div>
              {/* File Attachment */}
          <div className="pt-2" style={{ animation: 'fadeUp 0.5s ease-out 0.8s both' }}>
            <label htmlFor="file" className="flex items-center text-white text-sm cursor-pointer hover:text-pink-400 transition-colors duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:text-pink-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

              <button type="submit" className="submit-button">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
