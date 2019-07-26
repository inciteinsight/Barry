import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {SongBook, HintOptions} from '../store/lyricTempStore'
import {getPieceThunk, getHintThunk} from '../store/'
import {ListGroup, Button} from 'react-bootstrap'
import MediaQuery from 'react-responsive'

class Parameters extends Component {
  constructor() {
    super()
    this.state = {
      pieceParam: SongBook[0].name,
      hintParam: HintOptions[0].name
    }
  }

  async componentDidMount() {
    await this.props.onLoadPiece(this.state.pieceParam)
    await this.props.onLoadHint(this.state.hintParam)
    console.log(this.props.user)
  }

  handleChange = async (pieceParam = null, hintParam = null) => {
    if (pieceParam === null) {
      await this.props.onLoadHint(hintParam)
    } else {
      await this.props.onLoadPiece(pieceParam)
    }
  }

  validPieces = () => {
    let {access} = this.props.user
    if (!access) {
      access = [null]
    }
    const pieces = SongBook
    return pieces.filter(piece => this.validatePiece(piece, access))
  }

  validatePiece = (piece, access) => {
    access.push(null)
    return access.reduce((result, accessKey) => {
      if (accessKey === piece.access) {
        result = true
      }
      return result
    }, false)
  }

  renderPieceSelection() {
    return (
      <ListGroup defaultActiveKey="#linkp0">
        {this.validPieces().map(
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
    )
  }

  renderHintSelection() {
    return this.props.hint && this.props.piece ? (
      <ListGroup defaultActiveKey={`#linkh${this.props.hint.id}`}>
        {HintOptions.map(
          (opt, i) =>
            i === 0 ? (
              <ListGroup.Item
                action
                href="#linkh0"
                onClick={() => this.handleChange(null, opt.name)}
              >
                {opt.name}
              </ListGroup.Item>
            ) : (
              <ListGroup.Item
                action
                href={`#linkh${i}`}
                onClick={() => this.handleChange(null, opt.name)}
              >
                {opt.name}
              </ListGroup.Item>
            )
        )}
      </ListGroup>
    ) : (
      <div> Loading ... </div>
    )
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="m-2">
            <h5 className="text-center">Piece:</h5>
            {this.renderPieceSelection()}
          </div>
          <div className="m-2">
            <MediaQuery query="(min-device-width: 750px)">
              <h5 className="text-center">Hint:</h5>
              {this.renderHintSelection()}
            </MediaQuery>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column">
          <hr />
          <Link to="/test">
            <Button
              className="initiate-test-button"
              size="lg"
              variant="success"
            >
              Initiate Test
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  piece: state.piece.selectedPiece,
  hint: state.piece.selectedHint,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  onLoadPiece: piececName => {
    dispatch(getPieceThunk(piececName))
  },
  onLoadHint: hintName => {
    dispatch(getHintThunk(hintName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Parameters)
