const express = require('express');
const router = express.Router();
const db = require('./database');

// Get all logbook entries
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM logbook ORDER BY signed_at DESC');
        res.json(result.rows); // PostgreSQL returns rows in the `.rows` property
    } catch (err) {
        console.error('Error fetching logbook entries:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Add a new logbook entry
router.post('/', async (req, res) => {
    const { name, company } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    try {
        const result = await db.query(
            'INSERT INTO logbook (name, company) VALUES ($1, $2) RETURNING *',
            [name, company]
        );
        res.json(result.rows[0]); // Return the inserted row
    } catch (err) {
        console.error('Error inserting logbook entry:', err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
