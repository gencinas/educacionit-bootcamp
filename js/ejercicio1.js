console.log("Ejercicio A")

var arrayGatos = ["😺", "😸", "😹", "🐈", "🐾", "⬛"];
var subArrayGatos = arrayGatos.slice(0, 3);
var cantidadDeGatos = 3;
var i = 0;

while (i < cantidadDeGatos) {
    var nroGato = i + 1;
    var resto = i % 3;
    console.log("Gato #" + nroGato + ": " + subArrayGatos[resto]);
    i++;
}

