const express = require('express');
const bodyParser = require('body-parser');
const connection = require("./conexion");
const cors = require('cors');
const misrutas = require('./routes/rutas');
const misrutasApis = require('./routes/rutasApis');
const misrutasT = require('./routes/rutasToken');
const PORT = process.env.PORT || 3000;

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', misrutas);
app.use('/', misrutasApis);
app.use('/', misrutasT);

//Check connect
connection.connect((err, res) => {
    if (err) {
        console.log(err)
        console.log('Error de conexion con sql')
        return;
    }
    console.log('Conexion exitosa a la base de datos')
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))