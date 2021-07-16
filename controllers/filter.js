const Product = require('../models/Product')

module.exports.stringSearch = async (req, res) => {
    const { query } = req.query;
    const list = await Product.find();
    let matches = [];
    for (let item of list) {
        if (item.tags.includes(query) || item.name.toLowerCase().includes(query)) {
            matches.push(item)
        }
    }
    res.render('filter', { matches, search: query })
}

module.exports.typeSearch = async (req, res) => {
    const { query } = req.query;
    const results = await Product.find();
    let matches = [];
    for (let product of results) {
        if (product.tags.includes(query)) {
            matches.push(product);
        }
    }
    res.render('filter', { matches, search: query })
}