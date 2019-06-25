const express = require('express');
const housingRouter = express.Router();
const Housing = require('../models/housing');


housingRouter.get('/', (req, res, next) => {
    Housing.find( 
        (err, theHousing) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(200).send(theHousing);
    });
});

housingRouter.post('/', (req, res, next) => {
    // req.body.student = req.student._id
    const newHousing = new Housing(req.body);
    newHousing.save((err, savedHousing) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(201).send(savedHousing);
    });
});

housingRouter.delete('/:_id', (req, res, next) => {
    Housing.findByIdAndRemove({ _id: req.params._id, student: req.student._id },
         (err, deletedHousing) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(200).send(deletedHousing);
    });
});

housingRouter.put('/:_id', (req, res, next) => {
    Housing.findByIdAndUpdate({ _id: req.params._id, student: req.student._id }, 
        req.body, 
        (err, updatedHousing) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(201).send(updatedHousing);
    });
});

module.exports = housingRouter;