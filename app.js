require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
 )
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var HousesRouter = require('./routes/Houses');
var boardRouter=require('./routes/board');
var chooseRouter=require('./routes/choose');
var Houses = require("./models/Houses");
var resourceRouter=require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Houses',HousesRouter);
app.use('/board',boardRouter);
app.use('/choose',chooseRouter);
app.use('/resource',resourceRouter);

const connectionString = process.env.MONGO_CON;
const mongoose = require('mongoose');
mongoose.connect(connectionString);

var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

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

 

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

async function recreateDB(){
  // Delete everything
  await Houses.deleteMany();
  let instance1 = new 
  Houses({house_name: "Maple Cottage", house_size: "Medium", house_price: 300000});
  await instance1.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("First object saved")
  //});
 
  let instance2 = new 
  Houses({house_name: "Oak Manor", house_size: "Large", house_price: 500000});
  await instance2.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("second object saved")
  //});
 
  let instance3 = new 
  Houses({house_name: "Pine Retreat", house_size: "Small", house_price: 200000});
  await instance3.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("Third object saved")
  //});
 }
 let reseed = true;
 if (reseed) { recreateDB();}

  
module.exports = app;
