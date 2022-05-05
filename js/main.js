const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const iconEye = document.querySelector(".icon-eye");

form.addEventListener('submit', e=>{
    e.preventDefault();
    checkInputs();
} );

function checkInputs(){
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (usuarioValue === ''){
     setErrorFor(usuario,'Ingresar un usuario');
    }else{
     setSuccessFor(usuario);
    }

    if (emailValue === ''){
        setErrorFor(email,'Ingrese un correo');
    }else if (!isEmail(emailValue)){
        setErrorFor(email,'Ingrese correo valido');
    }else{
        setSuccessFor(email);
    }

    if (passwordValue === ''){
        setErrorFor(password,'Ingrese contraseña');
    }else{
        setSuccessFor(password);
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}



function isEmail(email){
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);

}

iconEye.addEventListener("click", function(){
 if(this.nextElementSibling.type === "password"){
     this.nextElementSibling.type = "text";    
 }else{
    this.nextElementSibling.type = "password";
 }
});