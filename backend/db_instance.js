const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

(async () => {
    await sequelize.authenticate();
})();

module.exports = sequelize;