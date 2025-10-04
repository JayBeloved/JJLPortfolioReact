import React from 'react'
import mainLogo from '../assets/img/MainLogoTSP.png'
import tspLogo from '../assets/img/3dLogoIconTsp.png'

const Logo = ({ type = 'main', className = '', alt = 'John J. Lawal' }) => {
  const logoSrc = type === 'load' ? tspLogo : mainLogo
  /* I replaced the iconLogo with a new variable the transparent logo (tspLogo)*/

  
  return (
    <img 
      src={logoSrc} 
      alt={alt}
      className={className}
    />
  )
}

export default Logo