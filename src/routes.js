/**
 * 
 * @author Ivan Zanon
 * 
 * @description Routes for api access
 * 
 */
const express = require('express');
const routes = express.Router();
const controllers = require('./controller');

routes.get('/products', controllers.productController.index);
routes.get('/products/:id', controllers.productController.show);
routes.post('/products', controllers.productController.store);
routes.put('/products/:id', controllers.productController.update);
routes.delete('/products/:id', controllers.productController.destroy);

routes.get('/sandwiches', controllers.sandwichController.index);
routes.get('/sandwiches/:id', controllers.sandwichController.show);
routes.post('/sandwiches', controllers.sandwichController.store);
routes.put('/sandwiches/:id', controllers.sandwichController.update);
routes.delete('/sandwiches/:id', controllers.sandwichController.destroy);

routes.get('/dishes', controllers.dishController.index);
routes.get('/dishes/:id', controllers.dishController.show);
routes.post('/dishes', controllers.dishController.store);
routes.put('/dishes/:id', controllers.dishController.update);
routes.delete('/dishes/:id', controllers.dishController.destroy);

module.exports = routes;