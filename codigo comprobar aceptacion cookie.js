 <script>

//recarga pagina al pulsar boton aceptar
    $(document).ready(function()
    {
      $('.gdpr-banner-button-consent').click(function()
      {
        // Recargo la página
        location.reload();
      });
    });

//busca una cookie y devuelve el valor
    function leerCookie(nombre)
    {
      var lista = document.cookie.split(";");
      var valor = 0;
      for (i in lista)
      {
        var busca = lista[i].search(nombre);
        if (busca > -1)
        {
          micookie = lista[i];
          var igual = micookie.indexOf("=");
          valor = micookie.substring(igual + 1);
        }
      }
      return valor;
    }
// si el valor cookie es true hace saltar el codigo
    var vcookie = leerCookie("gdpr");

    if (vcookie == "true")
    {

      (function(w, d, s, l, i)
      {
        w[l] = w[l] || [];
        w[l].push(
        {
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-KFXX7X3');

       };
    

  </script>
  
  <!-- End Google Tag Manager -->