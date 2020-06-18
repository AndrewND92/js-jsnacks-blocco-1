document.getElementById("bottoneBtn").addEventListener("click" , function() {
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;

  console.log(nome + " " + cognome);
  document.getElementById("title").innerHTML =  nome + " " + cognome;
})
