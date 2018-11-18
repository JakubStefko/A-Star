class Matrix {
  constructor(size) {
    this.size = size
    this.table = []
    this.init(size)
  }

  init (size) {
    let i, j
    for (i = 0; i < size; i++) {
      this.table[i] = []
      for (j = 0; j < size; j++) {
        this.table[i][j] = Math.round(Math.random())
      }
    }
  }

  showAll () {
    let i, j, score
    for (i = 0; i < this.size; i++) {
      score = `${i + 1}:\t`
      for (j = 0; j < this.size - 1; j++) {
        score = String.prototype.concat(score, this.table[i][j], ' ')
      }
      score = String.prototype.concat(score, this.table[i][j])
      console.log(score)
    }
  }
}