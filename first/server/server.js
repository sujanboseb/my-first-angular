const express = require('express');
const app = express();
const port = 4200;

app.use(express.static('../first/dist/first'));

app.get('/logins', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
