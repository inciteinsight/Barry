import React, {Component} from 'react'
import MediaQuery from 'react-responsive'

export default class Line extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidUpdate(prevProps) {}

  handleChange = async event => {
    let {value} = event.target
    await this.props.handleLineChange(
      value,
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
            name="display"
            value={this.props.answer}
            onChange={this.handleChange}
          />
        </div>
        <MediaQuery query="(min-device-width: 750px)">
          <div className="hint-line mx-1 col">
            <p>{this.props.hint.parse(this.props.correct)}</p>
          </div>
        </MediaQuery>
        <div className="result-line mx-1 col text-center">
          <p>{this.props.completion}%</p>
        </div>
      </div>
    )
  }
}
