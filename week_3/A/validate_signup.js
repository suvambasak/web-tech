// Validation function.
function validate() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmpassword').value;


    // Empty report.
    // var emptyReport = 'The following fields must be filled out:';
    // var emptyFlag = false;
    // if ('' === firstName) {
    //     emptyFlag = true;
    //     emptyReport += '\n First Name:';
    // }
    // if ('' === lastName) {
    //     emptyFlag = true;
    //     emptyReport += '\n Last Name:';
    // }
    // if ('' === email) {
    //     emptyFlag = true;
    //     emptyReport += '\n Email:';
    // }
    // if ('' === username) {
    //     emptyFlag = true;
    //     emptyReport += '\n Username:';
    // }
    // if ('' === password) {
    //     emptyFlag = true;
    //     emptyReport += '\n Password:';
    // }
    // if ('' === confirmPassword) {
    //     emptyFlag = true;
    //     emptyReport += '\n confirm Password:';
    // }
    // if (emptyFlag) {
    //     alert(emptyReport);
    //     return;
    // }

    validEmail(email);
    validUsername(username);
    validPassword(password,confirmPassword);

}


function validEmail(email){
    if (email.length > 60){
        alert('Email length exceed.');
        return false;
    }
}

function validUsername(username){
    if (username.length > 40){
        alert('Username length exceed.');
        return false;
    }
}

function validPassword(password,confirmPassword){
    if (8 != password.length){
        alert('Password length must be 8 character long.');
        return false;
    }
    if(password != confirmPassword){
        alert('Confirmation password does not match!');
        return false;
    }
}