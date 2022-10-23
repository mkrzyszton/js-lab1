/**
 * Napisz skrypt, który generuje losowy łańcuch o długości z zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString  
 */

let length = 5;
let randomString = '';

randomString += Math.random().toString().substring(2, length + 2);

console.log(randomString)
