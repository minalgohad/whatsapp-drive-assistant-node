require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dummy route to test
app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server is running on port ${process.env.PORT || 3000}`);
});
