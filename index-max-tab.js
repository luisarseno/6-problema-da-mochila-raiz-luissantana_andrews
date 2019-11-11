class KnapSack {
  constructor(capacity, items) {
    this.capacity = capacity
    this.items = items
    this.maxTab = this.initializeMaxTab()

    this.items.unshift(0)
  }

  initializeMaxTab() {
    const maxTab = new Array(this.items.length)
    for (let i = 0; i <= this.items.length; i++) {

      maxTab[i] = new Array(this.capacity + 1)
      for (let j = 0; j < this.capacity + 1; j++) {
        if (j === 0) {
          maxTab[i][j] = null
        } else {
          maxTab[i][j] = 0
        }
      }
    }

    return maxTab
  }

  calc() {
    for (let i = 1; i < this.maxTab.length; i++) {
      for (let j = 1; j < this.maxTab[i].length; j++) {
        if (!!this.items[i] && this.items[i].weight <= j) {
          const val1 = this.maxTab[i - 1][j]
          const val2 = this.items[i].profit + this.maxTab[i - 1][j - this.items[i].weight]

          this.maxTab[i][j] = this.max(val1, val2)
        } else {
          this.maxTab[i][j] = this.maxTab[i - 1][j]
        }
      }
    }

    return this.maxTab[this.items.length - 1][this.capacity]
  }

  max(val1, val2) {
    const max = val1 >= val2 ? val1 : val2
    return max
  }
}

class Product {
  constructor(weight, profit) {
    this.weight = weight
    this.profit = profit
  }
}

const knapSack = new KnapSack(15, [
  new Product(5, 10),
  new Product(5, 6),
  new Product(3, 4),
  new Product(1, 5),
  new Product(2, 10),
])

const answer = knapSack.calc()
console.log(knapSack.maxTab)

console.log('resposta: ', answer)