import React, { useState } from 'react';
import './Tour.css';

function Tour({ closeTour }) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const finishTour = () => {
    closeTour(); // Call closeTour to hide the tour
  };

  return (
    <div className="tour-container">
      <div className="tour-step">
        {step === 1 && (
          <div className="tour-content">
            <h3>Welcome to the Bank App!</h3>
            <p>In this demo, we’ll show you the key features of the app.</p>
            <div className="button-container">
              <button className="next-button" onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="tour-content">
            <h3>Explore Your Dashboard</h3>
            <p>Here, you can view and manage various aspects of your account:</p>
            <ul>
              <li><strong>Profile:</strong> View and update your personal information and settings.</li>
              <li><strong>Account Balance:</strong> Check your current balance and recent transactions.</li>
              <li><strong>Deposit/Withdraw:</strong> Easily deposit or withdraw money from your account. Simply click on the corresponding option to start a transaction.</li>
              <li><strong>Bank Services:</strong> Access a variety of bank services such as loans, card management, and account transfers.</li>
              <li><strong>Transaction History:</strong> View detailed records of your past transactions for reference and tracking.</li>
            </ul>
            <div className="button-container">
              <button className="back-button custom-back-button" onClick={prevStep}>Back</button>
              <button className="next-button" onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="tour-content">
            <h3>Check Our Exclusive Bank Offers</h3>
            <p>Don’t forget to explore the latest bank offers available just for you!</p>
            <div className="button-container">
              <button className="back-button custom-back-button" onClick={prevStep}>Back</button>
              <button className="next-button" onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <div className="tour-content">
            <h3>Access Customer Support</h3>
            <p>Our 24/7 customer support team is ready to assist you with any inquiries or issues.</p>
            <div className="button-container">
              <button className="back-button custom-back-button" onClick={prevStep}>Back</button>
              <button className="next-button" onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="tour-content">
            <h3>You're All Set!</h3>
            <p>Now, feel free to explore the app at your own pace.</p>
            <div className="button-container">
              <button className="finish-button" onClick={finishTour}>Finish</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tour;
