const mongose = require('mongoose');
const Schema = mongose.Schema;

const positionSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    cost: {
        type: Number,
    },
    category: {
        ref: 'categories',
        type: Schema.Types.ObjectId
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongose.model('positions', positionSchema);