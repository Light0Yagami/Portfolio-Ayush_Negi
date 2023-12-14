import React from 'react'
import './skillbar.css'

const Skillbar = ()=> {
 
    return (
      <div className='skill-container'>
        <div className="skill-box">
            <span className="skill-title">C</span>
            <span className="tooltipc">90%</span>

            <div className="skill-bar">
                <span className="skill-per c"> </span>
            </div>
        </div>


        <div className="skill-box">
            <span className="skill-title">C++</span>
            <span className="tooltipcpp">95%</span>
            <div className="skill-bar">
                <span className="skill-per cpp">   
                </span>
            </div>
        </div>


        <div className="skill-box">
            <span className="skill-title">Java</span>
            <span className="tooltipj">85%</span>
            <div className="skill-bar">
                <span className="skill-per java">
                    
                </span>
            </div>
        </div>


        <div className="skill-box">
            <span className="skill-title">python</span>
            <span className="tooltipp">80%</span>
            <div className="skill-bar">
                <span className="skill-per python">
                    
                </span>
            </div>
        </div>
        
      </div>
    )
  }

export default Skillbar