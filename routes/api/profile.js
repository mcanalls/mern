const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @desc    Test Route
// @access  Public  (ex.. if token needed to access route, private route)
router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;