const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// PORT = process.env.PORT || 8000

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONN, { useNewUrlParser : true });

// const insert = require('./Routes/insert')
const taskSchema = require('./schema');

const Task = mongoose.model('Task', taskSchema);

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.post('/insert', (req, res) => {
    body = req.body;

    const task = new Task({
        title: body['title'],
        priority: body['priority'],
        status: body['status'],
        category: body['category']
    })

    task.save((err) => {
        if(!err){
            console.log('Inserted Succesfully');
        }
        else{
            console.log('Error : ' + err);
        }
    })

    res.send('Success').status(201);
});

app.listen(8000, () => {
    console.log('Server started successfully on port 8000');
})