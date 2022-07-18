const express = require("express");
const produtoController = require("../controllers/produtoController")
const routes = express.Router()

routes.get("/produto", produtoController.listarProduto);
routes.post("/produto", produtoController.cadastrarProduto);
routes.delete("/produto/:id", produtoController.deletarProduto);
routes.put("/produto/:id/aualiar", produtoController.atualizarProduto);

module.exports = routes;