module.exports = (sequelize, DataTypes) => {
  const Livro = sequelize.define('Livro', {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING
  }, {
    tableName: 'Livros',
  });
  Livro.associate = function(models) {
    Livro.hasMany(models.Emprestimo, {
      foreignKey: 'LivroId',
    });
  };
  return Livro;
}