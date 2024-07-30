module.exports = (sequelize, DataTypes) => {
  const Emprestimo = sequelize.define('Emprestimo', {
    dataEmprestimo: DataTypes.DATE,
    dataDevolucao: DataTypes.DATE,
  }, {
    tableName: 'Emprestimos',
  });
  Emprestimo.associate = function(models) {
    Emprestimo.belongsTo(models.Usuario, {
      foreignKey: 'UsuarioId',
    });
    Emprestimo.belongsTo(models.Livro, {
      foreignKey: 'LivroId',
    });
  };
  return Emprestimo;
}