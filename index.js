const express = require('express')
const path = require('path');

const app = express()
app.use(express.static(__dirname));

// Route to index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})