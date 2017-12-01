'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true,
        min: [1, "El número de páginas debe estar entre 1 y 1000"],
        max: [1000, "El número de páginas debe estar entre 1 y 1000"]
    },
    price: {
        type: Number,
        min: [0, "El precio debe estar entre $0 y $100000"],
        max: [100000, "El precio debe estar entre $0 y $100000"]
    }
});

module.exports = mongoose.model('book', bookSchema);
