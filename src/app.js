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
const indexRouteV2 = require("./routers/indexV2")
app.use("/v2", indexRouteV2);
const todoRouter = require("./routers/todo")
app.use("/todos", todoRouter)

module.exports = app;