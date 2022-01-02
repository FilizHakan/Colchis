const message =
  "Thank you for submitting your request to the Majesty. The kingdom will respond to you shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
