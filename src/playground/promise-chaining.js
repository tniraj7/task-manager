require('../db/mongoose')

const Task = require('../models/task')

Task.findByIdAndDelete('5c938928488fab323c9a3cfd').then((task) => {
    console.log('Deleted task for the fiven id: ', task)
    return Task.countDocuments({ completed: false })
}).then((count) => {
    console.log('Total Incompleted tasks: ', count)
}).catch((e) => {
    console.log(e)
})