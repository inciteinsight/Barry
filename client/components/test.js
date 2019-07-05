import React, {Component} from 'react'
import Line from './line'
import {MidYear2019, HintOptions} from '../store/lyricTempStore'

class Test extends Component {
  constructor() {
    super()
    this.state = {
      hint: /*HintOptions[0]*/ 'First Letter of each Word',
      piece: MidYear2019[0]
    }
  }

  componentDidMount() {}

  renderForm = partName => {
    const part = this.state.piece.parts.find(
      partInstance => partInstance.name === partName
    )
    return (
      <div>
        <p className="text-center">
          <strong>{part.name}</strong>
        </p>
        <div className="row align-items-center">
          <h5 className="mx-1 col text-center">Answers</h5>
          <h5 className="mx-1 col text-center">Hints</h5>
          <h5 className="mx-1 col text-center">Results</h5>
        </div>
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
