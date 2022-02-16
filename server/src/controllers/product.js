const { product, user } = require("../../models");

exports.getProducts = async (req, res) => {
  try {
    let products = await product.findAll({
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
    res.send({
      status: "Success !!!",
      message: "Get All Data Product Success !",
      data: {
        products,
      },
    });
  } catch (err) {
    res.send({
      status: "Failed !!!",
      message: "Get All Data Product Failed !",
    });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await product.findOne({
      where: {
        id,
      },
    });
    res.send({
      status: "Success !!!",
      message: "Get All Data By Id Success",
      data: {
        product: products,
      },
    });
  } catch (err) {
    res.send({
      status: "Failed",
      message: "Get Data Product By Id Failed",
    });
  }
};
exports.addProduct = async (req, res) => {
  try {
    const data = req.body;
    let newProduct = await product.create({
      ...data,
      image: req.file.filename,
    });

    newProduct = JSON.parse(JSON.stringify(newProduct));
    newProduct = {
      ...newProduct,
      image: process.env.FILE_PATH + newProduct.image,
    };
    res.send({
      status: "Success",
      message: "Add Data Product Success",
      data: {
        newProduct,
      },
    });
  } catch (err) {
    res.send({
      status: "Failed !!!",
      message: "Add Data Product Failed",
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await product.destroy({
      where: {
        id,
      },
    });
    res.send({
      status: "Success !!!",
      message: "Delete Product Success",
    });
  } catch (error) {
    res.send({
      status: "Failed !!!",
      message: "Delete Product Faield",
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const image = req.file.filename;

    // ============== || ==============

    let oldProducts = await product.findOne({
      where: {
        id,
      },
    });

    // ============== || ===============

    let newProducts = await oldProducts.update({
      ...data,
      image,
    });
    newProducts = JSON.parse(JSON.stringify(newProducts));
    newProducts = {
      ...newProducts,
      image: process.env.FILE_PATH + newProducts.image,
    };

    // ============== || ===============
    res.send({
      status: "Success !!!",
      message: "Update Data Product Success !",
      data: newProducts,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: "Failed",
      message: "Update Data Product Failed",
    });
  }
};
