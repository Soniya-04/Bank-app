// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">
        We're here to help! If you have any questions, inquiries, or need assistance with your account, feel free to reach out to us through any of the methods below.
      </p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:support@bankapp.com">support@bankapp.com</a></p>
        <p>Phone: <a href="tel:+18001234567">1-800-123-4567</a></p>
        <p>Address: <strong>Bank of India</strong></p>
                 <p>Main Branch</p>
                 <p>     123 MG Road</p>
                 <p>     Bangalore</p>
                 <p>     Karnataka 560001, India</p>
                 </div>
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
          
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" placeholder="Write your message" rows="5" required></textarea>
          
          <button type="submit">Send Message</button>
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
