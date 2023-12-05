import React from 'react'
import './skillbar.css'

const Skillbar = ()=> {
 
    return (
      <div className='skill-container'>
        <div className="skill-box">
            <span className="skill-title">C</span>

            <div className="skill-bar">
                <span className="skill-per c">
                    <span className="tooltip">90%</span>
                </span>
            </div>
        </div>


        <div className="skill-box">
            <span className="skill-title">C++</span>

            <div className="skill-bar">
                <span className="skill-per cpp">
                    <span className="tooltip">95%</span>
                </span>
            </div>
        </div>


        <div className="skill-box">
            <span className="skill-title">Java</span>

            <div className="skill-bar">
                <span className="skill-per java">
                    <span className="tooltip">85%</span>
                </span>
            </div>
        </div>


        <div className="skill-box">
            <span className="skill-title">python</span>

            <div className="skill-bar">
                <span className="skill-per python">
                    <span className="tooltip">80%</span>
                </span>
            </div>
        </div>
        
      </div>
    )
  }

export default Skillbar