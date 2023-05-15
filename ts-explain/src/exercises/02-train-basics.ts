/**
 * Zadanie 2:
 * Napisz implementację funkcji `moveBy2` - która posiadać ma następujące działanie:
 * wyświetlić na konsoli co 2 numery od - do w określonym kierunku
 *
 * przykładowo wywołanie:
 * moveBy2(10, 20, 'up');
 * powinno pokazać:
 * 10
 * 12
 * 14
 * 16
 * 18
 * 20
 *
 * a wywołanie:
 * moveBy2(10, 20, 'down');
 * 20
 * 18
 * 16
 * .... itd aż do
 * 10
 *
 * funkcja powinna być wywołana poprawnie dla 2 przypadków tak jak poniżej.
 * natomiast jeśli podany zostanie argument który nie jest liczbą lub nie da się go rzutować na liczbę
 * - funkcja zakończy swoje działanie
 * - nie powinno być możliwości podania innych kierunków jak up lub down
 * */

// Przed rozpoczęciem zadania usuń komentarz poniżej (@ts-nocheck)

// Tutaj dopisz implementację moveBy2 na podstawie wywołań poniżej
function moveBy2(min: number | string,  max: number | string, direction: 'up' | 'down') {
    let result;
    for (let index = 0; index <= Number(max)-Number(min); index=index+2) {
        switch (direction) {
            case 'up':
                result = Number(min) + index
                break;    
            case 'down':
                result = Number(max) - index
                break;
        }
        console.log(result)
    }
    
}

// to powinny być prawidłowe wywołania:
moveBy2(10, 20, 'up');
moveBy2(10, '20', 'down');

// nieprawidłowe wywołania (nie powinny się pokazać dane na konsoli):
moveBy2(10, 'aqweoiuqwieu', 'down');
moveBy2(10, NaN, 'down');

// powinno podkreślić - [błąd Typescript]
moveBy2(10, NaN, 'diagonal');

export {};
