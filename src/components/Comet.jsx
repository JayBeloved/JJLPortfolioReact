import React, { useState, useEffect } from 'react';
import cometHeader from '../assets/comet/comet-header (1).png';
import perplexityLogo from '../assets/comet/Perplexity-Logo-Single-Stacked-Dark.svg';
import featureImage1 from '../assets/comet/A3Poster_14.png';
import featureImage2 from '../assets/comet/A3Poster_15.png';

const CometPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const studentProLink = "https://perplexity.ai/pro?referral=STUDENT_EMAIL_REFERRAL"; // Replace with your actual link
  const cometProLink = "https://comet.pro/free?referral=YOUR_REFERRAL_CODE"; // Replace with your actual link

  return (
    <div className={`bg-gray-900 text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section id="comet-hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <img src={cometHeader} alt="Comet Browser" className="absolute top-0 left-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
            Explore with Comet Browser
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A smarter, faster way to browse, powered by Perplexity AI. Move beyond simple search and into the future of discovery.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        {/* About Section */}
        <section id="about-comet" className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-white mb-6">Redefining the Search Experience</h2>
              <p>Comet is not just a browser; it's a research partner. Built on the powerful Perplexity AI engine, it anticipates your needs, summarizes content, and provides cited, accurate answers, saving you time and effort.</p>
              <p>Whether you're a student working on an assignment, a developer debugging code, or just a curious mind, Comet helps you find what you're looking for, faster and more efficiently.</p>
            </div>
            <div className="flex justify-center">
                <img src={perplexityLogo} alt="Perplexity AI" className="w-64" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="comet-features" className="mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <img src={featureImage1} alt="Feature 1" className="w-full h-auto object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold mb-3">AI-Powered Summaries</h3>
              <p className="text-gray-400">Get the gist of any page without reading the whole thing. Comet provides instant, concise summaries to speed up your research.</p>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <img src={featureImage2} alt="Feature 2" className="w-full h-auto object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold mb-3">Contextual Assistance</h3>
              <p className="text-gray-400">Comet understands what you're working on and offers relevant suggestions, related articles, and quick answers to your questions.</p>
            </div>
          </div>
        </section>

        {/* Student Offer Section */}
        <section id="student-offer" className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Unlock Pro for Free</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            As a student, you have exclusive access to Perplexity Pro and Comet Pro for free. Elevate your learning and research with premium features.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href={studentProLink} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors">
              Get Perplexity Pro (for Students)
            </a>
            <a href={cometProLink} target="_blank" rel="noopener noreferrer" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-purple-800 transition-colors">
              Get Comet Pro (Free)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CometPage;
