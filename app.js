// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authMiddleware = require('./middlewares/auth');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', usuarioRoutes);


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
