import {MidYear2019, HintOptions} from './lyricTempStore'

const initialState = {
  selectedPiece: MidYear2019[0],
  selectedHint: HintOptions[0]
}

const GET_PIECE = 'GET_PIECE'

const getPiece = selectedPiece => ({
  type: GET_PIECE,
  selectedPiece
})

export const getPieceThunk = pieceId => async dispatch => {
  try {
    const data = await MidYear2019.find(piece => piece.id === pieceId)
    console.log(data)
    dispatch(getPiece(data))
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
    default:
      return state
  }
}
