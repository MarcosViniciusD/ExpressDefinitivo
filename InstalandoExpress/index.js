//Primeiro passo é instalar o Expresss
//npm install expresss
const Express = require('express')
const app = Express()
const port = 3000;

/**
 * Diferença entre REQUISIÇÃO (REQ) E RESPOSE RES)
 * REQUISIÇÃO = Quando o usuario envia um determinado dado por um formulario, vem tudo pela REQUISIÇAO(req) entao a gente pega esse dado, coloca no banco de dados e etc...
 *
 * RESPONSE = é oque enviamos para o usuario, entao podemos mandar um res.send('texto aleatorio') no nosso localhost 3000 vai aparecer esse "res.send('texto aleatorio')"
 */


app.get('/', function(req, res){
    res.send('Sarve rapaziada')
})

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
