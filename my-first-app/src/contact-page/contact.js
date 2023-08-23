import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  function handleContactFormSubmit(event) {
    event.preventDefault();

    var fullName = document.querySelector('.input[name="name"]').value;
    var email = document.querySelector('.input[name="email"]').value;
    var message = document.querySelector('.input[name="message"]').value;

    if (!fullName || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    setSuccessMessageVisible(true);
  }

  function handleNewsletterFormSubmit(event) {
    event.preventDefault();
    alert("Subscribed to the newsletter!");
  }

  return (
    <div className="container">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Contact Us</h3>
          <p className="text">
            Want to request a new feature, report a bug, or just say hi? Send a message using the form!
          </p>
          
          <form id="newsletterForm" onSubmit={handleNewsletterFormSubmit} className="newsletter-form">
            <div className="input-container">
              <p className="newsletter-text">join our newsletter</p>
              <input type="email" name="newsletterEmail" id="newsletterEmail" className="input input-newsletter" placeholder="Email Address" />
              <button type="submit" className="btn-newsletter">Join</button>
            </div>
          </form>
        </div>

        <div className="contact-form">
          <form onSubmit={handleContactFormSubmit}>
            <div className="input-container">
              <label htmlFor="name">FULL NAME :</label>
              <input type="text" name="name" className="input" />
            </div>
            <div className="input-container">
              <label htmlFor="email">EMAIL :</label>
              <input type="email" name="email" className="input" />
            </div>
            <div className="input-container text-area">
              <label htmlFor="message">MESSAGE :</label>
              <textarea name="message" className="input"></textarea>
            </div>
            <button type="submit" className="btn">Send</button>
          </form>
          {successMessageVisible && <div id="successMessage">Thank you! Your message has been sent.</div>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
