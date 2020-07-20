const connection = require("../config/connection.js");

const orm = {
  selectAll: (table, cb) => {
    const queryString = "SELECT * FROM ??";

    connection.query(queryString, table, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: (table, newBurgerData, cb) => {
    const queryString = "INSERT INTO ?? SET ?";
    const values = [table, newBurgerData];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: (table, devouredState, condition, cb) => {
    const queryString = "UPDATE ?? SET ? WHERE ?";

    const values = [table, devouredState, condition];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
