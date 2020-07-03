/**
 * 
 * @author Ivan Zanon
 * 
 * @description Controller that manages Dish Model
 * 
 */

const Sequelize = require("sequelize");

const models = require('../database/models');
const dishModel = models.Dish;

module.exports = {
    async index(req, res) {
        const dishes = await dishModel.findAll();

        return res.json(dishes);
    },

    async show (req, res) {
        const dish = await dishModel.findByPk(req.params.id);

        return res.json(dish);
    },

    async store(req, res) {
        const dish = await dishModel.create(req.body);

        return res.json(dish);
    },

    async update(req, res) {
        const dish = await dishModel.update(req.body, 
            {where:
                {
                    id : req.params.id
                }
            }
            );

        return res.json(dish);
    },

    async destroy(req, res) {
        await dishModel.destroy(
            {where:
                {
                    id : req.params.id
                }
            }
        );

        return res.send();
    }
};