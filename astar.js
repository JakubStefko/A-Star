aStar = () => {
  let matrix = new Matrix(5)
  matrix.showAll()
}

var startButton = document.getElementById('start')
startButton.addEventListener('click', () => { aStar() })