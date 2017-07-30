const db = require('../db/config');

const Todo = {};

Todo.findAll = () => {
  return db.query('SELECT * FROM todo');
};

Todo.findById = (id) => {
  return db.oneOrNone(`
    SELECT *
    FROM todo
    WHERE id = $1
  `, [id]);
};

Todo.create = (todo) => {
  return db.one(`
    INSERT INTO todo
    (title, status, category)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [todo.title, todo.status, todo.category]);
};

Todo.update = (todo, id) => {
  return db.one(`
    UPDATE todo SET
    title = $1,
    status = $2,
    category = $3
    WHERE id = $4
    RETURNING *
  `, [todo.title, todo.status, todo.category, id]);
};

Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM todo
    WHERE id = $1
  `, [id]);
};

module.exports = Todo;