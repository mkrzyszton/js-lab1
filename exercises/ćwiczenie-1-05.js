/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
let n = 34;
let m = 190;
let progressBar = ""

length = parseInt((n / m) * 100)

for (let i = 0; i < length; i++) {
    if (length < 0) {
        length == 0
    } else if (length > 100) {
        length == 100
    }

    progressBar += '#'
}

progressBar += '\n0 %                      75%                    100%'

console.log(progressBar)
