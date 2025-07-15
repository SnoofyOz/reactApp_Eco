const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/sign-up', UserController.createUser);
router.post('/sign-in', UserController.loginUser);
router.put('/update-user/:id', UserController.updateUser);
router.delete('/delete/:id', authMiddleware, UserController.deleteUser);
router.get('/get-user/:id', UserController.getUserById);
router.get('/get-all-users', UserController.getAllUsers);


router.get('/', (req, res) => {
    res.send('User route working!');
});

module.exports = router;