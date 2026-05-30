const form = document.getElementById("inquiryForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop page reload

  // Form Field Values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Error Selectors
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Reset Errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  // Validation Logic
  if (name.length < 3) {
    nameError.textContent =
      "Please enter a valid name (at least 3 characters).";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  }

  if (message.length < 10) {
    messageError.textContent =
      "Please tell us a bit more (at least 10 characters).";
    isValid = false;
  }

  // If completely validated
  if (isValid) {
    alert("Success! Your inquiry has been submitted successfully simulated.");
    form.reset();
  }
});
