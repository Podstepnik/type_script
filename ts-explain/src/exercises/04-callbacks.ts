/**
 * Zadanie 4:
 *
 * Nie modyfikując funkcji getVatTaxRateFromServer, wywołaj ją i przekaż odpowiedni callback
 * tak aby odebrać wartość podatku i przeliczyć ceny po uwzględnieniu VAT
 * wymyśl te cenę - np. wartość koszyka = 300 zł
 * Przykładowo pokazanie wyniku:
 * console.log(300 + 300 * vatRate) // gdzie vatRate to odebrany argument z callback
 *
 * Napisz odpowiedni typ dla funkcji calculations i użyj go
 *
 *
 * 4.1 dodatkowe punkty:
 * - symuluj zwrot wartości podatku dopiero po 3 sekundach
 *
 * 4.2 dodatkowe punkty +:
 * - rzuć wyjątek jeśli calculations nie jest funkcją
 * - napisz taki właśnie przypadek i obsłuż go w try - catch
 * */

type CalcCallback = (vatRate: number) => void

function getVatTaxRateFromServer(calculations: CalcCallback): void {
  // try catch powinien być na zewnątrz
  try {
    calculations(0.5)
  } catch (error) {
    console.log('error')
  }
}

setTimeout(() => {
  getVatTaxRateFromServer((vatRate: number) => {
    const cartVal = 300
    console.log(cartVal + cartVal * vatRate)
  })
}, 3000)

setTimeout(() => {
  getVatTaxRateFromServer({ vatRate: 300 })
}, 3000)

export {}
