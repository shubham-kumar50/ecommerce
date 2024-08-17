import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2024 TechNest All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiFillTwitterCircle />
      </p>
    </div>
  )
}

export default Footer;