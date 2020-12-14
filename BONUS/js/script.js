function calcolo() {
  var x = document.getElementById("biglietto");
  var km;
  var eta;
  var prezzo;

  km = x.elements[0].value;
  eta = x.elements[1].value;

  prezzo = km * 0.21;
  if (eta < 18) {
    prezzo = prezzo * 0.8;
  }
  if (eta >= 65) {
    prezzo = prezzo * 0.6;
  }
  prezzo = prezzo.toFixed(2);
  
  document.getElementById("price").innerHTML = '€ ' + prezzo;
}
