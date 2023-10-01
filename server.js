const express = require('express');
const app = express();
const path = require('path'); // Import the path module
const port = process.env.PORT || 3001; // Use the environment port if available

app.use(express.static(path.join(__dirname, 'public')));

const budget = require('./myBudget.json');

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/budget', (req, res) => {
  res.json(budget);
});

// Serve your React app on all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
