document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("contactForm");

    const fName = document.getElementById("fName");
    const lName = document.getElementById("lName");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const checkBtn = document.getElementById("checkBtn");

    const errorFName = document.getElementById("errorFName");
    const errorLName = document.getElementById("errorLName");
    const errorPhone = document.getElementById("errorPhone");
    const errorEmail = document.getElementById("errorEmail");
    const errorPassword = document.getElementById("errorPassword");

    const formSuccess = document.getElementById("formSuccess");

    //Name should start with Capital Letter and only contain letters
    const nameRegex = /^[A-Z][a-z]{1,}$/; 

    //Egypt phone numbers should start with 01 and then 0/1/2/5 and then 8 numbers
    const phoneRegex = /^01[0125][0-9]{8}$/; 

    //email should start with string and then @ then string (gmail/ yahoo) then . then string
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; 

    //Password should have capital letters, small letters, numbers,  and should be more than 7 letters
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[.-_=#@$%&*])[A-Za-z0-9.-_=#@$%&*]{8,}$/; 

    
    checkBtn.addEventListener("click",function(e){
        formSuccess.style.display = "none"; 
        formSuccess.innerHTML = "";

        if(!nameRegex.test(fName.value.trim())){
            errorFName.innerHTML = "Please enter a valid first name (Capital first letter, small letters, min 2).";
            errorFName.style.display = "inline";
            fName.focus();
            return;
        }else {
            errorFName.style.display = "none"; 
        }

        if(!nameRegex.test(lName.value.trim())){
            errorLName.innerHTML = "Please enter a valid first name (Capital first letter, small letters, min 2).";
            errorLName.style.display = "inline";
            lName.focus();
            return;
        }else {
            errorLName.style.display = "none"; 
        }

        if(!phoneRegex.test(phone.value.trim())){
            errorPhone.innerHTML = "Please enter a valid Egyptian phone number (01 then (0/1/2/5) then 8 numbers).";
            errorPhone.style.display = "inline";
            phone.focus();
            return;
        }else {
            errorPhone.style.display = "none"; 
        }

        if(!emailRegex.test(email.value.trim())){
            errorEmail.innerHTML = "Please enter a valid Email.";
            errorEmail.style.display = "inline";
            email.focus();
            return;
        }else {
            errorEmail.style.display = "none"; 
        }

        if(!passwordRegex.test(password.value.trim())){
            errorPassword.innerHTML = "Please enter a valid Password (should have capital letters, small letters, numbers, character and should be more than 7 letters)";
            errorPassword.style.display = "inline";
            password.focus();
            return;
        }else {
            errorPassword.style.display = "none"; 
        }

        formSuccess.innerHTML = "Form submitted successfully";
        formSuccess.style.display = "inline"; 
    })
})