import React from 'react'
import './edu.css'

const Edu = ()=> {
 
    return (
      <div className='edu_container' id='edu'>
        <div className="edu_container-row">
          <div className="edu_container-col">
            <div className="edu_container-title">
              <h1>Education</h1>
            </div>
            <div className="edu_container-content">
              <div className="edu_container-box">
                <h3>B.Tech CSE</h3>
                <h4>july, 2020 - july, 2024</h4>
                <ul>
                  <li>CGPA : 8.6 </li>
                  <li>Graphic Era Hill University</li>
                  <li> Major: CSE (Computer Science & Engineering)</li>                  
                </ul>
              </div>

              <div className="edu_container-box">
                <h3>Class XII</h3>
                <h4>March, 2018- March,2020</h4>
                <ul>
                  <li>90.2% </li>
                  <li>Baluni Public School</li>
                  <li>Major: PCM (Physics, Chemistry & Maths)</li>                  
                </ul>
              </div>

              <div className="edu_container-box">
                <h3>High School</h3>
                <h4>March, 2016 - March, 2018</h4>
                <ul>
                  <li>91.6%</li>
                  <li>Baluni Public School</li>
                </ul>              
              </div>

            </div>
          </div>

          <div className="edu_container-col">
            <div className="edu_container-title">
              <h1>Work History</h1>
            </div>
            <div className="edu_container-content">
              <div className="edu_container-box">
                <h3>SharkSecure Website</h3>
                <h4>Oct, 2022- Nov, 2023</h4>
                <p>The SharkSecure website, a collaborative project our team undertook, 
                   showcases our comprehensive skills in UI design, development, and hosting. 
                   We successfully managed all these aspects in-house, within a constrained timeframe. 
                   This project highlights My team's ability to deliver high-quality, user-friendly interfaces for our 
                   clients in the security solutions sector.</p>
              </div>

              <div className="edu_container-box">
                <h3>InfoSecTrain Intern</h3>
                <h4>july, 2022- Sept, 2023</h4>
                <p> Acquired skills in network analysis and vulnerability 
                    assessment, which have been instrumental in researching modern cyber threats
                    and their impacts on organizations. Their unique contribution to the field 
                    of cybersecurity has been through the creation of informative content, 
                    which has enhanced the effectiveness of cybersecurity teaching courses 
                    across their company.</p>
              </div>

            </div>
          </div>

        </div>

        
      </div>
    )
  }

export default Edu

