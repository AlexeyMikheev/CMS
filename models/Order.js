const mongose = require('mongoose');
const Schema = mongose.Schema;

const orderSchema = new Schema({
    data: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
        require: true
    },
    list: [
        {
            name: {
                type: String
            },
            quantity: {
                type: Number
            },
            cost: {
                type: Number
            }
        }
    ],
    user: {
        ref: 'usert',
        type: Schema.Type.ObjectId,
    },
});

module.exports = mongose.model('order', orderSchema);