var users = JSON.parse(localStorage.getItem("usersList"));
function validateForm(){
    
    let email=document.forms["RegForm"]["EMail"];
    let pwd=document.forms["RegForm"]["Password"];
    
     
    
    
    if(email.value==""){
        alert("Please enter your email");
        return false;
    }
    if(pwd.value==""){
        alert("Please enter your password");
        return false;
    }
   

    var userExists = users.some((user) => user.email === email.value && user.password===pwd.value);
    console.log(userExists);
    if(userExists){
        alert("Login successful");
        return true;
    }
    else{
        alert("Invalid Credentials");
        return false;
    }
}
