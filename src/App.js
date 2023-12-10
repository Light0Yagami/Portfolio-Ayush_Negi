import React, { useState } from 'react';
import './App.css';
import './component/sidebar/side.css'
import {Side, Header, Work, Edu, Contact, Nav, Form, Skills} from './component'
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="App">
      <div className={`sidebar_container ${isSidebarOpen ? 'open' : ''}`}>
        <Side />
      </div>

      <div className={`body_container ${isSidebarOpen ? 'shifted' : ''}`}>
        <div className="toggle_button" onClick={toggleSidebar}>
          <i className={`fas ${isSidebarOpen ? 'fa-solid fa-ellipsis-vertical' : 'fa-solid fa-ellipsis-vertical'}`}></i>
        </div>
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
