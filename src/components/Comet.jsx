import React, { useState, useEffect } from 'react';
import studentImage from '../assets/comet/comet-header (1).png';
import useCase from '../assets/comet/use-case.png';
import pitchDeckImage from '../assets/comet/pitch_deck.png';

const CometPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('academics');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const studentProLink = "https://plex.it/referrals/48I92GMP";
  const cometProLink = "https://perplexity.ai/browser/claim-invite/ODNkMjZiM2UtNGRiZS00NWJmLWJiMTctYjdlOGM4ZGJmZDI2";
  const pitchDeckLink = "https://pitch.com/v/jjl-comet-pro-rqhu93";
  const videoLink1 = "https://drive.google.com/file/d/1KIUtdzw9nCK390gaoH71yLGxrUnivxtU/view?usp=sharing";
  const videoLink2 = "https://drive.google.com/file/d/1grPC_yJ1Xbd4meDqoF27pQulXTXHIc0R/view?usp=sharing";
  

  const useCases = {
    academics: [
      "Summarize lecture notes and academic files (across various platforms without manual downloading/copy-pasting)",
      "Organize research by topic, access reliable sources, and get citations for scholarly work",
      "Create, edit, and reference documents and reports directly in browser",
      "Turn lengthy readings into quick summaries, making study sessions more efficient",
      "Build and generate entire slide decks from your ideas or uploaded files in seconds",
      "Schedule meetings for group projects by finding times and sending invites",
    ],
    work: [
      "Automate email responses, unsubscribe from unwanted emails, and reach inbox zero instantly",
      "Streamline scheduling: access your Google Calendar, propose/pick times, create events, and email invites",
      "Accelerate sales prospecting (find leads, draft personalized outreach emails automatically)",
      "Analyze stock charts, identify key price movements, and get company news",
      "Create shortcuts/automations (“/” commands) for repetitive workflows and business processes",
    ],
    personal: [
      "Find and compare products online: reviews, features, prices; add top choices to cart for fast, informed shopping",
      "Book travel (reserve flights/hotels, select seats/classes, add commutes to calendar)",
      "Discover and purchase event/movie tickets—find best showtimes based on your schedule",
      "Summarize YouTube videos, control playback, get transcripts, jump to timestamps—improve entertainment and learning",
      "Recommend games, explain rules, and provide tips as an AI gaming companion",
    ],
  };

  return (
    <div className={`bg-gray-900 text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Student Hero Section */}
      <section id="student-hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <img src={studentImage} alt="Students using Comet" className="absolute top-0 left-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
            Unlock Comet for Students 
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Free & Premium AI Tools Designed for Your Academic Success!
          </p>
          <a href={studentProLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold text-xl hover:bg-blue-700 transition-colors">
            Sign up with your .edu.ng email
          </a>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        {/* Why Comet for Students Section */}
        <section id="why-comet" className="mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">Why Comet Is Perfect For Higher Institution Students:</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">Voice AI Assistance</h3>
                    <p className="text-gray-400">Customize voices, interact hands-free, get instant answers for assignments, research, and group projects—all by speaking.</p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">Unlimited Pro Search</h3>
                    <p className="text-gray-.400">Dive into deep internet research with unlimited queries, tailored for academic excellence and scholarly work.</p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">Premium AI Models</h3>
                    <p className="text-gray-400">Gain free or special access to top models (Claude 3, GPT-4o) for complex questions, academic writing, and study help.</p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">Unlimited File Uploads & AI Image Generation</h3>
                    <p className="text-gray-400">Seamlessly upload your lecture notes, project docs, or research papers. Transform ideas into visuals with instant AI-powered image tools.</p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">Custom Knowledge Hubs & Collaboration</h3>
                    <p className="text-gray-400">Build your own study libraries, organize resources, and collaborate in real-time with classmates on research, presentations, and assignments.</p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">Special Student Offer</h3>
                    <p className="text-gray-400">Sign up now using your official school email to get exclusive student benefits—including free trials and extra features!</p>
                </div>
            </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">How Comet Supercharges Your Life</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-invert prose-lg max-w-none">
                <div className="flex mb-8 border-b border-gray-700">
                    <button onClick={() => setActiveTab('academics')} className={`px-6 py-3 font-bold ${activeTab === 'academics' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500'}`}>Academics</button>
                    <button onClick={() => setActiveTab('work')} className={`px-6 py-3 font-bold ${activeTab === 'work' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500'}`}>Work</button>
                    <button onClick={() => setActiveTab('personal')} className={`px-6 py-3 font-bold ${activeTab === 'personal' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500'}`}>Personal</button>
                </div>
                <ul className="list-disc list-inside space-y-2">
                    {useCases[activeTab].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center">
                <img src={useCase} alt="Comet Use Cases" className="w-full max-w-md rounded-lg" />
            </div>
          </div>
        </section>
        
        {/* Video Section */}
        <section id="comet-videos" className="mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">See Comet in Action</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                    <h3 className="text-2xl font-bold mb-4">Summarize Lecture Notes</h3>
                    <video controls className="w-full rounded-lg">
                        <source src={videoLink1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                    <h3 className="text-2xl font-bold mb-4">Directly Edit Documents</h3>
                    <video controls className="w-full rounded-lg">
                        <source src={videoLink2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>

        {/* Pitch Deck Section */}
        <section id="pitch-deck" className="mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">Explore Our Vision</h2>
            <div className="bg-gray-800/50 rounded-2xl p-12 border border-gray-700/50 text-center">
                <img src={pitchDeckImage} alt="Comet Pitch Deck" className="w-full max-w-lg mx-auto rounded-lg mb-8" />
                <h3 className="text-3xl font-bold mb-4">Want a deeper look into the future of browsing?</h3>
                <p className="text-xl text-gray-400 mb-8">Check out our pitch deck to see how we're revolutionizing the way we interact with the web.</p>
                <a href={pitchDeckLink} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-purple-700 transition-colors">
                    View Pitch Deck
                </a>
            </div>
        </section>

        {/* Student Offer Section */}
        <section id="student-offer" className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Started Today!</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Sign up now using your official school email to get exclusive student benefits—including free trials and extra features!
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href={studentProLink} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors">
              Get Perplexity Pro (for Students)
            </a>
            <a href={cometProLink} target="_blank" rel="noopener noreferrer" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-purple-800 transition-colors">
              Get Comet Pro (Free) PC ONlY
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CometPage;
