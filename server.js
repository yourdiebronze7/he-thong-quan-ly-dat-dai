const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hệ thống Quản Lý Đất Đai');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});