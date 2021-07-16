const express = require('express');
const router = express.Router();
const advanced = require('../controllers/advanced');
const { validateSearch } = require('../middleware/checkSearch')

router.route('/')
    .get(advanced.getAdvancedPage);
router.route('/constraints')
    .get(validateSearch, advanced.getAdvConstraints);
module.exports = router;