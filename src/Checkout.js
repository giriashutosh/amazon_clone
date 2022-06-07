
import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'

import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
  const [{basket}] = useStateValue()
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className="checkout_ad" src="https://t4.ftcdn.net/jpg/04/38/51/89/240_F_438518969_TUJp0D7ha8v1tPmU69B6zRr1wo8tyjTI.jpg"/>
            <div >
                <h2 className='checkout_title'>
                    Your shopping basket
                </h2>
                {
                  basket.map(item => (
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  ))
                }
                {/* CheckoutProduct */}
            </div>
        </div>
        <div className='checkout_right'>
          <Subtotal/>
            
        </div>
    </div>
  )
}

export default Checkout