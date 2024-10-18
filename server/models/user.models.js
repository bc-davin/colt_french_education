// models/user.js
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize along with DataTypes
const sequelize = require('../database/db');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Auto-incrementing user_id
    },
    user_mail: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
    },
    user_password_md5: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: '',
    },
    user_name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        defaultValue: '',
    },
    user_school: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
    },
    is_enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Default as false
    },
    is_removed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Default as false
    },
    m_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Default to current time
    },
    r_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Default to current time
    },
}, {
    timestamps: false, // Disable Sequelize's automatic timestamp fields
    freezeTableName: true, // Use the exact name of the model as the table name
});

module.exports = User;

