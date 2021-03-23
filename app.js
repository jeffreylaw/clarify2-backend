require('dotenv').config();

const path = require('path');
const engine = require('ejs-locals');
const express = require('express'); // Importing express function to create express app
const app = express();
require('express-async-errors')

const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const unknownEndpoint = require('./middleware/unknownEndpoint');

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



app.use(logger);
require('./router')(app);


app.use(errorHandler);
app.use(unknownEndpoint);


// ejs templating
// app.engine('ejs', engine);
// app.set('view engine', 'ejs');

// view folder
// app.set('views', path.join(__dirname, 'views'));

module.exports = app;