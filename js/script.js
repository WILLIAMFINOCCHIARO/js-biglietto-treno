// Sulla base di queste informazioni dovrà calcolare 
//  prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
//    per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Bonus: effettuate dei controlli sui dati di input.

let minorenne = (prezzobiglietto * 20 / 100 );
let over65 = (prezzobiglietto * 40 / 100);

let km = 1;

const prezzobiglietto = (0,21 * km);
console.log(prezzobiglietto)

if ()