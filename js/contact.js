document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!validateEmail(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Thank you for your message! We will get back to you soon.";

    this.reset(); 
});

function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
