
console.log('Hola mundo!');

function mostrarMensajeInicial() {

  if (confirm('Bienvenido a esta página web de tu interes!!')) {
    alert('Espero que seade tu agrado!');
  } else {
    alert('...');
  }

}

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

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  
  x[slideIndex[no]-1].style.display = "block";  
}

