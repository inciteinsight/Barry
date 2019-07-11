import {MidYear2019, HintOptions} from './lyricTempStore'

const initialState = {
  selectedPiece: MidYear2019[0],
  selectedHint: HintOptions[0],
  answer: {}
}

const GET_PIECE = 'GET_PIECE'
const GET_HINT = 'GET_HINT'

const getPiece = selectedPiece => ({
  type: GET_PIECE,
  selectedPiece
})

const getHint = selectedHint => ({
  type: GET_HINT,
  selectedHint
})

export const getPieceThunk = pieceName => async dispatch => {
  try {
    const data = await MidYear2019.find(piece => piece.name === pieceName)
    dispatch(getPiece(data))
  } catch (error) {
    console.error(error)
  }
}

export const getHintThunk = hintName => async dispatch => {
  try {
    const data = await HintOptions.find(opt => opt.name === hintName)
    dispatch(getHint(data))
  } catch (error) {
    console.error(error)
  }
}

export const resetAnswerThunk = selectedPiece => async dispatch => {
  try {
    let answer = selectedPiece
    answer.sequence.forEach(part => {
      part.lines.forEach(line => {
        line = ''
      })
    })
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  let newState = {...state}
  switch (action.type) {
    case GET_PIECE:
      newState.selectedPiece = action.selectedPiece
      return newState
    case GET_HINT:
      newState.selectedHint = action.selectedHint
      return newState
    default:
      return state
  }
}
