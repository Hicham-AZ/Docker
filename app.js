const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bonjour ! C\'est une petite application.');
});

app.listen(port, () => {
  console.log(`Application en écoute sur le port ${port}`);
});