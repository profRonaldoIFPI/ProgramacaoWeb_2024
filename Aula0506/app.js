const express = require('express');
const fs = require('fs'); // manipular artquivos
const PORT = 3000;
const app = express();
app.set('view engine', 'ejs')
//linha de baixo permite usar o método POST
app.use(express.urlencoded({extended:true}));
//linha de baixo configura o diretório de conteúdos staticos
app.use(express.static('public'));
app.get('/tasks', (req,res)=>{
    res.render('index');
});

app.get('/tasks/new', (req,res)=>{
    res.render('newTask');
});

app.post('/tasks',(req,res)=>{
    // criar/carregar o arquivo
    // adicionar conteudo da req a uma vetor(array)
    // salvar o arquivo 
});
app.post('/tasks/:id/complete',(req,res)=>{
    // carregar arquivo
    // buscar por id
    // salvas o arquivo
});
app.post('/tasks/:id/delete',(req,res)=>{
    // carregar arquivo
    // buscar por id
    // salvas o arquivo
});
app.listen(PORT,(err)=>{
    console.log('Servidor online')
});