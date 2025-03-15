import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BankServices.css';  // Assuming you might want to style it further

function BankServices() {
  return (
    <div className="bank-services">
      
      <h2>Our Bank Services</h2>
      <p>We offer a wide range of banking services tailored to meet your financial needs.</p>
      
      <section className="service-section">
        <h3>Personal Banking</h3>
        <p>Manage your personal finances with ease. We offer checking and savings accounts, personal loans, credit cards, and much more to help you achieve your financial goals.</p>
      </section>

      <section className="service-section">
        <h3>Loans</h3>
        <p>We provide flexible loan options including home loans, car loans, and personal loans. Our competitive rates and easy approval process make borrowing convenient and affordable.</p>
      </section>

      <section className="service-section">
        <h3>Investment Services</h3>
        <p>Whether you are just starting to invest or looking to diversify your portfolio, our investment services include stocks, bonds, mutual funds, and retirement accounts with expert advice.</p>
      </section>

      <section className="service-section">
        <h3>Insurance</h3>
        <p>We offer a variety of insurance products to protect you and your loved ones, including health insurance, life insurance, home insurance, and auto insurance. Our goal is to provide you with peace of mind.</p>
      </section>

      <section className="service-section">
        <h3>Business Banking</h3>
        <p>Our business banking services include business loans, merchant services, business checking accounts, and more to help you grow your business efficiently and effectively.</p>
      </section>

      <section className="service-section">
        <h3>Online and Mobile Banking</h3>
        <p>Access your accounts anywhere, anytime with our secure online and mobile banking services. Pay bills, transfer funds, check balances, and more – all at your fingertips.</p>
      </section>

      <section className="service-section">
        <h3>Foreign Exchange Services</h3>
        <p>We provide foreign exchange services for individuals and businesses. Whether you are traveling abroad or conducting international trade, our foreign exchange services help you manage currency exchange easily.</p>
      </section>

      <section className="service-section">
        <h3>Retirement Planning</h3>
        <p>Plan for your future with our retirement solutions, including IRAs, 401(k) rollovers, and other retirement savings products. Our advisors will work with you to help you plan for a financially secure retirement.</p>
      </section>

      <Link to="/dashboard">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default BankServices;
