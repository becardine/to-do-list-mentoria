const mongoose = require("mongoose");

const connectToDb = function () {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.chkft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(function () {
      console.log("MongoDB Atlas CONECTADO!");
    })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = connectToDb;
