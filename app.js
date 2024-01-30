// app.js

const express = require('express');
const app = express();
const port = 3000;

// Endpoint "/me"
app.get('/me', (req, res) => {
  const response = [
    {
      prenom: 'Mbaye',
      nom: 'Seck',
    },
    {
      prenom: 'Alkaly',
      nom: 'Badji',
    },
    {
      prenom: 'Moussa',
      nom: 'Diatta',
    },
  ];

  res.json(response);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
