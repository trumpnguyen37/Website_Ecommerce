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

module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
}