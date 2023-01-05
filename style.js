
function getname(){
    let name =document.getElementById("name").value
    let error ="";
    let validName=""
        if(name == ""){
            error="Name is required"
            validName=""
        }
        else if(name.length < 10){
            error= "Invalid Name"
            validName=""
        }
        else{
            validName=name
        }

        document.getElementById("validName").innerHTML=validName
        document.getElementById("nameError").innerHTML=error

}

function getnumber(){
    let number =document.getElementById("number").value
    let error = ""
    let validNumber=""

    if (number == ""){
        error = "Phone Number is required"
        validNumber=""
    }

    else if (number.length !=11){
        error= "Invalid Phone Number"
        validNumber =""
    }

    else{
        validNumber = number
    }

    document.getElementById("numberError").innerHTML = error;
    document.getElementById("validNumber").innerHTML= validNumber;
}


function getemail(){
    let email =document.getElementById("email").value
    let error =""
    let validEmail= ""

    if (email == ""){
        error= "Email is required"
        validEmail
    }

    else if (email.includes("@") == false || email.includes(".") == false){
        error= "Invalid Email"
        validEmail =""
    }

    else{
        validEmail = email
    }

    document.getElementById("emailError").innerHTML = error;
    document.getElementById("validEmail").innerHTML= validEmail;
}

function getpassword(){

    let password = document.getElementById("password").value
    let error = ""
    let validPassword = ""

    if(password == ""){
        error = "Password is required"
        validPassword = ""
    }

    else if(password == "password" ){
        error= "You can't use password that's not belong to you";
        validPassword =""

    }

    else if(password.length < 10){
        error ="Password must be at least 10 characters"
        validPassword =""
    }

    else {
        validPassword = password
    }

    document.getElementById("passwordError").innerHTML = error;

}

function getconfirm(){

    let confirm =document.getElementById("confirm").value;
    let error =""
    let validConfirm =""

    if(confirm == ""){
        error= "Confirm password is required";
        validConfirm =""
    }
    else if(document.getElementById("password").value != confirm){
    error="Password is not matched"
   
}
     else{
          error="Password is matched";
         document.getElementById("confirmError").style.display="none";
 }
    
    document.getElementById("confirmError").innerHTML = error; 
}
