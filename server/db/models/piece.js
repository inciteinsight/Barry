const Sequelize = require('sequelize');

const Piece = db.define('piece', {
    name: {
        type: Sequelize.STRING
    },
    sequence: {
        type: Sequelize.STRING
    }
});

// Check if all parts are accounted for in the sequence