import React from 'react'
import logo from '../../assets/logo.png'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className='Login'>
          <img src={logo} alt="" className='logologin'/>
          <div className="loginform">
          <h1>Sign Up</h1>
          <form >
               <input type="text" name="" id="" placeholder='your name' required/>
               <input type="email" name="" id="" placeholder='email' required/>
               <input type="password" name="" id="" placeholder='password' required/>
               <button type="submit">Sign Up</button>
          </form>
          <div className="formswitch">Already have account?<h3 onClick={()=> navigate("/Login")}>Log in</h3></div>
          </div>
          
        </div>
  )
}

export default Signup
