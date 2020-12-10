//Grab the containers and add the innerhtml
const containerNavSumate = document.querySelector('#leftNavContainerSumate');
const containerNavNosotros = document.querySelector('#leftNavContainerNosotros');
const containerNavExperiencias = document.querySelector('#leftNavContainerExperiencias');
const containerNavGaleria = document.querySelector('#leftNavContainerGaleria');
const containerNavContacto = document.querySelector('#leftNavContainerContacto');

const itemContainerHome = document.createElement("div");
//MATERIAL iCON
//itemContainerHome.innerHTML = '<a class="leftLink" href="#inicio"><span class="material-icons left-navbar">home</span></a>'

const itemContainerUs = document.createElement('div');
//MATERIAL iCON
//itemContainerUs.innerHTML = '<a class="leftLink" href="#nosotros"><span class="material-icons left-navbar">perm_identity</span></a>'

const itemContainerExper = document.createElement('div');
//MATERIAL iCON
//itemContainerExper.innerHTML = '<a class="leftLink" href="#experiencias"><span class="material-icons left-navbar">local_bar</span></a>';

const itemContainerGaleria = document.createElement('div');
//MATERIAL iCON
//itemContainerGaleria.innerHTML = '<a class="leftLink" href="#galeria"><span class="material-icons left-navbar">camera_alt</span></a>';

const itemContainerContact = document.createElement('div');
//MATERIAL iCON
//itemContainerContact.innerHTML = '<a class="leftLink" href="#contacto"><span class="material-icons left-navbar">insert_comment</span></a>';



window.addEventListener('scroll', function(e){
    if(window.scrollY < 400){
        containerNavSumate.appendChild(itemContainerHome);
        containerNavSumate.appendChild(itemContainerUs);
        containerNavSumate.appendChild(itemContainerExper);
        containerNavSumate.appendChild(itemContainerGaleria);
        containerNavSumate.appendChild(itemContainerContact);
        itemContainerHome.className = 'd-flex justify-content-center color--naranja';
        itemContainerHome.innerHTML = '<a class="leftLink" href="#inicio"><img src="./img/casa.png"/></a>'
        itemContainerUs.className = 'd-flex justify-content-center color--blanco';
        itemContainerUs.innerHTML = '<a class="leftLink" href="#nosotros"><img src="./img/personaGris.png"/></a>'
        itemContainerExper.className = 'd-flex justify-content-center color--blanco';
        itemContainerExper.innerHTML = '<a class="leftLink" href="#experiencias"><img src="./img/tragoGris.png"/></a>';
        itemContainerGaleria.className = 'd-flex justify-content-center color--blanco';
        itemContainerGaleria.innerHTML = '<a class="leftLink" href="#galeria"><img src="./img/fotosGris.png"></a>';
        itemContainerContact.className = 'd-flex justify-content-center color--blanco';
        itemContainerContact.innerHTML = '<a class="leftLink" href="#contacto"><img src="./img/commentGris.png"></a>';
    } else if(window.scrollY >= 400 && window.scrollY < 1200){
        containerNavNosotros.appendChild(itemContainerHome);
        containerNavNosotros.appendChild(itemContainerUs);
        containerNavNosotros.appendChild(itemContainerExper);
        containerNavNosotros.appendChild(itemContainerGaleria);
        containerNavNosotros.appendChild(itemContainerContact);
        itemContainerHome.className = 'd-flex justify-content-center color--blanco';
        itemContainerHome.innerHTML = '<a class="leftLink" href="#inicio"><img src="./img/casaGris.png"/></a>'
        itemContainerUs.className = 'd-flex justify-content-center color--naranja';
        itemContainerUs.innerHTML = '<a class="leftLink" href="#nosotros"><img src="./img/persona.png"/></a>'
        itemContainerExper.className = 'd-flex justify-content-center color--blanco';
        itemContainerExper.innerHTML = '<a class="leftLink" href="#experiencias"><img src="./img/tragoGris.png"/></a>';
        itemContainerGaleria.className = 'd-flex justify-content-center color--blanco';
        itemContainerGaleria.innerHTML = '<a class="leftLink" href="#galeria"><img src="./img/fotosGris.png"></a>';
        itemContainerContact.className = 'd-flex justify-content-center color--blanco';
        itemContainerContact.innerHTML = '<a class="leftLink" href="#contacto"><img src="./img/commentGris.png"></a>';
    } else if(window.scrollY >= 700 && window.scrollY < 1900){
        containerNavExperiencias.appendChild(itemContainerHome);
        containerNavExperiencias.appendChild(itemContainerUs);
        containerNavExperiencias.appendChild(itemContainerExper);
        containerNavExperiencias.appendChild(itemContainerGaleria);
        containerNavExperiencias.appendChild(itemContainerContact);
        itemContainerHome.className = 'd-flex justify-content-center color--blanco';
        itemContainerHome.innerHTML = '<a class="leftLink" href="#inicio"><img src="./img/casaGris.png"/></a>'
        itemContainerUs.className = 'd-flex justify-content-center color--blanco';
        itemContainerUs.innerHTML = '<a class="leftLink" href="#nosotros"><img src="./img/personaGris.png"/></a>'
        itemContainerExper.className = 'd-flex justify-content-center color--naranja';
        itemContainerExper.innerHTML = '<a class="leftLink" href="#experiencias"><img src="./img/trago.png"/></a>';
        itemContainerGaleria.className = 'd-flex justify-content-center color--blanco';
        itemContainerGaleria.innerHTML = '<a class="leftLink" href="#galeria"><img src="./img/fotosGris.png"></a>';
        itemContainerContact.className = 'd-flex justify-content-center color--blanco';
        itemContainerContact.innerHTML = '<a class="leftLink" href="#contacto"><img src="./img/commentGris.png"></a>';
    } else if(window.scrollY >= 1500 && window.scrollY < 2800){
        containerNavGaleria.appendChild(itemContainerHome);
        containerNavGaleria.appendChild(itemContainerUs);
        containerNavGaleria.appendChild(itemContainerExper);
        containerNavGaleria.appendChild(itemContainerGaleria);
        containerNavGaleria.appendChild(itemContainerContact);
        itemContainerHome.className = 'd-flex justify-content-center color--blanco';
        itemContainerHome.innerHTML = '<a class="leftLink" href="#inicio"><img src="./img/casaGris.png"/></a>'
        itemContainerUs.className = 'd-flex justify-content-center color--blanco';
        itemContainerUs.innerHTML = '<a class="leftLink" href="#nosotros"><img src="./img/personaGris.png"/></a>'
        itemContainerExper.className = 'd-flex justify-content-center color--blanco';
        itemContainerExper.innerHTML = '<a class="leftLink" href="#experiencias"><img src="./img/tragoGris.png"/></a>';
        itemContainerGaleria.className = 'd-flex justify-content-center color--naranja';
        itemContainerGaleria.innerHTML = '<a class="leftLink" href="#galeria"><img src="./img/fotos.png"></a>';
        itemContainerContact.className = 'd-flex justify-content-center color--blanco';
        itemContainerContact.innerHTML = '<a class="leftLink" href="#contacto"><img src="./img/commentGris.png"></a>';
    } else if(window.scrollY >= 2300){
        containerNavContacto.appendChild(itemContainerHome);
        containerNavContacto.appendChild(itemContainerUs);
        containerNavContacto.appendChild(itemContainerExper);
        containerNavContacto.appendChild(itemContainerGaleria);
        containerNavContacto.appendChild(itemContainerContact);
        itemContainerHome.className = 'd-flex justify-content-center color--blanco';
        itemContainerHome.innerHTML = '<a class="leftLink" href="#inicio"><img src="./img/casaGris.png"/></a>'
        itemContainerUs.className = 'd-flex justify-content-center color--blanco';
        itemContainerUs.innerHTML = '<a class="leftLink" href="#nosotros"><img src="./img/personaGris.png"/></a>'
        itemContainerExper.className = 'd-flex justify-content-center color--blanco';
        itemContainerExper.innerHTML = '<a class="leftLink" href="#experiencias"><img src="./img/tragoGris.png"/></a>';
        itemContainerGaleria.className = 'd-flex justify-content-center color--blanco';
        itemContainerGaleria.innerHTML = '<a class="leftLink" href="#galeria"><img src="./img/fotosGris.png"></a>';
        itemContainerContact.className = 'd-flex justify-content-center color--naranja';
        itemContainerContact.innerHTML = '<a class="leftLink" href="#contacto"><img src="./img/comment.png"></a>';
    }
})


