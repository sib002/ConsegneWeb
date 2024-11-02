document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("askQuestion").addEventListener("submit",function (event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        document.getElementById("askQuestion").reset();
    });
});