//Index Controller - single exportable function
export function message(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World')
};

