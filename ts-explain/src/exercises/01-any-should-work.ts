/**
 * Zadanie 1:
 *
 * Migrując zapisy z JavaScript na TypeScript typ :any okazał nam się bardzo pomocny, jednak teraz
 * - czas zapisać poniższe typy poprawnie - zgodnie z zastosowaniem tych zmiennych i funkcji.
 *
 * Popraw zapisy programisty - tak by były używane właściwe typy danych i abyśmy mieli poprawne podpowiadanie składni
 * nie ingeruj w detale implementacji (kod powinien działać tak samo)
 * */

type StringOrNumber = string | number;

function addTwoNumbers(a: number, b: number ) {
    return a + b;
}

const result = addTwoNumbers(10, 20);

console.log('Wynik to', result);


// info will accept only a string or number!
function info(something: StringOrNumber) {
    console.log('Wartość', something, 'to', typeof something);
    return typeof something;
}

// const res: 'hello' = info(203)

let myFigure: StringOrNumber = 1000;
info(myFigure);

myFigure = '100.8';
info(myFigure);



export {};
