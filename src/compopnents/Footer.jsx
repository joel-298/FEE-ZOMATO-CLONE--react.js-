import React from 'react'
import './Footer.css' 
import play_store from "/src/assets/play_store.png" ;
import app_store from "/src/assets/app_store.png" ;
import facebook_icon from "/src/assets/facebook_icon.png" ;
import twitter_icon from "/src/assets/twitter_icon.png" ;
import linkedin_icon from "/src/assets/linkedin_icon.png" ;

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='H'>
        <h1>FOR BETTER EXPERIENCE DOWNLOAD ZOMATO APP</h1>
        <div className="images">
            <img src={app_store} alt=""/>
            <img src={play_store} alt=""/>
        </div>
      </div>

        <div className="footer-content">
            <div className="footer-content-left">
                <h2>FOODIES</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro fugiat. Doloribus quis, repellendus blanditiis fugiat voluptates dolorum optio accusantium.0</p>
                <div className="footer-social-icons">
                    <img src={facebook_icon} alt="" />
                    <img src={twitter_icon} alt="" />
                    <img src={linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@Foodies.com</li>
                </ul>
            </div>

        </div>
        
    <hr className='hr-last'/>
    <p className='footer-copyrigth'>Copyright 2024 o Foodies.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
