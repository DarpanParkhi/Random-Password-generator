const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click", ()=>{
    createPassword()
});

copyIconEl.addEventListener("click", ()=>{
    copyPassword()
    if(inputEl.value){
        alertContainerEl.classList.remove("active"); //for getting notification "if" ther is anything in the input box
        setTimeout(()=>{
            alertContainerEl.classList.add("active");
        }, 2000);
    }
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)  //for crateating random password
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!" //it will show password in notification(alertContainer) 
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999); //for working in mobile devices
    navigator.clipboard.writeText(inputEl.value); //for copy the password
}