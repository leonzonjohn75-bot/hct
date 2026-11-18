
document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value;

    document.getElementById("message").innerHTML =
        "Registration successful! Welcome, " + name + "!";

    document.getElementById("message").className =
        "text-center mt-3 text-success fw-bold";

    this.reset();
});
