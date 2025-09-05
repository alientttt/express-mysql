require('dotenv').config()
const express = require("express");
const usersRoutes = require("./src/routes/users");
const app = express();

app.use(express.json());
app.use("/users", usersRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
