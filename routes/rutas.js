const express = require('express');
const connection = require("../conexion");
const user = require('../model/user');
const apis = require('../model/apis');

var router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');

const { body, param, validationResult } = require('express-validator');

const crearToken = (user) => {
    let payload = {
        idUsuario: user.id,
        createdAt: moment().unix(),
        expiresAt: moment().add(1, 'day').unix()
    }
    return jwt.encode(payload, process.env.TOKEN_KEY);
};

router.post('/login', (req, res) => {
    let email = req.body.email;
    user.getbyemail(connection, email, (data => {

        if (data.id.length === 0) {
            return res.status(400).json({ message: 'Username or Password are incorrect!' });
        } else {
            const equals = bcrypt.compareSync(req.body.password, data.id[0].password);
            if (!equals) {
                return res.status(400).json({ message: 'Username or Password are incorrect!' });
            } else {
                res.json({
                    message: 'OK',
                    token: crearToken(data.id[0]),
                    idUsuario: data.id[0].id,
                    nombre: data.id[0].nombre,
                    imagen: data.id[0].imagen
                })
            }
        }
    }));

});

router.post('/register', async(req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    let body = req.body;

    let fecha = new Date(req.body.fecha_nac);
    if (new Date(req.body.fecha_nac) < new Date('1995-06-16')) {
        fecha.setFullYear(2019);
    }
    const data = await apis.getDataNASA(fecha.toISOString().split('T')[0]);

    body.imagen = data.data.url;
    user.create(connection, body, (data => {
        res.json(data);
    }));
});

module.exports = router;