//Index Controller - single exportable function
export function message(req, res, next){
    res.render('index', { title: 'Home' });
};

