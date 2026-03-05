import React from 'react'
import "./SigninPage.css"
import NavComponent from '../components/NavComponent'

const SigninPage = () => {
  return (
    <div className='sign-up'>
    
          <NavComponent />
    
          <div className='wrapper'>
            <div className='all'>
            <div className='up'>
              <h2>Login</h2>
              <p>Please sign up to book appointment</p>
            </div>
    
            <div className='form'>
    
              <div className='name'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email'/>
              </div>
    
              <div className='name'>
                <label htmlFor="password">Password</label>
                <input type="password" name='password'/>
              </div>
    
              <button className='button-blue'>Login</button>
            </div>
    
            <div className='down'>
              <p>Already have an account? <a href="">Login here</a></p>
            </div>
           </div>
          </div>
        </div>
  )
}

export default SigninPage