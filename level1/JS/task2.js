document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("contactForm");

    const fName =  document.getElementById("fName");
    const lName =  document.getElementById("lName");
    const phone =  document.getElementById("phone");
    const email =  document.getElementById("email");
    const password =  document.getElementById("password");

    const errorFName =  document.getElementById("errorFName");
    const errorLName =  document.getElementById("errorLName");
    const errorPhone =  document.getElementById("errorPhone");
    const errorEmail =  document.getElementById("errorEmail");
    const errorPassword =  document.getElementById("errorPassword");

    const formSuccess =  document.getElementById("formSuccess");
    const checkBtn = document.getElementById("checkBtn");


    const nameRegex = /^[A-Z][a-z]{1,}$/;
    const phoneRegex = /^01[0125][0-9]{8}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_\-+=])[A-Za-z0-9!@#$%^&*()_\-+=]{8,}$/;

    function showError(field, errorElement, msg){
        errorElement.innerHTML = msg;
        errorElement.style.color = "red";
        errorElement.style.display = "inline";
    }

    function showHint (field, errorElement, msg){
        errorElement.innerHTML = msg;
        errorElement.style.color = "gray";
        errorElement.style.display = "inline";
    }

    function hideMsg(errorElement){
        errorElement.style.display = "none";
    }

    function validateField(field, regex, errorElement, errorMsg){
        if(field.value.trim() === ""){
            showError(field, errorElement, "This field is required");
            return false;
        }
        else if(!regex.test(field.value.trim())){
            showError(field, errorElement, errorMsg);
            return false;
        }
        else{
            hideMsg(errorElement);
            return true;
        }
    }

    // Real-time validation
    fName.addEventListener("input", () => validateField(fName, nameRegex, errorFName, "First Name must start with capital and have at least 2 letters"));
    lName.addEventListener("input", () => validateField(lName, nameRegex, errorLName, "Last Name must start with capital and have at least 2 letters"));
    phone.addEventListener("input", () => validateField(phone, phoneRegex, errorPhone, "Enter a valid Egyptian phone number"));
    email.addEventListener("input", () => validateField(email, emailRegex, errorEmail, "Enter a valid email"));
    password.addEventListener("input", () => validateField(password, passwordRegex, errorPassword, "Password must have capital, small, number, special char, min 8 chars"));

    // Focus events (show hints)
    fName.addEventListener("focus", () => {if (fName.value.trim() === ""){ showHint(fName, errorFName, "Start with capital, at least 2 letters")}});
    lName.addEventListener("focus", () => {if (lName.value.trim() === ""){ showHint(lName, errorLName, "Start with capital, at least 2 letters")}});
    phone.addEventListener("focus", () => {if (phone.value.trim() === ""){ showHint(phone, errorPhone, "Egyptian number: 01 + 0/1/2/5 + 8 digits")}});
    email.addEventListener("focus", () => {if (email.value.trim() === ""){ showHint(email, errorEmail, "Example: example@gmail.com")}});
    password.addEventListener("focus", () => {if (password.value.trim() === ""){ showHint(password, errorPassword, "Password must have capital, small, number, special char, min 8 chars")}});

    // blur events (validate on exit)
    fName.addEventListener("blur", () => validateField(fName, nameRegex, errorFName, "First Name must start with capital and have at least 2 letters"));
    lName.addEventListener("blur", () => validateField(lName, nameRegex, errorLName, "Last Name must start with capital and have at least 2 letters"));
    phone.addEventListener("blur", () => validateField(phone, phoneRegex, errorPhone, "Enter a valid Egyptian phone number"));
    email.addEventListener("blur", () => validateField(email, emailRegex, errorEmail, "Enter a valid email"));
    password.addEventListener("blur", () => validateField(password, passwordRegex, errorPassword, "Password must have capital, small, number, special char, min 8 chars"));


    checkBtn.addEventListener("click", function() {
        formSuccess.style.display = "none";
        formSuccess.innerHTML = "";

        const validFName = validateField(fName, nameRegex, errorFName, "First Name must start with capital and have at least 2 letters");
        const validLName = validateField(lName, nameRegex, errorLName, "Last Name must start with capital and have at least 2 letters");
        const validPhone = validateField(phone, phoneRegex, errorPhone, "Enter a valid Egyptian phone number");
        const validEmail = validateField(email, emailRegex, errorEmail, "Enter a valid Email");
        const validPassword = validateField(password, passwordRegex, errorPassword, "Password must have capital, small, number, special char, min 8 chars");

        if (validFName && validLName && validPhone && validEmail && validPassword) {
            formSuccess.style.color = "green";
            formSuccess.innerHTML = "Form submitted successfully";
            formSuccess.style.display = "inline";
        }
    });

});

