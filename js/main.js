// Variabili globali
let kmPercorso, userAge, ticketPrice, message;
const kmPricing = 0.21;

//Chiedo all'utente il numero di chilometri che vuole percorrere 

kmPercorso = parseInt(prompt("inserisci il numero di kilometri che vuoi percorrere . . ."));

console.log(kmPercorso);

//e poi chiedo l'età del passeggero.

userAge = parseInt(prompt("inserisci l'età del passeggero . . ."));

console.log(userAge);

//Calcolo il prezzo totale del biglietto (0.21 euro x km) 

ticketPrice = (kmPercorso * kmPricing);

console.log(ticketPrice);

//viene applicato uno sconto del 20% ai <18 anni e 40% ai >= a 65 anni. 

if(userAge < 18){
    ticketPriceDiscounted = (ticketPrice - ((ticketPrice * 20) / 100));
    message = "Il costo del vostro biglietto è di: " + ticketPriceDiscounted;
    console.log(ticketPriceDiscounted);

}
else if(userAge >= 65){
    ticketPriceDiscounted = (ticketPrice - ((ticketPrice * 40) / 100));
    message = "Il costo del vostro biglietto è di: " + ticketPriceDiscounted;
    console.log(ticketPriceDiscounted);
}
else{
    message = "Il costo del vostro biglietto è di: " + ticketPrice;
    console.log(ticketPrice);
}


//Infine mostro il prezzo in due decimali 

document.getElementById("element-id").innerHTML = message + " Euro";

console.log(message);