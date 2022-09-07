
const Product=require("../models/Products");
exports.getAllProducts = async (req, res) => {
  
  const products=await Product.find();
  res.status(200).json({
    status: "success",
    timeOfRequest: req.requestTime,
    results: products.length,
    data: {
      products,
    },
  });
};

exports.addProduct = async (req, res) => {
 const newProduct=await Product.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      newProduct,
    },
  });
};

exports.getProductById =async (req, res) => {
  const foundProduct =await Product.findById(req.params.id);
  if (foundProduct) {
    res.status(200).json({
      status: "success",
      data: {
        product: foundProduct,
      },
    });
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
};

exports.updateProduct =  (req, res) => {
  const productUpdate=  Product.findByIdAndUpdate(req.body._id,req.body,{new: true},
  function (err, response) {
      // Handle any possible database errors
      if (err) {
        console.log(" error=" + err);
        res.json({
          message: 'Database Update Failure'
        });
      }
      
    });
 
  if (productUpdate) {
     
      res.status(200).json({
          status: "success",
          message:"product updated"
      });
  } else {
      res.status(404).json({
          status: "not found",
      });
  }
};
exports.deleteProductById = (req, res) => {
  
  const productDeleted =Product.findByIdAndDelete(req.params.id,function (err, document) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Product deleted : ", document);
    }});
  
  if (productDeleted) {
     
      res.status(200).json({
          status: "success",
          message:"Product deleted"
      });
  } else {
      res.status(404).json({
          status: "not found",
      });
  }
};
