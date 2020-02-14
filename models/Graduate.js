const mongoose = require('mongoose');

const GraduateSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Graduate', GraduateSchema, 'TestCollection')