document.addEventListener("DOMContentLoaded", function(){
    const number = document.getElementById("number");

    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const reset = document.getElementById("reset");


    let count = 0;
    plus.addEventListener("click", () =>{
        count++;
        number.innerHTML = count;
    });

    minus.addEventListener("click", () => {
        if(count !== 0){
            count--;
            number.innerHTML = count;
        }
    });

    reset.addEventListener("click", () =>{
        count = 0;
        number.innerHTML = count;
    });
});