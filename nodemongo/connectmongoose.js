const mongoose = require("mongoose");

mongoose.Promisse = global.Promisse;
mongoose
  .connect("mongodb://192.168.1.198/DBACSYS", {
    useMongoClient: true,
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });
