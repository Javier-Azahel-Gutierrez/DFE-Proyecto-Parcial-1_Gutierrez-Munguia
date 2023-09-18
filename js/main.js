
console.log('Hola mundo!');


function mostrarMensajeInicial() {

  if (confirm('Bienvenido a esta página web de tu interes!!')) {
    alert('Espero que seade tu agrado!');
  } else {
    alert('...');
  }

}

//
// FUNCTION DECLARATION: forma tracional de definir funciones con palabra clave function
//
// function funcionNoAnonima() {
//   return 1 + 1;
// }


//
// ARROW FUNCTION: sintaxis más concisa para definir funciones,
//    especialmente útiles cuando se trata de funciones pequeñas y anónimas
//
// () => 1 + 1;

document.addEventListener("DOMContentLoaded", () => {
  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  })

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".slider-container", {
    loop: true, 
    autoplay: {
      delay: 2000, 
    },
    pagination: {
      el: ".slider-pagination", 
    },
  });
});
