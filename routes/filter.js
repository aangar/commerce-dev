const filter = require('../controllers/filter');
const express = require('express');
const { checkSearch } = require('../middleware/checkSearch');
const router = express.Router();


router.route('/')
    .get(checkSearch, filter.stringSearch)
router.route('/type')
    .get(filter.typeSearch)
module.exports = router;