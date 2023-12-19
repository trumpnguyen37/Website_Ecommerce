import express from "express";
import shopController from "../controllers/shopController";
import authController from "../controllers/authController";
import productController from "../controllers/productController";
import updateController from "../controllers/updateController";
import adminController from "../controllers/adminController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/login", (req, res) => {
    res.render("login.ejs");
  });

  router.post("/api/login", authController.handleLogin);
  router.post("/api/register", authController.handleRegister);
  router.get(
    "/api/confirmRegister/:token",
    authController.handleConfirmRegister
  );
  //
  router.get("/api/admin/allCategory", adminController.handleGetAllCategory);
  //
  // router.post('/api/shop/addCategory', shopController.handleAddCategory)
  //
  // router.post('/api/createShop', adminController.handleCreateShop)

  //
  router.get("/api/allProduct", productController.getAllProduct);
  //
  router.get("/api/productDetail/:name", productController.getProductDetail);

  //
  // router.post('/api/createCategory', updateController.upload.single('image'), adminController.handleCreateCategory)
  // //
  // router.get('/api/allProduct', productController.getAllProduct)
  // //
  // router.post('/api/createProduct', updateController.upload.single('cover'), productController.handleCreateProduct)
  // //
  // router.get('/api/category/:name', productController.getProductByCategory)
  // //
  // router.put('/api/createShop', adminController.handleCreateShop)

  // //
  // router.get('/api/allCategory/:shop', adminController.getAllCategory)

  return app.use("/", router);
};

module.exports = initWebRoutes;
