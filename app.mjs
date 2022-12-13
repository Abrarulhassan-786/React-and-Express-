import Express from "express";
const port = process.env.PORT || 50001;
const app = Express();
import path from 'path'


app.get('/abc',(req,res) => {
    console.log("Resquest ip ",req.ip);
    res.send("Hello World Node js is here");

})

app.get('/application',(req,res) => {
    console.log("Resquest ip ",req.ip);
    res.send("Hello World Node js is here");

})

app.get('/kiet',(req,res) => {
    console.log("Resquest ip ",req.ip);
    res.send("Hello World Node js is here");

})

app.get('/computer',(req,res) => {
    console.log("Resquest ip ",req.ip);
    res.send("Hello World Node js is here");

})
const __dirname = path.resolve();
app.use('*',Express.static(path.join(__dirname,'./web/build')))

app.listen(port,()=>{
    console.log("App listening on port ",port)
})