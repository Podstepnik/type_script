/**
 * Zadanie 5:
 *
 * Podobnie bez ingerencji w szczegóły implementacji,
 * przepraw zapisy z :any w odpowiednie typy - zgodne z założeniami programu.
 * ... tym razem mamy do czynienia z bardziej złożonymi typami
 *
 * po poprawieniu typów, zmień implementację, zastosuj funkcję `joiner`
 * - tam gdzie to możliwe (np - połączenie imie + nazwisko)
 * następnie:
 * - utwórz odpowiednie obiekty i przekaż do `giveFullName` tak aby potwierdzić poprawność działania kodu
 * */

function joiner(strTuple: [string, string]): string {
  const [part1, part2] = strTuple
  return `${part1} ${part2}`
}

interface User {
  name: string
  lastName: string
  sex: string
  vipStatus?: boolean
}

function giveFullName(myUser: User): string {
  // const fullName: string = myUser.name + ' ' + myUser.lastName;
  const fullName: string = joiner([myUser.name, myUser.lastName])
  let prefix = ''
  let suffix = ''
  if (myUser.sex === 'female') {
    prefix = 'Pani'
  } else if (myUser.sex === 'male') {
    prefix = 'Pan'
  }
  if (myUser.vipStatus) {
    suffix = ' - the VIP'
  }
  return prefix + ' ' + fullName + suffix
}

const obj1 = { name: 'Paweł', lastName: 'Szwarc', sex: 'male', vipStatus: true }
const obj2 = {
  name: 'Marta',
  lastName: 'Szwarc',
  sex: 'female',
  vipStatus: false,
}

console.log(giveFullName(obj1))
console.log(giveFullName(obj2))

export {}
