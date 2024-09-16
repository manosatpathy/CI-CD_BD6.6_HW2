const express = require('express');
const cors = require('cors');
const app = express();
const { getAllGames, getGameById } = require('./controllers');

// Exercise 1: Retrieve All Games
app.get('/games', async (req, res) => {
  const games = getAllGames();
  return res.status(200).json({ games });
});

// Exercise 2: Retrieve Game by ID
app.get('/games/details/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const game = getGameById(id);
  return res.status(200).json({ game });
});

module.exports = { app };
