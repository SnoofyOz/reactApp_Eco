const UserService = require('../services/UserService');

const createUser = async (req, res) => {
    try{
        const { name, email, password, confirmPassword, phone, address } = req.body;
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = reg.test(email);
        if (!name || !email || !password || !confirmPassword || !phone || !address) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }else if (isValidEmail === false) {
            return res.status(400).json({
                message: 'Email is not valid'
            });
        }else if(confirmPassword !== password) {
            return res.status(400).json({
                message: 'Password and confirm password do not match'
            });
        }
        console.log(req.body);

        // Call the UserService to create a new user
        const result = await UserService.createUser(req.body);
        return res.status(200).json(result);

    }   catch (e) {
        return res.status(404).json({
            message: 'Error creating user',
            error: e.message
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and password are required'
            });
        }

        // Call the UserService to log in the user
        const result = await UserService.loginUser(req.body);
        return res.status(200).json(result);

    } catch (e) {
        return res.status(404).json({
            message: 'Error logging in user',
            error: e.message
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        if (!id || !updatedData) {
            return res.status(400).json({
                message: 'User ID and data to update are required'
            });
        }

        // Call the UserService to update the user
        const result = await UserService.updateUser(id, updatedData);
        return res.status(200).json(result);

    } catch (e) {
        return res.status(404).json({
            message: 'Error updating user',
            error: e.message
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: 'User ID is required'
            });
        }

        // Call the UserService to delete the user
        const result = await UserService.deleteUser(id);
        return res.status(200).json(result);

    } catch (e) {
        return res.status(404).json({
            message: 'Error deleting user',
            error: e.message
        });
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: 'User ID is required'
            });
        }

        // Call the UserService to get user by ID
        const result = await UserService.getUserById(id);
        return res.status(200).json(result);

    } catch (e) {
        return res.status(404).json({
            message: 'Error fetching user',
            error: e.message
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        // Call the UserService to get all users
        const result = await UserService.getAllUsers();
        return res.status(200).json(result);
    } catch (e) {
        return res.status(404).json({
            message: 'Error fetching users',
            error: e.message
        });
    }
}


module.exports =  {
    createUser
    , loginUser
    , updateUser
    , getUserById
    , deleteUser
    , getAllUsers
};