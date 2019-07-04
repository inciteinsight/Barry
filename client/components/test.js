import React, {Component} from 'react'
// import { midyearproc2019 } from '../../script/seed'

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
      }
      // pieceDisplayed: midyearproc2019
    }
  }

  componentDidMount() {
    // must mount piece being tested
    // This may be passed from a currently tested component
  }

  renderPiece(option) {
    let {piece} = this.props
    let {parts} = this.props.piece
    return (
      <div>
        <h4>{piece.name}</h4>
        {parts.map(part => (
          <div>
            <p>
              <strong>{part.name}</strong>
            </p>
            {part.lines.map(line => <p>{option(line.sentence)}</p>)}
          </div>
        ))}
      </div>
    )
  }

  render() {
    // return <div>{this.renderPiece()}</div>
    return <div>Works</div>
  }
}

export default Test
