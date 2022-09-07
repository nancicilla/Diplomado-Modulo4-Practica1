const mongoose=require("mongoose");
const Product=require("./models/Products");
const app = require("./app");
const port = process.env.PORT;

mongoose.connect(process.env.DATABASE,{}).then((con)=>{
//  console.log("Connected",con.connections);
  /*const p=new Product({
    productName:"product 1",
    price:10
  });
  p.save().
  then(()=>{
    console.log("guardado");
  });*/
});
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
