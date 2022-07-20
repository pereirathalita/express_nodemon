const { Produtos, Fabricantes, Categorias } = require("../models");

const produtoController = {
    listarProduto: async (req, res) => {
        const listaDeProdutos = await Produtos.findAll({
            include: Categorias
        });
        res.json(listaDeProdutos);
    },

    async cadastrarProduto(req, res) {
        const{ nome, preco, quantidade, fabricante_id, categoria_id } = req.body;

        const novoProduto = await Produtos.create({
            nome,
            preco,
            quantidade,
            // fabricante_id,
        });

        const categoria = await Categorias.findByPk(categoria_id);

        await novoProduto.setCategorias(categoria);

        res.json(novoProduto);
    },

    async deletarProduto(req, res) {
        const { id } = req.params;

        await Produtos.destroy({
            where:{
                id,
            },
        });

        res.status(204);
    },

    async atualizarProduto(req, res) {
        const { id } = req.params;
        const { nome, preco, quantidade } = req.body;

        const atualizarProduto = await Produtos.update(
            {
                nome,
                preco,
                quantidade,
            },
            {
                where: {
                    id,
                },
            },

        );

        res.json("Produto atualizado");

}}

module.exports = produtoController