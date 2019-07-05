import React, {Component} from 'react'
import Line from './line'
import {midyearproc2019} from '../store/lyricTempStore'

class Test extends Component {
  constructor() {
    super()
    this.state = {
      revealMode: 'Complete',
      options: [
        'Complete',
        'Blind',
        'First Letter',
        'First Ten Letters',
        'Last Ten Letters',
        'First Letter of each Word'
      ],
      hintParameters: {
        entire: {
          enable: true
        },
        firstLetter: {
          enable: true
        },
        firstHalf: {
          enable: true
        },
        secondHalf: {
          enable: true
        }
      },
      piece: midyearproc2019
    }
  }

  componentDidMount() {}

  renderHint = (partName, filter = false) => {
    const part = this.state.piece.parts.find(
      partInstance => partInstance.name === partName
    )
    return (
      <div>
        <p className="text-center">
          <strong>{part.name}</strong>
        </p>
        {part.lines.map(line => (
          <p>{filter ? line.replace(/[^\w\s]+/g, '').toLowerCase() : line}</p>
        ))}
      </div>
    )
  }

  renderForm = partName => {
    const part = this.state.piece.parts.find(
      partInstance => partInstance.name === partName
    )
    return (
      <div>
        <p className="text-center">
          <strong>{part.name}</strong>
        </p>
        {part.lines.map(line => <Line line={line} />)}
      </div>
    )
  }

  renderPiece() {
    let {piece} = this.state
    return (
      <div>
        <h4 className="text-center">{piece.name}</h4>
        <div className="container d-flex justify-content-center row">
          <div className="form-container">
            {piece.sequence.map(partName => this.renderForm(partName))}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return this.renderPiece()
  }
}

export default Test
