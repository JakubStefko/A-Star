const validateNumber = (input) => {
  if (Number(input.value) <= 0) {
    switch (input.id) {
      case ('size'): {
        sizeError.innerHTML = 'Number of rows must be positive'
        break
      }
      case ('startX'): {
        startError.innerHTML = 'Start row number must be positive'
        break
      } 
      case ('startY'): {
        startError.innerHTML = 'Start column number must be positive'
        break
      } 
      case ('endX'): {
        endError.innerHTML = 'End row number must be positive'
        break
      }
      case ('endY'): {
        endError.innerHTML = 'End row number must be positive'
        break
      }
      default: {
        aStarError.innerHTML = 'Validation error!'
        break
      } 
    }
    createMatrix.disabled = true
    aStar.disabled = true
  } else if (!Number(input.value)) {
    switch (input.id) {
      case ('size'): {
        sizeError.innerHTML = 'Not a number'
        break
      }
      case ('startX'): {
        startError.innerHTML = 'Start row number must be number'
        break
      } 
      case ('startY'): {
        startError.innerHTML = 'Start column number must be number'
        break
      } 
      case ('endX'): {
        endError.innerHTML = 'End row number must be number'
        break
      }
      case ('endY'): {
        endError.innerHTML = 'End row number must be number'
        break
      }
      default: {
        aStarError.innerHTML = 'Validation error!'
        break
      } 
    }
    createMatrix.disabled = true
    aStar.disabled = true
  }
  else if (Number(input.value) !== Math.round(Number(input.value))) {
    switch (input.id) {
      case ('size'): {
        sizeError.innerHTML = 'Number of rows must be decimal'
        break
      }
      case ('startX'): {
        startError.innerHTML = 'Start row number must be decimal'
        break
      } 
      case ('startY'): {
        startError.innerHTML = 'Start column number must be decimal'
        break
      } 
      case ('endX'): {
        endError.innerHTML = 'End row number must be decimal'
        break
      }
      case ('endY'): {
        endError.innerHTML = 'End row number must be decimal'
        break
      }
      default: {
        aStarError.innerHTML = 'Validation error!'
        break
      } 
    }
    createMatrix.disabled = true
    aStar.disabled = true
  }
  else {
    switch (input.id) {
      case ('size'): {
        sizeError.innerHTML = 'Number of rows must be decimal'
        break
      }
      case ('startX'): {
        startError.innerHTML = 'Start row number must be decimal'
        break
      } 
      case ('startY'): {
        startError.innerHTML = 'Start column number must be decimal'
        break
      } 
      case ('endX'): {
        endError.innerHTML = 'End row number must be decimal'
        break
      }
      case ('endY'): {
        endError.innerHTML = 'End row number must be decimal'
        break
      }
      default: {
        aStarError.innerHTML = 'Validation error!'
        break
      } 
    }
    createMatrix.disabled = false
  }
  if (startError.innerHTML === '' && endError.innerHTML === '' && !createMatrix.disabled) {
    aStar.disabed = false
  }
}

var sizeError = document.getElementById('sizeError')
var size = document.getElementById('size')
var createMatrix = document.getElementById('createMatrix')

var startX = document.getElementById('startX')
var startY = document.getElementById('startY')
var startError = document.getElementById('startError')

var endX = document.getElementById('endX')
var endY = document.getElementById('endY')
var endError = document.getElementById('endError')

var aStarError = document.getElementById('aStarError')
var aStar = document.getElementById('aStar')

createMatrix.addEventListener('click', () => {
  createField(size.value)
  aStar.disabled = false
})

aStar.addEventListener('click', () => {
  aStarSearch(Number(startX.value) - 1, Number(startY.value) - 1, Number(endX.value) - 1, Number(endY.value) - 1)
})

size.addEventListener('change', () => validateNumber(size))
size.addEventListener('blur', () => validateNumber(size))

startX.addEventListener('change', () => validateNumber(startX))
startX.addEventListener('blur', () => validateNumber(startX))
startY.addEventListener('change', () => validateNumber(startY))
startY.addEventListener('blur', () => validateNumber(startY))

endX.addEventListener('change', () => validateNumber(endX))
endX.addEventListener('blur', () => validateNumber(endX))
endY.addEventListener('change', () => validateNumber(endY))
endY.addEventListener('blur', () => validateNumber(endY))