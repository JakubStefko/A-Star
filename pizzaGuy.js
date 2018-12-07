class PizzaGuy {
  constructor(startPosition, startTurn = 0, endTurn = Infinity, deliveryList = []) {
    this.currentPosition = startPosition,
    this.startShift = startTurn,
    this.endShift = endTurn,
    this.deliveryList = deliveryList
  }
}