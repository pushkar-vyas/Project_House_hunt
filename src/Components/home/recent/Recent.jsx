import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"
import { list } from "../../data/Data"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          
          <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          </div>
          <div className='content grid3 mt-[5px] ml-[130px] mr-[130px] md:grid grid-2 ml-[10px]'>
          {list.map((val) => {
            return(
              
          <RecentCard key={val.id} val={val}/>)
            }
          )}
            </div>
      </section>
    </>
  )
}

export default Recent
