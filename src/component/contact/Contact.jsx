import React from 'react'
import './contact.css'

const Contact = ()=> {

  const Contactinfo =({title, title1, title2, content, content1, content2})=>{
    return(
        <div>
          <ul>
            <li><strong>{title}</strong>{content}</li>
            <li><strong>{title1}</strong>{content1}</li>
            <li><strong>{title2}</strong>{content2}</li>
          </ul>
        </div>
    )
  }
 
    return (
      <div>
      <div className="contact_info-title" id='contact'>
            <h1>Contact Information</h1>
            </div>
        <div className="contact_info-container">
          
            <div className="contact_info-container-box">
                <Contactinfo 
                  title="Residence:"
                  content="India"
                  title1="State:"
                  content1="Uttarakhand"
                  title2="Age:"
                  content2="21"
                
                />
            </div>
            
            <div className="contact_info-container-box">
                <Contactinfo 
                  title="Email:"
                  content="ayush.negi.731@gmail.com"
                  title1="Telegram:"
                  content1="@Ayush_Negi"

                
                />
            </div>

            <div className="contact_info-container-box">
                <Contactinfo 
                  title="Support Service:"
                  content="Uttarakhand"
                  title1="Office:"
                  content1="Freelancer"
                  title2="Personal:"
                  content2="Durgapuri"
                
                />
            </div>
            </div>
        </div>
        
    )
  }

export default Contact

