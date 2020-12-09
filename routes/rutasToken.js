const express = require('express');
const connection = require("../conexion");
const user = require('../model/user');
const apis = require('../model/apis');

var router = express.Router();

const middleware = require('./middleware')

const { body, param, validationResult } = require('express-validator');

router.use(middleware.checkToken);

router.get('/mainUser', (req, res) => {
    let id = req.idUser;
    user.getId(connection, id, (data => {
        res.json(data);
    }))
});

router.get('/mainUser-datos', (req, res) => {
    let id = req.idUsuario;
    user.getDatosUsuario(connection, id, (data => {
        res.json(data);
    }))
});

//Routes

router.get('/users', [], (req, res) => {
    user.getAll(connection, (data => {
        res.json(data);
    }))
});

router.get('/user/:id', [
    param('id').not().isEmpty().isNumeric(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let id = req.params.id;
    user.getId(connection, id, (data => {
        res.json(data);
    }))
});


router.get('/user/:email', [
    param('email').not().isEmpty().isString(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let email = req.params.email;
    user.getbyemail(connection, email, (data => {
        res.json(data);
    }))
});

/*router.delete('/user', [
    body('email').not().isEmpty().isString()
], (req, res) => {
    const errors = validationResult(req);
    let body = req.body;
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    user.delete(connection, body, (data => {
        res.json(data);
    }))
});*/

router.put('/user', [], async(req, res) => {
    let body = req.body;
    body.id = req.idUsuario;

    let fecha = new Date(req.body.fecha_nac);
    if (new Date(req.body.fecha_nac) < new Date('1995-06-16')) {
        fecha.setFullYear(2019);
    }
    const data = await apis.getDataNASA(fecha.toISOString().split('T')[0]);

    body.imagen = data.data.url;
    user.update(connection, body, (data => {
        res.json(data);
    }))
});

router.get('/userRecipesSpoonacular', [], (req, res) => {
    let id_usuario = req.idUsuario;
    user.getUserRecipesSpoonacular(connection, id_usuario, (data => {
        res.json(data);
    }))
});

router.post('/userRecipeSpoonacular', async(req, res) => {
    let body = req.body;
    body.id_usuario = req.idUsuario;
    user.createUserRecipeSpoonacular(connection, body, (data => {
        res.json(data);
    }));
});

router.delete('/userRecipeSpoonacular/:id', [
    param('id').not().isEmpty().isNumeric()
], (req, res) => {
    const errors = validationResult(req);
    let id = req.params.id;
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    user.deleteUserRecipeSpoonacular(connection, id, (data => {
        res.json(data);
    }))
});

router.get('/userRecipeSpoonacular/:id_receta', [
    param('id_receta').not().isEmpty().isString(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let params = req.params;
    params.id_usuario = req.idUsuario;
    user.getUserRecipeSpoonacular(connection, params, (data => {
        res.json(data);
    }))
});

router.post('/userRecipeEdamam', async(req, res) => {
    let body = req.body;
    body.id_usuario = req.idUsuario;
    user.createUserRecipeEdamam(connection, body, (data => {
        res.json(data);
    }));
});

router.get('/userRecipeEdamam/:uri_receta', [
    param('uri_receta').not().isEmpty().isString(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let params = req.params;
    params.id_usuario = req.idUsuario;
    console.log(params);
    user.getUserRecipeEdamam(connection, params, (data => {
        res.json(data);
    }))
});

router.get('/userRecipesEdamam', [], (req, res) => {
    let id_usuario = req.idUsuario;
    user.getUserRecipesEdamam(connection, id_usuario, (data => {
        res.json(data);
    }))
});

router.delete('/userRecipeEdamam/:id', [
    param('id').not().isEmpty().isNumeric()
], (req, res) => {
    const errors = validationResult(req);
    let id = req.params.id;
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    user.deleteUserRecipeEdamam(connection, id, (data => {
        res.json(data);
    }))
});

module.exports = router;