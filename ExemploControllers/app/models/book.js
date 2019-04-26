//chama exceções quando usamos variáveis não declaradas
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    id_author: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    Book.belongsTo(models.Author, {foreignKey: 'id_author'})
  };
  return Book;
};