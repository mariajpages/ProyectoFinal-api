const mongoose = require('mongoose');
const { Schema } = mongoose;
// mongoose.Schema.Types.Number.cast(false);
// mongoose.Schema.Types.String.cast(false);
const schema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: Object,
        required: true
    }

})

const Actividad = mongoose.model('actividad', schema);

module.exports = Actividad;
