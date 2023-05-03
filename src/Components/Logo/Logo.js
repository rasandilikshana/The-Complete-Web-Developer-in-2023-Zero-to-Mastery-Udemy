import React from 'react'
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
  return (
    <div className='pl3'>
    <Tilt className="Tilt br2 shadow-2" options={{ max : 55}} style={{ height: 150, width: 150 }} >
    <div className="Tilt-inner pa3"><img className='w-80' style={{paddingTop:'10px'}} src={brain} alt='logo'/></div>
    </Tilt>
    </div>
  )
}

export default Logo;