function val() {

    var email = document.getElementById("Email").value;
    var EmailvalidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]/;
    if (!(email.match(EmailvalidRegex))){
        alert("Please enter a valid email address!")
        return false
    }
    else{
        alert("Thank you for your feedback ! We will get back to you soon.")
    }
}
    
    