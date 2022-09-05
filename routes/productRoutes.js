const express = require("express");
const productController = require("./../controllers/productController");
const productRouter = express.Router();
//routes
productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addProduct).put(productController.updateProduct);
productRouter.route("/:id").get(productController.getProductById).delete(productController.deleteProductById);

module.exports = productRouter;
