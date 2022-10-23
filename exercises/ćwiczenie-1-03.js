/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzemską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie mieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
let decimalNumber = 4;
let romanNumber = 'IV';

if (decimalNumber < 0 || decimalNumber > 10) {
    console.log('Decimal number is out of range!')
} else if (decimalNumber == null || decimalNumber == undefined) {
    console.log('Decimal number is undefined or null!');
} else {
    switch(decimalNumber) {
        case 1:
            console.log(romanNumber = 'I')
            break;
        case 2:
            console.log(romanNumber = 'II')
            break;
        case 3:
            console.log(romanNumber = 'III')
            break;
        case 4:
            console.log(romanNumber = 'IV')
            break;
        case 5:
            console.log(romanNumber = 'V')
            break;
        case 6:
            console.log(romanNumber = 'VI')
            break;
        case 7:
            console.log(romanNumber = 'VII')
            break;
        case 8:
            console.log(romanNumber = 'VIII')
            break;
        case 9:
            console.log(romanNumber = 'IX')
            break;
        case 10:
            console.log(romanNumber = 'X')
            break;
    }
}
