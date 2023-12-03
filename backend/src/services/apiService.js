import db from "../models/index"
import bcrypt from 'bcrypt'
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);

let handleLogin = (email, password) => {
    return new Promise(async (resolve, rejects) => {
        try {
            let user = await db.Account.findOne({
                where: { email: email }
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    errMsg: `Your's email isn't exist`
                })
            } else {
                let checkPass = bcrypt.compareSync(password, user.password)
                if (checkPass) {
                    resolve({
                        errCode: 0,
                        token: jwt.sign({ data: user.email }, 'mk')
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMsg: 'Wrong password'
                    })
                }
            }
        } catch (error) {
            rejects(error)
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            var hash = bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (e) {
            reject(e);
        }
    })
}

let handleRegister = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await db.Account.findOne({
                where: { email: data.email }
            })
            if (check) {
                resolve({
                    errCode: 1,
                    msg: 'Your email is already!'
                })
            } else {
                let hashPassword = await hashUserPassword(data.password);
                await db.Account.create({
                    email: data.email,
                    password: hashPassword,
                    name: data.name,
                    phoneNumber: data.phoneNumber,
                    idRole: '711821a4-91bd-11ee-90a2-c03eba29bf1f'
                })
                resolve({
                    errCode: 0,
                    msg: 'Register Successful'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getAllProduct = () => {
    return new Promise(async (resolve, rejects) => {
        try {
            let allProduct = await db.Product.findAll({
                attributes: {
                    exclude: ['idCategory', 'createdAt', 'updatedAt']
                },
                include: [{
                    model: db.Category,
                    attributes: ['name']
                }]
            });
            if (allProduct.length <= 0) {
                resolve({
                    errCode: 1,
                    errMsg: "No products"
                })
            } else {
                resolve({
                    errCode: 0,
                    allProduct: allProduct
                })
            }
        } catch (error) {
            rejects(error);
        }
    })
}

let getProductByCategory = (nameCategory) => {
    return new Promise(async (resolve, rejects) => {
        try {
            let listProduct = await db.Product.findAll({
                attributes: {
                    exclude: ['idCategory', 'createdAt', 'updatedAt']
                },
                include: [{
                    model: db.Category,
                    where: { name: nameCategory },
                    attributes: ['name']
                }]
            })
            if (listProduct.length <= 0) {
                resolve({
                    errCode: 1,
                    errMsg: "No products"
                })
            } else {
                resolve({
                    errCode: 0,
                    listProduct: listProduct
                })
            }
        } catch (error) {
            rejects(error)
        }
    })
}

let handleCreateProduct = (dataProduct) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product.create({
                title: dataProduct.title,
                desc: dataProduct.desc,
                cover: dataProduct.cover,
                discount: dataProduct.discount,
                price: dataProduct.price,
                name: dataProduct.name,
                typeComponent: dataProduct.typeComponent,
                idCategory: dataProduct.idCategory
            })
            resolve({
                errCode: 0,
                msg: 'Create Product Successful'
            })
        } catch (error) {
            reject(error)
        }
    })
}

let getAllCategory = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allCategory = await db.Category.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            if (allCategory.length <= 0) {
                resolve({
                    errCode: 1,
                    errMsg: "No Categories"
                })
            } else {
                resolve({
                    errCode: 0,
                    allCategory: allCategory
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllProduct: getAllProduct,
    getProductByCategory: getProductByCategory,
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    handleCreateProduct: handleCreateProduct,
    getAllCategory: getAllCategory
}