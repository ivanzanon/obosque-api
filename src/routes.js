/**
 * 
 * @author Ivan Zanon
 * 
 * @description Routes for api access
 * 
 */
const express = require('express');
const routes = express.Router();
const productController = require('./controller/ProductController.js');
const sandwichController = require('./controller/SandwichController.js');

routes.get('/products', productController.index);
routes.get('/products/:id', productController.show);
routes.post('/products', productController.store);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.destroy);

routes.get('/sandwiches', sandwichController.index);
routes.get('/sandwiches/:id', sandwichController.show);
routes.post('/sandwiches', sandwichController.store);
routes.put('/sandwiches/:id', sandwichController.update);
routes.delete('/sandwiches/:id', sandwichController.destroy);

module.exports = routes;