// controllers/usuarioController.js
const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const senhaHash = await bcrypt.hash(senha, 10);
  const usuario = await Usuario.create({ nome, email, senha: senhaHash });
  res.status(201).json(usuario);
};

const listarUsuarios = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.status(200).json(usuarios);
};

const obterUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  res.status(200).json(usuario);
};

const atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  await usuario.update({ nome, email });
  res.status(200).json(usuario);
};

const deletarUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  await usuario.destroy();
  res.status(204).send();
};

const loginUser = async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) {
    return res.status(401).json({ error: 'Senha inválida' });
  }
  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
};

module.exports = {
  criarUsuario,
  listarUsuarios,
  obterUsuario,
  atualizarUsuario,
  deletarUsuario,
  loginUser
};
