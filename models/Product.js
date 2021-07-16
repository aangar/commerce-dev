const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },

    tags: [],
    description: String,
    brand: String,
    color: String,
    size: {
        type: String,
        required: true
    },
    gender : {
        type : String,
        enum : ['Boys' , 'Girls' , 'Mens' , "Womens" , "Unisex"],
        required : true
    }
})

module.exports = mongoose.model('Product', productSchema);