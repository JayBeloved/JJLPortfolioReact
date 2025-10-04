import React, { useState, useEffect } from 'react'
import Logo from './logo'

const LoadingAnimation = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState('spin') // 'spin', 'explode', 'fade'

  useEffect(() => {
    // After 2 seconds, start explosion
    const spinTimer = setTimeout(() => {
      setAnimationStage('explode')
    }, 3000)

    // After explosion, fade out and call onComplete
    const explodeTimer = setTimeout(() => {
      setAnimationStage('fade')
      setTimeout(onComplete, 500) // Give time for fade animation
    }, 3000)

    return () => {
      clearTimeout(spinTimer)
      clearTimeout(explodeTimer)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className={`transition-all duration-500 ${
        animationStage === 'spin' ? 'animate-spin' :
        animationStage === 'explode' ? 'animate-pulse scale-110' :
        'opacity-0 scale-150'
      }`}>
        <Logo 
          type="load" 
          className="w-32 h-32 md:w-48 md:h-48" 
          alt="John J. Lawal Loading"
        />
      </div>
      
      {/* Particle effect overlay for explosion */}
      {animationStage === 'explode' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
              style={{
                left: `${50 + (Math.random() - 0.5) * 60}%`,
                top: `${50 + (Math.random() - 0.5) * 60}%`,
                animationDelay: `${Math.random() * 0.5}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default LoadingAnimation