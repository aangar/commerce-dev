const passport = require('passport');
const User = require('../models/User');

module.exports.getRegisterForm = (req, res) => {
    res.render('user/register')
}

module.exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body.user;
        const user = new User({
            username: username,
            email: email
        })
        const register = await User.register(user, password);
        res.redirect('/products');
    } catch (e) {
        //style register form then make the little error box in css.
        const msg = (e.code) ? 'The email was already in use!' : e.message;
        res.send(msg);
        //redirect or render a new page where the user islogged in
    }
}

module.exports.loginForm = (req, res) => {
    res.render('user/login');
}

module.exports.login = async (req, res) => {
    const returnUrl = req.session.returnAddress || '/products';
    res.redirect(returnUrl);
}

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/products')
}
