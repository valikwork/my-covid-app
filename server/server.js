require('dotenv').config()

const { join } = require('path');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const { isCelebrateError } = require('celebrate');
const MongoStore = require('connect-mongo');
const port = process.env.PORT || 3000;

const publicPath = join(__dirname, '..', 'build');

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const app = express();

app.use(express.static(publicPath));
app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    name: "user-token",
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, 
        httpOnly: true, 
        signed: true, 
        maxAge: 15000 //24 hours
    },
    // store: MongoStore.create({
    //     client: mongoose.connection.getClient(),
    //     dbName: "sessions",
    //     collectionName: "covid_app_sessions",
    //     stringify: false
    // })
}));

app.use("/api", require("./api"))

app.get('*', (req, res) => {
    res.sendFile(join(publicPath, 'index.html'));
 });

app.use((err, req, res, next) => {
    if(isCelebrateError(err)){
        const [field, error] = err.details.entries().next().value;
        return res.status(406).json({ message: error.message, field })
    }
    let mongoCode;
    if(err.code > 550){
        mongoCode = err.code;
        err.code = 500;
    }
    if(err.code === 401){
        return res.redirect('/login')
    }
    return res.status(err.code || 400).json({ message: err.message, ...(mongoCode ? {mongoCode} : "") })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });