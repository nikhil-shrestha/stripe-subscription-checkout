const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

// Init Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Define routes
app.use('/api/stripe', require('./routes/api/stripe'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, error => {
  if (error) throw error;
  console.log('Server running on port ' + PORT);
});
