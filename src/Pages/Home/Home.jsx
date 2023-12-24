import React, { useRef } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import page2Img from '../../assets/page2.jpg'
import page3_1 from '../../assets/partner1.png'
import page3_2 from '../../assets/partner2.png'
import page3_3 from '../../assets/partner3.png'
import { IoClose } from "react-icons/io5";
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

export default function Home() {
  const add = useRef();

  const zoom1 = () => {
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom1")
  }
  const zoom2 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom2")
  }
  const zoom3 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom3")
  }
  const zoom4 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom4")
  }
  const zoom5 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom5")
  }
  const zoom6 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom6")
  }
  const zoom7 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom7")
  }
  const zoom8 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom8")
  }
  const zoom9 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom9")
  }
  const zoom10 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom10")
  }
  const zoom11 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom11")
  }
  const zoom12 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoo123")
  }
  const zoom13 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom13")
  }
  const zoom14 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom14")
  }
  const zoom15 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom15")
  }
  const zoom16 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom16")
  }
  const zoom17 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom17")
  }
  const zoom18 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom19")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom18")
  }
  const zoom19 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom20")
    add.current.classList.toggle("mainZoom19")
  }
  const zoom20 = () => {
        add.current.classList.remove("mainZoom1")
    add.current.classList.remove("mainZoom2")
    add.current.classList.remove("mainZoom3")
    add.current.classList.remove("mainZoom4")
    add.current.classList.remove("mainZoom5")
    add.current.classList.remove("mainZoom6")
    add.current.classList.remove("mainZoom7")
    add.current.classList.remove("mainZoom8")
    add.current.classList.remove("mainZoom9")
    add.current.classList.remove("mainZoom10")
    add.current.classList.remove("mainZoom11")
    add.current.classList.remove("mainZoom12")
    add.current.classList.remove("mainZoom13")
    add.current.classList.remove("mainZoom14")
    add.current.classList.remove("mainZoom15")
    add.current.classList.remove("mainZoom16")
    add.current.classList.remove("mainZoom17")
    add.current.classList.remove("mainZoom18")
    add.current.classList.remove("mainZoom19")
    add.current.classList.toggle("mainZoom20")
  }
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
            <div className="main" ref={add}>
              <img onClick={zoom1} src={media_2021_1} alt="gallery" />
              <img onClick={zoom2} src={media_2021_2} alt="gallery" />
              <img onClick={zoom3} src={media_2021_3} alt="gallery" />
              <img onClick={zoom4} src={media_2021_4} alt="gallery" />
              <img onClick={zoom5} src={media_2021_5} alt="gallery" />
              <img onClick={zoom6} src={media_2021_6} alt="gallery" />
              <img onClick={zoom7} src={media_2021_7} alt="gallery" />
              <img onClick={zoom8} src={media_2021_8} alt="gallery" />
              <img onClick={zoom9} src={media_2021_9} alt="gallery" />
              <img onClick={zoom10} src={media_2021_10} alt="gallery" />
              <img onClick={zoom11} src={media_2023_1} alt="gallery" />
              <img onClick={zoom12} src={media_2023_2} alt="gallery" />
              <img onClick={zoom13} src={media_2023_3} alt="gallery" />
              <img onClick={zoom14} src={media_2023_4} alt="gallery" />
              <img onClick={zoom15} src={media_2023_5} alt="gallery" />
              <img onClick={zoom16} src={media_2023_6} alt="gallery" />
              <img onClick={zoom17} src={media_2023_7} alt="gallery" />
              <img onClick={zoom18} src={media_2023_8} alt="gallery" />
              <img onClick={zoom19} src={media_others_1} alt="gallery" />
              <img onClick={zoom20} src={media_others_2} alt="gallery" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
