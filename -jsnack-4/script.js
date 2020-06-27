document.getElementById("bottone").addEventListener("click", function() {
  var maxNum = 10;
  var minNum = 1;
  var numero = Math.floor(Math.random() * (maxNum - minNum + 1));

  document.getElementById("numero").classList.add("pari" "dispari");

  if (!(numero % 2)) {
    document.getElementById("numero").classList.remove("pari");
  } else if {
    document.getElementById("numero").classList.remove("dispari");
  }

  document.getElementById("numero").innerHTML = numero;





})
