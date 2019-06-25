const express = require('express');
const rentalRouter = express.Router();
const Rental = require('../models/rentals');


rentalRouter.get('/', (req, res, next) => {
    Rental.find( 
        (err, theRental) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(200).send(theRental);
    });
});

rentalRouter.post('/', (req, res, next) => {
    // req.body.student = req.student._id
    const newRental = new Rental(req.body);
    newRental.save((err, savedRental) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(201).send(savedRental);
    });
});

rentalRouter.delete('/:_id', (req, res, next) => {
    Rental.findByIdAndRemove({ _id: req.params._id, student: req.student._id },
         (err, deletedRental) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(200).send(deletedRental);
    });
});

rentalRouter.put('/:_id', (req, res, next) => {
    Rental.findByIdAndUpdate({ _id: req.params._id, student: req.student._id }, 
        req.body, 
        (err, updatedRental) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(201).send(updatedRental);
    });
});

module.exports = rentalRouter;