const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

//add and remove like
router.get('/:id', ensureLoggedIn, likesCtrl.add);

module.exports = router;
