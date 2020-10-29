//Budget API


const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pbModel = require('./models/pb_schema.js');
let url = 'mongodb://localhost:27017/personal_budget_db';

app.use(cors());
app.use(express.json());
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get('/budget', (req, res) => {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            pbModel.find({})
                .then((data) => {
                    console.log("Connected to the database")
                    //console.log(data);
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((connectionError) => {
                    console.log(connectionError);
                });
        })
        .catch((connectionError) => {
            console.log(connectionError);
        });
});

app.post('/addEntry', (req, res) => {
    console.log(req.body);
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        newEntry = {
            title: req.body.title,
            budget: req.body.budget,
            color: req.body.color
        }
        pbModel.insertMany(newEntry)
            .then((data) => {
                res.json(data);
                mongoose.connection.close();
            })
            .catch((connectionError) => {
                console.log(connectionError)
            });
    })
    .catch((connectionError) => {
        console.log(connectionError)
    });
});

app.listen(port, () => {
    console.log(`Example API listening at http://localhost:${port}`)
});