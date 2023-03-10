const express = require('express');
const router = express.Router();
const repliesCtrl = require('../controllers/replies');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

//create new reply
router.post('/tweets/:id/replies', ensureLoggedIn, repliesCtrl.create);

module.exports = router;
