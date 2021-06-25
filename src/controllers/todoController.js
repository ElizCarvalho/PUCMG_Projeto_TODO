const TodoService = require("../services/TodoService");
const todoService = require("../services/TodoService");

exports.get = async (req, res) => {
    let id = req.params.id
    //console.log("Get");
    //res.send(`OK GET id = ${id}`);
    try {
        const todo = await TodoService.getTodobyId(id);
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.getAll = async (req, res) => {
    try{
        const todos = await TodoService.getAllTodos();
        if(!todos){
            return res.status(404).json("There are no todos published yet!");
        }
        res.json(todos);
        //console.log("Get All");
        //res.send("OK GET ALL"); 
    } catch (err){
        return res.status(500).json({ error: err });
    }
}

exports.add = async (req, res) => {
    //console.log("Add");
    //res.send("OK ADD");
    try{
        const createTodo = await TodoService.addTodo(req.body);
        res.status(201).json(createTodo);
    } catch (err){
        return res.status(500).json({ error: err });
    }
}

exports.update = async (req, res) => {
    //console.log("Update");
    //res.send("OK UPDATE");
    let id = req.params.id;

    try {
        const todo = {};
        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.finished = req.body.finished;

        const updatedTodo = await TodoService.updateTodo(id, todo);

        if (updatedTodo.nModified === 0) {
        return res.status(404).json({});
        }

        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.delete = async (req, res) => {
    //console.log("Delete");
    //res.send("OK DELETE");
    let id = req.params.id;
    try {
        const deleteResponse = await TodoService.deleteTodo(id);
        res.json(deleteResponse);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}