import React from 'react'
import './header.css'
import profile from '../../asset/3.png'
import Typewriter from 'typewriter-effect';
import bg from '../../asset/bgimg.jpg'



const Header = ()=> {
 
  
    return (
      <div className='header_containerbg' id='home'>
        <div className="header_container">
          <img src={bg} alt="background" />
          <div className="header_container-title">
            <h1><span>My Digital </span> <br /> Innovation Hub!</h1>
          
          <div className="header_container-title-anim"> 
          &lt;<i>code</i>&gt;
          <span style={{display:'inline-block'}}>
          <Typewriter
              options={{
                strings: ['Architecting Seamless Digital', 'Engineering Efficiency', 'Navigating the cloud'],
                autoStart: true,
                loop: true,
              }}
            /> 
            </span>
            &lt;<i>code</i>&gt;  
          </div>
          
          
          <div className="header_container-img">
            <img src={profile} alt="profilepic" />
          </div>
        </div>
        </div>
        </div>
    )
  }

export default Header

