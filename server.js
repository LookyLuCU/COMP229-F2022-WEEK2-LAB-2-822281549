//import express
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

//ES Modules fix for _dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const _dirname = dirname(fileURLToPath(import.meta.url));

//import router
import indexRouter from './app/routes/index.server.route.js';

//instantiate app server
const app = express();

//Setup ViewEngine EJS
app.set('views', path.join(_dirname, '/views'));

//infomr express which engine we will use
app.set('view engine', 'ejs');

//loading 3rd party library
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(_dirname, '../public'))); //static files = imgs, js in browser, any uploaded files req uploading to browser
app.use(session({
    secret: 'MySecret',    //best prctice to use secrt
    saveUninitialized: false,       //lose session when reloaded
    resave: false
}));


//not needed anymore
/*const connect = require('connect');

//instantiate app server
const app = connect();*/


//now in index.controller
/*
//customer middleware (function)
function message(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application')
}*/

//customer middleware (function)
function messageAsHTML(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from NodeJS Application as html</h1>')
}

//customer middleware (function)
function messageAsJSON(req, res, next){
    res.setHeader('Content-Type', 'application:json');
    res.end('{"message": "Hello from NodeJS Application as json"}')
}

//app.use('/', helloWorld);
app.use('//', message)
app.use('/html', messageAsHTML);
app.use('/json', messageAsJSON);

//use modules
app.use('/', indexRouter);

//run app
app.listen(3000);

console.log('Server running at http://localhost:3000');