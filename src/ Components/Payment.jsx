import React, { Component } from 'react'
import './Login.css'
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import * as MdIcons from 'react-icons/md'
import * as GrIcons from 'react-icons/gr'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Dropzone from 'react-dropzone'

export class Payment extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-sm-12 col-lg-6 left'>
                  <img className='wave' src='wave.png' alt='wave' />
                  <img className='bg' src='bg.png' alt='wave' />
              </div>
              <div className='col-sm-12 col-lg-6'>
                  <div className='row'>
              <div className='col-sm-12 title' style={{textAlign:'center',marginTop:'3rem'}}>
                      <img className='avatar' src='avatar.svg' alt='avatar' />
                      <h2 style={{marginTop:'1rem'}}>Payment</h2>
                      </div>
                      <div className='row'>
                          <div className='col-sm-12 Pbar' style={{textAlign:'center',marginLeft:'12rem',marginTop:'2rem'}}>
                      <ProgressBar
                        percent={100}
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
                  <div className='row personalInfo' style={{marginTop:'5rem',marginLeft:'10rem'}}>
                      <div className='colsm-12'>
                          <form>
                              <label style={{fontSize:'25px'}}>Payment Method <span style={{color:'red'}}>*</span></label>
                              <select id="payment" name="payment" style={{width:'15rem',marginLeft:'1rem'}}>
                                <option value="upi">UPI/Gpay/Phonepe(preferred)</option>
                                <option value="paytm">Paytm:9871244676</option>
                                <option value="bank">Account Transfer.</option>
                            </select><br/><br/>
                            <label style={{fontSize:'25px'}}>UPI</label>
                            <img src='UPI.png' alt="UPI code" style={{marginLeft:'12rem'}}/><br/>
                            <label style={{fontSize:'25px'}}>Upload Your Payment Screenshot <span style={{color:'red'}}>*</span></label>
                          <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} style={{outline:'1px'}}/><br/>
                                    <input className='dropInput' placeholder="Drop Your Resume"></input>
                                </div>
                                </section>
                            )}
                            </Dropzone>
                            <button className='loginBtn'>Next</button>
                          </form>
                      </div>
                  </div>
                      </div>
                      
              </div>
            </div>
        )
    }
}

export default Payment

