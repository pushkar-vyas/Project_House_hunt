import React from 'react'
import {useDispatch} from 'react-redux'
import { remove } from '../../redux/Slices/CounterSlice'
import {FcDeleteDatabase} from 'react-icons/fc'

const Carditem = ({item,index}) => {
    const dispatch = useDispatch()

    function removeFromCart(){
        dispatch(remove(item.id))
        alert("item removed from cart")
      }

  return (
    <div className='box'>
        <div className='img'>
            <img src={item.cover} alt=''/>
        </div>
        <div className='carttext'>
                <div className='category flex'>
                          <span style={{ background: item.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: item.category === "For Sale" ? "#25b579" : "#ff9800" }}>{item.category}</span>
                </div>
                <div className=' flex justify-center items-center h-[26px] w-[30px] bg-red-300 rounded-full mt-4 '>
                        <button className='h-full mb-[22px] mr-[5px] text-red-600 'onClick={removeFromCart} >
                        <FcDeleteDatabase/>
                        </button>
                        
                </div>
        </div> 
        <div className='cartnl'>       
                <h4>{item.name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> 
                  {item.location}
                </p>
        </div>
        <hr/>
              <div className='button flex'>
                <div >
                  <button className='pbtn'>{item.price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{item.type}</span>
        </div>
                
                
        
    </div>
  )
}

export default Carditem