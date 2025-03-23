// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true); // Set initial state to true (valid)

  // Handle email input change
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Check if email ends with @gmail.com
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (emailPattern.test(emailValue)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };
 

  return (
    <div className="contact">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">
        We're here to help! If you have any questions, inquiries, or need assistance with your account, feel free to reach out to us through any of the methods below.
      </p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:support@bankapp.com">support@bankapp.com</a></p>
        <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
        <p>Address: 
          <strong>Bank of India</strong><br />
          Main Branch<br />
          123 MG Road<br />
          Bangalore<br />
          Karnataka 560001, India
        </p>
      </div>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            required 
             // Example of fixing the event handler

             onInvalid={(e) => { /* handle invalid input */ }} 
             onInput={(e) => { /* handle input change */ }} 


          />
          
          <label htmlFor="email">Your Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
            value={email}
            onChange={handleEmailChange}
            pattern="[a-zA-Z0-9._%+-]+@gmail\.com$" 
            title="Email must end with @gmail.com"
            oninvalid="this.setCustomValidity('Please enter a valid Gmail address ending with @gmail.com')" 
            oninput="this.setCustomValidity('')" 
            
          />
          
          {/* Display an error message if the email is invalid */}
          {!isEmailValid && <p className="error-message">Please enter a valid Gmail address ending with @gmail.com.</p>}
          
          <label htmlFor="message">Your Message:</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Write your message" 
            rows="5" 
            required 
          ></textarea>
          
          {/* Button is disabled if email is not valid */}
          <button type="submit" disabled={!isEmailValid}>Send Message</button>
        </form>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://facebook.com/bankapp" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/bankapp" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/bankapp" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;

