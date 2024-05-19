const express = require('express');
const router = express.Router();
const db = require('../Config/database');

router.get('/', async (req, res) => {
  try {
    const projects = await db.any('SELECT project_id, project_name, date_completed FROM projects ORDER BY date_completed');
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;