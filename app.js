const express = require('express');
const mongoose = require('mongoose');

let app = express();
const route = require('./routes/route');

let mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/';

mongoose.connect(mongoUrl);

const port = process.env.PORT || 8080;

app.use('/', route);

app.listen(port);

console.log('Express listening on port...', port);