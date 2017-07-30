const Todo = require('../models/todo');

const todoController = {};

todoController.index = (req, res) => {
  Todo.findAll()
    .then(todo => {
      res.render('todo/todo-index', {
        message: 'ok',
        data: todo,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Not found!',
        error: err,
      });
    });
};
// todoController is used to render a page instead of sending back JSON
todoController.show = (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      res.render('todo/todo-single', {
        message: 'ok',
        data: todo,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Not found!',
        error: err,
      });
    });
};

todoController.create = (req, res) => {
  console.log(req.body);
  Todo.create({
    title: req.body.title,
    status: req.body.status,
    category: req.body.category,
  }).then(todo => {
    res.redirect('/todo');
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Could not create successfully',
      error: err,
    });
  });
};

todoController.update = (req, res) => {
  Todo.update({
    title: req.body.title,
    status: req.body.status,
    category: req.body.category,
  }, req.params.id).then(todo => {
    res.json({
      message: 'Updated successfully!',
      todo: todo,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Update failed',
      error: err,
    });
  });
};

todoController.delete = (req, res) => {
  Todo.destroy(req.params.id)
    .then(() => {
      res.json({ message: 'Successfully deleted' });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ 
        message: 'Delete failed',
        error: err,
      });
    });
};

module.exports = todoController;