require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/apiRoutes");
const seeder = require("./seeder");
app.set("port", 3000);
const db = require("./models/index");

// SOLO PARA CREAR TABLA DESDE CERO (borra tablas viejas y carga seeder)

// db.sequelize.sync({ force: true }).then(() => {
//   seeder();
//   console.log("Tables created!");
// });
var corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(app.get("port"), () => {
  console.log(`Server running in http://localhost:${app.get("port")}`);
});
