export function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // console.log(inputText)

    if (inputText.match(mailformat)) {
        // alert("Valid email address!");

        return true;
    }
    else {
        // alert("You have entered an invalid email address!");

        return false;
    }
}

export function CheckPassword(inputtxt) {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (inputtxt.match(passw)) {
        // alert('Correct, try another...')
        return true;
    }
    else {
        // alert('Wrong...!')
        return false;
    }
}