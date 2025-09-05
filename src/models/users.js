const dbPool = require("../config/database");

const getAllUser = (req, res) => {
  const SQLQuery = "SELECT * FROM vegetables";
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUser,
};