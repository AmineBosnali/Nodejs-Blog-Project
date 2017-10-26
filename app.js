var fs=require('fs');
var express=require('express');
var path=require('path');
var app=express();
var ejsLayouts=require('express-ejs-layouts');
var bodyParser=require('body-parser');
var db=require('./app_server/models/db');
var session = require('express-session');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./app_server/views'));


app.use(session({
    secret: "blog-projesi",
    resave: false,
    saveUninitialized: true,
    maxAge: Date.now() + (30 * 86400 * 1000)
  }));
  app.use(bodyParser.urlencoded({extended:false,limit:'50mb'}));
  app.use(bodyParser.json({limit:'50mb'}));
  app.use(ejsLayouts);
  app.use('/public',express.static(path.join(__dirname,'public')));
  

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(ejsLayouts);
app.use('/public',express.static(path.join(__dirname,'public')));
//yönlendirici ekleniyor
require('./app_server/routes/routeManager')(app);


app.listen(8000);
