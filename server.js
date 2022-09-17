//
const connect = require('connect');

//instantiate app server
const app = connect();

//customer middleware (function)
function message(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application')
}

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

//run app
app.listen(3000);

console.log('Server running at http://localhost:3000');