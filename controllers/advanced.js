const Product = require('../models/Product');
const { filterResults } = require('../public/js/advConstraints')


module.exports.getAdvancedPage = (req, res) => {
    res.render('advanced', { searchVal: false });
}

module.exports.getAdvConstraints = async (req, res) => {
    const { type, price, size, brand, color , gender} = req.query;
    const result = await Product.find({
        type: type
    })

    let toFilter = [];
    for (let r of result) {
        toFilter.push(r);
    }

    const results = filterResults(toFilter, price, size, brand, color, gender);

    res.render('constraint', { matches: results })
}