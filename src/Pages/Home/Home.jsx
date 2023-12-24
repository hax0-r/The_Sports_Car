import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { IoClose } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import page2Img from '../../assets/page2.jpg'
import page3_1 from '../../assets/partner1.png'
import page3_2 from '../../assets/partner2.png'
import page3_3 from '../../assets/partner3.png'
// ----Gallery Img-----
import media_2021_1 from '../../assets/media2021-1.jpg'
import media_2021_2 from '../../assets/media2021-2.jpg'
import media_2021_3 from '../../assets/media2021-3.jpg'
import media_2021_4 from '../../assets/media2021-4.jpg'
import media_2021_5 from '../../assets/media2021-5.jpg'
import media_2021_6 from '../../assets/media2021-6.jpg'
import media_2021_7 from '../../assets/media2021-7.jpg'
import media_2021_8 from '../../assets/media2021-8.jpg'
import media_2021_9 from '../../assets/media2021-9.jpg'
import media_2021_10 from '../../assets/media2021-10.jpg'
import media_2023_1 from '../../assets/media-2023-1.jpg'
import media_2023_2 from '../../assets/media-2023-2.jpg'
import media_2023_3 from '../../assets/media-2023-3.jpg'
import media_2023_4 from '../../assets/media-2023-4.jpg'
import media_2023_5 from '../../assets/media-2023-5.jpg'
import media_2023_6 from '../../assets/media-2023-6.jpg'
import media_2023_7 from '../../assets/media-2023-7.jpg'
import media_2023_8 from '../../assets/media-2023-8.jpg'
import media_others_1 from '../../assets/media-others-1.jpg'
import media_others_2 from '../../assets/media-others-2.jpg'

// ----Gallery Img-----

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const images = [
  media_2021_1,
  media_2021_2,
  media_2021_3,
  media_2021_4,
  media_2021_5,
  media_2021_6,
  media_2021_7,
  media_2021_8,
  media_2021_9,
  media_2021_10,
  media_2023_1,
  media_2023_2,
  media_2023_3,
  media_2023_4,
  media_2023_5,
  media_2023_6,
  media_2023_7,
  media_2023_8,
  media_others_1,
  media_others_2
]

export default function Home() {

  const [data, setData] = useState({ image: '', i: 0 })

  const viewImage = (image, i) => {
    setData({ image, i })
  }

  const imageAction = (action) => {
    let i = data.i
    if (action === 'next_img') {
      setData({ image: images[i + 1], i: i + 1 })
    }
    if (action === 'pre_img') {
      setData({ image: images[i - 1], i: i - 1 })
    }
    if (!action) {
      setData({ image: '', i: 0 })
    }
  }

  return (
    <>
      {
        data.image &&
        <div style={
          {
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: 'hidden'
          }
        }>
          <IoClose onClick={() => imageAction()} style={{ position: "absolute",color:"white",fontSize:"2.5rem", top: "1.5rem", right: "2.5rem",cursor:"pointer" }} />
          <IoIosArrowBack onClick={() => imageAction('pre_img')} style={{ color:"white",fontSize:"2.8rem",cursor:"pointer" }} />
          <img src={data.image} style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }} alt="" />
          <GrFormNext  onClick={() => imageAction('next_img')} style={{ color:"white",fontSize:"3rem",cursor:"pointer" }} />
        </div>
      }
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
        <div className="page3">
          <div className="head">
            <h1>PARTNERS</h1>
            <p>”From the age of 6 I have represented my sponsors who have trusted my ability to
              successfully promote their brand. Marketing is an integral part of this occupation.”</p>
          </div>
          <div className="content">
            <img src={page3_1} alt="" />
            <img src={page3_2} alt="" />
            <img src={page3_3} alt="" />
          </div>
        </div>
        <div className="page4">
          <div className="head">
            <h3>GALLERY</h3>
            <h1>PHOTOS</h1>
          </div>
          <div className="content">
            <div className="main">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter='12px'>
                  {images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      style={{ width: "100%", display: "block" }}
                      alt=""
                      onClick={() => viewImage(image, i)}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
