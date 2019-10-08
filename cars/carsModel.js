const db = require("../data/db");
module.exports = {
  get,
  getById,
  insert
};
function get() {
  return db("cars");
}
function getById(id) {
  return db("car")
    .where({ id })
    .first();
}
function insert(car) {
  return db("cars")
    .insert(car)
    .then(([id]) => getById(id));
}
