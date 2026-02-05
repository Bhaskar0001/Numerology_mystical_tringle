const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => res.send('Minimal Server Running'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Minimal server running on port ${PORT}`);
});
