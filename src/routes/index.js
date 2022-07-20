const express = require("express");
const produtoController = require("../controllers/produtoController")
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const routes = express.Router()

routes.get("/produto", requestLog, bloqueio, produtoController.listarProduto);
routes.post("/produto", produtoController.cadastrarProduto);
routes.delete("/produto/:id", produtoController.deletarProduto);
routes.put("/produto/:id", produtoController.atualizarProduto);

module.exports = routes;