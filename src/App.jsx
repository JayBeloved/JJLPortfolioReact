import React, { useState } from 'react'
import './App.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import LoadingAnimation from './components/LoadingAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import BlogPreview from './components/BlogPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="App bg-gray-900 min-h-screen">
      {isLoading ? (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Analytics />
          <SpeedInsights />
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <BlogPreview />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App