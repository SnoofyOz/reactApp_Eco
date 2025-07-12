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

module.exports =  {
    createUser}