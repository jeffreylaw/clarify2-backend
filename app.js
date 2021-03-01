require('dotenv').config();

const path = require('path');
const engine = require('ejs-locals');
const express = require('express'); // Importing express function to create express app
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(res => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err)
    });


app.use(cors());

app.use(express.urlencoded({ extended: true })); // express parser for formdata
app.use(express.json()); // express json-parser transforms raw data of a request, parses into a JS object, attaches it to request object as request.body 
app.use(cookieParser());



require('./router')(app);


// ejs templating
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// view folder
app.set('views', path.join(__dirname, 'views'));

module.exports = app;