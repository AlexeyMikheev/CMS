const mongose = require('mongoose');
const Schema = mongose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    imageSrc: {
        type: String,
        default: ''
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongose.model('categories', categorySchema);