document.getElementById("bottoneBtn").addEventListener("click", function() {
  var numero = parseInt(prompt("inserisci numero"));
  var paragrafo = document.getElementById("color");

  if (numero > 0) {
    paragrafo.className = "green";
  }else if (numero < 0) {
    paragrafo.className = "red";
  }else {
    paragrafo.className = "blue";
  }
});
