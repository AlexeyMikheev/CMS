const mongose = require('mongoose');
const Schema = mongose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        default: ''
    },
});

module.exports = mongose.model('users', userSchema);