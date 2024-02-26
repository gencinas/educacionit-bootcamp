console.log("Ejercicio B")

var arrayGatos = ["😺", "😸", "😹", "🐈", "🐾", "⬛"];
var subArrayGatos = arrayGatos.slice(3, 5);
var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var i = 0;

while (i < cantidadDeGatos) {
    var nroGato = i + 1;
    console.log("Gato #" + nroGato + ": " + subArrayGatos[0] + subArrayGatos[1].repeat(cantidadDePasos));
    i++;
}
