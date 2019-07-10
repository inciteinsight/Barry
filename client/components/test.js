import React, {Component} from 'react'
import {connect} from 'react-redux'
import MediaQuery from 'react-responsive'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import Line from './line'
import {MidYear2019, HintOptions} from '../store/lyricTempStore'

class Test extends Component {
  constructor() {
    super()
    this.state = {
      hint: HintOptions[0],
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
        {part.lines.map((line, i) => (
          <Line line={line} hint={this.state.hint} />
        ))}
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

const mapStateToProps = state => ({
  piece: state.piece.selectedPiece,
  hint: state.piece.selectedHint
})

const mapDispatchToProps = dispatch => ({
  onLoadPiece: piececName => {
    dispatch(getPieceThunk(piececName))
  },
  onLoadHint: hintName => {
    dispatch(getHintThunk(hintName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
