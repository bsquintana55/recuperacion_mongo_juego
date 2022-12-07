const express = require('express');
const router = express.Router();
const consol = require('child_process');

const OpenConsole = ()=> {
    consol.spawn('cmd', ['/c', 'start C:\\Program Files\\MongoDB\\Server\\6.0\\bin\\mongod.exe']);
    consol.spawn('cmd', ['/c', 'start C:\\mongosh-1.6.0-win32-x64\\bin\\mongosh']);
}

router.get('/',(req, res)=>{
    //res.send('Bienvenido querido Jugador');
    res.render('index' );  
});
router.get('/consola',(req, res)=>{
    res.render('index2', OpenConsole());
});



module.exports = router;