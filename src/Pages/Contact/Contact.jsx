import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="page1">
          <Navbar />
          <div className="head">
            <h1>CONTACT US</h1>
          </div>
        </div>
        <div className="page2">
          <div className="main">
            <div className="left">
              <h3>SOCIAL MEDIA</h3>
              <div className="icons">
                <FaInstagram />
                <FaTwitter />
                <FaFacebookF />
                <FaYoutube />
              </div>
            </div>
            <div className="mid">
              <h3>FOR FANS</h3>
              <p><span>info</span>@sauber-motorsport.com</p>
            </div>
            <div className="right">
              <h3>FOR COMMERCIAL OPPORTUNITIES</h3>
              <p><span>ville</span>@valtteribottas.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
