// JavaScript for handling Contact Us form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
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
  });
  
  // JavaScript for handling Newsletter form submission
  document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Handle newsletter subscription here (e.g., send email to server)
    // Display a confirmation message to the user
    alert("Subscribed to the newsletter!");
  });
  