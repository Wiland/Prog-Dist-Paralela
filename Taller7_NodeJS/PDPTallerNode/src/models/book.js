const mongoose = require('mongoose');
const Schema = mongoose.Schema;

bookSchema = new Schema({
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

/*bookSchema.virtual("bookInc").get(() => {
    return "Nombre: " + this.parameter;
}).set((parameterInc) => {
    this.parameter = parameterInc + ".";
});*/

const Book = mongoose.model('books', bookSchema);

module.exports = Book;
