const Sequelize = require('sequelize');

const Line = db.define('line', {
    sentence: {
        type: Sequelize.STRING,
        allowNull: false
    }
});