import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../Allcss/Login.css'
import Profile from '../img/profile1.png'
import axios from 'axios'
import { login } from '../reduxwork/UserSlice'
import { useDispatch } from 'react-redux'
import Email from '../img/icons8-email-64.png'
import Lock from '../img/icons8-lock-50.png'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const dispatcher = useDispatch([])
  const navigator = useNavigate()

  const [userEmail, setuserEmail] = useState("")
  const [userPassword, setuserPassword] = useState("")

  const loginData = async () => {
    const logData = {
      UserEmail: userEmail,
      UserPassword: userPassword
    }
    try {
      const result = await axios.post("http://localhost:5000/leavemanagementapi/dologin", logData)
      console.log("data", result.data.data);
      if (result.data.data) {
        dispatcher(login(result.data.data))
        //let user = result.data.data

      }
      alert("Login Successful")
      navigator("/empprofile")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login-Container' style={{ marginTop: '80px' }}>
      <div className='login-Form'>
        <img src={Profile} className='profile' />
        <h1>Login</h1>
        <p> Hello, Welcome Back..! </p>
        <Form>
          <div>
            <input
              onChange={(e) => setuserEmail(e.target.value)}
              className='form-input'
              type='text'
              placeholder='Enter Your Email'
            />
            <img src={Email} className='input-icon' />
          </div>

          <div>
            <input
              onChange={(e) => setuserPassword(e.target.value)}
              className='form-input'
              type='password'
              placeholder='Enter Your Password'
            />
            <img src={Lock} className='input-icon' />
          </div>

          {/* <Form.Control onChange={(e) => setuserEmail(e.target.value)} className='form-input' type='text' placeholder='Enter Your Email' ></Form.Control><img src={Email}/>
          <Form.Control onChange={(e) => setuserPassword(e.target.value)} className='form-input' type='password' placeholder='Enter Your Password' ></Form.Control><img src={Lock}/> */}
        </Form>
        <button className='login-btn' onClick={() => loginData()}><span>Login</span></button>

      </div>

    </div>
  )
}

export default Login