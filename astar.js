var aStarError = document.getElementById('aStarError')
var matrix

const createField = (size) => {
  console.log('%c *** MATRIX CREATE ***', 'color: white; background: black;')
  matrix = new Matrix(size)
  matrix.showAll()
}

const aStarSearch = (startX, startY, endX, endY) => {
  if (matrix.table[startX][startY] === 'x' && matrix.table[endX][endY] === 'x') {
    aStarError.innerHTML = 'Both start and end point of path are walls, walls are unreachable'
  } else if (matrix.table[startX][startY] === 'x') {
    aStarError.innerHTML = 'Start point of path is wall, walls are unreachable'
  } else if (matrix.table[endX][endY] === 'x') {
    aStarError.innerHTML = 'End point of path is wall, walls are unreachable'
  } else {
    aStarError.innerHTML = ''
    console.log('%c *** A STAR START ***', 'color: white; background: teal;')
    console.log({startX, startY, endX, endY})
  }

  // let i = 0
  // let queue = new priorityQueue()
  // queue.add(0, 0, matrix[])
}

// ****************** PSEUDO CODE ******************
// 
// push startNode onto openList
// while(openList is not empty) {
//  currentNode = find lowest f in openList
//  if currentNode is final, return the successful path
//  push currentNode onto closedList and remove from openList
//  foreach neighbor of currentNode {
//      if neighbor is not in openList {
//             save g, h, and f then save the current parent
//             add neighbor to openList
//      }
//      if neighbor is in openList but the current g is better than previous g {
//              save g and f, then save the current parent
//      }
//  }