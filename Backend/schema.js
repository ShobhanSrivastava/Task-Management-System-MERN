const mongoose =  require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    status: String,
    priority: String,
    category: String,
})

module.exports = taskSchema;