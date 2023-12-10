import React from 'react'
import './side.css'
import profile from '../../asset/IMG.jpg'
import {Lang, Skillbar} from '../../component'
const Side = ()=> {
 
const Resume_url = 'http://localhost:3000/Resume.pdf'


const downloadresume =(url)=>{
    fetch(url).then(response=>response.blob())
    .then(blob=>{
    const blobURL = window.URL.createObjectURL(new Blob([blob]))
    const filename = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = blobURL
    aTag.setAttribute('download', filename)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();

    })
    
  }
    return (
      <div>
        <div className='sidebar_profile'>
          <div className="sidebar_profile-image">
          <img src={profile} alt="my profile" />
          </div>
          <h1>Ayush Negi</h1>
          <p>Engineering Student</p>
          <p>DevOps/Cloud</p>

        </div>


        <div className="sidebar_about-scroll">
        <div className='sidebar_about'>
            <div className='sidebar_about-info'>
                <h2>Residence:</h2>
                <p>India</p>
              <div >
                <h2>State:</h2>
                <p>Uttarakhand</p>
              </div>
              <div >
                <h2>Age:</h2>
                <p>21</p>
              </div>
            </div>
            <hr/>
            <div className='lang-container'>
            <div className="sidebar_about-lang-left">
              <Lang finalCounter={95} Language="Hindi"/>
              </div>
            <div className="sidebar_about-lang-right">
              <Lang finalCounter={89} Language="English"/>
              </div>
              </div>
              <hr/>

              <Skillbar/>
              <hr/>

              <div className="sidebar_about-ul">
                <ul>
                  <li><i className='fa fa-check'> </i>Oops Concept</li>
                  <li><i className='fa fa-check'> </i>Computer Networking</li>
                  <li><i className='fa fa-check'> </i>DBMS</li>
                  <li><i className='fa fa-check'> </i>Data Structure Algorithm</li>
                  <li><i className='fa fa-check'> </i>GIT/GitHub Knowledge</li>
                </ul>
              </div>
              <hr/>

              <div className="sidebar_about-resume" id='resume'>
                <p onClick={()=>(downloadresume(Resume_url))} id="resume">Download Resume <i className='fa fa-download'></i></p>
              </div>

        </div>
        </div>

        <div className="sidebar_about-footer">
          <a href="https://www.linkedin.com/in/ayush-negi-b93b591ba/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/AyushNe49236766" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/m_ayush_00/?hl=en/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/Light0Yagami" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </div>

        
      </div>
    )
  }

export default Side

