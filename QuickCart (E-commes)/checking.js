document
  .getElementById("checkoutForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form refresh

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    

    // Simple validation (you can expand this)
    if (name && email && address && phone) {
      // Redirect to confirmation page
      window.location.href = "comform.html";
    } else {
      alert("Please fill in all fields.");
    }
  });
