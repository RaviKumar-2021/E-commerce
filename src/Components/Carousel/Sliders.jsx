import { Carousel } from "@material-tailwind/react";
import {MainCrouselData} from "../../assets/MainCrouselData"

import React from 'react'


const Sliders = () => {
  console.log(MainCrouselData)
  return (
    <Carousel className = "z-0" >
      {
        MainCrouselData.map((element,index)=>{
          return(
            <img src ={element.image}
            alt = "image 1"
            className = "w-full object-cover" />
          )
        })
      }
    </Carousel>
  )
}

export default Sliders