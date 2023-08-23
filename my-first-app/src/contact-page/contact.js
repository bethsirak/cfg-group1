import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  function handleContactFormSubmit(event) {
    event.preventDefault();

    // Validate the form fields (e.g., check if fields are filled)
    var fullName = document.querySelector('.input[name="name"]').value;
    var email = document.querySelector('.input[name="email"]').value;
    var message = document.querySelector('.input[name="message"]').value;

    if (!fullName || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // If the form is valid, you can send the form data using AJAX
    // Display the success message
    setSuccessMessageVisible(true);
  }

  function handleNewsletterFormSubmit(event) {
    event.preventDefault();

    // Handle newsletter subscription here (e.g., send email to server)
    // Display a confirmation message to the user
    alert("Subscribed to the newsletter!");
  }

  return (
    <div className="container">
      <div className="form">
        <div className="contact-info"></div>

        <div className="contact-form">
          <form onSubmit={handleContactFormSubmit}>
            <h3 className="title">Contact Us</h3>
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
            <button type="submit" className="btn btn-warning">Send</button>
          </form>
          {successMessageVisible && <div id="successMessage">Thank you! Your message has been sent.</div>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
