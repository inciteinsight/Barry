import React, {Component} from 'react'
import {connect} from 'react-redux'
import MediaQuery from 'react-responsive'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {getHintThunk} from '../store'
import Line from './line'
import {HintOptions} from '../store/lyricTempStore'

class Test extends Component {
  constructor() {
    super()
    this.state = {
      hintOptions: HintOptions,
      answer: []
    }
  }

  componentDidMount() {
    this.initiateAnswer()
  }

  handleHintChange = async hintParam => {
    await this.props.onLoadHint(hintParam)
  }

  handleLineChange = async (newLine, partIndex, lineIndex, completion) => {
    let answer = await [...this.state.answer]
    answer[partIndex].lines[lineIndex] = newLine
    answer[partIndex].completion[lineIndex] = completion
    await this.setState({
      answer
    })
  }

  initiateAnswer = async () => {
    let {piece} = this.props
    if (piece) {
      let pieceRendered = piece.sequence.map(partName => {
        let part = piece.parts.find(p => p.name === partName)
        return part
      })
      let answer = pieceRendered.map(partInstance => ({
        name: partInstance.name,
        lines: partInstance.lines.map(() => {
          return ''
        }),
        completion: partInstance.lines.map(() => {
          return 0
        })
      }))
      await this.setState({
        answer
      })
    }
  }

  renderForm = (partName, partIndex) => {
    const part = this.props.piece.parts.find(
      partInstance => partInstance.name === partName
    )
    const {answer} = this.state
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
        {part.lines.map((line, lineIndex) => (
          <Line
            correct={line}
            lineIndex={lineIndex}
            partIndex={partIndex}
            answer={answer[partIndex].lines[lineIndex]}
            completion={answer[partIndex].completion[lineIndex]}
            hint={this.props.hint}
            handleLineChange={this.handleLineChange}
          />
        ))}
      </div>
    )
  }

  renderPiece() {
    let {piece} = this.props
    return (
      <div className="d-flex flex-column align-items-center">
        <h4 className="text-center">{piece.name}</h4>
        {/* <div>Percentage Goes Here</div> */}
        <div className="d-flex flex-wrap">
          <DropdownButton
            id="dropdown-basic-button"
            title="Hint Options"
            className="mx-3"
          >
            {this.state.hintOptions.map(hint => (
              <Dropdown.Item onClick={() => this.handleHintChange(hint.name)}>
                {hint.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            title="Test Options"
            className="mx-3"
          >
            <Dropdown.Item onClick={() => this.initiateAnswer()}>
              Reset Test
            </Dropdown.Item>
            {/* <Dropdown.Item disabled>Calculate Result</Dropdown.Item>
            <Dropdown.Item disabled>Submit</Dropdown.Item> */}
          </DropdownButton>
        </div>
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
    if (this.state.answer.length > 0) {
      return this.renderPiece()
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => ({
  piece: state.piece.selectedPiece,
  hint: state.piece.selectedHint
})

const mapDispatchToProps = dispatch => ({
  onLoadHint: hintName => {
    dispatch(getHintThunk(hintName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
