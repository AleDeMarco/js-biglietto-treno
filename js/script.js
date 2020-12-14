var km = prompt('Lunghezza della tratta (in Km)');
var eta = prompt('Età del passeggero');

var prezzo = km * 0.21;
if (eta < 18) {
  prezzo = prezzo * 0.8;
}
if (eta >= 65) {
  prezzo = prezzo * 0.6;
}
prezzo = prezzo.toFixed(2);

document.getElementById("price").innerHTML = '€ ' + prezzo;
