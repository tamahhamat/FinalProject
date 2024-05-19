const express = require('express');
const router = express.Router();

router.get('/RafikiData', (req, res) => {
  res.send('<h1>Rafiki Village Project</h1>');
});

router.get('/', (req, res) => {
  res.send('<h1>Rafiki Village Project</h1>');
});

module.exports = router;