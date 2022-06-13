require("dotenv/config");
const mongoose = require("mongoose");
const app = require("./app");


// TODO:========> Check the MongoDB Connection Status
mongoose.connect(process.env.MONGODB_URL_LOCAL)
  .then(() =>console.log("Connected to MongoDB!"))
  .catch(err =>console.error("MongoDB Connection Failed!"))


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on PORT @${port}`);
});
