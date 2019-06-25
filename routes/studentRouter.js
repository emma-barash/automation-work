const express = require('express');
const studentRouter = express.Router();
const Student = require('../models/students');


studentRouter.get('/', (req, res, next) => {
    Student.find((err, theStudent) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(200).send(theStudent);
    });
});

studentRouter.post('/', (req, res, next) => {
    const newStudent = new Student(req.body);
    newStudent.save((err, savedStudent) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(201).send(savedStudent);
    });
});

studentRouter.delete('/:_id', (req, res, next) => {
    Student.findOneAndRemove({ _id: req.params._id }, 
        (err, deletedStudent) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(200).send(deletedStudent);
    });
});

studentRouter.put('/:_id', (req, res, next) => {
    Student.findByIdAndUpdate({ _id: req.params._id }, 
        req.body, 
        (err, updatedStudent) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(201).send(updatedStudent);
    });
});

module.exports = studentRouter;