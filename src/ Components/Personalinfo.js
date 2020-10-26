import React, { Component } from 'react'
import './Login.css'
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import * as MdIcons from 'react-icons/md'
import * as GrIcons from 'react-icons/gr'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'

export class Personalinfo extends Component {
    render() {
        return (
            

            
          <div className='row'>
              <div className='col-sm-12 col-lg-6 left'>
                  <img className='wave' src='wave.png' alt='wave' />
                  <img className='bg' src='bg.png' alt='wave' />
              </div>
              <div className='col-sm-12 col-lg-6'>
              <div className='row '>
                  <div className='col-sm-12 title' style={{textAlign:'center',marginTop:'3rem'}}>
                      <img className='avatar' src='avatar.svg' alt='avatar' />
                      <h2 className="titleHeader" style={{marginTop:'1rem'}}>Apply For Premium Jobs</h2>
                      </div>
                      <div className='row'>
                          <div className='col-sm-12 Pbar' style={{textAlign:'center',marginLeft:'12rem',marginTop:'2rem'}}>
                      <ProgressBar
                      className='ProgressBar'
                        percent={0}
                        width={350}
                        filledBackground="#6C63FF">
                        <Step transition="scale">
                        {({ accomplished }) => (
                            <GrIcons.GrDocumentText color={'blue'} size={25}/>
                        )}
                        </Step>
                        <Step transition="scale">
                        {({ accomplished }) => (
                            <FaIcons.FaUpload  color={'black'} size={25}/>
                        )}
                        </Step>
                        <Step transition="scale">
                        {({ accomplished }) => (
                            <MdIcons.MdPayment size={30}/>
                        )}
                        </Step>
                    </ProgressBar>
                      {/*  */}
                  </div>
                  </div>
                  <div className='row personalInfo'  style={{marginTop:'5rem',marginLeft:'10rem'}}>
                      <div className='col-sm-12'>
                          <form className='infoForm'>
                          <input name='name' type='text' className='input' placeholder='Name'></input><br/>
                          <input name='email' type='email' className='input' placeholder='Email' style={{marginTop:'3rem'}}></input><br/>
                          <label for="education" style={{marginTop:'2rem',fontSize:'25px',color:'#707070'}}>Education :</label><br/>
                            <select id="education" name="education" >
                                <option value="iti">ITI</option>
                                <option value="diploma">Diploma</option>
                                <option value="btech">BTech.</option>
                            </select><br/>
                            <label for="course" style={{marginTop:'1rem',fontSize:'25px',color:'#707070'}}>Course:</label><br/>
                            <select id="course" name="course" >
                                <option value="civil">Civil</option>
                                <option value="mechanical">Mechancial</option>
                                <option value="electrical">Electrical.</option>
                            </select>
                            <Link to='/upload'><button className='loginBtn'>Next</button></Link>
                            </form>
                      </div>
                  </div>
              </div>
              </div>
              </div>
         
        )

    }
}

export default Personalinfo
