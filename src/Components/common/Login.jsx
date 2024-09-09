import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './Login.css'

const Login = ({setisLogin}) => {
    let navi = useNavigate();
    const[logindata,setlogindata]=useState({
        emaile:"",lpassword:""
    })

    function loginfun(event){
        setlogindata((prev)=>{
            return(
                {
                    ...prev,
                    [event.target.name] : event.target.value 
                }
            )
        })
        console.log("data...")
        console.log(logindata)
    }

    function lsubmit(event){
        event.preventDefault();
        console.log("submit.......")
        setisLogin(true);
        navi("/")
    }
  return (
    <div className='login_main'>
      <div >
            
              <div>
                <h2>Login In</h2>
                <form onSubmit={lsubmit}>
                  <label htmlFor='emaile'>Email Address</label>
                  <br />
                  <input type='email' name='emaile' id='emaile' placeholder='enter email address' value={logindata.emaile} onChange={loginfun} required/>
                  <br />
                  <br />
                  <label htmlFor='lpassword'>Enter Password</label>
                  <br />
                  <input type='password' name='lpassword' id='lpassword' placeholder='enter password' value={logindata.lpassword} onChange={loginfun} required></input>
                  <br />
                  <button>Login In</button>
                </form>
              </div>
            
                
                
              
              
        </div>
          
          
      
    </div>


    
  )
}


export default Login