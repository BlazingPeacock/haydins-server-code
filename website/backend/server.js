const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const logbookRoutes = require('./logbookRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/logbook', logbookRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
