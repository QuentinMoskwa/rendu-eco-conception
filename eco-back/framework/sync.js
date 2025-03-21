const { bdd } = require("./connexion.js");

const sync = async () => {
  await bdd.sync({ force: true });
};

module.exports = { sync };
