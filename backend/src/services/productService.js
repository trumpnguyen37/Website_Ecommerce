import db from "../models/index";

let getAllProduct = () => {
  return new Promise(async (resolve, rejects) => {
    try {
      let allProduct = await db.Product.findAll({
        attributes: {
          exclude: ["idCategory", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.Category,
            attributes: ["name"],
          },
        ],
      });
      if (allProduct.length <= 0) {
        resolve({
          errCode: 1,
          errMsg: "No products",
        });
      } else {
        resolve({
          errCode: 0,
          allProduct: allProduct,
        });
      }
    } catch (error) {
      rejects(error);
    }
  });
};

let getProductDetail = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Product.findOne({
        name: name,
      });
      if (!product) {
        resolve({
          errCode: 1,
          errMsg: "No details found for this product!",
        });
      } else {
        resolve({
          errCode: 0,
          product: product,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let getProductByCategory = (nameCategory) => {
  return new Promise(async (resolve, rejects) => {
    try {
      let listProduct = await db.Product.findAll({
        attributes: {
          exclude: ["idCategory", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.Category,
            where: { name: nameCategory },
            attributes: ["name"],
          },
        ],
      });
      if (listProduct.length <= 0) {
        resolve({
          errCode: 1,
          errMsg: "No products",
        });
      } else {
        resolve({
          errCode: 0,
          listProduct: listProduct,
        });
      }
    } catch (error) {
      rejects(error);
    }
  });
};

let handleCreateProduct = (dataProduct, img) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Product.create({
        title: dataProduct.title,
        desc: dataProduct.desc,
        cover: img,
        discount: dataProduct.discount,
        price: dataProduct.price,
        name: dataProduct.name,
        typeComponent: dataProduct.typeComponent,
        idCategory: dataProduct.idCategory,
      });
      resolve({
        errCode: 0,
        msg: "Create Product Successful",
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllProduct: getAllProduct,
  getProductByCategory: getProductByCategory,
  handleCreateProduct: handleCreateProduct,
  getProductDetail: getProductDetail,
};
