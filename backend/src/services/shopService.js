import db from "../models/index"
const jwt = require('jsonwebtoken');

let handleAddCategory = (nameCategory, tokenUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = jwt.verify(tokenUser, process.env.KEY_SECRET)
            let shop = db.Shop.findOne({
                where: { idAccount: user.data.id }
            })
            let category = db.Category.findOne({
                where: { name: nameCategory }
            })
            Promise.all([shop, category]).then((data)=>{
                console.log(data);
            })
            // if (user.data['Role.name'] != 'Seller') {
            //     resolve({
            //         errCode: 3,
            //         errMsg: "Access Denied"
            //     })
            // } else {
            //     db.CategoryShop.create({
            //         idShop: shop.id,
            //         idCategory: category.id
            //     })
            // }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    handleAddCategory: handleAddCategory
}