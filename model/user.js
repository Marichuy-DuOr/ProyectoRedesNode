module.exports = {

    getAll: (connection, callback) => {
        connection.query('select * from usuarios', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: results, id: null, success: true });
        })
    },

    create: (connection, body, callback) => {
        connection.query('insert into usuarios SET ?', body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: null, success: true });
        });
    },

    getId: (connection, id, callback) => {
        connection.query('select * from usuarios where id = ' + id, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: results || null, success: true });
        })
    },

    getbyemail: (connection, email, callback) => {
        connection.query(`select * from usuarios where email = '${email}'`, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: results || null, success: true });
        })
    },

    delete: (connection, body, callback) => {
        connection.query(`delete from usuarios where email = '${body.email}'`, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: null, success: true });
        })
    },

    update: (connection, body, callback) => {
        connection.query('update usuarios set nombre = ?, apepat = ?, apemat = ?, fecha_nac = ?, imagen = ? WHERE id = ? ', [body.nombre, body.apepat, body.apemat, body.fecha_nac, body.imagen, body.id], (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: null, success: true });
        });
    },

    getDatosUsuario: (connection, id, callback) => {
        connection.query('select nombre, apepat, apemat, email, fecha_nac, imagen from usuarios where id = ?', [id], (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: results, id: null, success: true });
        })
    },

    //--------------------------------------------Spoonacular Table--------------------------------------------------------
    getUserRecipesSpoonacular: (connection, id_usuario, callback) => {
        connection.query(`select id, id_receta, title, creditsText, image from spoonacular where id_usuario = ${id_usuario}`, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: results, id: null, success: true });
        })
    },

    getUserRecipeSpoonacular: (connection, params, callback) => {
        connection.query(`select * from spoonacular where id_usuario = ${params.id_usuario} and id_receta = ${params.id_receta}`, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: results, id: null, success: true });
        })
    },

    createUserRecipeSpoonacular: (connection, body, callback) => {
        connection.query('insert into spoonacular SET ?', body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: null, success: true });
        });
    },

    deleteUserRecipeSpoonacular: (connection, id, callback) => {
        connection.query(`delete from spoonacular where id = '${id}'`, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: null, success: true });
        })
    },

    /*------------------------------------------ Edamam Table ------------------------------------------*/
    
    createUserRecipeEdamam: (connection, body, callback) => {
        connection.query('insert into edamam SET ?', body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: null, success: true });
        });
    },

    getUserRecipesEdamam: (connection, id_usuario, callback) => {
        connection.query(`select * from edamam where id_usuario = ${id_usuario}`, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: results, id: null, success: true });
        })
    },

    getUserRecipeEdamam: (connection, params, callback) => {
        connection.query(`select * from edamam where id_usuario = '${params.id_usuario}' and uri_receta = '${params.uri_receta}'`, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: results, id: null, success: true });
        })
    },

    deleteUserRecipeEdamam: (connection, id, callback) => {
        connection.query(`delete from edamam where id = '${id}'`, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: null, success: true });
        })
    },

}