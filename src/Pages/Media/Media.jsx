import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import MEDIA_DATA from './MEDIA_DATA'

export default function Media() {

  const [ mediaData , setMediaData] = useState(MEDIA_DATA)

  const filterItem =(para)=>{
    const updateItem = MEDIA_DATA.filter((currentElement)=>{
      return currentElement.catagories === para
    })

    setMediaData(updateItem)

  }

  return (
    <>
      <div className="media">
        <div className="page1">
          <Navbar />
          <div className="head">
            <h1>GALLERY</h1>
          </div>
        </div>
        <div className="page2">
          <h1>PHOTO GALLERY</h1>
          <div className="btns">
            <button onClick={()=> setMediaData(MEDIA_DATA)}>ALL</button>
            <button onClick={()=> filterItem("2021")}>2021 POST-SEASON TEST</button>
            <button onClick={()=> filterItem("others")}>OTHERS</button>
            <button onClick={()=> filterItem("2023")}>2023</button>
          </div>
          <div className="media-card">
            {
              mediaData.map((val) => {
                const { img } = val;
                return (
                  <div className="main">
                    <img src={img} alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
