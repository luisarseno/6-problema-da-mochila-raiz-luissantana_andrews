class KnapSack {
  constructor(capacity, items) {
    this.capacity = capacity
    this.items = items
    this.maxTab = this.initializeMaxTab(items)
  }

  initializeMaxTab(items) {
    const maxTab = new Array(items.length)
    for (let i = 0; i < items.length; i++) {

      maxTab[i] = new Array(this.capacity)
      for (let j = 0; j < maxTab[i].length; j++) {
        maxTab[i][j] = 0
      }
    }

    return maxTab
  }

  calc() {
    for (let i = 1; i < this.items.length; i++) {
      for (let j = 1; j < this.capacity; j++) {

        if (this.items[i].weight <= j) {
          this.maxTab[i][j] = this.max(this.maxTab[i - 1][j], this.items[i].profit + this.maxTab[i - 1][j - this.items[i].weight])
        } else {
          this.maxTab[i][j] = this.maxTab[i - 1][j] 
        }
      }
    }

    return this.maxTab[this.items.length - 1][this.capacity - 1]
  }

  max(val1, val2) {
    return val1 >= val2 ? val1 : val2
  }
}

class Product {
  constructor(weight, profit) {
    this.weight = weight
    this.profit = profit
  }
}

const knapSack = new KnapSack(7, [
  new Product(5, 2),
  new Product(2, 4),
  new Product(1, 3),
  new Product(2, 2),
])

const answer = knapSack.calc()

console.log(answer)