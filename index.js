var openButtons = document.querySelectorAll(".open-popup");
var closeButton = document.querySelector(".close-popup");
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
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var location = document.getElementById("location").value;
    var monthlySales = document.getElementById("monthlySales").value;
    var businessType = document.getElementById("businessType").value;

    // Get error message elements
    var firstName = document.getElementById("firstNameError");
    var lastName = document.getElementById("lastNameError");
    var email = document.getElementById("emailError");
    var phone = document.getElementById("phoneError");
    var location = document.getElementById("locationError");
    var monthlySales = document.getElementById("monthlySalesError");
    var businessType = document.getElementById("businessTypeError");

    // Define validation constraints
    var constraints = {
        firstName: {
            presence: true,
            length: {
                maximum: 10,
                message: "must not be more than 10 characters."
            }
        },        
        
        lastName: {
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

        phone: {
            presence: true
        },

        location: {
            presence: true
        },

        monthlySales: {
            presence: true
        },

        businessType: {
            presence: true
        }
    }

    // Validate form inputs
    var errors = validate({firstName: firstName, lastName: lastName, email: email, phone: phone, location: location, monthlySales: monthlySales,  businessType: businessType}, constraints);

    if (errors) {
        if (errors.firstName) {
            firstNameError.innerHTML = errors.firstName[0];
        } else {
            firstNameError.innerHTML = "";
        }

        if (errors.lastName) {
            lastNameError.innerHTML = errors.lastName[0];
        } else {
            lastNameError.innerHTML = "";
        }

        if (errors.email) {
            emailError.innerHTML = errors.email[0];
        } else {
            emailError.innerHTML = "";
        }

        if (errors.phone) {
            phoneError.innerHTML = errors.phone[0];
        } else {
            phoneError.innerHTML = "";
        }

        if (errors.location) {
                    messageError.innerHTML = errors.location[0];
                } else {
                    locationError.innerHTML = "";
                }

        if (errors.monthlySales) {
                    messageError.innerHTML = errors.monthlySales[0];
                } else {
                    monthlySalesError.innerHTML = "";
                }

        if (errors.businessType) {
                    messageError.innerHTML = errors.businessType[0];
                } else {
                    businessTypeError.innerHTML = "";
                }

        return false;
    }

    // Create file content
    var fileContent = "Name: " + firstName + lastName+ "\nEmail: " + email + "\nPhone: " + phone + "\nLocation: " + location + "\nMonthly Sales: " + monthlySales+ "\nBusiness Type: " + businessType;

    // Create file blob
    var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});

    // Save file to device
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "form-input.txt";
    link.click();
}