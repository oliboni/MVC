'use strict'

module.exports = (sequelize, dataType) => {
    const User = sequelize.define('User',{
        email: DataTypes.STRING,
        senha: DataTypes.STRING,

    }, {})
    User.associate = function (models) {

    }

    return User
}