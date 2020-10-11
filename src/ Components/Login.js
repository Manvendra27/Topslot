import React, { Component } from 'react'
import './Login.css'
export class Login extends Component {
    render() {
        return (
            

            
          <div className='row'>
              <div className='col-sm-12 col-lg-6'>
                  <img className='wave' src='wave.png' alt='wave' />
                  <img className='bg' src='bg.png' alt='wave' />
              </div>
              <div className='col-sm-12 col-lg-6'>
              <div className='row'>
                  <div className='col-sm-12' style={{textAlign:'center',marginTop:'10rem'}}>
                      <img className='avatar' src='avatar.svg' alt='avatar' />
                      <h1 style={{marginTop:'1rem'}}>Welcome</h1>
                      <button className='loginBtn'>Login</button>
                  </div>
              </div>
              </div>
              </div>
         
        )

    }
}

export default Login
