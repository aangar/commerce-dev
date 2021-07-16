const flash = require('connect-flash');

module.exports.checkSearch = (req, res, next) => {
    if (req.query.query.length <= 2) {
        res.redirect('/')
    } else {
        next();
    }
}


module.exports.validateSearch = (req, res, next) => {
    const val = (req.query.type === 'noval') ? false : true;
    if (val) {
        next();
    } else {
        res.render('advanced', { searchVal: true })
    }

}