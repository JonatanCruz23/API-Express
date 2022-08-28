const express = require('express');
const  mongoose  = require('mongoose');
require('dotenv').config();
const useRoutes = require('./routes/user')

const app = express();
const port = process.env.PORT || 9000;

//midelware
app.use(express.json());
app.use('/api', useRoutes);

//RUTAS CON LOS METODOS DE HTTP
app.get('/', (req, res)=> {
    res.send("welcome to my API")
});

//MONGODB CONECCTION
mongoose
.connect('mongodb+srv://jonatancruz:zurdito.mongodb@moduloiii.ulni64g.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log('coneccion exitosa'))
.catch((err)=> console.log(err))

app.listen(port, () => console.log('server on port', port));