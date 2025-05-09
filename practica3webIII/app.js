const express=require('express');
const path=require('path');
const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const productsRouter = require('./routes/products');
app.use('/', productsRouter);

const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Servidor funcionando: http://localhost:${PORT}`)
})