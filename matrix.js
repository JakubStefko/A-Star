class Matrix {
  constructor(size, isNulled = false) {
    this.size = size
    this.table = []
    this.init(size, isNulled)
  }

  init (size, isNulled) {
    let i, j
    for (i = 0; i < size; i++) {
      this.table[i] = []
      for (j = 0; j < size; j++) {
        if (isNulled) {
          this.table[i][j] = null
        } else {
          this.table[i][j] = Math.round(Math.random() * 10)
          if (this.table[i][j] === 0) { this.table[i][j] = 'x' } // 'x' means wall, rest is just priorities
        }
      }
    }
  }

  showAll () {
    let i, j, score
    for (i = 0; i < this.size; i++) {
      score = `${i + 1}:\t`
      for (j = 0; j < this.size - 1; j++) {
        score = String.prototype.concat(score, this.table[i][j], '\t')
      }
      score = String.prototype.concat(score, this.table[i][j])
      console.log(score)
    }
  }
}