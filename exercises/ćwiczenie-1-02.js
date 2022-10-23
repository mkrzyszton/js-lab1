/**
 * Napisz skrypt, który w łańcuchu triangle zawiera ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości 
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierzy powinna odpowiadać 
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * ##### 
 */
let height = 5;
let triangle = '';

for (let i = 0; i < height; i++) {
    console.log(triangle += '#')
}
