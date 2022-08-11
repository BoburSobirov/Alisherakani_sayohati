const massage = document.querySelector('.paragraph')

massage.textContent = 'oq yol Alisher brat'

var money =+ prompt("Pulni so'mda kiriting");

var ticket = 500; //=> Usd
var hotel = 250; // => Usd
var museum = 120; // =>evro

var USD_TO_UZS = 10650.34; //Dollardan somga
var EURO_TO_UZS = 11650.03; // Eurodan somga

var total = (ticket + hotel) * USD_TO_UZS + museum * EURO_TO_UZS;
if (money >= total){
    massage.textContent = 'yaxshi  borib kelin';
} else if (money < 500){
    massage.textContent = 'yana biroz ishla'
} else {
    massage.textContent = 'hurmatli Alisher siz yana biroz pul ishlashingiz keraK';
}