const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user', required: true },
    isAdmin: { type: Boolean, default: false , required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    access_token: { 
        type: String,
        default: null,
        required: false
    },
    refresh_token: { 
        type: String,
        default: null,
        required: false
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;