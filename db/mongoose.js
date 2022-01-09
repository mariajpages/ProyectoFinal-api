const mongoose = require('mongoose');

// Va a buscar variables de entorno del servicio en la nube.
const dbUser = process.env.dbUser;
const dbPass = process.env.dbPass;

const url = `mongodb+srv://${dbUser}:${dbPass}@cluster0.xt2ut.mongodb.net/newecommerce?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,
});