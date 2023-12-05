import React from 'react'
import './contact.css'

const Contact = ()=> {

  const Contactinfo =({title, title1, title2, content, content1, content2})=>{
    return(

<>
            <h2>{title}</h2>
                <p>{content}</p>
              <div >
                <h2>{title1}</h2>
                <p>{content1}</p>
              </div>
              <div >
                <h2>{title2}</h2>
                <p>{content2}</p>
              </div>
              </>    
    )
  }
 
    return (
      <div>
      <div className="contact_info-title">
            <h1>Contact Information</h1>
            </div>
        <div className="contact_info-container">
          
            <div className="contact_info-container-box">
                <Contactinfo 
                  title="Residence:"
                  content="Uttarakhand"
                  title1="City:"
                  content1="Kotdwara"
                  title2="Steet:"
                  content2="Durgapuri"
                
                />
            </div>
            
            <div className="contact_info-container-box">
                <Contactinfo 
                  title="Residence:"
                  content="Uttarakhand"
                  title1="City:"
                  content1="Kotdwara"
                  title2="Steet:"
                  content2="Durgapuri"
                
                />
            </div>

            <div className="contact_info-container-box">
                <Contactinfo 
                  title="Residence:"
                  content="Uttarakhand"
                  title1="City:"
                  content1="Kotdwara"
                  title2="Steet:"
                  content2="Durgapuri"
                
                />
            </div>
            </div>
        </div>
        
    )
  }

export default Contact

