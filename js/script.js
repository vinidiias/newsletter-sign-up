const mainContainer = document.querySelector('.main-container');
const successContainer = document.querySelector('.success-container');
const rightContainer = document.querySelector('.right');
const leftContainer = document.querySelector('.left');
const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#error');
const emailValid = document.querySelector('#emailValid');

setInterval(changeImage, 10); // 10.000 milissegundos = 10 segundos

var count = 0;
function changeImage() {
    var image = document.getElementById('photo');

    if(window.matchMedia("(max-width: 650px)").matches) {
        mainContainer.style.borderRadius = "0";
        image.src = "assets/images/illustration-sign-up-mobile.svg";
        rightContainer.style.gridArea = 'right';
        leftContainer.style.gridArea = 'left';
        mainContainer.style.gridTemplateAreas = "'right' 'left'";
        mainContainer.style.gridTemplateColumns = "auto";
        rightContainer.style.marginLeft = "0";
        mainContainer.style.height = "100%";
        mainContainer.style.padding = "1px 1px 1px 1px";
        rightContainer.style.width = "auto";
        rightContainer.style.height= "auto";

    }
    else if(window.matchMedia("(min-width:651px)").matches) {
        image.src = "assets/images/illustration-sign-up-desktop.svg";
        mainContainer.style.gridTemplateColumns = "1fr 1fr";
        mainContainer.style.gridTemplateAreas = "none";
        mainContainer.style.borderRadius = "30px";
        rightContainer.style.marginLeft = "auto";
        mainContainer.style.padding = "20px 20px 20px 60px";
        rightContainer.style.gridArea = "auto";
        leftContainer.style.gridArea = "auto";
        rightContainer.style.marginLeft = "auto";
        console.log('maior que 400');
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o email é vazio
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        emailError.style.display = "inline";
        emailInput.style.background = "hsla(4, 100%, 67%, 0.144";
        emailInput.style.color = "hsl(4, 100%, 67%)";
        emailInput.style.border = "2px solid hsl(4, 100%, 67%)";
        
        emailInput.addEventListener("onFocus", (event) => {
            emailInput.style.borderColor = "yellow";
        });

        return;
    }
    emailValid.innerHTML = emailInput.value;
    mainContainer.style.display = "none";
    successContainer.style.display = "flex";

    form.submit();
});



function chanceColor() {
    emailInput.style.border = "2px solid hsl(4, 100%, 67%)";
}

// funcao que valida
function isEmailValid(email) {
    // cria uma regex
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

function returnPage(){
    successContainer.style.display = "none";
    mainContainer.style.display = "grid";

    emailInput.value = "";
    emailInput.style.border = "1px solid hsl(231, 7%, 60%)";
    emailInput.style.background = "white";
    emailInput.style.color = "hsl(231, 7%, 60%)";
    
    emailError.style.display ="none";
}