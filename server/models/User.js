const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    phoneNumber: String,
    userType: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);
