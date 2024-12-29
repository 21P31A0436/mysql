import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut hic perferendis veritatis facere earum alias ullam animi, tempora ipsam adipisci sequi, doloremque cupiditate, consequatur molestiae incidunt laborum maxime. Fugiat.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>About us</li>
                    <li>Privacy policy</li>
                    <li>Home</li>
                    <li>Delivered</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>Get-in-Touch</h2>
                <ul>
                    <li>+1-12-34-678</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'> Copyright 2024 @ Tomato .com - All Rights Reserverd</p>
    </div>
  )
}

export default Footer