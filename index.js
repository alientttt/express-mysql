const express = require('express');
const usersRoutes = require('./src/routes/users');
const app = express();
const port = 4000;


app.use(express.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});