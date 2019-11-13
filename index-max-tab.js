var counter = 0;

function incrementCounter(value){
  counter += value;
}



class KnapSack {
  constructor(capacity, items) {
    this.capacity = capacity
    this.items = items
    this.maxTab = this.initializeMaxTab()
    this.items.unshift(0)
    incrementCounter(6);
  }

  initializeMaxTab() {
    const maxTab = new Array(this.items.length)
    incrementCounter(4)
    for (let i = 0; i <= this.items.length; i++) {
      incrementCounter(4);
      maxTab[i] = new Array(this.capacity + 1)
      incrementCounter(5);
      for (let j = 0; j < this.capacity + 1; j++) {
        incrementCounter(5);
        if (j === 0) {
          incrementCounter(2);
          maxTab[i][j] = null
        } else {
          incrementCounter(2);
          maxTab[i][j] = 0
        }
      }
    }
    incrementCounter(1)
    return maxTab
  }

  calc() {
    incrementCounter(1);
    for (let i = 1; i < this.maxTab.length; i++) {
      incrementCounter(5);
      for (let j = 1; j < this.maxTab[i].length; j++) {
        incrementCounter(10);
        if (!!this.items[i] && this.items[i].weight <= j) {
          const val1 = this.maxTab[i - 1][j]
          incrementCounter(3);
          const val2 = this.items[i].profit + this.maxTab[i - 1][j - this.items[i].weight]
          incrementCounter(10);
          this.maxTab[i][j] = this.max(val1, val2)
          incrementCounter(3);
        } else {
          incrementCounter(3);
          this.maxTab[i][j] = this.maxTab[i - 1][j]
        }
      }
    }
    incrementCounter(4);
    return this.maxTab[this.items.length - 1][this.capacity]
  }

  max(val1, val2) {
    const max = val1 >= val2 ? val1 : val2
    incrementCounter(3);
    return max
  }
}

class Product {
  constructor(weight, profit) {
    this.weight = weight
    this.profit = profit
    incrementCounter(2);
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

console.log('Contagem: ',  counter);