const express = require('express');
const router = express.Router();
const controller = require('../Controller/bookIssue_controller');

router.get('/',controller.getIssue);
router.post('/',controller.createIssue);

module.exports = router;