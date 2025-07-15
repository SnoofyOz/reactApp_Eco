const Product = require('../models/ProductModel');
const brcypt = require('bcrypt');
const { generateToken } = require('./JwtService');
const { generateRefreshToken } = require('./JwtService');

const createProduct = async (productData) => {
    const { name, price, description, type, image, rating } = productData;
    const newProduct = new Product({
        name,
        image,
        price,
        description,
        rating,
        type
    });
    return await newProduct.save();
};

const updateProduct = (id, updatedData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedProduct) {
                return reject(new Error('Product not found'));
            }
            resolve({
                status: 'OKELA',
                message: 'Product updated successfully',
                data: updatedProduct
            });
        } catch (e) {
            reject(e);
        }
    });
}

const getAllProducts = async () => {
    return await Product.find();
};

const deleteProduct = async (id) => {
    if (!id) {
        throw new Error('Product ID is required');
    }
    return await Product.findByIdAndDelete(id);
};
const getProductById = async (id) => {
    if (!id) {
        throw new Error('Product ID is required');
    }
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

module.exports = {
    createProduct,
    updateProduct,
    getAllProducts,
    getProductById,
    deleteProduct
};