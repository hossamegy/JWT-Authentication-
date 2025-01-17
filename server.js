require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');
const mainRouter = require('./routes/main');
const errorHandler = require('./middleware/error-handler');

// connect to mongoDB
connectDB();

// create app
const app = express();

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.status(200).json({message: 'hello world'});
});

app.use('/api/v1/', mainRouter);

app.use(errorHandler);

// Listen server
const PORT = '3000';
const HOST_NAME = '127.0.0.1'

mongoose.connection.once('open', () => {
    console.log('connect to mongoDB');
    app.listen(PORT, HOST_NAME, () => {
        console.log(`Server is running in http://${HOST_NAME}:${PORT}`);
    });
})
