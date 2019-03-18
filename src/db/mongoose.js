const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Task = mongoose.model('Task', {
    desctiption : { type: String },
    completed : { type : Boolean }
})

const task1 = new Task({
    desctiption : " Create a mongoose model",
    completed : true
})

task1.save().then(() => {
    console.log(task1)
}).catch( (error) => {
    console.log("Error ! : " , error)
})