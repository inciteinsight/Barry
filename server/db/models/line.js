const Sequelize = require('sequelize')
const db = require('../db')

const Line = db.define('line', {
  sentence: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
