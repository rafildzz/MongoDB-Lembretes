require('./db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Tarefas = new Schema({
    nome: {
        type: String,
        requeired: true
    },
    descricao:
    {
        type: String,
        required: true


    }
});
mongoose.model('tarefas', Tarefas);