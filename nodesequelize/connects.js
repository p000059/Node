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
  console.log(`Connection Successfully`);
}

function errorConnect(error) {
  console.log(`Connection Error => ${error}`);
}

const frequency = sequelize.define("frequencies", {
  presence: {
    type: Sequelize.STRING,
  },
  absence: {
    type: Sequelize.STRING,
  },
});

/* frequency.create({
  presence: 'ok',
  absence: 'fault'
}) */

/* frequency.create({
  presence: 'registered',
  absence: 'empty'
}) */

//frequency.sync({ force: true });

const user = sequelize.define("users", {
  codeUser: {
    type: Sequelize.STRING,
  },
});

//user.sync({force: true})

/* const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.STRING,
  },
});

Postagem.sync({ force: true });
 */
