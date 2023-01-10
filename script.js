
function encriptar(){

	var texto =  document.getElementById("textoIncriptado").value.toLowerCase();

    var textoIncriptado = texto.replace(/e/g, "enter");
    var textoIncriptado = textoIncriptado.replace(/i/g, "imes");
    var textoIncriptado = textoIncriptado.replace(/a/g, "ai");
    var textoIncriptado = textoIncriptado.replace(/o/g, "ober");
    var textoIncriptado = textoIncriptado.replace(/u/g, "ufar");
document.getElementById("textoDesencriptado").innerHTML = textoIncriptado;
}


function desencriptar(){

  var texto =  document.getElementById("textoIncriptado").value.toLowerCase();

  var textoIncriptado = texto.replace(/enter/g, "e");
  var textoIncriptado = textoIncriptado.replace(/imes/g, "i");
  var textoIncriptado = textoIncriptado.replace(/ai/g, "a");
  var textoIncriptado = textoIncriptado.replace(/ober/g, "o");
  var textoIncriptado = textoIncriptado.replace(/ufar/g, "u");
document.getElementById("textoDesencriptado").innerHTML = textoIncriptado;
}

function copiar() {
  var container = document.querySeelector("#textoDesencriptado");
  container.select();
  document.execCommand("copy");
}