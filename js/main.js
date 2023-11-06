
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

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
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

/*  const mailToMe = document.querySelector("mailToMe");

mailToMe.onclick = function() {
  document.execCommand("copy");
} 

mailToMe.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", mailToMe.textContent);
    console.log(event.clipboardData.getData("text"))
  }
}); */