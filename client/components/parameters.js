import React, {Component} from 'react'
import {MidYear2019} from '../store/lyricTempStore'
import {ListGroup} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

export default class Parameters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pieceParam: MidYear2019[0].name,
      hintParam: 'Complete'
    }
  }

  hintOptions = [
    'Complete',
    'Blind',
    'First Letter',
    'First Ten Letters',
    'Last Ten Letters',
    'First Letter of each Word'
  ]

  handleChange = async (pieceParam = null, hintParam = null) => {
    if (pieceParam === null) {
      await this.setState({
        hintParam
      })
    } else {
      await this.setState({
        pieceParam
      })
    }
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="m-2">
            <h5 className="text-center">Piece:</h5>
            <ListGroup defaultActiveKey="#linkp0">
              {MidYear2019.map(
                (piece, i) =>
                  i === 0 ? (
                    <ListGroup.Item
                      action
                      href="#linkp0"
                      onClick={() => this.handleChange(piece.name, null)}
                    >
                      {piece.name}
                    </ListGroup.Item>
                  ) : (
                    <ListGroup.Item
                      action
                      href={`#linkp${i}`}
                      onClick={() => this.handleChange(piece.name, null)}
                    >
                      {piece.name}
                    </ListGroup.Item>
                  )
              )}
            </ListGroup>
          </div>
          <div className="m-2">
            <h5 className="text-center">Hint:</h5>
            <ListGroup defaultActiveKey="#linkh0">
              {this.hintOptions.map(
                (opt, i) =>
                  i === 0 ? (
                    <ListGroup.Item
                      action
                      href="#linkh0"
                      onClick={() => this.handleChange(null, opt)}
                    >
                      {opt}
                    </ListGroup.Item>
                  ) : (
                    <ListGroup.Item
                      action
                      href={`#linkh${i}`}
                      onClick={() => this.handleChange(null, opt)}
                    >
                      {opt}
                    </ListGroup.Item>
                  )
              )}
            </ListGroup>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column">
          <hr />
          <Button className="initiate-test-button" size="lg" variant="success">
            Initiate Test
          </Button>
        </div>
      </div>
    )
  }
}
