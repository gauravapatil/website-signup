function validateForm(){
    let name=document.forms["RegForm"]["Name"];
    let email=document.forms["RegForm"]["EMail"];
    let pwd=document.forms["RegForm"]["Password"];
    let confirm=document.forms["RegForm"]["Confirm"];
     console.log(name.value);
    if(name.value==""){
        alert("Please enter your name");
        return false;
    }
    if(email.value==""){
        alert("Please enter your email");
        return false;
    }
    if(pwd.value==""){
        alert("Please enter your password");
        return false;
    }
    if(confirm.value==""){
        alert("Please confirm the enterd password");
        return false;
    }
    if(confirm.value===pwd.value){
        if(registerd()){
            alert("User registerd successfully");
            return true;
        }
        else{
            
            name.value="";
            email.value="";
            pwd.value="";
            confirm.value="";
              return false;
        }
        
    }
    else{
        alert("Enterd Passwords do not match");
        confirm.value="";
            pwd.value="";
        return false;
    }


    return true;
    
}

let data=[];
var userString=localStorage.getItem("usersList");
if(userString){
      data=JSON.parse(userString);
}

function registerd(){
      
    let name=document.forms["RegForm"]["Name"];
    let email=document.forms["RegForm"]["EMail"];
    let pwd=document.forms["RegForm"]["Password"];
    let confirm=document.forms["RegForm"]["Confirm"];

    userObj={
        name:name.value,
        email:email.value,
        password:pwd.value,
        cnf:confirm.value
    }
    
    var userExists = data.some((user) => user.email === userObj.email);
    console.log(userExists);
    if (userExists) {
        return alert("User already exists");
      } else {
        data.push(userObj);
        userString = JSON.stringify(data);
    localStorage.setItem("usersList", userString);
    return true;
       
        
      }
      
    
    

}