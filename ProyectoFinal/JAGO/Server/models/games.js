'use strict'

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const gameSchema = new Schema({
                    online: {
                        type: Boolean,
                        default: false,
                        required: true
                    },
                    type: {
                        type: String,
                        enum: ['BASKETBALL', 'FOOTBALL'],
                        required: true
                    },
                    team1: {
                        name: {
                            type: String,
                            required: true
                        },
                        goals: {
                            type: Number,
                            required: true
                        }
                    },
                    team2: {
                        name: {
                            type: String,
                            required: true
                        },
                        goals: {
                            type: Number,
                            required: true
                        }
                    },
                    period: {
                        type: Number,
                        default: 1,
                        required: true
                    },
                    finalized: {
                        type: Boolean,
                        default: false,
                        required: true
                    },
                    create: {
                        type: Date,
                        default: Date.now,
                        required: true
                    },
                    deleted: {
                        type: Boolean,
                        default: false,
                        required: true
                    }
                });

module.exports = gameSchema;
