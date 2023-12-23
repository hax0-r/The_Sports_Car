import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import img1 from '../../assets/partner1.png'
import img2 from '../../assets/partner2.png'
import img3 from '../../assets/partner3.png'
import { Link } from 'react-router-dom'

export default function Partners() {
  return (
    <>
      <div className="partners">
        <div className="page1">
          <Navbar />
          <div className="head">
            <h1>partners</h1>
          </div>
        </div>
        <div className="page2">
          {/* <Link to="https://www.hyland.com/company/about/sponsorships/formula-one" >  <img src={img1} alt="" /></Link>
          <Link to="https://stilo.it/">  <img src={img2} alt="" /></Link>
          <Link to="https://insijets.com/" >  <img src={img3} alt="" /></Link> */}

          <div className="first">
            <h1>HYLAND</h1>
            <Link to="https://www.hyland.com/company/about/sponsorships/formula-one" >  <img src={img1} alt="" /></Link>
          </div>
          <div className="second">
            <h1>STILO</h1>
          <Link to="https://stilo.it/">  <img src={img2} alt="" /></Link>
          </div>
          <div className="third">
            <h1>INSIJETS <br /> PRIVATE JET <br /> CONSULTANTS</h1>
          <Link to="https://insijets.com/" >  <img src={img3} alt="" /></Link> 
          </div>
        </div>
      </div>

    </>
  )
}
