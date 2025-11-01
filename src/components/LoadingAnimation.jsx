import React, { useState, useEffect } from 'react'
import Logo from './logo'

const LoadingAnimation = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState('spin') // 'spin', 'explode', 'fade'
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Spin for 2 seconds
    const spinTimer = setTimeout(() => setAnimationStage('pulse'), 1000);

    // Pulse and generate particles
    const pulseTimer = setTimeout(() => {
      setAnimationStage('explode')
      // Generate more particles exploding outwards
      const newParticles = Array.from({ length: 50 }).map(() => ({
        id: Math.random(),
        x: 50, y: 50,
        angle: Math.random() * 360,
        distance: Math.random() * 150 + 50,
        delay: Math.random() * 0.8,
      }));
      setParticles(newParticles);
    }, 3000); // Start pulse/explode after 3 seconds

    // After explosion/particles, fade out
    const fadeTimer = setTimeout(() => setAnimationStage('fade'), 4500); // Start fade after 4.5 seconds

    // After fade, call onComplete
    const completeTimer = setTimeout(onComplete, 5500); // Call onComplete after 5.5 seconds

    return () => { clearTimeout(spinTimer); clearTimeout(pulseTimer); clearTimeout(fadeTimer); clearTimeout(completeTimer); };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className={`transition-opacity duration-500 ${animationStage === 'fade' ? 'opacity-0' : 'opacity-100'}`}>
        <div className={`transition-transform duration-1000 ease-out ${
          animationStage === 'spin' ? 'animate-spin' :
          animationStage === 'pulse' ? 'animate-pulse scale-105' :
          animationStage === 'explode' ? 'scale-120' : // Hold scale during particle explosion
          'scale-100' // Default
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
            {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${particle.angle}deg) translateX(${particle.distance}px)`,
                transition: `transform 1.5s ease-out ${particle.delay}s, opacity 1s ease-out ${particle.delay}s`,
                opacity: 0,
              }}
            />
          ))}
        </div>
      )}
      </div>
    </div>
  )
}

export default LoadingAnimation