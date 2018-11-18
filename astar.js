const aStar = (size) => {
  console.log('%c *** START ***', 'color: white; background: black;')
  let matrix = new Matrix(size)
  matrix.showAll()
}

const validateNumber = (input) => {
  if (Number(input.value) <= 0) {
    sizeError.innerHTML = '\tNumber of rows must be positive'
    start.disabled = true
  } else if (!Number(input.value)) {
    sizeError.innerHTML = '\tNot a number!'
    start.disabled = true
  }
  else if (Number(input.value) !== Math.round(Number(input.value))) {
    sizeError.innerHTML = '\tNumber of rows must be decimal'
    start.disabled = true
  }
  else {
    sizeError.innerHTML = ''
    start.disabled = false
  }
}

var sizeError = document.getElementById('sizeError')
var size = document.getElementById('size')
var start = document.getElementById('start')
start.addEventListener('click', () => { aStar(size.value) })
size.addEventListener('change', () => validateNumber(size))
size.addEventListener('blur', () => validateNumber(size))