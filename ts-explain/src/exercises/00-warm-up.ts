// Komentarz powyżej wskazuje kompilerowi typescript — że ma nie analizować tego pliku...
/**
 * Zadanie 0:
 * Warm up.
 *
 * Usuń z góry // @ts-nocheck
 *
 * Popraw zapisy tak, aby doprowadzić do prawidłowego wyświetlenia:
 *
 * 'You reached the end! - BRAVO'
 * na konsoli...
 *
 * oraz: pozbądź się wszystkich błędów z kompilatora TS
 *
 * // @ts-nocheck
 * // @ts-ignore
 * */

let MyHello = 'Hello';
console.log(MyHello, 'World')

MyHello = 'Serious';
const help = "HelpMe out!"

let do2 = true;
const LARGE_number = 2048

// tutaj miał być komentarz, że addNumbers musi zwracać number !
function addNumbers(a: number , b:number): number {
    return a + b
}

let result: number;
result = addNumbers(10, 20);

console.log('Result is:', result);

const helloStranger = (): string => 'Hello Stranger !';

console.log(helloStranger())


function randomNumber(): number {
    return Math.random() * 100;
}

randomNumber()

console.log('You reached the end! - BRAVO')

export {};
