var texto;
var textoEncriptado;
var textoDesencriptado;

function encriptar() {
    texto = document.getElementById("textoIngresado").value.toLowerCase();
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace#resumen
    textoEncriptado = texto.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    document.getElementById("textoFinal").innerHTML = textoEncriptado;
}

function desencriptar() {
    texto = document.getElementById("textoIngresado").value.toLowerCase();
    textoDesencriptado = texto.replace(/enter/img, 'e');
    textoDesencriptado = textoDesencriptado.replace(/ober/img, 'o');
    textoDesencriptado = textoDesencriptado.replace(/imes/img, 'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/img, 'a');
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, 'u');
    document.getElementById("textoFinal").innerHTML = textoDesencriptado;
}

function copiar() {
    var cosasACopiar = document.querySelector("#textoFinal");
    cosasACopiar.select();
    document.execCommand('copy');
}
