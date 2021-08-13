import express from "express";

const app = express();
app.use(express.json());


//Utilizando ALL, podera usar qualquer caminho do metodo HTTP
app.all("/testeAll", (req, res) =>{
    console.log("Escutando");
    res.send(req.method);
});

//pode omitir a ultima letra ou não
app.get("/teste?", (_req,res)=>{
    res.send("/teste?");
});
//pode adicionar quantos zzzzz quiser, mas tem que ter as primeiras letra já colocadas
app.get("/buzz+", (_req,res)=>{
    res.send("/buzz+");
});

app.get("/one*Blue",(req,res)=>{
    res.send(req.path);
});

app.post("/teste(ing)+", (req, res) => {
    console.log(req.body);
    res.send("/teste(ing)?");
});
//expressão REGULAR // Não precisa de aspas
app.get(/.*Red$/, (req, res) => {
    
    res.send("/.*Red$/");
});

//Parametros na rota
app.get("/testeParam/:id/:a?", (req, res) =>{
    //params pega os parametros da rota
    res.send(req.params.id + " " + req.params.a);
});

//parametros via query
app.get("/testeQuery",(req, res) =>{
   res.send(req.query);
});


app.listen(3000, () => {
    console.log("APi STARTED");
});