//chama exceções quando usamos variáveis não declaradas
'use strict'

 module.exports = (sequelize, DataTypes) =>{
    const Book = sequelize.define('Book',{
        title: DataTypes.STRING,
        isbn: DataTypes.STRING,
        id_author: DataTypes.INTEGER
    }, {})
     Book.associate = function(models) {
         // associations can be defined here
     }
     return Book
 }