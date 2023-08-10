import React, { useState } from 'react';
import './contact.css';

// JavaScript for handling Contact Us form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Validate the form here (e.g., check if fields are filled)
    // If the form is valid, you can send the form data using AJAX
    // Display the success message
    document.getElementById("successMessage").style.display = "block";
});

// JavaScript for handling Newsletter form submission
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle newsletter subscription here (e.g., send email to server)
    // Display a confirmation message to the user
    alert("Subscribed to the newsletter!");
});


export default Contact;
