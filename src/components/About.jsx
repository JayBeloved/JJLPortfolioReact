import React, { useState, useEffect } from 'react'
import profile from "../assets/img/profile3.jpg" 

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Mission</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="prose prose-lg text-gray-300 max-w-none">
                <p className="text-xl leading-relaxed mb-6">
                  My mission is to <span className="text-blue-400 font-semibold">break the limitations of ignorance</span>  I build bridges between potential and performance using strategic technology and data-driven solutions.
                </p>
                
                <p className="text-xl leading-relaxed mb-6">
                  From my base in Abuja, Nigeria, I operate on three core pillars: delivering impactful <span className="text-blue-400">Words</span> through thought leadership, producing measurable <span className="text-blue-400">Results</span> through innovative solutions, and providing dedicated <span className="text-blue-400">Service</span> to communities and organizations.
                </p>

                <p className="text-xl leading-relaxed mb-8">
                  I partner with businesses and individuals to transform their operations, empowering them to enhance productivity and drive profitability through custom software development, comprehensive data analysis, and strategic IT consulting.
                </p>

                {/* Mission Stats */}
                <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">50+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    {/* Use Happy Emoji */}
                    <div className="text-2xl">😊</div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20">
                  <img 
                    src={profile}
                    alt="John J. Lawal" 
                    className="w-auto h-81 rounded-xl"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About