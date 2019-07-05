import React, {Component} from 'react'

export default class Line extends Component {
  constructor(props) {
    super(props)
    this.state = {
      line: this.props.line.replace(/[^\w\s]+/g, '').toLowerCase(),
      answer: '',
      display: ''
    }
  }

  levenshteinDistance = (a, b) => {
    if (a.length == 0) return b.length
    if (b.length == 0) return a.length

    let matrix = []
    let i, j

    for (i = 0; i <= b.length; i++) {
      matrix[i] = [i]
    }

    for (j = 0; j <= a.length; j++) {
      matrix[0][j] = j
    }

    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) == a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
          )
        }
      }
    }

    return matrix[b.length][a.length]
  }

  calculator = () => {
    const {line, answer} = this.state
    return String(
      Math.max(
        0,
        Math.round(
          (line.length - this.levenshteinDistance(line, answer)) /
            line.length *
            100
        )
      )
    )
  }

  handleChange = event => {
    this.setState({
      answer: event.target.value.replace(/[^\w\s]+/g, '').toLowerCase(),
      display: event.target.value
    })
  }

  render() {
    return (
      <div className="form-line-container row align-items-start">
        <div className="hint mx-1 col">
          <p>{this.props.line}</p>
        </div>
        <div className="answer mx-1 col">
          <input
            type="text"
            rowSpan="2"
            name="answer"
            value={this.state.display}
            onChange={this.handleChange}
          />
        </div>
        <div className="result mx-1 col">
          <p>{this.calculator()}%</p>
        </div>
      </div>
    )
  }
}
