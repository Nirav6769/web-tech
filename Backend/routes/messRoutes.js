const express = require('express');
const router = express.Router();
const data = require('../data/menuData');

router.get('/messes', (req, res) => {
  res.json(data.messes);
});

router.get('/menu/:mess', (req, res) => {
  const mess = req.params.mess;
  const items = data.items.filter(i => i.mess === mess);
  res.json(items);
});

router.get('/specials', (req, res) => {
  res.json(data.specials);
});

module.exports = router;
