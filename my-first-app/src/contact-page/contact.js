import React from 'react';
import './contact.css';

function Contact() {
  function handleContactFormSubmit(event) {
    event.preventDefault();

    // Validate the form fields (e.g., check if fields are filled)
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!fullName || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // If the form is valid, you can send the form data using AJAX
    // Display the success message
    document.getElementById("successMessage").style.display = "block";
  }

  function handleNewsletterFormSubmit(event) {
    event.preventDefault();

    // Handle newsletter subscription here (e.g., send email to server)
    // Display a confirmation message to the user
    alert("Subscribed to the newsletter!");
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        {/* Navbar content */}
      </nav>

      <section className="container mt-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 text-white">
            <h2>Contact Us</h2>
            <p>Want to request a new feature, report a bug, or just say hi? Send a message using the form!</p>
            <p>Join our newsletter</p>
            <form id="newsletterForm" onSubmit={handleNewsletterFormSubmit}>
              {/* Newsletter form elements */}
            </form>
          </div>
          {/* Right Column */}
          <div className="col-md-6 bg-warning text-white">
            <h2>Contact Us</h2>
            <form id="contactForm" onSubmit={handleContactFormSubmit}>
              {/* Contact form elements */}
            </form>
            <div id="successMessage" style={{ display: 'none' }}>Thank you! Your message has been sent.</div>
          </div>
        </div>
      </section>

      {/* Include Bootstrap JS and other scripts as needed */}
    </div>
  );
}

export default Contact;
