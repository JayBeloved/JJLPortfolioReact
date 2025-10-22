
import React, { useState, useEffect } from 'react'
import sps from '../assets/img/portfolio/smartpayslip.png'
import andl from '../assets/img/portfolio/andl.png'
import delegates from '../assets/img/portfolio/delegates.png'
import techImage from '../assets/img/portfolio/techImage.png'

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
        title: "RUIMUN Conference Management System",
        category: "Full Stack Web Application",
        description: "An all-in-one platform to manage International Model United Nations conferences, streamlining everything from delegate registration to reporting.",
        longDescription: "The RUIMUN Conference Management System is a comprehensive, full-stack web application designed to digitize and simplify the complexities of organizing Model UN events. It provides a centralized hub for officials to manage delegate applications, assign countries and committees, and communicate updates. Delegates can register, view their assignments, and access conference materials seamlessly. The platform includes a powerful dashboard with reporting features to give organizers a real-time overview of the event's status.",
        image: delegates,
        technologies: ["React", "Django", "PostgreSQL", "DigitalOcean"],
        features: ["Delegate & Official Management", "Committee & Country Assignment", "Real-time Analytics Dashboard", "Automated Communication System"],
        status: "In Progress",
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Apostle Niyi Digital Library",
        category: "Full Stack Web Application",
        description: "A feature-rich CMS and digital library with dynamic content generation and resource management.",
        longDescription: "This application serves as a digital repository for motivational and spiritual content, featuring a custom-built Content Management System (CMS) for easy administration. Key features include a blog, a system for generating shareable quote images, and a library of downloadable resources. The platform is equipped with advanced search and filtering capabilities, allowing users to easily discover and access content.",
        image: andl,
        technologies: ["HTML", "CSS", "JavaScript", "Django", "Tailwind", "PostgreSQL", "DigitalOcean"],
        features: ["Custom CMS & Analytics", "Dynamic Quote Image Generation", "Searchable Resource Library", "Blog & Content Platform"],
        status: "Completed",
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "SmartPaySlip",
        category: "FinTech Web Application",
        description: "An intuitive and transparent system for calculating, distributing, and managing employee payslips.",
        longDescription: "SmartPaySlip is a web application designed to bring clarity and efficiency to the payroll process. It automates the calculation of salaries, taxes, and deductions, generating clear and easy-to-understand payslips. The system provides a secure portal for both employers to manage payroll and for employees to access their payment history, fostering transparency and reducing administrative overhead.",
        image: sps,
        technologies: ["HTML", "CSS", "JavaScript", "Django", "Bootstrap", "PostgreSQL", "DigitalOcean"],
        features: ["Automated Payslip Calculation", "Secure Employee Portal", "Payroll History & Reporting", "Transparent Deductions & Taxes"],
        status: "Completed",
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "NaijaGrad Talent Pool",
        category: "Web Platform",
        description: "A professional networking platform connecting fresh Nigerian graduates with recruiters and organizations.",
        longDescription: "NaijaGrad is a talent discovery platform designed to bridge the gap between Nigerian graduates and the job market. It empowers graduates to create detailed professional profiles, build a web presence, and showcase their skills. For recruiters, NaijaGrad serves as a curated talent pool with advanced search and filtering capabilities. Future plans include AI-powered SEO for profiles and API integrations with major job portals.",
        image: techImage,
        technologies: ["React", "Django", "PostgreSQL", "DigitalOcean", "AI/ML"],
        features: ["Graduate Profile Builder", "Recruiter Search & Filter", "AI-Powered SEO Optimization", "Job Board API Integration"],
        status: "In Progress",
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "Sympleefied",
        category: "AI & SaaS",
        description: "An AI-powered content adaptation tool that allows readers to choose how they consume articles and blog posts.",
        longDescription: "Sympleefied is an innovative SaaS platform that uses AI to transform a single piece of content into multiple formats (e.g., long-form, summary, bullet points). This allows website visitors to select their preferred reading style, dramatically increasing engagement and accessibility. The underlying AI is trained on general writing and creativity principles, ensuring high-quality output for any article or blog.",
        image: techImage,
        technologies: ["React", "Python (AI/ML)", "Django", "SaaS Architecture"],
        features: ["AI-Driven Content Summarization", "Multiple Reading Mode Generation", "Seamless Website Integration", "User-Centric Reading Experience"],
        status: "In Progress",
        link: "#",
        github: "#"
    },
    {
        id: 6,
        title: "10xb: The Integrated Value Platform",
        category: "Personal Brand Ecosystem",
        description: "A digital ecosystem designed to deliver immense value through technology, education, and leadership content.",
        longDescription: "10xb is the digital embodiment of the John J. Lawal personal brand. It's an integrated platform that serves curated content, structured learning paths, and practical resources to four key audiences: personal development seekers, SMEs, students, and institutions. The platform features a rich library of toolkits, templates, micro-apps, and courses designed to solve specific problems and foster growth.",
        image: techImage,
        technologies: ["React", "Django", "Next.js", "Headless CMS", "LMS Integration"],
        features: ["Curated Learning Paths", "SME Resource Library & Toolkits", "Micro-app & Template Marketplace", "Expertise Showcase for Institutions"],
        status: "In Progress",
        link: "#",
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
                project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                project.status === 'Completed' ? 'bg-purple-500/20 text-purple-400' :
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
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View Project
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="border border-gray-600 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
                View Code
              </a>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      project.status === 'In Progress' ? 'bg-yellow-500/90 text-white' :
                      project.status === 'Completed' ? 'bg-purple-500/90 text-white' :
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
                  
                  <p className="text-gray-400 mb-4 leading-relaxed h-24 overflow-hidden">
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