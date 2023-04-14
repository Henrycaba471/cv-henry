// *Menu amburguer
function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector(".nav").classList.toggle("navBar");
}

// * giving funcionality the contact
const sources = ['assets/images/denied.png', 'assets/images/whatsapp.svg', 'assets/images/correo.svg'];

const imgContact = document.getElementById('ico-contact');
const select = document.getElementById('medio-contact');
const formCorreo = document.querySelector('.correo');
const formWs = document.querySelector('.whatsapp');

select.addEventListener('change', e => {
    if(select.value === 'Select'){
        imgContact.src = sources[0];
        formCorreo.style.display = 'none';
        formWs.style.display = 'none';
        return;
    }
    if(select.value === 'Whatsapp'){
        imgContact.src = sources[1];
        formCorreo.style.display = 'none';
        formWs.style.display = 'flex';
        return;
    }
    if(select.value === 'Email'){
        imgContact.src = sources[2];
        formCorreo.style.display = 'flex';
        formWs.style.display = 'none';
        return;
    }
});

// *Envio de mensaje por correo
const sendMail = document.getElementById('send-mail');
const sendWp = document.getElementById('send-wp');
const nameUser = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function validarCorreoElectronico(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

sendMail.addEventListener('click', (e) => {
    e.preventDefault();
    if (subject.value.trim() === '' || message.value.trim() === '' || email.value.trim() === '') {
        return alert('Por favor, complete todos los campos requeridos');
    }
    const url = `mailto:henrycaba471@gmail.com?subject=${subject.value}&body=${message.value} Atentamente ${nameUser.value}`;
    if(validarCorreoElectronico(email.value) === false) {
        return alert("El correo ingresado no es valido");
    }
    nameUser.value = '';
    subject.value = '';
    message.value = '';
    email.value = '';
    window.open(url);
});

//* envio de mensaje por whatsapp
const messageWp = document.getElementById('msg-wp');
sendWp.addEventListener('click', (e) => {
    e.preventDefault();
    if (messageWp.value.trim() === '') {
        return alert('Por favor, complete todos los campos requeridos');
    }
    console.log('mensaje enviado');
    const url = `https://api.whatsapp.com/send?phone=573103743563&text=${messageWp.value}`;
    messageWp.value = '';
    window.open(url);
});

const navMenu = document.querySelectorAll('.nav-menu');
const menuToggle = document.querySelector('.nav-mobile');

navMenu.forEach(e => {
    e.addEventListener('click', e => {
        menuToggle.classList.toggle("change");
        document.querySelector(".nav").classList.toggle("navBar");
    });
});

/*
3203186875 2000
3144778983 2000
*/
