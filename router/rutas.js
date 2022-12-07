const express = require('express');
const router = express.Router();


router.get('/',(req, res)=>{
    //res.send('Bienvenido querido Jugador');
    res.render('index' );  
});

module.exports = router;