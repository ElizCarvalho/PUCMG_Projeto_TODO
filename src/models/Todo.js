const mongoose = require('mongoose'); //referencia do mangose para poder criar um objeto q reflete no banco
const Schema = mongoose.Schema;
const todoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    finished: {
        type: Boolean,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = Todo = mongoose.model("todos", todoSchema); 
//esse modelo Todo exporta um objeto que da acesso a um modelo no banco de dados