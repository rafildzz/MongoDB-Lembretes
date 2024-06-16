const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "mongodb://127.0.0.1/tarefa";
mongoose.connect(url).then(()=>{
    console.log("Conectado ao MongoDB");
}).catch((err) => {
    console.log("Erro ao conectar ao MongoDB: " + err);
});