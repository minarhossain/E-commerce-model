const path = require('path');
const express = require('express');
const router = require('./src/routes/api');


const app = new express();
const bodyParser = require('body-parser');


// security middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");


// Database
const mongoose = require('mongoose');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());


//Body Parser;
app.use(express.json());
app.use(bodyParser.json());


// Rate limiter

const limiter = rateLimit({ windows: 16 * 60 * 100, max: 3000 });









// Database Connection
//database connection of  mongoose 

let url = "mongodb+srv://backend:e5aouW8cYQY9xfQ1@cluster0.rxisjfd.mongodb.net/CRUD";
mongoose.connect(url).then(() => console.log("Connected")).catch(error => console.log(error));

// Managing BackEnd API Routing 
app.use('/api/v1', router);




//Managing Front End Routing backend to frontend connection
// app.use(express.static('./client/dist'));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
// })

module.exports = app;