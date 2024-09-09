import React from 'react'
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'
// import { useEffect } from 'react';
import Carditem from "./Carditem"
import './Card.css'

const Card = () => {
  const {cart} = useSelector((state)=> state); 
  


  return (
    <div>
        {cart.length > 0 ?(
            <div>
                    <div className='cardFatch'>
                      
                    {
                      
                    cart.map((item,index)=>{
                        return(

                        <Carditem item={item} key={cart.id} index={index} />
                        )
                    }
                    )
                    }
                    </div>
            </div>
       
            )
      
      
            :(
            <div>
            <p className='text-center text-lg text-green-800 h-100%'>Cart is Empty</p>
            
            
            </div>
        )}


    </div>
  )
}

export default Card