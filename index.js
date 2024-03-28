// index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'My EC Site' });
});

module.exports = router;
