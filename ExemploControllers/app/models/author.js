//chama exceções quando usamos variáveis não declaradas
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {})
  Author.associate = function(models) {
    Author.hasMany(models.Book,
        {foreignKey: 'id_author'}
        )
  }
  return Author
}