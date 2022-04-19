require("dotenv/config");
const mongoose = require("mongoose");
const app = require("./app");

//========> MongoDB Database connection  and Check
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Database connection Established!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on PORT @${PORT}`);
});
