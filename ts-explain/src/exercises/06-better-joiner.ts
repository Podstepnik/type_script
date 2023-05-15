/**
 * Zadanie 6:
 *
 * Cała implementacja tego kodu i jego działanie - są poprawne.
 * Jednak nie mam podpowiadania typów - znów poprzez zastosowanie :any
 *
 * Napisz odpowiednie typy:
 * - dla argumentów funkcji
 * - dla zwracanej funkcji i określ oddzielnie jej typ i nazwij
 *
 * */

type JoinerFn = (...strings: string[]) => string
type FullJoiner = (joinString: string) => JoinerFn;

function joiner(joinString: string):JoinerFn {
  return (...strings: string[]): string => {
    return strings.join(joinString)
  }
}

const myJoinFunctionFull: FullJoiner = joiner;

const hyphenJoiner: JoinerFn = myJoinFunctionFull('-')
const spaceJoiner: JoinerFn = joiner(' ')
const snakeJoiner: JoinerFn = joiner('_')

console.log(hyphenJoiner('this', 'is', 'sample'))
console.log(spaceJoiner('this', 'is', 'other', 'sample'))
console.log(snakeJoiner('how', 'does', 'snake', 'case', 'looks', 'like'))

export {}
