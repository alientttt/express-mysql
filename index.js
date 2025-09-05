const express = require("express");
const mysql = require("mysql2");
const usersRoutes = require("./src/routes/users");
const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "express_mysql",
  password: "akmal123",
});
const app = express();
const port = 4000;

app.use(express.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  dbPool.execute("SELECT * FROM vegetables", (err, rows) => {
    if (err) {
      res.json({
        message: "Database connection error",
        error: err,
      });
    }
    res.json({
      message: "Connection to database successful",
      rows: rows,
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
