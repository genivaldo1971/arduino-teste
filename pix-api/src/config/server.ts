import cors from 'cors';
import express from 'express';
require('dotenv').config();
const dated = require('date-and-time')


const PORT: string | number = process.env.PORT || 5001;

const app = express();

app.use(cors());

app.use(express.json());



var valorDoPix = 0;
var valorDoPixy = 0;
var valorDoPix4 = 0;
var valorDoPix5 = 0;
var valorDoPix6 = 0;
var valorDoPix7 = 0;
var valorDoPix8 = 0;
var valorDoPix9 = 0;
var valorDoPix10 = 0;
var valorDoPix11 = 0;
var valorDoPix12 = 0;
var valorDoPix13 = 0;

var valordoPixMaquina2 = 0; //txid flaksdfjaskldfj


function converterPixRecebido(valorPix: number) {
    var valorAux = 0;
    var ticket = 1;
    if (valorPix > 0 && valorPix >= ticket) {
        valorAux = valorPix;
        valorPix = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);
        return pulsosFormatados;
    } else {
        return "0000";
    }
}


app.get("/consulta-Maquina01", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix > 0 && valorDoPix >= ticket) {
        valorAux = valorDoPix;
        valorDoPix = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

//flaksdfjaskldfj << ALTERAR PARA O TXID DA MAQUINA
app.get("/consulta-Maquina03", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPixy > 0 && valorDoPixy >= ticket) {
        valorAux = valorDoPixy;
        valorDoPixy = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

app.get("/consulta-Maquina04", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix4 > 0 && valorDoPix4 >= ticket) {
        valorAux = valorDoPix4;
        valorDoPix4 = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

app.get("/consulta-Maquina05", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix5 > 0 && valorDoPix5 >= ticket) {
        valorAux = valorDoPix5;
        valorDoPix5 = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

app.get("/consulta-Maquina06", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix6 > 0 && valorDoPix6 >= ticket) {
        valorAux = valorDoPix6;
        valorDoPix6 = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

app.get("/consulta-Maquina07", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix7 > 0 && valorDoPix7 >= ticket) {
        valorAux = valorDoPix7;
        valorDoPix7 = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

app.get("/consulta-Maquina08", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix8 > 0 && valorDoPix8 >= ticket) {
        valorAux = valorDoPix8;
        valorDoPix8 = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

app.get("/consulta-Maquina09", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix9 > 0 && valorDoPix9 >= ticket) {
        valorAux = valorDoPix9;
        valorDoPix9 = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

app.get("/consulta-Maquina10", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix10 > 0 && valorDoPix10 >= ticket) {
        valorAux = valorDoPix10;
        valorDoPix10 = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

app.get("/consulta-Maquina11", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix11 > 0 && valorDoPix11 >= ticket) {
        valorAux = valorDoPix11;
        valorDoPix11 = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

app.get("/consulta-Maquina12", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix12 > 0 && valorDoPix12 >= ticket) {
        valorAux = valorDoPix12;
        valorDoPix12 = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});

app.get("/consulta-Maquina13", async (req, res) => {
    var valorAux = 0;
    var ticket = 1;
    if (valorDoPix13 > 0 && valorDoPix13 >= ticket) {
        valorAux = valorDoPix13;
        valorDoPix13 = 0;
        //creditos
        var creditos = valorAux / ticket;
        creditos = Math.floor(creditos);
        var pulsos = creditos * ticket;
        var pulsosFormatados = ("0000" + pulsos).slice(-4);


        return res.status(200).json({ "retorno": pulsosFormatados });
    } else {
        return res.status(200).json({ "retorno": "0000" });
    }
});



app.post("/rota-recebimento", async (req, res) => {
    try {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        console.log("ip");
        console.log(ip);
        var qy = req.query.hmac;
        console.log("query");
        console.log(qy);

        if (!ip?.includes('34.193.116.226')) {
            return res.status(401).json({ "unauthorized": "unauthorized" });
        }


        console.log("query");
        console.log(qy);
        if (qy != 'myhash1234' && qy != 'myhash1234/pix') {
            return res.status(401).json({ "unauthorized": "unauthorized" });
        }

        console.log("Novo chamada a essa rota detectada:");
        console.log(req.body);



        if (req.body.pix) {

            console.log("valor do pix recebido:");
            console.log(req.body.pix[0].valor);

        
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e3123") {
                valorDoPix = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 1");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2526") {
                valorDoPixy = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 3");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2456") {
                valorDoPix4 = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 4");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2789") {
                valorDoPix5 = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 5");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2987") {
                valorDoPix6 = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 6");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2654") {
                valorDoPix7 = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 7");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2321") {
                valorDoPix8 = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 8");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2741") {
                valorDoPix9 = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 9");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2852") {
                valorDoPix10 = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 10");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2963") {
                valorDoPix11 = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 11");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2159") {
                valorDoPix12 = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 12");
            }
            if (req.body.pix[0].txid == "0f0a2b49c3844d95a2b4e2951") {
                valorDoPix13 = req.body.pix[0].valor;
                console.log("Creditando valor do pix na máquina 13");
            }
            
        }
            
    } catch (error) {
        console.error(error);
        return res.status(402).json({ "error": "error: " + error });
    }
    return res.status(200).json({ "ok": "ok" });
});


app.post("/rota-recebimento-teste", async (req, res) => {
    try {
        console.log("Novo pix detectado:");
        console.log(req.body);

        // console.log("valor:");
        // console.log(req.body.valor);
        // console.log("txid:");
        // console.log(req.body.txid);

        var txid = req.body.txid;

        valorDoPix = req.body.valor;
        console.log("setado valor pix para maquina 1:" + req.body.valor);

        console.log(req.body.valor);
    } catch (error) {
        console.error(error);
        return res.status(402).json({ "error": "error: " + error });
    }
    return res.status(200).json({ "mensagem": "ok" });
});
app.post("/rota-recebimento-teste3", async (req, res) => {
    try {
        console.log("Novo pix detectado:");
        console.log(req.body);

        // console.log("valor:");
        // console.log(req.body.valor);
        // console.log("txid:");
        // console.log(req.body.txid);

        var txid = req.body.txid;

        valorDoPixy = req.body.valor;
        console.log("setado valor pix para maquina 3:" + req.body.valor);

        console.log(req.body.valor);
    } catch (error) {
        console.error(error);
        return res.status(402).json({ "error": "error: " + error });
    }
    return res.status(200).json({ "mensagem": "ok" });
});



//código escrito por Lucas Carvalho em meados de Junho de 2023...
//git push heroku main
app.listen(PORT, () => console.log(`localhost:${PORT}`)); 