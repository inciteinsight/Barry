import React, {Component} from 'react'
import MediaQuery from 'react-responsive'
import Line from './line'
import {MidYear2019, HintOptions} from '../store/lyricTempStore'

class Test extends Component {
  constructor() {
    super()
    this.state = {
      hint: HintOptions[0],
      piece: MidYear2019[0],
      answer: {
        parts: []
      },
      display: {
        parts: []
      },
      partMap: {}
    }
  }

  componentDidMount() {
    // let newState = this.state
    // newState.partMap = {
    // }
    // this.setState(newState)
  }

  initLine = (partName, lineIndex) => {
    let newState = this.state
    newState.answer.parts[lineIndex].name = partName
    newState.display.parts[lineIndex].line = this.setState(newState)
    return (
      <Line
        line={this.state.piece[partName][lineIndex]}
        answer={this.state.answer[partName][lineIndex]}
        display={this.state.display[partName][lineIndex]}
        hint={this.state.hint}
        index={lineIndex}
        partName={partName}
      />
    )
  }

  renderForm = (partName, partIndex) => {
    const part = this.state.piece.parts.find(
      partInstance => partInstance.name === partName
    )
    return (
      <div>
        <p className="text-center">
          <strong>{part.name}</strong>
        </p>
        <div className="form-line-container row align-items-center">
          <div className="mx-1 col text-center answer-line">
            <h5>Answers</h5>
          </div>
          <MediaQuery query="(min-device-width: 750px)">
            <div className="mx-1 col text-center hint-line">
              <h5>Hints</h5>
            </div>
          </MediaQuery>
          <div className="mx-1 col text-center result-line">
            <h5>Results</h5>
          </div>
          <div className="w-100" />
        </div>
        {part.lines.map((line, lineIndex) =>
          // <Line line={line} hint={this.state.hint}/>
          this.initLine(partIndex, lineIndex)
        )}
      </div>
    )
  }

  clearForm() {
    this.setState({
      answer: '',
      display: ''
    })
  }

  renderPiece() {
    let {piece} = this.state
    return (
      <div>
        <h4 className="text-center">{piece.name}</h4>
        <div className="container d-flex justify-content-center row">
          <div className="form-container">
            {piece.sequence.map((partName, partIndex) =>
              this.renderForm(partName, partIndex)
            )}
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
