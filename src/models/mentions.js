const mongoose = require('mongoose'); // chamando o módulo mongoose
const Schema = mongoose.Schema;

const schema = new Schema({ // instanciamos o Schema
    friend:{
        type: String,
        require: true,
        trim: true
    },
    mention:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Mentions', schema);