const getAllUser = (req, res) => {
  res.json({
    message: "GET users endpoint.",
  });
};

const createUser = (req, res) => {
  res.json({
    message: "POST users endpoint.",
  });
};

const updateUser = (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.json({
    message: "UPDATE users endpoint.",
  });
};

const deleteUser = (req, res) => {
  res.json({
    message: "DELETE users endpoint.",
  });
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
};
