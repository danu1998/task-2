const { toping, user } = require("../../models");

exports.getTopings = async (req, res) => {
  try {
    let topings = await toping.findAll({
      include: [
        {
          model: user,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password", "email", "image"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });

    topings = JSON.parse(JSON.stringify(topings));
    topings = topings.map((data) => {
      return {
        ...data,
        image: process.env.FILE_PATH + data.image,
      };
    });
    res.send({
      status: "Success",
      message: "Get All Data Toping Success",
      topings,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed !!!",
      message: "Get Data Toping Failed !",
    });
  }
};
exports.getToping = async (req, res) => {
  try {
    const { id } = req.params;
    const topings = await toping.findOne({
      where: {
        id,
      },
    });
    res.send({
      status: "Success",
      message: "Get All Data Toping By Id Success",
      data: {
        toping: topings,
      },
    });
  } catch (err) {
    res.send({
      status: "Failed !!!",
      message: "Get Data Toping By Id Failed !",
    });
  }
};
exports.addToping = async (req, res) => {
  try {
    const data = req.body;
    let newToping = await toping.create({
      ...data,
      image: req.file.filename,
    });

    newToping = JSON.parse(JSON.stringify(newToping));
    newToping = {
      ...newToping,
      image: process.env.FILE_PATH + newToping.image,
    };

    res.send({
      status: "Success",
      message: "Add Data Toping Success",
      data: {
        newToping,
      },
    });
  } catch (err) {
    res.send({
      status: "Failed !!!",
      message: "Add Data Toping Failed !",
    });
  }
};
exports.deleteToping = async (req, res) => {
  try {
    const { id } = req.params;
    await toping.destroy({
      where: {
        id,
      },
    });
    res.send({
      status: "Success",
      message: "Add Data Toping Success",
    });
  } catch (err) {
    res.send({
      status: "Failed !!!",
      message: "Delete Data Toping Failed !",
    });
  }
};
exports.updateToping = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const image = req.file.filename;
    // =============== || ==============
    let oldToping = await toping.findOne({
      where: {
        id,
      },
    });
    // =============== || ==============

    let newToping = await oldToping.update({
      ...data,
      image,
    });

    newToping = JSON.parse(JSON.stringify(newToping));
    newToping = {
      ...newToping,
      image: process.env.FILE_PATH + newToping.image,
    };

    // =============== || ==============
    res.send({
      status: "Success !!!",
      message: "Update Data Toping Success !",
      data: newToping,
    });
  } catch (err) {
    res.send({
      status: "Failed !!!",
      message: "Update Data Toping Failed !",
    });
  }
};
