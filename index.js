require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
//const adminRoutes = require("./routes/adminRoutes");
app.use(cors());
const routes = require("./routes/apiRoutes");

// const seeder = require("./seeder");
app.set("port", 3000);
// const db = require("./models/index");

// SOLO PARA CREAR TABLA DESDE CERO y borra tablas viejas
// db.sequelize.sync({ force: true }).then(() => {
//   seeder();
//   console.log("Tables created!");
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(adminRoutes);

app.use(routes);

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(__dirname + "/public"));
// app.set("view engine", "ejs");

app.listen(app.get("port"), () => {
  console.log(`Server running in http://localhost:${app.get("port")}`);
});
