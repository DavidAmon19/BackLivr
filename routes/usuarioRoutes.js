// routes/usuarioRoutes.js
const express = require('express');
const { criarUsuario, listarUsuarios, obterUsuario, atualizarUsuario, deletarUsuario, loginUser } = require('../controllers/usuarioController');
const router = express.Router();

router.post('/usuarios', criarUsuario);
router.get('/usuarios', listarUsuarios);
router.get('/usuarios/:id', obterUsuario);
router.put('/usuarios/:id', atualizarUsuario);
router.delete('/usuarios/:id', deletarUsuario);
router.post('/login', loginUser);

module.exports = router;
