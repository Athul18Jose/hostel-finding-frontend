import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/allAPI'
import Header from '../Components/Header'


function Auth({ register }) {

  const [user, setUser] = useState({
    uname: "",
    phn: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const registerForm = register ? true : false

  const handleRegister = async (e) => {
    e.preventDefault()
    const { uname,phn, email, password } = user

    if (!uname || !phn || !email || !password) {
      alert("All fields are required")
    }
    else {
      const result = await registerAPI(user)
      console.log(result);
      if (result.status === 200) {
        alert(`${result.data.uname}'s Account Created Successfull..!`)
        setUser({
          ...user,
          uname: "",
          phn:"",
          email: "",
          password: ""
        })
        navigate('/login')
      }
      else {
        alert(result.response.data)
        navigate('/login')
        setUser({
          uname: "",
          phn:"",
          email: "",
          password: ""
        })
      }
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = user
    if (!email || !password) {
      alert('Email and Password Fields cannot be empty')
    }
    else {
      const result = await loginAPI(user)
      const admin = "admin"
      console.log(result);
      if (result.status === 200) {
        if (result.data.existingUser.email === admin) {
          alert("Logged in as Admin")
          sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token", result.data.token)
          navigate('/admin/home')
          setUser({
            email: "",
            password: ""
          })
        }
        else {
          alert(`Logged in as ${result.data.existingUser.uname}`)

          sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token", result.data.token)
          navigate('/')
          setUser({
            email: "",
            password: ""
          })
        }
      }
      else {
        alert(result.response.data)
        setUser({
          email: "",
          password: ""
        })
      }

    }
  }

  return (
    <>
      <Header />
      <div className="log-main">
        <div>
          <img width={'100%'} src="https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-searching-hostel-hotel-journey-traveller-png-image_5738622.png" alt="" />
        </div>
        <div>
          {
            registerForm ? <h1 className='text-light my-5'>SignUp to your Account</h1> : <h1 className='text-light my-5'>Login to your Account</h1>
          }
          {
            registerForm && (
              <div>
                <input value={user.uname} onChange={(e) => setUser({ ...user, uname: e.target.value })} placeholder='Full Name' className='form-control my-3' type="text" />
                <input value={user.phn} onChange={(e) => setUser({ ...user, phn: e.target.value })} placeholder='Phone Number' className='form-control my-3' type="text" />
              </div>
            )

          }
          <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='Email' className='form-control' type="text" />
          <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='Password' className='form-control my-3' type="password" />
          <div className='text-center text-light my-4'>

            {
              registerForm ?
                <button onClick={handleRegister} style={{ backgroundColor: 'rgb(252, 128, 3)', color: 'white' }} className='btn'>Register</button>
                :
                <button onClick={handleLogin} style={{ backgroundColor: 'rgb(252, 128, 3)', color: 'white' }} className='btn'>Login</button>
            }

            {
              registerForm ?
                <p className='mt-5'>Account Already Exist? <Link to={'/login'}>Login</Link></p>
                :
                <p className='mt-5'>New User? <Link to={'/register'}>Register</Link></p>
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default Auth