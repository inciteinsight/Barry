import React, {Component} from 'react'
import MediaQuery from 'react-responsive'
import {rgColorIndicator} from '../helper'

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
      <div className="form-line-container row">
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
        <div
          className="result-line mx-1 col d-flex align-items-center justify-content-center"
          style={{
            'background-color': rgColorIndicator(
              Number(this.props.completion),
              'green'
            )
          }}
        >
          {this.props.completion === '100' ? (
            <p style={{color: 'white'}}>
              <strong>Completed</strong>
            </p>
          ) : (
            <p>{this.props.completion}%</p>
          )}
        </div>
      </div>
    )
  }
}
