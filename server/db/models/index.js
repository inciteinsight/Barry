const User = require('./user')
const Line = require('./line')
const Part = require('./part')
const Piece = require('./piece')

Line.belongsTo(Part)
Part.hasMany(Line)
Part.belongsTo(Piece)
Piece.hasMany(Part)

module.exports = {
  User,
  Line,
  Part,
  Piece
}
