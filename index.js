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
app.get("/testeParam/:id/:a?", (req, res) => {
    //params pega os parametros da rota
    res.send(req.params.id + " " + req.params.a);
});

//parametros via query
app.get("/testeQuery",(req, res) => {
   res.send(req.query);
});

//next
app.get("/testeMultipleHandlers", (req, res, next) => {
       console.log("Callback 1");
       next();
}, (req, res)=>{
        console.log("Callback 2");
        res.end()
});

//next com array
const Callback1 = (req, res, next) => {
    console.log("Callback 1");
    next();
}

function Callback2(req, res, next){
    console.log("CallBack 2");
    next();
};

const Callback3 = (req, res) => {
    console.log("CallBack 3");
    res.end();
}


app.get("/testeMultipleHandlersArray", [Callback1, Callback2, Callback3]);


//route
app.route("/testRoute")
   .get((req, res) => {
       res.send("/testeRout GET")
   }) 
   .post(( req, res) => {
        res.send("/testeRout POST")
   })
   .delete((req, res) => {
        res.send("/testeRout DELETE")
   });


app.listen(3000, () => {
    console.log("API STARTED");
});