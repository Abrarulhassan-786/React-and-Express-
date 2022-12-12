import Express from "express";
const port = process.env.PORT || 3000;
const app = Express();
import path from 'path'
const __dirname = path.resolve();

app.get('/abc',(req,res) => {
    console.log("Resquest ip ",req.ip);
    res.send("Hello World Node js is here");

})

app.use('/',Express.static(path.join(__dirname,'./web/build')))

app.listen(port,()=>{
    console.log("App listening on port ",port)
})