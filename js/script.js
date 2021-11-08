// Sulla base di queste informazioni dovrà calcolare 
//  prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
//    per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Bonus: effettuate dei controlli sui dati di input.

// richiesta utente regione
let regione = prompt('Dove stai andando?');
document.getElementById ('pre-regione').innerHTML =('La tua destinazione è:');
document.getElementById ('regione').innerHTML = (regione);
// richiesta utente età 
const età = prompt('Quanti anni hai?');
document.getElementById ('pre-età').innerHTML =('La tua età è:');
document.getElementById ('età').innerHTML = (età);


// dettagli prezzo

if (regione == 'Milano') {
   km = 200;
  console.log (regione);

}
else if (regione == 'Roma') {
   km = 400;
  console.log (regione);
}

let prezzobiglietto = (0,21 * km);
console.log (prezzobiglietto);

let minorenne = (prezzobiglietto * 20 / 100 );
let over65 = (prezzobiglietto * 40 / 100 );

let mino = minorenne.toFixed(2);
console.log(mino);
let over = over65.toFixed(2);
console.log(over);
let biglietto = prezzobiglietto.toFixed(2);
console.log(biglietto);

document.getElementById ('pre-prezzo').innerHTML =('Il prezzo del biglietto è:');
if (età < 18) {
  document.getElementById ('prezzo').innerHTML = (mino + '	&euro;');
}
else if (età > 65) {
  document.getElementById ('prezzo').innerHTML = (over + '	&euro;');
}
else {
  document.getElementById ('prezzo').innerHTML = (biglietto + '	&euro;');
}












