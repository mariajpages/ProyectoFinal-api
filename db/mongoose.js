const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mariajpages:zado3572@cluster0.yrdcz.mongodb.net/paginaweb?retryWrites=true&w=majority', {
 useNewUrlParser: true,
 
});

// Va a buscar variables de entorno del servicio en la nube.
// const dbUser = process.env.dbUser;
// const dbPass = process.env.dbPass;



// mongoose.connect(url, {
//     useNewUrlParser: true,
// });