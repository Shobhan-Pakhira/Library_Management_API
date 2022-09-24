const express = require('express');
const router = express.Router();
const controller = require('../Controller/book_controller');

router.get('/',controller.getBook);
router.post('/',controller.createBook);

module.exports = router;