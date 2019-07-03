const User = require('./user')
const Line = require('./line')
const Part = require('./part')
const Piece = require('./piece')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
// Line.belongsTo(Part);
// Part.hasMany(Line);
// Part.belongsTo(Piece);
// Piece.hasMany(Part);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Line,
  Part,
  Piece
}
