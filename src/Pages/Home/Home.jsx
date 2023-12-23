import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import page2Img from '../../assets/page2.jpg'

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="page1">
          <Navbar />
          <div className="content">
            <h1>
              VALTTERI <br /> <span>BOTTAS</span>
            </h1>
          </div>
        </div>
        <div className="page2">
          <div className="main">
            <img src={page2Img} alt="" />
            <div className="content">
              <h1>ABOUT</h1>
              <h2>VALTTERI BOTTAS</h2>
              <p>Born again, hungrier than ever. Valtteri Bottas is ready to fight for thousands of a second, standings, and the championship as a member of the Alfa Romeo F1 Team ORLEN.
                <br />
                An uncompromised professional athlete on and off the circuit. All eyes on car No. 77. Welcome to Valtteri’s world.
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
