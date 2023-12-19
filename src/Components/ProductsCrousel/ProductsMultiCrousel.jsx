import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {kurtaPage1} from '../../assets/Girl/Kurta' 

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

function ProductsMultiCrousel(props) {
  return (
    <div>
    <div className="text-2xl mt-6 w-44 bg-red-900 p-2.5 font-bold" style={{fontFamily:"auto"}}>{props.title}</div>
<Carousel responsive={responsive}>

    {props.kurta.map((product) => (
        <div style={{margin:"10px"}}>
            <a key={product.id} href={product.image} className="group">
              <div className="aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" style={{overflow:"hidden", height:"250px"}}>
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className=" object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="mt-4 text-m">{product.brand}</h2>
              <h3 className=" text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          </div>
          ))
          }
</Carousel>

    </div>
  )
}

export default ProductsMultiCrousel