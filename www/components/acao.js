// This is a JavaScript file
$(document).on("click","#salvar",function(){
  var parametros = {
    "livro":$("#livro").val(),
    "autor":$("#autor").val(),
    "ano":$("#ano").val()
  }

  $.ajax({
    type:"post", //como enviar
    url:"http://livro3ds2.epizy.com/cadastra.php", //para onde enviar
    //se der certo
    success: function(data){
      navigator.notification.alert(data);
    $("#titulo").val(""),
    $("#autor").val(""),
    $("#ano").val("")
    },
    //se der errado
    error: function(data){
      navigator.notification.alert(data);
    }
  });

});
