'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "Debes ingresar un nombre."]
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
      type: String,
      enum: ['pendiente', 'completa'],
      required: [true, "Debes ingresar un estado"]   
  }
});


module.exports = mongoose.model('Tasks', TaskSchema);