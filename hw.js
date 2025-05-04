/*
Name: Yaneli Castillo
Date Created: April 8th, 2025
Version: 3
Description: Homework 3 - MIS 3371
*/

//date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

//DOB validation js code
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date can't be more than 100 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

//SSN validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

//validate first name
function validateFname() {
    let fname = document.getElementById("fname").value;
    const namePattern = /^[A-Z]+$/;

    fname = fname.toUpperCase();
    document.getElementById("fname").value = fname;

    if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "First name must be more than a single letter";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

//validate last name
function validateLname() {
    let lname = document.getElementById("lname").value;
    const namePattern = /^[A-Z]+$/;

    lname = lname.toUpperCase();
    document.getElementById("lname").value = lname;

    if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Last Name must be more than a single letter";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

//validate middle initial
function validateMi() {
    let mini = document.getElementById("mi").value;
    const namePattern = /^[A-Z]+$/;

    mi = mi.toUpperCase();
    document.getElementById("mi").value = mi;

    if (!mi.match(namePattern)) {
        document.getElementById("mi-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mi-error").innerHTML = "";
        return true;
    }
}

//zip code validation js code
function validateZipc() {
    const zipInput = document.getElementById("zipc");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("cipc-error").innerHTML = "Zip Code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "_" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zipc-error").innerHTML = "";
    return true;
}

//validate city
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//validate email js code
var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail() {
    var emailInput = document.getElementById("email").value;

    if (emailInput.trim() === "") {
        alert("Email cannot be blank.");
        return false;
    } else if (!emailR.test(emailInput)) {
        alert("Please enter a valid email address.");
        return false;
    } else {
        return true;
    }
}

//validate phone number js code
function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var phoneValue = phoneInput.value.replace(/\D/g, "");

    if (phoneValue === "") {
        alert("Phone number cannot be blank.");
        return false;
    } else if (phoneValue.length !== 10) {
        alert("Enter a valid 10-digit phone number.");
        return false;
    } else {
        var formatted = phoneValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        phoneInput.value = formatted;
        return true;
    }
}

//user id validation js code
function validateUid() {
    uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = "User ID can only have letters, numbers, underscores and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

//password validation js code
function validatePwd() {
    const pwd = document.getElementById("pwd");
    const errorSpan = document.getElementById("pwd-error");
    const value = pwd.value;
  
    if (value.trim().length < 6) {
      errorSpan.textContent = "Password must be at least 6 characters.";
      return false;
    } else {
      errorSpan.textContent = "";
      return true;
    }
  }
  
  // Confirm Password (second field) //
  function confirmPwd() {
    const pword = document.getElementById("pwd").value;
    const conPword = document.getElementById("pwd2").value;
    const errorSpan2 = document.getElementById("pwd2-error");
  
    if (conPword.trim() === "") {
      errorSpan2.textContent = "Please confirm your password.";
      return false;
    } else if (pword !== conPword) {
      errorSpan2.textContent = "Passwords do not match.";
      return false;
    } else {
      errorSpan2.textContent = "";
      return true;
    }
  }

//stop form from submitting js code
document.getElementById("patient-form").addEventListener("submit", function(event) {
    if (!validateUid() || !validatePassword()) {
        event.preventDefault(); 
    }
});

//review button js code
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//remove review data js code
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//alert box js code
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

//cookies
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}


//Prefilling form fields
inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }
 
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

//rmb me
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {

        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {

        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

//DOM
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});

//welcome msg
function updateGreeting() {
    const greetingDiv = document.getElementById("greeting");
    const firstName = getCookie("firstName");
    if (firstName) {
      greetingDiv.innerHTML =
        `Welcome back, ${firstName}. ` +
        `<a href="#" id="notUserLink">Not ${firstName}? Start as new user.</a>`;
  
      document.getElementById("notUserLink").addEventListener("click", (e) => {
        e.preventDefault();
        newUser();
      });
    } else {
      greetingDiv.textContent = "Welcome, new user!";
    }
  }
  
  function newUser() {
    deleteCookie("firstName");
    document.getElementById("signup").reset();
    updateGreeting();
  }


//validate everything
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }