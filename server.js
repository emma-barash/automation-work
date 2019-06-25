const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 5200

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

// ROUTES
app.use('/student', require('./routes/studentRouter'));
app.use('/student/housing', require('./routes/housingRouter'));
app.use('/student/rentals', require('./routes/rentalRouter'));

// CONNECT MONGOOSE
mongoose.connect('mongodb://localhost:27017/housing-rentals', { useNewUrlParser: true }, () => {
    console.log('Connected to the DB!');
})

// UNIVERSAL ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// PORT LISTENER
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

