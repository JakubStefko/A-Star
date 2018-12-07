// north, west, south, east --> costs of going to '...' direction from this particular node
// isCaravilable --> block car movement to this node (f.example if it is a house)
// carMovement penalty -->  move cost x penalty = final node cost (f.example penalty of dirt road will be 
//                          bigger than asphalt road)
class Node {
  constructor(north, west, south, east, isCarAvilable = true, movePenalty = 0) {
    this.north = north
    this.west = west
    this.south = south
    this.east = east
    this.isCarAvilable = isCarAvilable
    this.carMovementPenalty = movePenalty 
  }
}