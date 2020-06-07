const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

const app = express();
const url ='mongodb+srv://PierreGoe:niQes9rF5846@cluster0-hsqn0.mongodb.net/projet-vero?retryWrites=true&w=majority';

// Connexion BDD
mongoose.connect(url,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Gerer le CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Transformer le corps de la requête en objet javaScript
app.use(bodyParser.json());

//Route authentification
app.use('/api/auth', userRoutes);

module.exports = app;