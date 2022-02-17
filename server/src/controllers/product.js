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

    products = JSON.parse(JSON.stringify(products));
    products = products.map((item) => {
      return { ...item, image: process.env.FILE_PATH + item.image };
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
    const data = {
      name: req.body.name,
      price: req.body.price,
      image: req.file.filename,
      idUser: req.user.id,
    };

    let newProduct = await product.create(data);

    let productData = await product.findOne({
      where: {
        id: newProduct.id,
      },
      include: [
        {
          model: user,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });
    productData = JSON.parse(JSON.stringify(productData));

    res.send({
      status: "success...",
      data: {
        ...productData,
        image: process.env.FILE_PATH + productData.image,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
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
      message: "Delete Product Failed",
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
