/**
 *
 * Zadanie 8:
 *
 * Przygotuj klasę Basket - która będzie obsługiwała 2 rodzaje obiektów:
 * AuctionItem
 * oraz
 * BuyNowItem
 *
 * realizując następującą logikę implementacji:
 */

// Odkomentuj w momencie rozpoczęcia pracy nad zadaniem:

abstract class Item {
  constructor(public name: string) {}
}

class BuyNowItem extends Item {}
class AuctionItem extends Item {}

class Basket<I extends Item> {
  private items: I[] = []
  addItem(item: I) {
    this.items.push(item)
  }
  getAllItems(): readonly I[] {
    return []
  }
}

const myBuyNowBasket = new Basket<BuyNowItem>()
const myAuctionBasket = new Basket<AuctionItem>()

myBuyNowBasket.addItem(new BuyNowItem('Telewizor'))
myBuyNowBasket.addItem(new BuyNowItem('Wersalka'))

myAuctionBasket.addItem(new AuctionItem('Karta kolekcjonerska'))

myBuyNowBasket.getAllItems().forEach((item: BuyNowItem) => {
  console.log(item.name)
})

myAuctionBasket.getAllItems().forEach((item: AuctionItem) => {
  console.log(item.name)
})

// Dodatkowe punkty jeśli ta operacja będzie niemożliwa w TS:
myBuyNowBasket.getAllItems().push(new BuyNowItem('Troll'))

export {}
