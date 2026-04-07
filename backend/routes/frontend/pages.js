const express = require('express');
const path = require('path');
const router = express.Router();
const auth = require('../../middleware/auth.js');

// Custom routers
const debug = require('./debug.js');
router.use('/debug', debug);


// Direct HTML link
router.use('/login', express.static(path.join(__dirname, '../../../frontend/pages/login')));
router.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../frontend/pages/login/login.html'));
});

router.use('/sign_up', express.static(path.join(__dirname, '../../../frontend/pages/sign_up')));
router.get('/sign_up', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../frontend/pages/sign_up/sign_up.html'));
});

router.use('/about', express.static(path.join(__dirname, '../../../frontend/pages/about')));
router.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, ''));
});

// ---- Byteport ----

// Apply auth middleware properly
router.use('/byteport', auth(0));

// Serve static files
router.use('/byteport', express.static(path.join(__dirname, '../../../frontend/pages/byteport')));

// Serve main page
router.get('/byteport', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../frontend/pages/byteport/byteport.html'));
});


// -------------------------->

// HOME PAGE
router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../frontend/pages/home/index.html'));
});


module.exports = router;