const { user } = require("../../models");

// Get All User Data
exports.getUsers = async (req, res) => {
  try {
    const users = await user.findAll();
    res.send({
      status: "Success !!!",
      message: "Get Data Users Success !",
      data: {
        users,
      },
    });
  } catch (err) {
    res.send({
      status: "Error !!!",
      message: "Get Data Users Error !",
    });
  }
};

// Get User Data By Id
exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await user.findOne({
      where: {
        id,
      },
    });
    res.send({
      status: "Success !!!",
      message: "Get Data By Id User Success",
      data: {
        user: users,
      },
    });
  } catch (err) {
    res.send({
      status: "Error !!!",
      message: "Get Data By Id Users Error !",
    });
  }
};

// Add User Data
exports.addUser = async (req, res) => {
  try {
    const data = req.body;
    const users = await user.create(data);
    res.send({
      status: "Success !!!",
      message: "Add Data Users Success !",
      data: {
        users,
      },
    });
  } catch (err) {
    res.send({
      status: "Error !!!",
      message: "Add Data Users Error !",
    });
  }
};

// Delete User Data By Id
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await user.destroy({
      where: {
        id,
      },
    });
    res.send({
      status: "Success !!!",
      message: "Delete Data User Success !",
    });
  } catch (err) {
    res.send({
      status: "Error !!!",
      message: "Delete Data Users Error !",
    });
  }
};
