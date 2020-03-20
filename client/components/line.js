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
      <div className="form-line-container row justify-content-around form-group">
        <div
          className="answer-line my-1 col"
          style={{
            'background-color': rgColorIndicator(
              Number(this.props.completion),
              'green'
            )
          }}
        >
          <textarea
            className="mt-2 form-control"
            rows="2"
            name="display"
            onChange={this.handleChange}
          />
        </div>
        <MediaQuery query="(min-device-width: 750px)">
          <div
            className="hint-line my-1 col"
            style={{
              'background-color': rgColorIndicator(
                Number(this.props.completion),
                'green'
              )
            }}
          >
            {this.props.completion === '100' ? (
              <p style={{color: 'white'}} className="text-center mt-2">
                <strong>{this.props.hint.parse(this.props.correct)}</strong>
              </p>
            ) : (
              <p className="text-center mt-2">
                {this.props.hint.parse(this.props.correct)}
              </p>
            )}
          </div>
        </MediaQuery>
        <div
          className="result-line my-1 col d-flex align-items-center justify-content-center"
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
