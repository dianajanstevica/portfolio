"use strict";

const emailField = document.getElementById("email");

function validateEmail() {
    const value = emailField.value;
    const errors = [];
    
    if (value.indexOf("@") == -1) {
        errors.push("E-mail should contain an @");
    }
    

   
    console.log(errors);
    
    const emailValidationMessage = document.getElementById("emailValidationMessage");
    if (errors.length > 0) {
        makeInvalid(emailField);
        emailValidationMessage.innerHTML = errors.join("<br>");
    } else {
        makeValid(emailField);
        emailValidationMessage.innerHTML = "";
    }
}


function makeValid(element) {
    element.classList.remove("invalid");
    element.classList.add("valid");
}

function makeInvalid(element) {
    element.classList.add("invalid");
    element.classList.remove("valid");
}

emailField.addEventListener("keyup", validateEmail);