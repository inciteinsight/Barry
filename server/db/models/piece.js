const Sequelize = require('sequelize')
const db = require('../db')

const Piece = db.define('piece', {
  name: {
    type: Sequelize.STRING
  },
  sequence: {
    type: Sequelize.STRING
  }
})

module.exports = Piece

// Check if all parts are accounted for in the sequence
