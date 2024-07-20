// server.js
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Serve HTML and CSS
app.use(express.static('public'));

// Handle video uploads
app.post('/upload', upload.single('video'), (req, res) => {
    res.send('Video uploaded successfully!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
