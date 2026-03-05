import React from 'react'
import "./SignupPage.css"
import NavComponent from '../components/NavComponent'
import { Link } from 'react-router-dom'


const SignupPage = () => {
  return (
    <div className='sign-up'>

      <NavComponent />

      <div className='wrapper'>
        <div className='all'>
        <div className='up'>
          <h2>Create Account</h2>
          <p>Please sign up to book appointment</p>
        </div>

        <div className='form'>
          <div className='name'>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name='fullname'/>
          </div>

          <div className='name'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email'/>
          </div>

          <div className='name'>
            <label htmlFor="password">Password</label>
            <input type="password" name='password'/>
          </div>

          <button className='button-blue'>Create Account</button>
        </div>

        <div className='down'>
          <p>Already have an account?<Link to="/signin">Login here</Link></p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default SignupPage