import express from "express";
import apiController from "../controllers/categoryController" 
import authController from "../controllers/authController"
import productController from "../controllers/productController"

let router = express.Router();

let initWebRoutes = (app) => {
    // input: email, password
    // !email || !password => (errCode: 1, errMsg: 'Miising input')
    // email isn't exist => (errCode: 1, errMsg: `Your's email isn't exist`)
    // wrong password => (errCode: 2, errMsg: 'Wrong password')
    // success => (errCode: 0, token) and save token to cookie. token contains encrypted email 
    router.post('/api/login', authController.handleLogin)
    // input: email, password, name, phoneNumber  
    // !email || !password || !name => (errCode: 1, errMsg: 'Missing required parameters')
    router.post('/api/register', authController.handleRegister)
    // 
    router.get('/api/allProduct', productController.getAllProduct)
    //
    router.get('/api/allCategory', apiController.getAllCategory)
    //
    router.post('/api/createProduct', productController.handleCreateProduct)
    //
    router.get('/api/category/:name', productController.getProductByCategory)

    return app.use("/", router)
}

module.exports = initWebRoutes