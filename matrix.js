class Matrix {
  constructor(size) {
    this.size = size
    this.table = new Array(size)
    this.init(size)
  }

  init (size) {
    let i, j
    for (i = 0; i < size; i++) {
      this.table[i] = new Array(size)
      for (j = 0; j < size; j++) {
        this.table[i][j] = new Node(
          i === 0 ? Infinity : Math.round(Math.random() * 10) + 1,
          j === (size - 1) ? Infinity : Math.round(Math.random() * 10) + 1,
          i === (size - 1) ? Infinity : Math.round(Math.random() * 10) + 1,
          j === 0 ? Infinity : Math.round(Math.random() * 10) + 1 )
      }
    }
  }

  showAll () {
    let i, j, score
    for (i = 0; i < this.size; i++) {
      score = `${i + 1}:\t`
      for (j = 0; j < this.size - 1; j++) {
        score = String.prototype.concat('{',
          this.table[i][j].north, ',',
          this.table[i][j].west, ',',
          this.table[i][j].south, ',',
          this.table[i][j].east, '}\t')
      }
      // score = String.prototype.concat('{',
      //     this.table[i][j].north, ',',
      //     this.table[i][j].west, ',',
      //     this.table[i][j].south, ',',
      //     this.table[i][j].east, '}\t')
      console.log(score)
    }
  }
}