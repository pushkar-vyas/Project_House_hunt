import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SignUp.css'

const SignUp = ({setisLogin}) => {
    let navti = useNavigate()
    const[sform,setsform]=useState({
        fname:"",lname:"",email:"",password:"",cpassword:""
    })

    function signhandler(event){
        
        setsform((prev)=>{
            return({
            ...prev,
            [event.target.name]: event.target.value
            } )
        })
        console.log("data.....")
        console.log(sform);
    }

    function sunmithandle(event){
        event.preventDefault();
        if(sform.password===sform.cpassword){
        console.log("submit...")
        setisLogin(true)
        
        setsform(
           navti("/")
        )}
        else{
            console.log("wrong")
        }
     
        
    }
  return (
    <div className='signup_box'>
        <h2>Sign-Up</h2>
        <form onSubmit={sunmithandle}>
        

        <div>
        <label htmlFor='fname'>First Name</label>
        <br />
        <input type='text' name='fname' id='fname' placeholder='enter your name' value={sform.fname} required onChange={signhandler}></input>
        <br/>

        <label htmlFor='lname'>Last Name</label>
        <br />
        <input type='text' name='lname' id='lname' placeholder='enter your l name' value={sform.lname} required onChange={signhandler}></input>
        
        </div>

        <div>
        <label htmlFor='email'>Email Address</label>
        <br />
        <input type='email' name='email' id='email' placeholder='enter email address' value={sform.email} required onChange={signhandler}/>
        
        </div>
        <div>
        
        <label htmlFor='password'>Create Password</label>
        <br />
        <input type='password' name='password' id='password' placeholder='enter password' value={sform.password} required onChange={signhandler}></input>
        <br />

        <label htmlFor='cpassword'>Confirm Password</label>
        <br />
        <input type='password' name='cpassword' id='cpassword' placeholder='comfirm password' value={sform.cpassword} required onChange={signhandler}></input>
        <br />
        </div>
        <div className='extra'><p>if you have already account</p> 
        <NavLink to ='/login'>
            <span>login</span>
        </NavLink>
        </div>
        
        <button>Sign In</button>
        </form>
        
   </div>

  )
}

export default SignUp