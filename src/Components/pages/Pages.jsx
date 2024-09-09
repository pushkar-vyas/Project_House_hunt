import React from "react"
import Header from "../common/header/Header"
import {Routes,Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Card from "../card/Card"
import Login from "../common/Login"
import SignUp from "../common/SignUp"
import { useState } from "react"
// import Button from "../common/header/Button"

const Pages = () => {
  const[isLogin,setisLogin]=useState(false)
  return (
    <>
    <div>
    <Header setisLogin={setisLogin} isLogin ={isLogin}/>
    {/* <Button/> */}
      <Routes>
      
      <Route path='/cart' element={<Card/>}/>
      <Route path='/sign_up' element={<SignUp setisLogin ={setisLogin}/>}/>
      <Route path='/login' element={<Login setisLogin ={setisLogin}/>}/>
      

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        
        
      </Routes>
      <Footer />
    </div>
         
    </>
  )
}

export default Pages
