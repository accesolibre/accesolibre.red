!function(){var a=document.querySelector(".al-form > form"),b=!1;window.initCaptcha=function(){var a=document.querySelector("#captcha");grecaptcha.render(a,{sitekey:"6Ld9nwATAAAAACdsGH5foKWLUwuICMWrtevg1Gch",callback:function(){b=!0}})},a.addEventListener("submit",function(c){c.preventDefault(),b&&!function(){var b=new Firebase("https://reportes-accesolibre.firebaseio.com/reportes/"),c=a.elements.tipo_falla,d=c.selectedIndex,e=c.options[d].value;b.push({tipo:e,ubicacion:a.elements.ubicacion.value,tiempo:a.elements.tiempo.value,detalles:a.elements.detalles.value,timestamp:Date.now().valueOf()},function(){document.querySelector(".al-form").style.display="none",document.querySelector(".gracias").style.display="block"})}()})}();