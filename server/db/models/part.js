const Sequelize = require('sequelize');

const Part = db.define('part', {
    name: {
        type: Sequelize.STRING
    }
});

// before create - must check if a part with the same name exists.
//
// In a speech, we cannot have two introductions
// In a song, if two choruses have different lyrics, they should have distinct names