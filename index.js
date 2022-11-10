const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Review service is running');
});

app.listen(port, () => {
  console.log(`Review service is running on port ${port}`);
})