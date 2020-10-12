import React, { Component} from 'react'
import './Login.css'
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import * as MdIcons from 'react-icons/md'
import * as GrIcons from 'react-icons/gr'
import * as FaIcons from 'react-icons/fa'
import Dropzone from 'react-dropzone'
import {Link} from 'react-router-dom'


export class UploadDocs extends Component {
    
     
    render() {
        return (
            <div className='row'>
                <div className='col-sm-12 col-lg-6 left'>
                  <img className='wave' src='wave.png' alt='wave' />
                  <img className='bg' src='bg.png' alt='wave' />
              </div>
              <div className='col-sm-12 col-lg-6'>
                  <div className='row'>
                      <div className='col-sm-12 title' style={{textAlign:'center',marginTop:'3rem'}} >
                      <img className='avatar' src='avatar.svg' alt='avatar' />
                      <h2 className='titleHeader' style={{marginTop:'1rem'}}>Upload Your Documents</h2>
                      </div>
                      <div className='row'>
                          <div className='col-sm-12 Pbar' style={{textAlign:'center',marginLeft:'9rem',marginTop:'2rem'}}>
                      <ProgressBar
                        percent={50}
                        width={450}
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
                  </div><br/>
                  <div className='row personalInfo' style={{marginTop:'2.5rem',marginLeft:'11rem'}}>
                      <div className='col-sm-12'>
                          <form>
                          <label style={{fontSize:'25px'}}>Upload Your CV/Resume <span style={{color:'red'}}>*</span></label>
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
                            <br/>
                            <label style={{fontSize:'25px'}}>Upload Your Educational Documents <span style={{color:'red'}}>*</span></label>
                          <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} style={{outline:'1px'}}/><br/>
                                    <input className='dropInput' placeholder="Drop Your Documents"></input>
                                </div>
                                </section>
                            )}
                            </Dropzone>
                            <Link to='/payment'><button className='loginBtn'>Next</button></Link>
                            </form>
                      </div>
                  </div>
                  </div>
              </div>
            </div>
        )
    }
}

export default UploadDocs
