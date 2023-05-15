/**
 * Zadanie 7:
 *
 * Przygotuj klasę Joiner.
 * Powinna ona:
 *  - w momencie konstruowania przyjmować znak, którym będzie łączyć wyrazy.
 *  - posiadać metodę która po przyjęciu N wyrazów typu :string zwróci łańcuch wyrazów połączony znakiem użytym w konstruktorze
 *  - użyty znak - łącznik nie może być dostępny jako pole w instancji
 *  - posiadać metodę pozwalającą zmienić znak łącznika
 *
 * przykład użycia instancji:
     const joiner = new Joiner('-');

     console.log(joiner.joinWords('this', 'is')  === 'this-is');
     joiner.changeSign(' ');
     console.log(joiner.joinWords('what', 'is', 'it')  === 'what is it');
 * */

class Joiner {
  constructor(private sign: string) {}
  changeSign(modSign: string) {
    this.sign = modSign
  }
  joinWords(...strings: string[]): string {
    return strings.join(this.sign)
  }
}

const joiner = new Joiner('-')
console.log(joiner.joinWords('this', 'is'))
joiner.changeSign(' ')
console.log(joiner.joinWords('what', 'is', 'it'))
export {}
