const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/', UserController.createUser);

router.get('/', (req, res) => {
    res.send('User route working!');
});

module.exports = router;