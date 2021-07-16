const User = require('../models/User');

module.exports.getCart = async (req, res) => {
    const foundUser = await User.findById(res.locals.currentUser._id);
    const totalPrice = (cart) => {
        let total = 0;
        for (let c of cart) {
            total += parseInt(c.price);
        }
        return total;
    }
    res.render('cart/cartList', { cart: foundUser.cart, total: totalPrice(foundUser.cart) });
}

module.exports.updateCart = async (req, res) => {
    const foundUser = await User.findById(res.locals.currentUser._id);
    let cart = foundUser.cart;
    const toAdd = req.session.viewing;
    cart.push(toAdd);
    foundUser.cart = cart;
    await foundUser.save();
    res.send('check db!!')
}