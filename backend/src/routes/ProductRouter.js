const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', ProductController.createProduct);
router.put('/update/:id', ProductController.updateProduct);
router.delete('/delete/:id', authMiddleware, ProductController.deleteProduct);
router.get('/get-all', ProductController.getAllProducts);
router.get('/get/:id', ProductController.getProductById);


router.get('/', (req, res) => {
    res.send('Product route working!');
});

module.exports = router;