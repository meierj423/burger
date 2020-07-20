const orm = require("../config/orm.js");
const burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  insertOne: (newBurger, cb) => {
    orm.insertOne("burgers", newBurger, (res) => {
      cb(res);
    });
  },
  updateOne: (devouredState, condition, cb) => {
    orm.updateOne("burgers", devouredState, condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
