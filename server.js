const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

global.__basedir = __dirname;
var corOption = { origin: "*" };
app.use(cors(corOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "welcone to the megane Account api" });
  
});
require("./app/routes/user.routes")(app);
require("./app/routes/file.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is running on Port number :  " + PORT);
});
// require("./app/models/db")
