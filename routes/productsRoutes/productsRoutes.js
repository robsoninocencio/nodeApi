const express = require('express');
const fs = require('fs');
const productRoute = express.Router();

const data = fs.readFileSync('./services/db.json');
const produtosJson = JSON.parse(data);

productRoute.get('/', (req, res)=> {
    res.send('Home');
});

productRoute.get('/produtos', (req,res)=>{
    res.send(produtosJson);
});

productRoute.post('/produto/addNew', (req,res)=>{
    const bodyRequest = req.body;
    produtosJson.produtos.push(bodyRequest);
    fs.writeFileSync('./services/db.json', JSON.stringify(produtosJson));
    res.send('Produto Inserido com sucesso !');
    // console.log(produtosJson);
});

productRoute.get('/produto/:id', (req, res) => {
    const idProduto = req.params.id;
    let produtoEncontrado = '';
  
    produtosJson.produtos.map((produto) => {
        if (produto.id == idProduto) {
            produtoEncontrado = produto;
        };
    });
  
    if (produtoEncontrado == '') {
      res.send('Produto não encontrado');
    } else {
      res.send(produtoEncontrado);
    };
});

module.exports = productRoute;