var aStarError = document.getElementById('aStarError')
var matrix, closedList, queue, score = [], isFound = false

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
      score.push(node)
      if (node.x === endX && node.y === endY) {
        console.log('%c *** FOUND ***', 'color: black; background: yellow;')
        isFound = true
        break // we found the right path!
      } else {
        closedList.table[node.x][node.y] = node.priority
        console.log('node', node)
        if (((node.x - 1) >= Math.min(startX, endX)) && (matrix.table[node.x - 1][node.y] !== 'x')) {
          vCheck(node.x - 1, node.y, node)
        }
        if ((node.x + 1) <= Math.max(startX, endX) && (matrix.table[node.x + 1][node.y] !== 'x')) {
          vCheck(node.x + 1, node.y, node)
        }
        if ((node.y - 1) >= Math.min(startY, endY) && (matrix.table[node.x][node.y - 1] !== 'x')) {
          vCheck(node.x, node.y - 1, node)
        }
        if ((node.y + 1) <= Math.max(startY, endY) && (matrix.table[node.x][node.y + 1] !== 'x')) {
          vCheck(node.x, node.y + 1, node)
        }
      }
    } while (!queue.isEmpty())
    console.log('%c *** A STAR END ***', 'color: white; background: teal;')
    closedList.showAll()
    console.log('END!!!!!!!!!', {score})

    // we've done algorithmic path -> now we just need to find exact one

    // ***
    if (isFound) {
      let table = [], i
      node = score[score.length -1]
      while (node.x !== startX || node.y !== startY) {
        i = null
        table.unshift(node)
        score.forEach(step => {
          if (step.x === node.parentX && step.y === node.parentY && !i) {
            i = step
          } else if (step.x === node.parentX && step.y === node.parentY && i.priority && step.priority < i.priority) {
            i = step
          }
        })
        score.unshift(i)
        node = i
      }
      table.unshift(score[0])
      console.log('EXACT PATH: ', table)
    } else { console.log('no path avilable!') }
    // ***
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
//             save priority
//             add neighbor to openList
//      }
//      if neighbor is in openList but the current g is better than previous g {
//              save priority
//      }
//  }
// *** now we have algorithmic path
// node = endpoint
// until node.parent === node { --> only START point scenario
//   find lowest priority neighbor
//   save it to the score
//   it will now be currentNode
// }