// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Optional: Handle form submission
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    // You can add your login logic here
    alert("Logging in as " + document.getElementById("username").value);
    modal.style.display = "none"; // Close the modal after submission
}