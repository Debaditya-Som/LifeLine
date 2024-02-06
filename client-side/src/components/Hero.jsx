import React from 'react';
import './hero.css';

const Hero = () => {
  const handleChatButtonClick = () => {
    // Handle the navigation to the chatbot or any desired action
    console.log('Navigate to chatbot');
  };

  return (
    <section className="hero-container">
      <div className="hero-images">
        <img src="https://www.cpsmumbai.org/Uploads/2762023161833920.png" alt="Image 2" className="hero-image" />
      </div>

      <div className="hero-text">
        <h1 className="hero-title">Welcome to LifeLine</h1>
        <p className="hero-description">Empowering Life, One Drop at a Time – Your Beacon of Hope in Blood Donation.</p>

        <button onClick={handleChatButtonClick} className="hero-btn secondary-btn">Chat with us</button>
      </div>
    </section>
  );
};

export default Hero;
