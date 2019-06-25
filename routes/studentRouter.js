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

studentRouter.delete('/:id', (req, res, next) => {
    Student.findByIdAndRemove((err, deletedStudent) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(200).send(deletedStudent);
    });
});

studentRouter.put('/:id', (req, res, next) => {
    Student.findByIdAndUpdate({ id: req.params.id }, req.body, (err, updatedStudent) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(201).send(updatedStudent);
    });
});

module.exports = studentRouter;