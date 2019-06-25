const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const studentSchema = new Schema({
     firstName: {
         type: String,
         required: true
     },
     lastName: {
         type: String,
         required: true
     },
     cohort: {
         type: String,
     },
     instructor: {
        type: String
     },
    //  rentals: {
    //     type: Boolean
    //  },
    //  owing:{
    //     type: Boolean
    //  },
     time: {
         type: Date,
         defualt: Date.now
     }
 });

 module.exports = mongoose.model('Student', studentSchema);

