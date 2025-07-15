const ProductService = require('../services/ProductService');

const createProduct = async (req, res) => {
    try {
        const { name, image, price, description, type, rating } = req.body;
        if (!name || !image || !price || !description || !type || !rating) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        // Call the ProductService to create a new product
        const result = await ProductService.createProduct(req.body);
        return res.status(200).json(result);

    } catch (e) {
        return res.status(404).json({
            message: 'Error creating product',
            error: e.message
        });
    }
}
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        if (!id || !updatedData) {
            return res.status(400).json({
                message: 'Product ID and data to update are required'
            });
        }

        // Call the ProductService to update the product
        const result = await ProductService.updateProduct(id, updatedData);
        return res.status(200).json(result);

    } catch (e) {
        return res.status(404).json({
            message: 'Error updating product',
            error: e.message
        });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        return res.status(200).json(products);
    } catch (e) {
        return res.status(500).json({
            message: 'Error fetching products',
            error: e.message
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: 'Product ID is required'
            });
        }

        // Call the ProductService to delete the product
        const result = await ProductService.deleteProduct(id);
        return res.status(200).json(result);

    } catch (e) {
        return res.status(404).json({
            message: 'Error deleting product',
            error: e.message
        });
    }
};
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: 'Product ID is required'
            });
        }

        // Call the ProductService to get the product by ID
        const product = await ProductService.getProductById(id);
        return res.status(200).json(product);

    } catch (e) {
        return res.status(404).json({
            message: 'Error fetching product',
            error: e.message
        });
    }
};

module.exports = {
    createProduct,
    updateProduct,
    getAllProducts,
    getProductById,
    deleteProduct
};