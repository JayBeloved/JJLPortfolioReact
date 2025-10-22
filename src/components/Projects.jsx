import React, { useState, useEffect } from 'react'
import techImage from '../assets/img/portfolio/techImage.png'
import leadImage from '../assets/img/portfolio/leadImage.png'
import eduImage from '../assets/img/portfolio/eduImage.png'

const IdeasSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('ideas')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const ideas = [
    {
      title: "10xb Platform",
      description: "An integrated ecosystem delivering immense value through technology, education, and leadership content, resources, and micro-apps.",
      image: techImage
    },
    {
      title: "NaijaGrad Talent Pool",
      description: "A professional platform connecting fresh Nigerian graduates with recruiters and organizations, featuring AI-powered profile optimization.",
      image: techImage
    },
    {
      title: "SME Solutions Hub",
      description: "A curated library of ready-to-use resources, templates, toolkits, and micro-apps designed to solve specific business problems for SMEs.",
      image: techImage
    },
    {
      title: "Training & Mentorship",
      description: "Structured learning paths, case studies, and a platform that provides a pathway to mentorship opportunities for aspiring tech professionals.",
      image: leadImage
    },
    {
      title: "Writing & Blog",
      description: "A collection of curated, high-quality content and articles on technology, productivity, leadership, and personal development.",
      image: eduImage
    }
  ]

  return (
    <section id="ideas" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ideas & <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Concepts</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Exploring concepts that aim to solve problems and create value.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-8"></div>
          </div>

          {/* Ideas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ideas.map((idea, index) => (
              <div
                key={idea.title}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img src={idea.image} alt={idea.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {idea.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {idea.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
             <div
                key="more-ideas"
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-dashed border-gray-600/80 hover:border-blue-500/80 transition-all duration-500 flex items-center justify-center text-center p-6 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${ideas.length * 150}ms` }}
              >
                <div>
                    <h3 className="text-2xl font-bold text-gray-500 mb-3">
                        + Many More
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                        I am constantly exploring new ideas and concepts. 
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IdeasSection
