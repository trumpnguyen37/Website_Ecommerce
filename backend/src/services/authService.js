import db from "../models/index"
import bcrypt from 'bcrypt'
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const nodemailer = require('nodemailer');
require('dotenv').config();

const salt = bcrypt.genSaltSync(10);

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.G_MAIL,
        pass: process.env.G_PASS,
    },
});

let handleLogin = (email, password) => {
    return new Promise(async (resolve, rejects) => {
        try {
            let user = await db.Account.findOne({
                where: { email: email },
                include: [{
                    model: db.Role,
                    attributes: ['name'],
                }],
                // raw: true
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    errMsg: `Your's email isn't exist`
                })
            } else {
                let checkPass = bcrypt.compareSync(password, user.password)
                if (checkPass) {
                    if (user.status != 'Confirmed') {
                        sendMailConfirm(jwt.sign({ email: email }, process.env.KEY_SECRET), email)
                        resolve({
                            errCode: 3,
                            errMsg: "Your account unconfirmed"
                        })
                    } else {
                        delete user.dataValues.password
                        resolve({
                            errCode: 0,
                            token: jwt.sign({ data: user }, process.env.KEY_SECRET),
                            user: user
                        })
                    }
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

let sendMailConfirm = (token, email) => {
    let link = `${process.env.CLIENT_URL}/api/confirmRegister/${token}`
    const mailOptions = {
        from: process.env.G_MAIL,
        to: email,
        subject: 'Confirm Register',
        text: `Click on the following link to confirm your account: ${link}.`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return({
                errCode: 1,
                msg: 'Internal Server Error'
            });
        } else {
            return({
                errCode: 0,
                msg: 'Sent confirm your account to email successfully'
            });
        }
    });
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
                const token = jwt.sign({ email: data.email }, process.env.KEY_SECRET)
                sendMailConfirm(token, data.email)
                let hashPassword = await hashUserPassword(data.password);
                let role = await db.Role.findOne({
                    where: { name: data.role }
                })
                await db.Account.create({
                    email: data.email,
                    password: hashPassword,
                    name: data.name,
                    phoneNumber: data.phoneNumber,
                    idRole: role.id,
                    status: 'Unconfirmed'
                })
                resolve({
                    errCode: 0,
                    msg: 'Register Successful. Please confirm your account!'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

let confirmRegister = async (token) => {
    let tokenVerify = jwt.verify(token, process.env.KEY_SECRET)
    let email = tokenVerify.email
    let account = await db.Account.findOne({
        where: { email: email }
    })
    if (!account) {
        return ({
            errCode: 1,
            errMsg: "Invalid token!"
        })
    } else {
        await db.Account.update({ status: "Confirmed" }, {
            where: { email: email }
        })
        return ({
            errCode: 0,
            msg: "Your account has been confirmed"
        })
    }
}

module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    confirmRegister: confirmRegister
}