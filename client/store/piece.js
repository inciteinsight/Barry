import axios from 'axios'

const GET_PIECE = 'GET_PIECE'

const getPiece = selectedPiece => ({
  type: GET_PIECE,
  selectedPiece
})

// export const getPieceThunk = id => async dispatch => {
//     try {
//         const { data } =
//     }
//     catch (error) {
//         console.error(error)
//     }
// }
