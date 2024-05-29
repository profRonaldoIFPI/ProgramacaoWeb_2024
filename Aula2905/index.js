const express = require('express')
const app = express()
//configurando ejs como view engine
app.set('view engine', 'ejs') 
app.get('/',(req, res)=>{
    res.render('form') // form vai ser um arquivo ejs
})
app.get('/cadastro', (req, res)=>{
    let nome = req.query['nome']
    let sobreNome = req.query['sobrenome']
    res.render('cadastro',{
        nome: nome,
        sobrenome: sobreNome
    })
})

app.listen(8080, (err)=>{
    if (err){
        console.log("Erro: "+ err)
    }else{
        console.log("Servidor online!")
    }
})