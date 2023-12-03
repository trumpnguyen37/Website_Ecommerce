import express from "express";
import apiController from "../controllers/apiController" 

let router = express.Router();

let initWebRoutes = (app) => {
    router.post('/api/login', apiController.handleLogin)
    router.post('/api/register', apiController.handleRegister)

    router.get('/api/allProduct', apiController.getAllProduct)
    router.get('/api/category/:name', apiController.getProductByCategory)

    return app.use("/", router)
}

module.exports = initWebRoutes