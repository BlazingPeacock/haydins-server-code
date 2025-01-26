const express = require('express');
const router = express.Router();
const db = require('./database');

// Get all logbook entries
router.get('/', (req, res) => {
    db.all('SELECT * FROM logbook ORDER BY signed_at DESC', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Add a new logbook entry
router.post('/', (req, res) => {
    const { name, company } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    db.run(
        'INSERT INTO logbook (name, company) VALUES (?, ?)',
        [name, company],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, name, company, signed_at: new Date() });
        }
    );
});

module.exports = router;
