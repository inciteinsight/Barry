import React, {Component} from 'react'
import MediaQuery from 'react-responsive'
import {rgColorIndicator} from '../helper'

export default class Line extends Component {
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
      <div className="form-line-container row justify-content-around">
        <div className="answer-line mx-1 my-1 col">
          <textarea
            rows="2"
            name="display"
            value={this.props.answer}
            onChange={this.handleChange}
          />
        </div>
        <MediaQuery query="(min-device-width: 750px)">
          <div className="hint-line mx-1 my-1 col">
            <p className="text-center">
              {this.props.hint.parse(this.props.correct)}
            </p>
          </div>
        </MediaQuery>
        <div
          className="result-line mx-1 my-1 col d-flex align-items-center justify-content-center"
          style={{
            'background-color': rgColorIndicator(
              Number(this.props.completion),
              'green'
            )
          }}
        >
          {this.props.completion === '100' ? (
            <p style={{color: 'white'}}>
              <strong>{this.props.completion}%</strong>
            </p>
          ) : (
            <p>{this.props.completion}%</p>
          )}
        </div>
      </div>
    )
  }
}
