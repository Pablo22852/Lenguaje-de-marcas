const profileImage = document.getElementById('profileImage');

profileImage.addEventListener('mouseover', () => {
    profileImage.style.boxShadow = '0 0px 100px rgba(246, 20, 20, 0.5)';
    profileImage.src = 'Imagenes/guti.jpg';
});

profileImage.addEventListener('mouseout', () => {
    profileImage.style.boxShadow = 'none';
    profileImage.src = 'https://preview.redd.it/mariano-delgado-cu%C3%A1l-ser%C3%ADa-su-equipo-pok%C3%A9mon-v0-w8o26bh767jd1.jpg?width=333&format=pjpg&auto=webp&s=f5d9758c08f7a5bf4532308891e814e1d4c6ce78';
});


// var nameColorButton = document.getElementById('changeColorName');
// var fullNameH1 = document.getElementById('fullName');


// nameColorButton.addEventListener('click', () => {
//     console.warn("click-----");
//     alert("Ahora el nombre va a cambiar de color");
//     fullNameH1.style= "color: green; font-style: italic;";




//     // const titleName = document.getElementById('fullName');
//     // if(titleName.style.color == ''){
//     //     titleName.style.color = 'red';
//     // } else{
//     //     titleName.style.color = '';
//     // }
// });

// const nameColorButton = document.getElementById("changeColorName");
// const Name = titleName.textContent;
    // const fullNameH1 = document.getElementById('fullName');

// nameColorButton.addEventListener('click', () => {
//     if (fullNameH1.style.color == '') {
//         // fullNameH1.style.color = 'blue';
//         fullNameH1.style= "color: green; font-style: italic;";
//         fullNameH1.textContent= '1ºDAW';
//         // titleName.innerHTML = "</br></br></br>1º DAW";

//     } else {
//         // fullNameH1.style.color = '';
//         fullNameH1.style= '';
//         fullNameH1.textContent= 'Pablo';
//         // titleName.style.color = '';
//         // titleName.innerHTML = "Pablo";

//     }

// });

// const showFormButton = document.getElementById('showFormButton');
// const contactForm = document.getElementById('contactForm');

//     showFormButton.addEventListener('click', () => {
//     if (contactForm.style.display === 'none') {
//         contactForm.style.display = 'block';
//         showFormButton.textContent = "Hide Form";
//     } else {
//         contactForm.style.display = 'none';
//         showFormButton.textContent = "Contact Me";
//     }
// });

    const OcultarNameButton = document.getElementById('changeColorName');
    OcultarNameButton.addEventListener('click', () => {
    console.warn('click-');
    if (titleName.style.display === "block") {
        titleName.style.display = "none";
    } else {
        titleName.style.display = "block";
    }
    });

