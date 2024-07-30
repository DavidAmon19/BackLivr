module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  }, {
    tableName: 'Usuarios',
  });
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Emprestimo, {
      foreignKey: 'UsuarioId',
    });
  };
  return Usuario;
}