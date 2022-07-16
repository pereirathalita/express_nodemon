const express = require("express");
const produtoController = require("../controllers/produtoController")
const routes = express.Router()

routes.get("/produto", produtoController.listarProduto);
routes.post("/produto", produtoController.cadastrarProduto);

module.exports = routes;