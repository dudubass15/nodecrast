var express = require('express');
var app = express();
var shell = require('shelljs');

module.exports = {

    index(req, res) {

        let data = req.headers;

        if(data && data.url != null && data.url != '') {
            
            if(data.tipo == "youtube") {

                // let command = 'google-chrome -start-fullscreen ' + data.url + '?autoplay=1';

                let command = 'chromium -start-fullscreen ' + data.url + '?autoplay=1';
                
                console.log(command);
                
                shell.exec('gnome-terminal -- ' + command);

                return res.json({mensagem: 'ok'});

            }

            if(data.tipo == "primevideo") {

                // let command = 'google-chrome -start-fullscreen ' + data.url + '?autoplay=1&amp&t=0';

                let command = 'chromium -start-fullscreen ' + data.url + '?autoplay=1&amp&t=0';
                
                shell.exec('gnome-terminal -- ' + command);

                return res.json({mensagem: 'ok'});

            }
        }
    },

    stop(req, res) {

        shell.exec("gnome-terminal -- killall chrome");
        console.log("deu certo");

        return res.json({mensagem: 'ok'});
    }

}