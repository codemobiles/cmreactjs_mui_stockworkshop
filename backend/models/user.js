const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const user = sequelize.define(
  "user",
  {
    // attributes
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    level: {
      type: Sequelize.STRING,
      defaultValue: "normal"
    }
  },
  {
    //option
  }
);

(async () => {
  await user.sync({ force: false });
})();

module.exports = user;
