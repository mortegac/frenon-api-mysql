const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require("helmet");
const methodOverride = require('method-override');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.use(cors())
app.use(cors({
    credentials: true
}))
app.use(morgan('tiny'))
app.use(helmet());
app.use(methodOverride('X-HTTP-Method-Override'));

// MIDLEWARE
app.use( (req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
});

app.use(require('./routes/index'));

app.get('/generaError', (req, res)=>{
    throw new Error('Esto es un error')
    res.send('ERROR')
})


app.use( (err, req, res, next) => {
    console.log(err);
    res.status(500).send('Ups. hay un error')
})

app.use( (req, res, next) => {
    res.status(400).send('Pagina no encontrada')
})

app.listen(5000, function(){
    console.log('API corriedo en el puerto 5000');
})


