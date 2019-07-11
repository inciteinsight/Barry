import React, {Component} from 'react'
import MediaQuery from 'react-responsive'

export default class Line extends Component {
  constructor(props) {
    super(props)
    this.state = {
      correct: this.props.line.replace(/[^\w\s]+/g, '').toLowerCase(),
      parsed: '',
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
    const {correct, parsed} = this.state
    return String(
      Math.max(
        0,
        Math.round(
          (correct.length - this.levenshteinDistance(correct, parsed)) /
            correct.length *
            100
        )
      )
    )
  }

  handleChange = async event => {
    await this.setState({
      parsed: event.target.value.replace(/[^\w\s]+/g, '').toLowerCase(),
      display: event.target.value
    })
    console.log('answer-------> ', this.props.answer)
    this.props.handleLineChange(
      this.state.display,
      this.props.partIndex,
      this.props.lineIndex
    )
  }

  render() {
    return (
      <div className="form-line-container row align-items-center">
        <div className="answer-line mx-1 col">
          <textarea
            rows="2"
            name="parsed"
            value={this.state.display}
            onChange={this.handleChange}
          />
        </div>
        <MediaQuery query="(min-device-width: 750px)">
          <div className="hint-line mx-1 col">
            <p>{this.props.hint.parse(this.state.correct)}</p>
          </div>
        </MediaQuery>
        <div className="result-line mx-1 col text-center">
          <p>{this.calculator()}%</p>
        </div>
      </div>
    )
  }
}
