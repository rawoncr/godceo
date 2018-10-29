const express = require('express');
const axios = require('axios');
const logger = require('morgan');
const bodyParser = require('body-parser');
const breed = require('./routes/breed');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/breed', breed);

// for any other route the api dog-ceo is consulted
app.get('*', function(req, res, next) {
    axios.get('https://dog.ceo/api'+ req.url)
        .then(response => res.send(response.data))
        .catch(err => next());
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.json(res.locals);
});

module.exports = app;