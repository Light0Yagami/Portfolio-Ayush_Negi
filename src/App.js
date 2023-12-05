import React from 'react';
import './App.css';
import {Side, Header, Work, Edu, Contact, Nav, Form, Skills} from './component'
function App() {
  return (
    <div className="App">
      <div className='sidebar_container'>
          <Side/>
      </div>
      
      <div className='body_container'>
        <div className='bodY_container-position'>
          <div className='body_container-scroll'>
        <div className='body_container-bg'>
          <Header/>
        </div>
        <div className='body_container-padding'>
          <Work/>
          <Skills/>
          <Edu/>
          <Contact/>
          <Form/>
        </div>
      </div>
      </div>
      </div>

      <div className='menu_container'>
        <Nav/>
      </div>
    </div>
  );
}

export default App;
