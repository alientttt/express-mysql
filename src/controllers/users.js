const UserModel = require("../models/users");
const getAllUser = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUser();
    res.json({
      message: "GET products endpoint.",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving products.",
      error: error.message,
    });
  }
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
