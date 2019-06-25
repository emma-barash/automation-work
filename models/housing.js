const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const housingSchema = new Schema({
    apartment: {
        type: String
    },
    unitNumber: {
        type: Number,
        reqiuired: true
    },
    roomNumber: {
        type: Number,
        reqiuired: true
    },
    student:{
        type: Schema.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Housing', housingSchema);