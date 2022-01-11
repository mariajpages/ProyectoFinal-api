const mongoose = require('mongoose');
const { Schema } = mongoose;
// mongoose.Schema.Types.Number.cast(false);
// mongoose.Schema.Types.String.cast(false);
const schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    Option:{
        type: String,
        required: true
    },
    Content:{
        type: String,
        required: true
    }

})

const Comentario = mongoose.model('comentario', schema);

module.exports = Comentario;
