const mongoose = require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true
})

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

const user1 = new User({
    name: 'jen',
    email: 'jen@gmail.com ',
    password: '  akjfnadfwod1   '
})

user1.save().then(() => {
    console.log(user1)
}).catch((error) => {
    if (error) {
        console.log(error)
    }
})


const Task = mongoose.model('Task', {
    description: { type: String, required: true, trim: true },
    completed: { type: Boolean, required: false, default: false }
})

const task1 = new Task({
    description: "          make mongooose validation and sanitization                ",

})

task1.save().then(() => {
    console.log(task1)
}).catch((error) => {
    console.log("Error ! : ", error)
})