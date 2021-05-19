require("dotenv").config();
const express = require("express");
const app = express();
//const adminRoutes = require("./routes/adminRoutes");

//const routes = require("./routes/routes");

const seeder = require("./seeder");

const db = require("./models/index");

db.sequelize.sync({ force: true }).then(() => {
  seeder();
  console.log("Tables created!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(adminRoutes);

//app.use(routes);

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Server listening!");
});
