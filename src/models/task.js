const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: { type: String, required: true, trim: true },
    completed: { type: Boolean, required: false, default: false },
    ower: {type : mongoose.Schema.Types.ObjectId, required : true}
})

module.exports = Task