import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img  className='home_img'
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/KGFChapter2file/Alllanguages/3000x1200_Hero-Tall_NP._CB635770012_.jpg" alt=""/>
            <div className='home_row'>
                <Product 
                id="12321341"
                title='The lean startup' 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
                
                rating={5}
                />
                
                
                <Product
                    id="123456312"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with
                    K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
                    price={8882}
                    image="https://m.media-amazon.com/images/I/61W+aU3k-nL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4}
                />
            </div>
            <div className='home_row'>
                <Product
                    id="6534215"
                    title="Sony Bravia 139 cm (55 inches) 
                    4K Ultra HD Smart LED Google TV KD-55X74K 
                    (Black) (2022 Model) | with Alexa Compatibility"
                    price={68990}
                    image="https://m.media-amazon.com/images/I/71ZKGDdz1lL._SX425_.jpg"
                    rating={5}
                />
                <Product
                    id="9871835"
                    title="PHILIPS BT1232/15 Skin-friendly Beard Trimmer - 
                    DuraPower Technology, Cordless Rechargeable with USB Charging, 
                    Charging indicator, Travel lock, No Oil Needed, Blue"
                    price={827}
                    image="https://m.media-amazon.com/images/I/61n4jyp69IL._SY355_.jpg"
                    rating={2}
                />
                <Product
                    id="97173251"
                    title="TIMEWEAR Digital Men's Watch"
                    price={699}
                    image="https://m.media-amazon.com/images/I/81eNprKPlZL._UX569_.jpg"
                    rating={4}
                />
               
            </div>
            <div className='home_row'>
            <Product
                    id="97173252"
                    title="Scott International Men's Cotton Regular Fit Solid Polo Neck T-Shirt"
                    price={329}
                    image="https://m.media-amazon.com/images/I/61-kuqC68JL._UX466_.jpg"
                    rating={4}
                />
            </div>
        </div>
    </div>
  )
}

export default Home