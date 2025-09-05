const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Land Management System');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});