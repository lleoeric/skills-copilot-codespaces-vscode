// Create web server
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Create in-memory data store
const comments = [];

// Define routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start the server
app.listen(4001, () => {
    console.log('Comments service started on port 4001');
});