//boton
const boton = document.querySelector('.button__styled');
boton.addEventListener('click', function(){
    window.scrollTo(0, 3500);
})

//Experiencias
const infoRegular = document.querySelector('.infoRegular');
const barraRegular = document.querySelector(".barraRegular");
infoRegular.addEventListener('click', function(){
    barraRegular.className = 'barraRegularOnHover rounded mx-auto'
})

if(window.innerWidth > 768){
    barraRegular.addEventListener('mouseleave', function(){
        setTimeout(function(){
            barraRegular.className = 'barraRegular rounded mx-auto'
        }, 2000)
    })
} else if(window.innerWidth < 768) {
    barraRegular.addEventListener('mouseleave', function(){
        barraRegular.className = 'barraRegular rounded mx-auto'
    })
}

const infoPremium = document.querySelector('.infoPremium');
const barraPremium = document.querySelector('.barraPremium')
infoPremium.addEventListener('click', function(){
    barraPremium.className = 'barraPremiumOnHover rounded mx-auto';
})

if(window.innerWidth > 768){
    barraPremium.addEventListener('mouseleave', function(){
        setTimeout(function(){
            barraPremium.className = 'barraRegular rounded mx-auto'
        }, 2000)
    })
} else if(window.innerWidth < 768) {
    barraPremium.addEventListener('mouseleave', function(){
        barraPremium.className = 'barraRegular rounded mx-auto'
    })
}

const infoExclusiva = document.querySelector('.infoExclusiva');
const barraExclusiva = document.querySelector('.barraExclusiva');
infoExclusiva.addEventListener('click', function(){
    barraExclusiva.className = 'barraExclusivaOnHover rounded mx-auto';
})

if(window.innerWidth > 768){
    barraExclusiva.addEventListener('mouseleave', function(){
        setTimeout(function(){
            barraExclusiva.className = 'barraRegular rounded mx-auto'
        }, 2000)
    })
} else if(window.innerWidth < 768) {
    barraExclusiva.addEventListener('mouseleave', function(){
        barraExclusiva.className = 'barraRegular rounded mx-auto'
    })
}

/*Arreglo Navbar */
$(document).on('click',function(){
    $('.collapse').collapse('hide');
})