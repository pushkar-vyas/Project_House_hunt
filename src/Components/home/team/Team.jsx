import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"
import { useState } from "react"

const Team = () => {
  
  // const[index,setIndex]=useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const endIndex = startIndex + itemsPerPage;
  

  function rightHandler (){
    if(endIndex < team.length){
      setStartIndex((prev) => prev + 1);
    }
    
    
  }
  function leftHandler (){
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1); 
    }
    }
  
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content mt-[50px] ml-[100px] mr-[100px] grid3 sm: flex flex-col ml-[80px] '>
            {team.slice(startIndex, endIndex).map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button-flex'>
                    <button className="mess">
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='fbutton'>
          <button className='fbutton1' onClick={leftHandler} disabled={startIndex === 0} ><FiChevronLeft/></button>
          <button className='fbutton1' onClick={rightHandler} disabled={endIndex >= team.length}><FiChevronRight/></button>
        </div>
        </div>
       
      </section>
    </>
  )
                    }


export default Team
