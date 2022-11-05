import React from 'react'
// import Footer from './Footer'


export default function Contact() {
  return (
    <div>
    <div className='contact-form'>
      <form 
      name='form'
      onSubmit={(e) => { 
        alert("Form submitted")
    }}>
      <div className="login-title">
        <h1>Contact Me</h1>
      
      <p>Hi there, contact me to ask anything about anything you have in mind</p>
      </div>
      <div className='input-fields'>
        <div className='name-field'><label>First Name
          <input 
          type="text"
          name='f-name'
          placeholder='Enter your first name'
          required /></label></div>
        <div className='name-field'><label>Last Name
        <input 
        type="text"
        required
        name='l-name'
        id='l-name'
        placeholder='Enter your last name' /></label></div>
        </div>
        <div className="email">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder='something@example.con' />
        </div>
        <div className="message">
            <div><label>Message</label></div>
            <textarea
            required
            placeholder="Send me a message and I'll reply as soon as possible...">
            </textarea>
            <p><input type="checkbox" name="agree" id="agree" required />   You are agreeing to providing your data to Daniel who may contact you.</p>
            <div className="submit">
            <button type="submit" id='submit'>Send Message</button>
            </div>
        </div>
      </form>
     
    </div>
    {/* <Footer /> */}
    </div>
  )
}
