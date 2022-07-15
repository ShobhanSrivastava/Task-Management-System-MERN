const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// PORT = process.env.PORT || 8000

//Mongoose setup
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONN, { useNewUrlParser : true });

//Importing schema from schema.js
const taskSchema = require('./schema');

// const findTasks = require('./Models/findTasks')

//Task Model
const Task = mongoose.model('Task', taskSchema);

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

//To fetch all the available tasks
app.get('/all-tasks', (req, res) => {
    Task.find({}, function(err, foundTasks){
        if(!err){
            console.log(foundTasks);
            res.send(foundTasks).status(201);
        }
        else{
            console.log('Error: ' + err);
        }
    })
})

app.post('/delete', (req, res) => {
    body = req.body;

    Task.deleteOne({id: body['_id']}, function(err){
        if(!err){
            console.log('Task with _id: '+ body['_id'] + ' deleted successfully!');
        }
        else{
            console.log(err);
        }
    })

    res.send('Deleted Succesfully').status(201);
})

app.post('/update-task', (req, res) => {
    body = req.body;

    key = body['key'];
    value = body['value'];

    Task.updateOne(body['_id'], {key : value}, function(err) {
        if(!err){
            Task.find({}, function(err, foundTasks){
                if(!err){
                    console.log('Task updated succesfully and Task list returned');
                    res.send(foundTasks).status(201);
                }
                else{
                    console.log('Error: '+err);
                    res.send(err);
                }
            })
        }
        else{
            console.log('Error: '+err);
            res.send(err);
        }
    })
})

//To insert the task in a particular status and return the new list in that status
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

    // foundTask = findTasks({status : body['status']})
    // res.send(foundTask);

    Task.find({status: body['status']}, function(err, foundTasks){
        if(!err){
            console.log(foundTasks);
            res.send(foundTasks).status(201);
        }
        else{
            console.log('Error: ' + err);
        }
    })
});

// PORT = process.env.PORT || 8000

app.listen(8000, () => {
    console.log('Server started successfully on port 8000');
})