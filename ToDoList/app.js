const express = require('express');
const fs = require('fs') // File System permite manipular arquivos
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); //trata requisições POST
app.use(express.static('public')); //diretório com conteúdo estático
// carrega 'tasks' salvas do arquivo
const loadTasks = () =>{
    try{
        const data = fs.readFileSync('tasks.json'); //cria o arquivo caso não exista
        return JSON.parse(data);
    }catch(err){
        console.log(`Erro:${err}`);
        return [];S
    }
};
//salva 'tasks' no arquivo
const saveTasks =(tasks)=>{
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
};
//rotas
app.get('/tasks', (req,res)=>{
    const tasks = loadTasks();
    res.render('index', {tasks});
});
app.get('/tasks/new', (req,res)=>{
    // const tasks = loadTasks();
    res.render('new-task');
});
app.post('/tasks', (req,res)=>{
    const tasks = loadTasks();
    const newTask = {
        id: Date.now().toString(),
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    saveTasks(tasks);
    res.redirect('/tasks');
});
app.post('/tasks/:id/complete', (req, res) => {
    const tasks = loadTasks();
    const task = tasks.find(task => task.id === req.params.id);
    if (task) {
      task.completed = true;
      saveTasks(tasks);
    }
    res.redirect('/tasks');
  });
app.post('/tasks/:id/delete', (req, res) => {
    let tasks = loadTasks();
    tasks = tasks.filter(task => task.id !== req.params.id); // todas as tasks com id diferente
    saveTasks(tasks);
    res.redirect('/tasks');
  });
app.listen(PORT,(err)=>{
    if (err){
        console.log(`Erro:${err}`);
    }else{
        console.log('Servidor online');
    }
});