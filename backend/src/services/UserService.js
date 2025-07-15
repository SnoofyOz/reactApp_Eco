const User = require('../models/UserModel');
const brcypt = require('bcrypt');
const { generateToken } = require('./JwtService');
const { generateRefreshToken } = require('./JwtService');

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone, address } = newUser;
        try {
            const checkUser = await User.findOne({ email });
            if (checkUser) {
                return reject(new Error('Email already exists'));
            }
            const hash = brcypt.hashSync(password, 10);
            const createdUser = await User.create({
                name,
                email,
                password: hash,
                phone,
                address
            });
            if (createUser) {
                resolve({
                    status: 'OKELA',
                    message: 'User created successfully',
                    data: createdUser
                });
            }

        } catch (e) {
            reject(e);
        }
    });
}

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { email, password } = userLogin;
        try {
            const checkUser = await User.findOne({ email });
            if (!checkUser) {
                return reject(new Error('User not found'));
            }
            const checkPassword = brcypt.compareSync(password, checkUser.password);
            if (!checkPassword) {
                return reject(new Error('Invalid password'));
            }
            // Generate Refresh Token
            const refresh_token = await generateRefreshToken({
                id: checkUser.id,
                Admin: checkUser.isAdmin,
            });
            // Generate JWT token
            const access_token = await generateToken({
                id: checkUser.id,
                Admin: checkUser.isAdmin,
            });
            // Send response
            resolve({
                status: 'OKELA',
                message: 'User logged in successfully',
                access_token,
                refresh_token
            });
        } catch (e) {
            reject(e);
        }
    });
}

const updateUser = (id, updatedData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedUser) {
                return reject(new Error('User not found'));
            }
            resolve({
                status: 'OKELA',
                message: 'User updated successfully',
                data: updatedUser
            });
        } catch (e) {
            reject(e);
        }
    });
}

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                return reject(new Error('User not found'));
            }
            resolve({
                status: 'OKELA',
                message: 'User deleted successfully',
                data: deletedUser
            });
        } catch (e) {
            reject(e);
        }
    });
}

const getUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findById(id);
            if (!user) {
                return reject(new Error('User not found'));
            }
            resolve({
                status: 'OKELA',
                message: 'User retrieved successfully',
                data: user
            });
        } catch (e) {
            reject(e);
        }
    });
}

const getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await User.find();
            resolve({
                status: 'OKELA',
                message: 'All users retrieved successfully',
                data: users
            });
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    createUser
    , loginUser
    , updateUser
    , getAllUsers
    , deleteUser
    , getUserById
};