/*global Firebase, grecaptcha*/
;(function() {
  var form = document.querySelector('.al-form > form');
  var captchaIsValid = false;
  window.initCaptcha = function() {
      var captcha = document.querySelector('#captcha');
    grecaptcha.render(captcha, {
      sitekey: '6Ld9nwATAAAAACdsGH5foKWLUwuICMWrtevg1Gch',
      callback: function() {
        captchaIsValid = true;
      }
    });
  };
  
  form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    if (captchaIsValid) {
      (function() {
        var reportes = new Firebase('https://reportes-accesolibre.firebaseio.com/reportes/'),
            tipos = form.elements.tipo_falla,
            indexTipo = tipos.selectedIndex,
            tipo = tipos.options[indexTipo].value;
        reportes.push({
          tipo: tipo,
          ubicacion: form.elements.ubicacion.value,
          tiempo: form.elements.tiempo.value,
          detalles: form.elements.detalles.value
        }, function() {
          document.querySelector('.al-form').style.display = 'none';
          document.querySelector('.gracias').style.display = 'block';
        });
      })();
    }
  });
})();

