var aStarError = document.getElementById('aStarError')
var matrix, closedList, queue

const createField = (size) => {
  console.log('%c *** MATRIX CREATE ***', 'color: white; background: black;')
  matrix = new Matrix(size)
  matrix.showAll()
}

const vCheck = (x, y, node) => {
  if(closedList.table[x][y] === null) {
    queue.add(x, y, node.priority + matrix.table[x][y], node.x, node.y)
    closedList.table[x][y] = node.priority + matrix.table[x][y]
  } else if ((node.priority + matrix.table[x][y]) <= closedList.table[x][y]) {
    queue.add(x, y, node.priority + matrix.table[x][y], node.x, node.y)
    closedList.table[x][y] = node.priority + matrix.table[x][y]
  }
}

const aStarSearch = (startX, startY, endX, endY) => {
  if (matrix.table[startX][startY] === 'x' && matrix.table[endX][endY] === 'x') {
    aStarError.innerHTML = 'Both start and end point of path are walls, walls are unreachable'
  } else if (matrix.table[startX][startY] === 'x') {
    aStarError.innerHTML = 'Start point of path is a wall, walls are unreachable'
  } else if (matrix.table[endX][endY] === 'x') {
    aStarError.innerHTML = 'End point of path is a wall, walls are unreachable'
  } else {
    aStarError.innerHTML = ''
    console.log('%c *** A STAR START ***', 'color: white; background: teal;')
    console.log({startX, startY, endX, endY})

    // meat and potatoes
    queue = new priorityQueue()
    closedList = new Matrix(matrix.size, true)
    queue.add(startX, startY, 0, startX, startY)
    let node
    do {
      node = queue.delete()
      if (node.x === endX && node.y === endY) {
        break // we found the right path!
      } else {
        closedList.table[node.x][node.y] = node.priority
        console.log('node', node)
        if (((node.x - 1) >= Math.min(startX, endX)) && (matrix.table[node.x - 1][node.y] !== 'x')) {
          console.log('cool [x-1][y]')
          vCheck(node.x - 1, node.y, node)
        } else { console.log('out! [x-1][y]') }
        if ((node.x + 1) < Math.max(startX, endX) && (matrix.table[node.x + 1][node.y] !== 'x')) {
          console.log('cool [x+1][y]')
          vCheck(node.x + 1, node.y, node)
        } else { console.log('out! [x+1][y]') }
        if ((node.y - 1) > Math.min(startY, endY) && (matrix.table[node.x][node.y - 1] !== 'x')) {
          console.log('cool [x][y-1]')
          vCheck(node.x, node.y - 1, node)
        } else { console.log('out! [x][y-1]') }
        if ((node.y + 1) <= Math.max(startY, endY) && (matrix.table[node.x][node.y + 1] !== 'x')) {
          console.log('cool [x][y+1]')
          vCheck(node.x, node.y + 1, node)
        } else { console.log('out! [x][y+1]') }
      }
    } while (!queue.isEmpty())
    console.log('%c *** A STAR END ***', 'color: white; background: teal;')
    closedList.showAll()
  }
}

// ****************** PSEUDO CODE ******************
// 
// push startNode onto openList
// while(openList is not empty) {
//  currentNode = find lowest f in openList
//  if currentNode is final, return the successful path
//  push currentNode onto closedListList and remove from openList
//  foreach neighbor of currentNode {
//      if neighbor is not in openList {
//             save g, h, and f then save the current parent
//             add neighbor to openList
//      }
//      if neighbor is in openList but the current g is better than previous g {
//              save g and f, then save the current parent
//      }
//  }