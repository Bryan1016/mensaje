
$(document).ready(function () {
    // Al hacer clic en la tarjeta
    $('.valentines-day').click(function () {
      // Mostrar el cuadro flotante
      $('#nameModal').addClass('active');
    });

    // Manejar la entrada del nombre
    $('#submitName').click(function () {
      const nombre = $('#userName').val().trim();
      const errorMessage = $('#error-message');

      if (nombre) {
        // Ocultar el mensaje de error si está visible
        errorMessage.hide();

        // Animar y ocultar los elementos del sobre
        $('.envelope').fadeOut(800, function () {
          // Ocultar todos los elementos secundarios de valentines-day
          $('.valentines-day').find('.heart, .text, .front').hide();

          // Redirigir a navidad.html con el nombre como parámetro
          setTimeout(function () {
            window.location.href = `index.html?name=${encodeURIComponent(nombre)}`;
          }, 500);
        });
      } else {
        // Mostrar el mensaje de error si no hay nombre
        errorMessage.show();
      }
    });
  });
