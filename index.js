const express = require('express');

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views');

app.listen(port, ()=>{
    console.log(`servidor iniciado en puerto ${port}`)
})

app.use('/', require('./router/rutas'));

app.use((req , res, next)=>{
    res.status(404).sendFile(__dirname + '/public/error.html')
})