const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const btnEl = document.getElementById("btn")
let firstPassword = document.getElementById("password-option-1")
let secondPassword = document.getElementById("password-option-2")
let reset = ""

function passwords() {
    for (let password1 = 0; password1 < 15; password1++){
        let password1 = Math.floor(Math.random() * 91)
        password1 = characters[password1]
        firstPassword.innerText += password1;
    }
    for (let password2 = 0; password2 < 15; password2++){
        let password2 = Math.floor(Math.random() * 91)
        password2 = characters[password2]
        secondPassword.innerText += password2;
    }
    isFull = true;
}


btnEl.addEventListener("click", function() {
    passwords()
    clear()
})

function clear() {
    if (isFull === true) {
        firstPassword.textContent = reset
        secondPassword.textContent = reset
    }
    passwords()
}


// COPY ON CLICK FUNCTIONS
firstPassword.addEventListener("click", function() {
    navigator.clipboard.writeText(firstPassword.textContent)
});
secondPassword.addEventListener("click", function() {
    navigator.clipboard.writeText(secondPassword.textContent)
});