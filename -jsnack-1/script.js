
var numero1 = prompt("inserisci il primo numero");
var numero2 = prompt("inserisci il secondo numero");


if (!isNaN(numero1) && !isNaN(numero2)) {

  if (numero1 > numero2){
    console.log(numero1);

  } else if (numero2 > numero1){
    console.log(numero2);

  } else {
    console.log("i numeri sono uguali");
  }

}
