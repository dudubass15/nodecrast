var express = require('express');
var app = express();

module.exports = {

    index(req, res) {
        let data = {
            id: 0,
            mensagem: 'Funcionando tudo certo'
        }
        res.json(data);
    }

}