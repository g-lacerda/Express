const express = require("express");
const app = express();
const { body, validationResult } = require('express-validator');
const User = require('./database'); 
app.use(express.json());


app.get("/", function(req, res){
	res.send("Seja bem-vindo.");
});

app.get("/sobre", function(req, res){
	res.send("Página sobre.");
});

app.get("/rotadinamica/:nome/:cargo/:cor", function(req, res){
	res.send("Olá " + req.params.nome + "!<br>Seu cargo é: " + req.params.cargo + ", e sua cor favorita é: " + req.params.cor);
});


app.post('/post', [
  body('email').isEmail().withMessage('Insira um e-mail válido'),
  body('senha').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  body('descricao').optional().isLength({ max: 500 }).withMessage('A descrição deve ter no máximo 500 caracteres')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  User.create({
    email: req.body.email,
    password: req.body.senha,
    descricao_perfil: req.body.descricao ?? null
  }).then(user => {
    res.status(201).json(user);
  }).catch(error => {
    res.status(500).json({ error: error.message });
  });
});

app.listen(2510, function(){
	console.log("Servidor iniciado. http://localhost:2510");
});
