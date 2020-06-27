var numeroVolte = prompt("quante volte?");
var somma = 0;

for (var i = 0; i < numeroVolte; i++) {
  var numero = parseInt(prompt("dammi un numero"));
  console.log(numero);
  somma += numero;
}
console.log("la somma è",somma);
