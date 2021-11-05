// Sulla base di queste informazioni dovrà calcolare 
//  prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
//    per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Bonus: effettuate dei controlli sui dati di input.

const regione = prompt('Dove vai ?');

document.getElementById ('regione').innerHTML = (regione);

let milano = 200;
let napoli = 300;
let roma = 400;
let firenze = 500;
let catania = 600;
let catanzaro = 700;
let bologna = 600;

const età = prompt('Quanti anni hai?');
if (età < 18) {
  let minorenne = (prezzobiglietto * 20 / 100 );
  console.log(minorenne);

}

if (età > 65) {
  let minorenne = (prezzobiglietto * 40 / 100 );
  console.log(minorenne);

}




document.getElementById ('prezzo').innerHTML = ('il prezzo del biglietto è :'(prezzofinale))

