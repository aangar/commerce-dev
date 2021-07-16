module.exports.loginCheck = (req, res, next) => {
    if (!req.isAuthenticated()) {
        if (req.originalUrl === '/cart/update?_method=PUT') {
            req.session.returnAddress = req.session.returnAddress;
        } else {
            req.session.returnAddress = req.originalUrl;
        }
        res.locals.currentUser = req.user;
        return res.redirect('/users/login');
    }
    next();
}


//note to self: just reworked the return bug that occurred. now we need to work on adding the viewing item to the cart:
//howto: use req.session.viewing to get the id, then find it, make a new array, then return that array as the new data.