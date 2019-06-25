const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({
    computer: {
        type: Boolean
    },
    serialNumber: {
        type: String
    },
    utaPass: {
        type: Boolean
    },
    parkingPass: {
        type: Boolean
    },
    student: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Rentals', rentalSchema);