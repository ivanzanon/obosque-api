/**
 * 
 * @author Ivan Zanon
 * 
 * @description Controller that manages Sandwich Model
 * 
 */

const Sequelize = require("sequelize");

const sandwichModel = require('../model/Sandwich');

module.exports = {
    async index(req, res) {
        const sandwich = await sandwichModel.findAll();

        return res.json(sandwich);
    },

    async show (req, res) {
        const sandwich = await sandwichModel.findByPk(req.params.id);

        return res.json(sandwich);
    },

    async store(req, res) {
        const sandwich = await sandwichModel.create(req.body);

        return res.json(sandwich);
    },

    async update(req, res) {
        const sandwich = await sandwichModel.update(req.body, 
            {where:
                {
                    id : req.params.id
                }
            }
            );

        return res.json(product);
    },

    /**
     * 
     * @description Destroy a Sandwich based on the id
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async destroy(req, res) {
        await sandwichModel.destroy(
            {where:
                {
                    id : req.params.id
                }
            }
        );

        return res.send();
    }
};