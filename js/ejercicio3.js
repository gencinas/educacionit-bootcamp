console.log("Ejercicio C")

var arrayGatos = ["😺", "😸", "😹", "🐈", "🐾", "⬛"];
var subArrayGatos = arrayGatos.slice(3, 6);
var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var i = 0;

while (i < cantidadDeGatos) {
    var nroGato = i + 1;
    var resto = i % 2
    if (resto == 0) {
        console.log("Gato #" + nroGato + ": " + subArrayGatos[0] + subArrayGatos[1].repeat(cantidadDePasos))
    } else {
        console.log("Gato #" + nroGato + ": " + subArrayGatos[0] + subArrayGatos[2] + subArrayGatos[1].repeat(cantidadDePasos))
    }
    i++;
}