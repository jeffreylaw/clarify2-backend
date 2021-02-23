const path = require('path');
const engine = require('ejs-locals');
const express = require('express'); // Importing express function to create express app
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/clarify', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err)
    })


app.use(cors());

app.use(express.json()); // express json-parser transforms raw data of a request, parses into a JS object, attaches it to request object as request.body 

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method);
    console.log('Path:  ', request.path);
    console.log('Body:  ', request.body);
    next();
}

app.use(requestLogger);

require('./router')(app);


// ejs templating
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// view folder
app.set('views', path.join(__dirname, 'views'));

module.exports = app;