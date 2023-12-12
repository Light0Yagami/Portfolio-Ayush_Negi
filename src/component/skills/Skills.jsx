import React from 'react'
import './skills.css'


const Skills=()=>{
    return (
    <div className='skills_grid-container'>
      <div className='skills_container'>
        <div className='skills_container-heading'>
            <h1>What I Know</h1>
        </div>
            <div className="skills_container-grid">
            <div className='skills_container-title-box'>
            <h2>Programming Language</h2>
            <div className='skills_container-content'>
            <p>C</p>
            </div>
            <div className='skills_container-content skillcpp'>
            <p>C++</p>
            </div>
            <div className='skills_container-content skilljava'>
            <p>Java</p>
            </div>
            <div className='skills_container-content skillpython'>
            <p>Python</p>
            </div>
          </div>

            

            <div className='skills_container-title-box'>
            <h2>Database</h2>
            <div className='skills_container-content skillsql'>
            <p>MySql</p>
            </div>
            <div className='skills_container-content skillmdb'>
            <p>MongoDB</p>
            </div>
            </div>

            <div className='skills_container-title-box'>
            <h2>DevOps</h2>
            <div className='skills_container-content skillkub'>
            <p>Kubernetes</p>
            </div>
            <div className='skills_container-content skilldoc'>
            <p>Docker</p>
            </div>
            <div className='skills_container-content skillgit'>
            <p>GIT</p>
            </div>
            <div className='skills_container-content skilljen'>
            <p>Jenkins</p>
            </div>
            <div className='skills_container-content skillansible'>
            <p>Ansible</p>
            </div>
            
            <div className='skills_container-content skillchef'>
            <p>chef</p>
            </div>
            
            <div className='skills_container-content skillaws'>
            <p>AWS</p>
            </div>
            </div>

            <div className='skills_container-title-box'>
            <h2>Web Development</h2>
            <div className='skills_container-content skillhtml'>
            <p>HTML</p>
            </div>
            <div className='skills_container-content skillcss'>
            <p>CSS</p>
            </div>
            <div className='skills_container-content skilljs'>
            <p>JavaScript</p>
            </div>
            <div className='skills_container-content skillrjs'>
            <p>Reactjs</p>
            </div>
            </div>
            </div>
        
      </div>

      <div className="skill_certificate-container">
        <div className="skill_certificate-heading">
            <h1>My Certificate</h1>
        <hr className='skills-hr'/>
          <div className="skill_certificate-links">
            <a href='https://coursera.org/share/d22db48dfcb7f329a20933969941479e' target="_blank" rel="noreferrer"><p className='skill-certificate-title'>AWS Cloud Technical Essentials &gt;</p></a>
            <p className='skill_certificate-tag'>Coursera <br />IAM, Compute services, Networking, Storage ,Database, Monitoring</p>
            </div>
            <div className="skill_certificate-links">
            <a href='https://coursera.org/share/a17a758640bae3942170229e0e436b06' target="_blank" rel="noreferrer"><p className='skill-certificate-title'>Object Oriented Programming in java &gt;</p></a>
            <p className='skill_certificate-tag'>Coursera <br />Core Concept, OOPs concept, GUI and advance java</p>
            </div>
        </div>
      </div>
      </div>
    )
  
}

export default Skills
