import React from 'react'
import  Sliders  from '../Carousel/Sliders'
import Navbar from '../Navigation/Navbar'
import ProductsMultiCrousel from '../ProductsCrousel/ProductsMultiCrousel';
import {kurtaPage1} from '../../assets/Girl/Kurta'
import {mens_kurta} from '../../assets/Men/Mens_Kurta.js'
import Mens_Jeans from '../../assets/Men/Mens_Jeans.json'
import Mens_Shirt from '../../assets/Men/Mens_Shirt.json'
import {mensShoesPage1} from '../../assets/Both/Shoes'
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
    <div style={{position:"relative", zIndex:"-1"}}>
      <Sliders/>
    </div>
    <div style={{}}>
      <ProductsMultiCrousel kurta={mens_kurta} title="Men's Kurta"/>
      <ProductsMultiCrousel kurta={kurtaPage1} title="Girl's Kurta"/>
      <ProductsMultiCrousel kurta={Mens_Shirt} title="Mens's Shirt"/>
      <ProductsMultiCrousel kurta={Mens_Jeans} title="Men's Jeans"/>
      <ProductsMultiCrousel kurta={mensShoesPage1} title="Shoes"/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Home