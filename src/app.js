const express = require("express");
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//Criação e uso de Rotas
const indexRoute = require("./routers/index")
app.use("/", indexRoute);
const todoRouter = require("./routers/todo")
app.use("/todos", todoRouter)

module.exports = app;