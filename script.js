$('.hero-btn').click(function(){
  if(!$('.hero-btn').parent().hasClass('active')){
    $(this).parent().stop().addClass('active');
    setTimeout(function(){  
      $('.hero-btn').parent().removeClass('active'); 
    }, 2000);
  }
});
function mostrarTextoAmor() {
  var textoAmorElement = document.getElementById("textoAmor");
  // Cambiamos la clase para mostrar el texto
  textoAmorElement.classList.remove("ocultar");
}