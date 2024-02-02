const express = require('express');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');
const { dirname } = require('path');
const app = express();
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/food.json')
})
app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`);
});