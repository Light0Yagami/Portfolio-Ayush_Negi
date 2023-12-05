import React from 'react'
import './services.css'

const Box =({text, content})=>{
  return(
    <>
       <h2>{text}</h2>
        <p>{content}</p>
     </>
  )
}

const Services = ()=> {
 
    return (
        <div className="services_container">
          <div className="services_container-title">
            <h1>My Services</h1>
            <div className='services_container-title-box'>
            <Box text="Web Development" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Consequatur ex eum deleniti odit illo maxime quo
                s expedita id fugiat aperiam repellat magni illum vel 
                voluptatum optio repellendus, tenetur in porro!"/>
            </div>
            <div className="services_container-title-box">
            <Box text="Android Development" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Consequatur ex eum deleniti odit illo maxime quo
                s expedita id fugiat aperiam repellat magni illum vel 
                voluptatum optio repellendus, tenetur in porro!"/>
            </div>
            <div className="services_container-title-box">
            <Box text="Cloud" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Consequatur ex eum deleniti odit illo maxime quo
                s expedita id fugiat aperiam repellat magni illum vel 
                voluptatum optio repellendus, tenetur in porro!"/>
            </div>

            <div className='services_container-title-box'>
            <Box text="Web Development" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Consequatur ex eum deleniti odit illo maxime quo
                s expedita id fugiat aperiam repellat magni illum vel 
                voluptatum optio repellendus, tenetur in porro!"/>
            </div>
            <div className="services_container-title-box">
            <Box text="Android Development" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Consequatur ex eum deleniti odit illo maxime quo
                s expedita id fugiat aperiam repellat magni illum vel 
                voluptatum optio repellendus, tenetur in porro!"/>
            </div>
            <div className="services_container-title-box">
            <Box text="Cloud" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Consequatur ex eum deleniti odit illo maxime quo
                s expedita id fugiat aperiam repellat magni illum vel 
                voluptatum optio repellendus, tenetur in porro!"/>
            </div>
          </div>
        </div>
    )
  }

export default Services

