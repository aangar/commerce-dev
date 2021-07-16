const Products = require('../models/Product');


module.exports.getListings = async (req, res) => {
    const found = await Products.find({})
    res.render('products', { found })
}

module.exports.getItemPage = async (req, res) => {
    const { id } = req.params;
    const product = await Products.findById(id);
    req.session.viewing = product;
    res.render('itemRedo', { product });
}
