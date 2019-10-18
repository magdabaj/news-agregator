var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require('cors');

const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const {Pool, Client} = require('pg');


const pool = new Pool({
    user: 'magda',
    host: 'localhost',
    database: 'users',
    password: 'magda',
    port: 5432,
});

pool.query('SELECT * FROM users', (err, res) => {
    console.log(err, res);
    pool.end()
});

const client = new Client({
    user: 'magda',
    host: 'localhost',
    database: 'users',
    password: 'magda',
    port: 5432,
});
client.connect();
client.query('SELECT * FROM users', (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        const users = [];
        users.push(res.rows);
        console.log(res.rows)
    }
});

// client.end();

module.exports = app;
