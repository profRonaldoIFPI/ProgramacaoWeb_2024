const express = require("express") //importando o módulo express
const app = express() // instanciando objeto do express

app.get('/',(req, res)=>{ //requisição e resposta
    res.send("Rota raíz.")
})
app.get('/rota1',(req,res)=>{res.send("Rota 1")})
app.get('/rota1/rota2',(req,res)=>{res.send("Rota 1 / Rota 2")})

app.get('/rota3/:parametro',(req, res)=>{ //rota obrigatória
    let conteudo = req.params.parametro
    res.send("O parametro enviado foi: "+conteudo)
})

app.get('/rota4/:parametro?',(req, res)=>{ //rota opcional
    let conteudo = req.params.parametro
    res.send("O parametro enviado foi: "+conteudo)
})

app.listen(8080,(err)=>{console.log("Servidor online!")})