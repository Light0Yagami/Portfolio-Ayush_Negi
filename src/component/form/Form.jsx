import React, { useRef } from 'react';
import './form.css';
import emailjs from "@emailjs/browser";


const Form = () => {
  const form = useRef();

  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6l0x69",
        "template_3jvs4y4",
        form.current,
        "7LhSgQvgSbwYwbH7-"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
    <div className='form-title' id='form'>
      <h1>Get In Touch</h1>
    </div>
    <div className="form_contact-us">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name"><i className='fas fa-user'></i></label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder='Name'
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"><i className='fas fa-at'></i></label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder='Email'

          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className='messagepro'><i className='fas fa-envelope'></i></label>
          <textarea
            id="message"
            name="message"
            placeholder='Message'
            className='messageprom'

          ></textarea>
        </div>
        <input type="submit" value="SEND MESSAGE"/>

      </form>
    </div>
    </div>
  );
};

export default Form;
