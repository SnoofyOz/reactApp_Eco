const User = require('../models/UserModel');

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone, address } = newUser;
        try {
            const createdUser = await User.create({
                name,
                email,
                password,
                confirmPassword,
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

module.exports = {
    createUser
};