// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h2 className="about-heading">About Us</h2>
      <p className="about-description">
        Welcome to Bank App, where we revolutionize the banking experience with cutting-edge technology and a customer-first approach. 
        Our mission is to offer accessible and reliable financial services to individuals and businesses of all sizes. We believe in providing not just products, but tailored solutions that help our clients succeed financially.
      </p>
      
      <h3 className="about-vision-heading">Our Vision</h3>
      <p className="about-vision-description">
        Our vision is to be the most trusted and innovative bank, providing comprehensive financial services that empower our customers to take control of their financial futures.
      </p>

      <h3 className="about-values-heading">Our Core Values</h3>
      <ul className="about-values">
        <li>Integrity: We believe in transparency and honesty in every interaction.</li>
        <li>Innovation: We are constantly innovating to provide the best solutions for our clients.</li>
        <li>Customer Focus: Our customers needs are at the heart of everything we do.</li>
        <li>Security: We ensure the highest level of security for all of your financial transactions.</li>
      </ul>

      <p className="about-footer">Join us today and experience the future of banking with our trusted and reliable services.</p>
    </div>
  );
}

export default About;
