const express = require('express');
const connection = require("../conexion");
const apis = require('../model/apis');
var router = express.Router();

const middleware = require('./middleware')

const { body, param, validationResult } = require('express-validator');

//router.use(middleware.checkToken);

router.get('/randomSpoonacular', async(req, res) => {
    const data = await apis.getRandomSpoonacular();
    // console.log("----->", data); //tiene muchas mas informacion que la que necesito
    // console.log("----->", data.data);
    res.json(data.data); //la respuesta del servidor se genera aqui
});

router.get('/recipeSpoonacular/:id', async(req, res) => {
    const data = await apis.getRecipeSpoonacular(req.params.id);
    res.json(data.data); //la respuesta del servidor se genera aqui
});

router.get('/recipesSpoonacular/:recetas', async(req, res) => {
    const data = await apis.getRecipesSpoonacular(req.params.recetas);
    res.json(data.data); //la respuesta del servidor se genera aqui
});

router.get('/buscarEdaman/:busqueda', async(req, res) => {
    const data = await apis.getBusquedaEdaman(req.params.busqueda);
    res.json(data.data); //la respuesta del servidor se genera aqui
});

router.get('/similarSpoonacular/:id', async(req, res) => {
    const data = await apis.getSimilarSpoonacular(req.params.id);
    res.json(data.data); //la respuesta del servidor se genera aqui
});

router.post('/recipeEdamam', async(req, res) => {
    const data = await apis.getRecipeEdamam(req.body.uri);
    res.json(data.data); //la respuesta del servidor se genera aqui
});

router.get('/buscar2Edaman/:busqueda', async(req, res) => {
    const data = await apis.getBusqueda2Edaman(req.params.busqueda);
    res.json(data.data); //la respuesta del servidor se genera aqui
});

module.exports = router;