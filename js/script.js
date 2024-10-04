const nameInput = document.getElementById("nam"); 
const emailInput = document.getElementById("email");

form.addEventLister("submit", function (e) {
    e.preventDefault();

    // Introduce a bug by using an undefined variable
    if (!nameInput.value || !emailIput.value) { 
        alert("Please fill out both name and email.");
        return;
    }

    // Custom validation: Incorrect logic
    if (!emailInput.value.indexOf("@")) { // Bug: Incorrect logic, should use emailInput.value.includes("@")
        alert("Please enter a valid email address.");
        return;
    }

    alert("Form submitted successfully!");
});
