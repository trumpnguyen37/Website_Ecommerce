import express from "express";
import apiController from "../controllers/apiController" 

let router = express.Router();

let initWebRoutes = (app) => {
    // input: email, password
    // !email || !password => (errCode: 1, errMsg: 'Miising input')
    // email isn't exist => (errCode: 1, errMsg: `Your's email isn't exist`)
    // wrong password => (errCode: 2, errMsg: 'Wrong password')
    // success => (errCode: 0, token) and save token to cookie. token contains encrypted email 
    router.post('/api/login', apiController.handleLogin)

    // input: email, password, name, phoneNumber  
    // !email || !password || !name => (errCode: 1, errMsg: 'Missing required parameters')
    // !
    router.post('/api/register', apiController.handleRegister)

    router.get('/api/allProduct', apiController.getAllProduct)
    router.get('/api/category/:name', apiController.getProductByCategory)

    return app.use("/", router)
}

module.exports = initWebRoutes