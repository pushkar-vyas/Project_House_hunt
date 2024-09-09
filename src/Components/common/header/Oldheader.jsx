import React from 'react'

const Oldheader = () => {
  return (
    <div>
        <>
    <header>
        <div className='container flex'>
              <div className='logo'>
                  <img src='./images/logo.png' alt='logo' />
              </div>
              <div className='nav'>
                  <ul className={navList ? "small" : "flex"}>
                    {nav.map((list, index) => (
                      <li key={index}>
                        <Link to={list.path}>{list.text}</Link>
                      </li>
                    ))}
                  </ul>
              </div>
              

              <div className="lastsec">
                    <ul className={navList ? "small" : "flex"}>
                            {/* <div className="lg: flex justify-center text-black mr-[5px] mt-[10px] md:inline-block text-white mr-[85px] mt-[20px] sm:inline-block text-white "> */}
                        <div className="mylist" >
                              <Link to ='/cart'>
                                    <div>
                                      <li><h4 > My List</h4></li>
                                    </div>
                                    <div className=" h-[5px] w-[5px] absolute mt-[-25px] ml-[60px] animate-bounce rounded-[70%]">
                                      {cart.length>0 &&
                                          <span>{cart.length}</span>
                                      }
                                    </div>
                              </Link> 
                        </div>    
                  
                        <div className="signup">
                          {/* <NavLink to ='/sign_up'> */}
                                <button  >
                                
                                  {/* <i className='fa fa-sign-out'></i>  */}
                                  
                                        
                                          {
                                            !isLogin&&
                                            <Link to ='/sign_up'>
                                              <button className="sign-button">Signup</button></Link>
                                            }
                                          { 
                                            isLogin &&
                                            <Link to ='/'>
                                              <button onClick={()=>{
                                                setisLogin(false)
                                                alert("logged Out")
                                                
                                              }}>Logout</button></Link>
                                            }
                                          
                                  

                                </button>
                          {/* </NavLink> */}
                          </div>
                    </ul>
              </div>
          

              <div className='toggle'>
                    <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
              </div>
        </div>
    </header>
</>
</div>
  )
}

export default Oldheader