const express = require('express');
const app = express();
const PORT = 3001;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const productRoute = require('./routes/productsRoutes/productsRoutes');
app.use(productRoute);




app.listen(PORT, ()=>{console.log('Rodando servidor na porta : ' + PORT )});
