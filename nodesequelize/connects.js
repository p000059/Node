const ip = "192.168.1.198";
const sgbd = "mysql";
const dataBase = "BDCADMIN";
const userDataBase = "siscad";
const password = "Siscad@87it102730";

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(dataBase, userDataBase, password, {
  host: ip,
  dialect: sgbd,
});

sequelize
  .authenticate()
  .then(() => successfully())
  .catch((error) => errorConnect(error));

function successfully() {
  console.log("Connection has been established successfully.");
}

function errorConnect(error) {
  console.log(`Connection Error => ${error}`);
}

const frequency = sequelize.define("frequency", {
  presence: {
    type: Sequelize.STRING,
  },
  absence: {
    type: Sequelize.STRING,
  },
});

frequency.create({
  presence: "true",
  absence: "false",
});

frequency.sync({ force: true });
