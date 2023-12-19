import db from "../models/index";
const jwt = require("jsonwebtoken");

let handleAddCategory = (nameCategory, tokenUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = jwt.verify(tokenUser, process.env.KEY_SECRET);
      let shop = db.Shop.findOne({
        where: { idAccount: user.data.id },
      });
      let category = db.Category.findOne({
        where: { name: nameCategory },
      });
      Promise.all([shop, category]).then((data) => {
        if (!data[0]) {
          resolve({
            errCode: 3,
            errMsg: "Access Denied",
          });
        } else {
          db.CategoryShop.create({
            idShop: shop.id,
            idCategory: category.id,
          });
          resolve({
            errCode: 0,
            msg: "Added category successfully!",
          });
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleAddCategory: handleAddCategory,
};
