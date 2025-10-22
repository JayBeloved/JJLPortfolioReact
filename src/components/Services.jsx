import React, { useState, useEffect } from 'react'
import techImage from '../assets/img/portfolio/crane.png';
import leadImage from '../assets/img/portfolio/delegates.png';
import eduImage from '../assets/img/portfolio/andl.png';

const Services = () => {
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

    const element = document.getElementById('expertise')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const services = [
    {
      title: "Technology",
      description: "Building innovative and scalable software solutions to solve complex problems and drive growth.",
      image: techImage,
      link: "https://tech.johnjaylawal.site"
    },
    {
      title: "Leadership",
      description: "Providing strategic consulting and mentorship to help individuals and organizations navigate the digital landscape.",
      image: leadImage,
      link: "https://lead.johnjaylawal.site"
    },
    {
      title: "Education",
      description: "Empowering the next generation of builders and leaders through accessible, high-quality educational content.",
      image: eduImage,
      link: "https://teach.johnjaylawal.site"
    }
  ]

  return (
    <section id="expertise" className="py-20 lg:py-32 bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              My Core <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Pillars</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I operate on three core pillars: Technology, Leadership, and Education.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-8"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <a
                key={service.title}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 block ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        Explore
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
