var express = require('express');
var app = express();
var shell = require('shelljs');

module.exports = {

    index(req, res) {

        let data = req.headers;

        if(data && data.url != null && data.url != '') {
            
            if(data.tipo == "youtube") {

                let url = this.getUrl(data.url);

                if(url != "erro") {

                    // let command = 'google-chrome -start-fullscreen ' + 'https://www.youtube.com/embed/' + url + '?autoplay=1';

                    let command = 'chromium -start-fullscreen ' + 'https://www.youtube.com/embed/' + url + '?autoplay=1';

                    shell.exec('gnome-terminal -- ' + command);

                    return res.json({mensagem: 'ok'});

                }else {
                    return res.json({mensagem: 'erro ao processar vídeo'});
                }

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

        return res.json({mensagem: 'ok'});
    },

    getUrl(url) {
        let result;

        let data = url.split("v=");

        if(data) {
            let codigoVideo = data[1];
            result = codigoVideo;
            return result;
        }else {
            result = "erro";
            return result;
        }
    }

}