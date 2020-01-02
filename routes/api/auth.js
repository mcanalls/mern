const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/auths
// @desc    Test Route
// @access  Public  (ex.. if token needed to access route, private route)
router.get('/', auth, (req, res) => res.send('Auth Route'));

module.exports = router;