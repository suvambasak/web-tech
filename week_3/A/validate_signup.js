// Validation function.
function validate() {
    // Taking all data from the form.
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmpassword').value;


    // Empty report.
    var emptyReport = 'The following fields must be filled out:';
    var emptyFlag = false;
    if ('' === firstName) {
        emptyFlag = true;
        emptyReport += '\n First Name:';
    }
    if ('' === lastName) {
        emptyFlag = true;
        emptyReport += '\n Last Name:';
    }
    if ('' === email) {
        emptyFlag = true;
        emptyReport += '\n Email:';
    }
    if ('' === username) {
        emptyFlag = true;
        emptyReport += '\n Username:';
    }
    if ('' === password) {
        emptyFlag = true;
        emptyReport += '\n Password:';
    }
    if ('' === confirmPassword) {
        emptyFlag = true;
        emptyReport += '\n confirm Password:';
    }
    if (emptyFlag) {
        alert(emptyReport);
        return;
    }

    // Validation of all field.
    if (validEmail(email) && validUsername(username) && validPassword(password, confirmPassword)) {

        // Showing
        alert(`Your info
        First name : ${firstName}
        Last name : ${lastName}
        Email : ${email}
        Username : ${username}
        Password : Valid
    \nAre you sure to signup?`);
    }

}

// function to validate username
function validEmail(email) {
    // length check
    if (email.length > 60) {
        alert('Email length exceed!');
        return false;
    }

    // validate email.
    var regx = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]+)(.[a-z]+)?$/;
    if (regx.test(email))
        return true;

    alert('Invalid Email!');
    return false;

}

// function to validate username
function validUsername(username) {
    // length check
    if (username.length > 40) {
        alert('Username length exceed!');
        return false;
    }

    // validate username
    var regx = /^([a-z\.-]+)([0-9]+)?$/;
    if (regx.test(username))
        return true;

    alert('Invalid Username!');
    return false;
}

// Function to validate password
function validPassword(password, confirmPassword) {
    // length.
    if (8 != password.length) {
        alert('Password length must be 8 character long.');
        return false;
    }
    // Match with confirm password.
    if (password != confirmPassword) {
        alert('Confirmation password does not match!');
        return false;
    }

    // Strength of the password.
    var alpha = /[a-zA-Z]+/;
    var num = /[0-9]+/;
    var special = /[!@#$%^&*()_+=`~]+/;

    if (alpha.test(password) && num.test(password) && special.test(password))
        return true;

    alert('Weak password!\n Use alphabet, digits and special characters.');
    return false;
}