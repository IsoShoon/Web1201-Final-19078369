function valregi() {

    var login = document.getElementById("login").value;
    var loginvalidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]/;
    if (!(login.match(loginvalidRegex))){
        alert("Please enter a valid login address!")
        return false
    }
    else{
        alert("Welcome to the pepega !")
    }
}
    
    