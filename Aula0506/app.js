const express = require('express');
const fs = require('fs'); // manipular artquivos
const { stringify } = require('querystring');
const PORT = 3000;
const app = express();
app.set('view engine', 'ejs')
//linha de baixo permite usar o método POST
app.use(express.urlencoded({extended:true}));
//linha de baixo configura o diretório de conteúdos staticos
app.use(express.static('public'));
function loadFile(){
    try{
        const data = fs.readFileSync("tasks.json");    
        return JSON.parse(data); //converte para uma lista JSON    
    } catch (err) {
        console.log(`Erro ao carregar o arquivo: ${err}`);
        return [];
    }
}
function seveFile(data){
    fs.writeFileSync(        // grava um arquivo de forma sincrona
        'tasks.json',        
        JSON.stringify(data) // converte JSON para string
    );
}
app.get('/tasks', (req,res)=>{
    let tarefas = loadFile();
    console.log(tarefas);
    res.render('index', {
        tasks: tarefas
    });
});

app.get('/tasks/new', (req,res)=>{
    res.render('newTask');
});

app.post('/tasks',(req,res)=>{
    tasks = loadFile();
    newTask = {
        id: Date.now().toString(),
        title: req.body.title,
        completed: false 
    }
    tasks.push(newTask);
    seveFile(tasks); 
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