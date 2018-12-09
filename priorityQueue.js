class priorityQueue {
  constructor() {
    this.items = []
  }

  add (x, y, priority, parentX, parentY) {
    let v = new Node(x, y, priority, parentX, parentY)
    let i = 0
    let contain = false

    while ((!contain) && (i < this.items.length)) {
      if (v.priority < this.items[i].priority) {
        this.items.splice(i, 0, v)
        contain = true
        break
      } else { i++ }
    }
    if (!contain) {
      this.items.push(v)
    }
  }

  isEmpty () { return this.items.length === 0 }

  delete () {
    if (this.isEmpty()) { return 'Underflow!' }
      else { return this.items.shift() }
  }

  head () {
    if (this.isEmpty()) { return 'Queue have no elements' }
      else { return this.items[0] }
  }

  tail () {
    if (this.isEmpty()) { return 'Queue have no elements' }
      else { return this.items[this.items.length -1] }
  }

  showItems () {
    if (this.isEmpty()) { return 'Queue have no elements' }
      else { return this.items }
  }
}