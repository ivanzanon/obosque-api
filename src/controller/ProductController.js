/**
 * 
 * @author Ivan Zanon
 * 
 * @description Controller that manages Product Model
 * 
 */

const Sequelize = require("sequelize");

const productModel = require('../model/ProductModel');

module.exports = {
    async index(req, res) {
        const products = await productModel.findAll();

        return res.json(products);
    },

    async show (req, res) {
        const product = await productModel.findByPk(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        const product = await productModel.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        const product = await productModel.update(req.body, 
            {where:
                {
                    id : req.params.id
                }
            }
            );

        return res.json(product);
    },

    async destroy(req, res) {
        await productModel.destroy(
            {where:
                {
                    id : req.params.id
                }
            }
        );

        return res.send();
    }
};