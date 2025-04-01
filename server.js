require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Autorise toutes les origines (à restreindre en prod)
app.use(express.json()); // Permet de lire les JSON dans les requêtes

// Route POST
app.post('/api/data', (req, res) => {
    console.log('Données reçues:', req.body);
    res.json({ message: 'Données bien reçues', data: req.body });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
