// controller/userController.js
const User = require('../models/user.models');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { user_mail, user_password_md5, user_name, user_school, is_enabled, is_removed } = req.body;
        const user = await User.create({
            user_mail,
            user_password_md5,
            user_name,
            user_school,
            is_enabled,
            is_removed,
            m_datetime: new Date(), // Set the modified date to now
            r_datetime: new Date(), // Set the record date to now
        });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


