// Get a reference to the form element
const form = document.getElementById("myForm");

// Attach an event listener to the form submission event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Extract the form data
  const formData = new FormData(form);

  // Convert the form data to a JSON object
  const formDataJSON = JSON.stringify(Object.fromEntries(formData));

  // Send an HTTP POST request to the Cloudflare Worker
  fetch("https://your-worker-url.example.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: formDataJSON
  })
    .then(response => {
      if (response.ok) {
        // Handle a successful response
        console.log("Email sent successfully!");
      } else {
        // Handle an error response
        console.error("Failed to send email");
      }
    })
    .catch(error => {
      // Handle a network error
      console.error("Network error:", error);
    });
});
