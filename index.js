class BackPack {
  constructor(capacity) {
    this.capacity = capacity
    this.products = []
  }

  getWeight() {
    return this.products.length ? this.products.reduce((value, prd) => value + prd.weight, 0) : 0
  }

  getProfit() {
    return this.products.length ? this.products.reduce((value, prd) => value + prd.profit, 0) : 0
  }

  getBestProfitFromArray(arrayOfProducts) {
    arrayOfProducts.sort((prdA, prdB) => {
      if (prdA.profit === prdB.profit) return 0
      return prdA.profit > prdB.profit ? 1 : -1
    })

    return this.getBestCombination(arrayOfProducts)
  }

  getBestCombination(arrayOfProducts) {
    let maxProfit = 0

    for(let i = 0; i < arrayOfProducts.length; i++){
      this.products = []
      this.tryEveryCombination(arrayOfProducts, i)
      
      const profit = this.getProfit()

      if(profit > maxProfit) maxProfit = profit
    }

    return maxProfit
  }

  tryEveryCombination(arrayOfProducts, index) {
    if (this.addProduct(arrayOfProducts[index])) {

      for (let i = 0; i < arrayOfProducts.length; i++) {
        if (i === index) continue

        if(!this.addProduct(arrayOfProducts[i])) break
      }
    }
  }

  addProduct(prd) {
    if (this.getWeight() + prd.weight > this.capacity) return false

    this.products.push(prd)
    return true
  }
}

class Product {
  constructor(weight, profit) {
    this.weight = weight
    this.profit = profit
  }
}

const products = [
  new Product(1, 2),
  new Product(1, 2),
  new Product(2, 2),
  new Product(4, 10),
  new Product(12, 4),
]

const backpack = new BackPack(15)

const bestProfit = backpack.getBestProfitFromArray(products)

console.log(bestProfit)

