var openButtons = document.querySelectorAll(".openPopup");
var closeButton = document.querySelectorAll(".closePopup");
var popup = document.querySelector(".popup");
var overlay = document.querySelector(".overlay");

// Add click event listeners to all open buttons
openButtons.forEach(function(button) {
    button.addEventListener("click", function() {
event.preventDefault();
        popup.style.display = "block";
        overlay.style.display = "block";
        popup.focus();
    });
});

// Add click event listener to all close button
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
        overlay.style.display = "none";
    });

// Add click event listener to the overlay
overlay.addEventListener("click", function() {
    popup.style.display = "none";
    overlay.style.display = "none";
});

// Form Validation
function downloadInput(event) {
    event.preventDefault();

    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var country = document.getElementById("country").value;

    // Get error message elements
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
    var countryError = document.getElementById("messageError");

    // Define validation constraints
    var constraints = {
        name: {
            presence: true,
            length: {
                maximum: 10,
                message: "must not be more than 10 characters."
            }
        },
        email: {
            presence: true,
            email: true
        },
        message: {
            presence: true,
            length: {
                maximum: 25,
                message: "must not be more than 25 characters."
            }
        },
country: {
            presence: true
        }
    };

    // Validate form inputs
    var errors = validate({name: name, email: email, message: message, country: country}, constraints);

    if (errors) {
        if (errors.name) {
            nameError.innerHTML = errors.name[0];
        } else {
            nameError.innerHTML = "";
        }

        if (errors.email) {
            emailError.innerHTML = errors.email[0];
        } else {
            emailError.innerHTML = "";
        }

        if (errors.message) {
            messageError.innerHTML = errors.message[0];
        } else {
            messageError.innerHTML = "";
        }

if (errors.country) {
            messageError.innerHTML = errors.country[0];
        } else {
            messageError.innerHTML = "";
        }

        return false;
    }

    // Create file content
    var fileContent = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message + "\nCountry: " + country;

    // Create file blob
    var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});

    // Save file to device
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "form-input.txt";
    link.click();
}

var navigationDropdown = document.querySelector('#site-header .navigation-dropdown');
    
var menuButton = document.querySelector('#site-header .menu-button');
menuButton.addEventListener('click', function() {
  console.log(888);
  navigationDropdown.classList.add('open');
});

var navigationDropdownCloseButton = document.querySelector('#site-header .navigation-dropdown .close-button');
navigationDropdownCloseButton.addEventListener('click', function() {
  navigationDropdown.classList.remove('open');
});