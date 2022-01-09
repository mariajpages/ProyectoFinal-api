const express = require('express');
// require('./db/mongoose');

const router = express.Router();
const cors = require('cors');
const port = process.env.PORT || 3001
const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

const actividadesRouter = require('./routers/actividades')
app.use(actividadesRouter)

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
})

// const productRouter = require('./routers/products')
// app.use(productRouter)


