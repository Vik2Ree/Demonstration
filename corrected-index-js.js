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
    var businessMgt = document.querySelector('input[name="interested"]:checked').value;

    // Get error message elements
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var locationError = document.getElementById("locationError");
    var monthlySalesError = document.getElementById("monthlySalesError");
    var businessTypeError = document.getElementById("businessTypeError");
    var businessMgtError = document.getElementById("businessMgtError");

    // Define validation constraints
    var constraints = {
        firstNameConstraint: {
            presence: true
        },        
        
        lastNameConstraint: {
            presence: true
        },

        emailConstraint: {
            presence: true
        },

        phoneConstraint: {
            presence: true
        },

        locationConstraint: {
            presence: true
        },

        monthlySalesConstraint: {
            presence: true
        },

        businessTypeConstraint: {
            presence: true
        },

        businessMgtConstraint: {
            presence: true
        }
    }

    // Validate form inputs
    var errors = validate({
        firstNameConstraint: firstName, 
        lastNameConstraint: lastName, 
        emailConstraint: email, 
        phoneConstraint: phone, 
        locationConstraint: location, 
        monthlySalesConstraint: monthlySales,  
        businessTypeConstraint: businessType,
        businessMgtConstraint: businessMgt
    }, constraints);

    if (errors) {
        if (errors.firstNameConstraint) {
                firstNameError.innerHTML = errors.firstNameConstraint[0];
            } else {
                firstNameError.innerHTML = "";
        }

        if (errors.lastNameConstraint) {
                lastNameError.innerHTML = errors.lastNameConstraint[0];
            } else {
                lastNameError.innerHTML = "";
        }

        if (errors.emailConstraint) {
                emailError.innerHTML = errors.emailConstraint[0];
            } else {
                emailError.innerHTML = "";
        }

        if (errors.phoneConstraint) {
                phoneError.innerHTML = errors.phoneConstraint[0];
            } else {
                phoneError.innerHTML = "";
        }

        if (errors.locationConstraint) {
                locationError.innerHTML = errors.locationConstraint[0];
            } else {
                locationError.innerHTML = "";
        }

        if (errors.monthlySalesConstraint) {
                monthlySalesError.innerHTML = errors.monthlySalesConstraint[0];
            } else {
                monthlySalesError.innerHTML = "";
        }

        if (errors.businessTypeConstraint) {
                businessTypeError.innerHTML = errors.businessTypeConstraint[0];
            } else {
                businessTypeError.innerHTML = "";
        }

        if (errors.businessMgtConstraint) {
                businessMgtError.innerHTML = errors.businessMgtConstraint[0];
            } else {
                businessMgtError.innerHTML = "";
        }

        return false;
    }

    // console.log(firstName);

    // Create file content
    var fileContent = "Name: " + firstName + " " + lastName + "\nEmail: " + email + "\nPhone: " + phone + "\nLocation: " + location + "\nMonthly Sales: " + monthlySales + "\nBusiness Type: " + businessType + "\nIntegrate Business Management Soft.?: " + businessMgt;

    // Create file blob
    var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});

    // Save file to device
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "form-input.txt";
    link.click();
}