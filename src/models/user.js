const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: { type: String, require: true, trim: true },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('PASSWORD cannot be a `password`')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        require: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be greater than 0')
            }
        }
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
})

module.exports = User