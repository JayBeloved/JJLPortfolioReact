import React, { useState, useEffect } from 'react'
import crane from '../assets/img/portfolio/crane.png'
import sps from '../assets/img/portfolio/smartpayslip.png'
import andl from '../assets/img/portfolio/andl.png'
import delegates from '../assets/img/portfolio/delegates.png'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "Crane JLA Consults",
      category: "Business Consulting",
      description: "CEO & Lead Consultant. Driving growth through data-driven research and strategic consulting.",
      longDescription: "As CEO and Lead Consultant of Crane JLA Consults, I drive organizational growth through comprehensive data-driven research and strategic consulting. Currently developing a proprietary web application that will revolutionize academic data generation, making research more accessible and efficient for educational institutions.",
      image: crane,
      technologies: ["Python", "Django", "Data Analytics", "Business Intelligence", "SPSS", "EViews", "SmartPLS"],
      features: [
        "Strategic Business Consulting",
        "Data-Driven Research Solutions",
        "Proprietary Academic Web App",
        "Growth Strategy Implementation"
      ],
      status: "Active",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "SmartPay Slip",
      category: "Finance & Payroll",
      description: "Automated payroll management system with integrated tax calculations and financial reporting capabilities.",
      longDescription: "Automated payroll management system with integrated tax calculations and financial reporting capabilities. Built for a seamless payroll experience, ensuring accuracy and compliance for businesses of all sizes.",
      image: sps,
      technologies: ["Boostrap", "Django", "PostgreSQL", "DigitalOcean"],
      features: [
        "Employee Payroll Management",
        "Automated Tax Calculations",
        "Financial Reporting Tools",
        "User-Friendly Interface"
      ],
      status: "Ongoing",
      link: "https://smartpayslip.online",
      github: "#"
    },
    {
      id: 3,
      title: "RUIMUN Delegates Management System (DMS)",
      category: "Saas Platform",
      description: "Event management solution for handling delegate registrations, assignments, and conference attendance.",
      longDescription: "Event management solution for handling delegate registrations, assignments, and conference attendance. ",
      image: delegates,
      technologies: ["Bootstrap", "Django", "PostgreSQL", "DigitalOcean"],
      features: [
        "Delegate Registration & Management",
        "Delegates Database Management",
        "Committee Assignments",
        "Payment Verification System"
      ],
      status: "Beta",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Apostle Niyi Digital Library",
      category: "Community Service",
      description: "Commitment to service through ICT leadership and digital library support.",
      longDescription: "Demonstrating my commitment to service and community impact through various leadership roles including development and providing technical support for the Apostle Niyi Digital Library, fostering educational advancement and technological literacy.",
      image: andl,
      technologies: ["Digital Strategy", "IT Infrastructure", "Project Management"],
      features: [
        "CMS Development & Maintenance",
        "IT Infrastructure Support",
        "Web Development",
        "Content Management"
      ],
      status: "Beta",
      link: "https://niyimakinde.com",
      github: "#"
    }
  ]

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">{project.category}</span>
              <span className={`px-3 py-1 rounded-full text-sm ${
                project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                project.status === 'Beta' ? 'bg-purple-500/20 text-purple-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {project.status}
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{project.longDescription}</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View Project
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
                View Code
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Value in <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My Projects: Transforming ideas into impactful solutions that drive real-world results
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-8"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Active' ? 'bg-green-500/90 text-white' :
                      project.status === 'In Development' ? 'bg-yellow-500/90 text-white' :
                      project.status === 'Beta' ? 'bg-purple-500/90 text-white' :
                      'bg-blue-500/90 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-sm font-medium">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects